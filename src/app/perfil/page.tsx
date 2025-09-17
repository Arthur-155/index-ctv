"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

type FormState = {
    nomeUsuario: string;
    email: string;
    senha: string;
    confirmarSenha: string;
};

const API_BASE = "http://localhost:8090";

export default function Perfil() {
    const {user, login} = useAuth();

    const [form, setForm] = useState<FormState>({
        nomeUsuario: "",
        email: "",
        senha: "",
        confirmarSenha: "",
    });

    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState<string>("");
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (user) {
            setForm((prev) => ({
                ...prev,
                nomeUsuario: user.nome ?? "",
                email: user.email ?? "",
            }));
        }
    }, [user]);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value}));
    }

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setMsg("");
        setIsError(false);

        if (!user?.id) {
            setIsError(true);
            setMsg("Usuário não identificado.");
            return;
        }
        if (form.senha !== form.confirmarSenha) {
            setIsError(true);
            setMsg("As senhas não conferem!");
            return;
        }

        try {
            setLoading(true);
            const res = await fetch(`${API_BASE}/login/${user.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    nome: form.nomeUsuario,
                    email: form.email,
                    senha: form.senha,
                }),
            });

            if (!res.ok) {
                const txt = await res.text();
                setIsError(true);
                setMsg(`Erro ${res.status}${txt ? `: ${txt}` : ""}`);
                return;
            }

            const data = await res.json();

            login({id: data.id, nome: data.nome, email: data.email});

            setIsError(false);
            setMsg("Dados atualizados com sucesso!");

            setForm((prev) => ({...prev, senha: "", confirmarSenha: ""}));
        } catch (err) {
            const m = err instanceof Error ? err.message : "Falha ao atualizar.";
            setIsError(true);
            setMsg(m);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Bem-vindo(a) ao seu perfil
                        </h1>

                        {/* ALERTAS */}
                        {msg && (
                            <div
                                className={`flex items-center p-4 mb-4 text-sm border rounded-lg ${
                                    isError
                                        ? "text-red-800 border-red-300 bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                                        : "text-green-800 border-green-300 bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
                                }`}
                                role="alert"
                            >
                                <svg
                                    className="shrink-0 inline w-4 h-4 me-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                </svg>
                                <div>
                                    <span className="font-medium">{msg}</span>
                                </div>
                            </div>
                        )}

                        <form onSubmit={onSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="nomeUsuario"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Nome Completo
                                </label>
                                <input
                                    type="text"
                                    name="nomeUsuario"
                                    id="nomeUsuario"
                                    placeholder="Seu nome"
                                    required
                                    value={form.nomeUsuario}
                                    onChange={onChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    E-Mail
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="seu_email@hotmail.com"
                                    required
                                    value={form.email}
                                    onChange={onChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Senha
                                </label>
                                <input
                                    type="password"
                                    name="senha"
                                    id="password"
                                    placeholder="••••••••"
                                    required
                                    value={form.senha}
                                    onChange={onChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="confirmPassword"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Confirmar Senha
                                </label>
                                <input
                                    type="password"
                                    name="confirmarSenha"
                                    id="confirmPassword"
                                    placeholder="••••••••"
                                    required
                                    value={form.confirmarSenha}
                                    onChange={onChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading || !user?.id}
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer disabled:opacity-60"
                            >
                                {loading ? "Salvando..." : "Mudar informações"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}