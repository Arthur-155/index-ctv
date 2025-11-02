import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    if (!file) return NextResponse.json({ error: "file obrigatório" }, { status: 400 });

    const bytes = Buffer.from(await file.arrayBuffer());
    const name = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
    const outPath = path.join(process.cwd(), "public", "uploads", name);
    await writeFile(outPath, bytes);

    return NextResponse.json({ avatarUrl: `/uploads/${name}` }, { status: 200 });
}
