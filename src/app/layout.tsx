import "./globals.css";
import Header from "../components/Header/Header";
import Script from "next/script";
import Footer from "../footer/Footer";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
    title: "Cat The Vision",
    description: "Explore o CTV",
};

export default function RootLayout({ children, }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased">
                <AuthProvider>
                    <Header />
                    {children}
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
}
