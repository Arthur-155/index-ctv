import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";

export const runtime = "nodejs";
export const maxDuration = 300;

function required(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Env ${name} ausente`);
  return v;
}

const FOLDER_ID = required("DRIVE_FOLDER_ID");

function getDriveAsUser() {
  const oauth2 = new google.auth.OAuth2(
    required("GOOGLE_CLIENT_ID"),
    required("GOOGLE_CLIENT_SECRET"),
    required("GOOGLE_REDIRECT_URI"),
  );
  oauth2.setCredentials({ refresh_token: required("GOOGLE_REFRESH_TOKEN") });
  return google.drive({ version: "v3", auth: oauth2 });
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    if (!file) return NextResponse.json({ error: "campo 'file' ausente" }, { status: 400 });

    const nodeStream = Readable.fromWeb(file.stream() as any);

    const drive = getDriveAsUser();
    const metadata = {
      name: file.name || "video",
      mimeType: file.type || "application/octet-stream",
      parents: [FOLDER_ID],
    };

    const created = await drive.files.create({
      requestBody: metadata,
      media: { mimeType: metadata.mimeType, body: nodeStream },
      fields: "id,name,webViewLink,webContentLink",
    });

    await drive.permissions.create({
      fileId: created.data.id!,
      requestBody: { type: "anyone", role: "reader" },
    });

    return NextResponse.json(created.data);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "erro" }, { status: 500 });
  }
}

// Diagnóstico: verifica se o refresh_token funciona
export async function GET() {
  try {
    const oauth2 = new google.auth.OAuth2(
      required("GOOGLE_CLIENT_ID"),
      required("GOOGLE_CLIENT_SECRET"),
      required("GOOGLE_REDIRECT_URI"),
    );
    oauth2.setCredentials({ refresh_token: required("GOOGLE_REFRESH_TOKEN") });
    const t = await oauth2.getAccessToken();
    return NextResponse.json({
      ok: true,
      hasAccessToken: Boolean(t?.token),
      folderId: FOLDER_ID,
    });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
