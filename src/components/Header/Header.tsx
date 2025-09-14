"use client";
import Image from "next/image";
import Link from "next/link";
import logoCtv from "@/assets/image/logo-verde-ctv.png";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useId } from "react";
import { initFlowbite } from "flowbite";

const API_BASE = "http://localhost:8090";

export function Header() {
    const { isAuthenticated, user, logout } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    // IDs únicos para o par botão/menu
    const ddId = useId().replace(/:/g, "-");
    const btnId = `dropdownButton-${ddId}`;
    const menuId = `dropdownMenu-${ddId}`;

    // inicializa o Flowbite ao montar e a cada troca de rota (dev/hot-reload inclusive)
    useEffect(() => {
        initFlowbite();
    }, [pathname]);

    async function handleLogout() {
        logout();
        router.push("/");
    }

    async function handleDeleteAccount() {
        if (!user?.id) {
            alert("Não foi possível identificar o usuário para excluir.");
            return;
        }
        if (!confirm("Tem certeza que deseja excluir sua conta? Essa ação não pode ser desfeita.")) return;

        try {
            const res = await fetch(`${API_BASE}/login/${user.id}`, { method: "DELETE" });
            if (!res.ok) throw new Error(`${res.status} - ${await res.text()}`);
            logout();
            router.push("/");
        } catch (e) {
            console.error(e);
            alert("Falha ao excluir a conta. Tente novamente.");
        }
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-800">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" id="home">
                <Link href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={logoCtv} alt="CTV Logo" className="h-20 w-20" priority />
                </Link>

                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800">
                        <li><Link href="/home" className="block py-2 px-3 text-gray-900 md:hover:text-green-700 dark:text-white md:p-0">Home</Link></li>
                        <li><Link href="/sobreNos" className="block py-2 px-3 text-gray-900 md:hover:text-green-700 dark:text-white md:p-0">Sobre nós</Link></li>
                        <li><Link href="/contato" className="block py-2 px-3 text-gray-900 md:hover:text-green-700 dark:text-white md:p-0">Contato</Link></li>
                        <li><Link href="/modulos" className="block py-2 px-3 text-gray-900 md:hover:text-green-700 dark:text-white md:p-0">Módulos</Link></li>

                        {isAuthenticated ? (
                            <li className="relative">
                                {/* Botão do dropdown com ID único */}
                                <button
                                    id={btnId}
                                    data-dropdown-toggle={menuId}
                                    type="button"
                                    className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center gap-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-pointer"
                                >
                                    {user?.nome ?? "Conta"}
                                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>

                                {/* Menu com ID único correspondente */}
                                <div
                                    id={menuId}
                                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
                                >
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={btnId}>
                                        <li>
                                            <Link href="/perfil" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                Perfil
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                onClick={handleDeleteAccount}
                                                className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Excluir conta
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={handleLogout}
                                                className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Sair
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        ) : (
                            <>
                                <li><Link href="/login" className="block py-2 px-3 text-gray-900 md:hover:text-green-700 dark:text-white md:p-0">Login</Link></li>
                                <li><Link href="/cadastre-se" className="block py-2 px-3 text-gray-900 md:hover:text-green-700 dark:text-white md:p-0">Cadastre-se</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
