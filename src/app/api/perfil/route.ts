import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

let PROFILE = {
    id: "u1",
    name: "Usuário Demo",
    email: "user@example.com",
    phone: "(11) 90000-0000",
    about: "Perfil de demonstração",
    avatarUrl: null as string | null,
};

export async function GET() {
    return NextResponse.json(PROFILE, { status: 200 });
}

export async function PUT(req: Request) {
    const body = await req.json();
    PROFILE = { ...PROFILE, ...body };
    return NextResponse.json(PROFILE, { status: 200 });
}
