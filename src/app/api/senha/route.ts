import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PATCH(req: Request) {
    const { newPassword } = await req.json();
    if (!newPassword || newPassword.length < 6) {
        return NextResponse.json({ error: "senha inválida" }, { status: 400 });
    }
    // aqui você trocaria a senha no seu provider real
    return NextResponse.json({ ok: true }, { status: 200 });
}