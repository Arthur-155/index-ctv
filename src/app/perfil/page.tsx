// "use client";

// import { useState } from "react";

// type FormState = {
//     nomeUsuario: string;
//     email: string;
//     senha: string;
//     confirmarSenha: string;
// };

// const API_BASE = "http://localhost:8090";

// export default function Cadastrar() {
//     const [form, setForm] = useState<FormState>({
//         nomeUsuario: "",
//         email: "",
//         senha: "",
//         confirmarSenha: "",
//     });
//     const [loading, setLoading] = useState(false);
//     const [msg, setMsg] = useState("");
//     const [isError, setIsError] = useState(false);

//     function onChange(e: React.ChangeEvent<HTMLInputElement>) {
//         const { name, value } = e.target;
//         setForm((prev) => ({ ...prev, [name]: value }));
//     }

//     async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
//         e.preventDefault();
//         setMsg("");
//         setIsError(false);

//         if (form.senha !== form.confirmarSenha) {
//             setIsError(true);
//             setMsg("As senhas não conferem!");
//             return;
//         }

//         try {
//             setLoading(true);
//             const res = await fetch(`${API_BASE}/login`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     nome: form.nomeUsuario,
//                     email: form.email,
//                     senha: form.senha,
//                 }),
//             });

//             if (!res.ok) {
//                 const txt = await res.text();
//                 throw new Error(`Erro ${res.status}: ${txt}`);
//             }

//             const data = await res.json();
//             setMsg(`Cadastro criado! ID: ${data.id}`);
//             setIsError(false);
//         } catch (err) {
//             const m = err instanceof Error ? err.message : "Falha ao cadastrar.";
//             setIsError(true);
//             setMsg(m);
//         } finally {
//             setLoading(false);
//         }
//     }



// Perfil React sem Firebase
// Requisitos de backend esperados:
// 1) GET    /api/profile              -> { id, name, email, phone, about, avatarUrl }
// 2) PUT    /api/profile              -> aceita JSON { name, phone, about } e retorna perfil atualizado
// 3) POST   /api/profile/avatar       -> multipart/form-data { file } e retorna { avatarUrl }
// 4) PATCH  /api/profile/password     -> JSON { newPassword }
// Ajuste os endpoints conforme seu backend.


"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";


interface ProfileDTO {
    id: string;
    name: string;
    email: string;
    phone?: string | null;
    about?: string | null;
    avatarUrl?: string | null;
}

export default function Perfil() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [status, setStatus] = useState<string | null>(null);

    const [profile, setProfile] = useState<ProfileDTO | null>(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [about, setAbout] = useState("");

    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

    const [newPassword, setNewPassword] = useState("");
    const fileInputRef = useRef<HTMLInputElement | null>(null);


    useEffect(() => {
        let active = true;
        (async () => {
            setLoading(true);
            setStatus(null);
            try {
                const res = await fetch("/api/perfil", { credentials: "include" });
                if (!res.ok) throw new Error(`Falha ao carregar perfil: ${res.status}`);
                const data: ProfileDTO = await res.json();
                if (!active) return;
                setProfile(data);
                setName(data.name ?? "");
                setPhone(data.phone ?? "");
                setAbout(data.about ?? "");
            } catch (e: any) {
                if (!active) return;
                setStatus(e?.message ?? "Erro ao carregar perfil");
            } finally {
                if (active) setLoading(false);
            }
        })();
        return () => {
            active = false;
        };
    }, []);


    useEffect(() => {
        if (!avatarFile) {
            setAvatarPreview(null);
            return;
        }
        const url = URL.createObjectURL(avatarFile);
        setAvatarPreview(url);
        return () => URL.revokeObjectURL(url);
    }, [avatarFile]);

    async function handleSave(e: React.FormEvent) {
        e.preventDefault();
        if (!profile) return;
        setSaving(true);
        setStatus(null);

        try {

            let newAvatarUrl = profile.avatarUrl ?? null;
            if (avatarFile) {
                const form = new FormData();
                form.append("file", avatarFile);
                const up = await fetch("/api/profile/avatar", {
                    method: "POST",
                    body: form,
                    credentials: "include",
                });
                if (!up.ok) throw new Error("Falha no upload do avatar");
                const body = await up.json();
                newAvatarUrl = body.avatarUrl ?? null;
            }


            const upd = await fetch("/api/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ name, phone, about, avatarUrl: newAvatarUrl }),
            });
            if (!upd.ok) throw new Error("Falha ao salvar alterações");
            const saved: ProfileDTO = await upd.json();
            setProfile(saved);
            setStatus("Perfil atualizado");
            setAvatarFile(null);
        } catch (e: any) {
            setStatus(e?.message ?? "Erro ao salvar");
        } finally {
            setSaving(false);
        }
    }

    async function handleChangePassword() {
        if (!newPassword || newPassword.length < 6) {
            setStatus("Senha mínima de 6 caracteres");
            return;
        }
        try {
            const res = await fetch("/api/profile/password", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ newPassword }),
            });
            if (!res.ok) throw new Error("Falha ao trocar senha");
            setNewPassword("");
            setStatus("Senha alterada");
        } catch (e: any) {
            setStatus(e?.message ?? "Erro ao trocar senha");
        }
    }

    if (loading) {
        return (
            <main className="mx-auto max-w-3xl px-4 py-8">
                <h1 className="text-2xl font-semibold">Perfil</h1>
                <p className="mt-4 text-sm text-gray-500">Carregando…</p>
            </main>
        );
    }

    if (!profile) {
        return (
            <main className="mx-auto max-w-3xl px-4 py-8">
                <h1 className="text-2xl font-semibold">Perfil</h1>
                <p className="mt-4 text-sm text-red-600">Não foi possível obter os dados do usuário atual.</p>
            </main>
        );
    }

    return (
        <main className="bg-gray-50 dark:bg-gray-900 py-[100px]">
            <section className="  mx-auto  max-w-3xl px-4 py-8 space-y-8 rounded-2xl border p-4 bg-white sm:p-6 dark:bg-gray-800">

                <header className="flex items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-semibold dark:text-white">Seu perfil</h1>
                    </div>
                </header>

                <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-gray-100">
                    {profile.avatarUrl ? (
                        <img src={profile.avatarUrl} alt="avatar" className="h-full w-full object-cover" />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center dark:text-white">
                            <span className="text-xl">👤</span>
                        </div>
                    )}
                </div>

                <div className="grid gap-1">
                    <span className="text-xs dark:text-white">Nome</span>
                    <p className="text-base dark:text-white">{profile.name}</p>
                </div>

                <div className="grid gap-1">
                    <span className="text-xs dark:text-white">E-mail</span>
                    <p className="text-sm dark:text-white">{profile.email}</p>
                </div>

                <div className="grid gap-1">
                    <span className="text-xs dark:text-white">Telefone</span>
                    <p className="text-base dark:text-white">{profile.phone ?? "-"}</p>
                </div>

                <div className="grid gap-1">
                    <span className="text-xs dark:text-white">Sobre você</span>
                    <p className="text-base whitespace-pre-wrap dark:text-white">{profile.about ?? "-"}</p>
                </div>
            </section>

            {status && <p className="text-sm dark:text-white">{status}</p>}
        </main>
    );
}
