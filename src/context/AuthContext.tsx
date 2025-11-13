"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type User = { id: number; nome: string; email: string } | null;

export type AuthContextType = {
    isAuthenticated: boolean;
    user: User;
    login: (u?: NonNullable<User>) => void; 
    logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    user: null,
    login: () => {},
    logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User>(null);

    useEffect(() => {
        const raw = typeof window !== "undefined" ? localStorage.getItem("ctv:user") : null;
        if (raw) setUser(JSON.parse(raw));
    }, []);

    const login = (u?: NonNullable<User>) => {
        if (u) {
            setUser(u);
            localStorage.setItem("ctv:user", JSON.stringify(u));
        } else {
            setUser({ id: -1, nome: "Usuário", email: "" });
            localStorage.setItem("ctv:user", JSON.stringify({ id: -1, nome: "Usuário", email: "" }));
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("ctv:user");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
