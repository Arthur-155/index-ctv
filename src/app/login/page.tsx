"use client";


import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {JSX, useState} from "react";

const API_BASE = "http://localhost:8080";

export default function Login(): JSX.Element {
    const router = useRouter();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState<string | null>(null);
    const [isError, setIsError] = useState(false);


    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setMsg(null);
        setIsError(false);

        try {
            setLoading(true);
            const res = await fetch(`${API_BASE}/login/auth`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha }),
            });

            if (res.status === 401) {
                setIsError(true);
                setMsg("E-mail ou senha inválidos.");
                return;
            }
            if (!res.ok) {
                const txt = await res.text();
                throw new Error(`Erro ${res.status}: ${txt}`);
            }

            const data = await res.json();
            login({ id: data.id, nome: data.nome, email: data.email });
            router.push("/");
        } catch (error: any) {
            console.error(error);
            setIsError(true);
            setMsg(error?.message ?? "Falha ao comunicar com o servidor.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Se logue na sua conta!
                        </h1>

                        {msg && (
                            <div
                                role="alert"
                                className={
                                    isError
                                        ? "p-4 mb-2 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                                        : "p-4 mb-2 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                                }
                            >
                                <span className="font-medium">{msg}</span>
                            </div>
                        )}

                        <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Seu login
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="seu_email@hotmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Senha
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer disabled:opacity-60"
                            >
                                {loading ? "Entrando..." : "Logar"}
                            </button>
                        </form>

                        

                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Não tem conta ainda?{" "}
                            <a href="/cadastre-se" className="font-medium text-primary-600 hover:underline dark:text-green-500">
                                Cadastre-se
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
