"use client";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/authclient";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const { data: session, isPending } = authClient.useSession();
    const [isLogout, setIsLogout] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    async function handleLogout() {
        setIsLogout(true);
        await authClient.signOut();
        router.push("/");
        setIsLogout(false);
    }

    const navLinks = (
        <>
            <Link href="/" onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors">Home</Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors">Products</Link>
        </>
    );

    const authSection = isPending ? (
        <div className="w-24 h-8 bg-gray-100 rounded-lg animate-pulse" />
    ) : session ? (
        <div className="flex items-center gap-3">
            <Link href="/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="relative">
                    <Image
                        src={session.user?.image || "/user.png"}
                        width={36}
                        height={36}
                        alt={session.user?.name || "User"}
                        className="rounded-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                    {session.user?.name || session.user?.email?.split('@')[0] || "User"}
                </span>
            </Link>
            <button
                onClick={handleLogout}
                disabled={isLogout}
                className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Logout
            </button>
        </div>
    ) : (
        <div className="flex items-center gap-2">
            <Link href="/login" onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors">Login</Link>
            <Link href="/register" onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors">Register</Link>
        </div>
    );

    return (
        <header className="bg-white border-b border-orange-100 px-6 md:px-12 py-4">
            <div className="max-w-[1110px] mx-auto flex justify-between items-center">
                <Link href="/"><h2 className="text-xl font-bold text-dark"><span className="text-primary">Sun</span>Cart</h2></Link>

                <nav className="hidden md:flex items-center gap-2">
                    {navLinks}
                    {authSection}
                </nav>

                <button onClick={() => setIsOpen(prev => !prev)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
                    <span className={`block w-5 h-0.5 bg-dark transition-transform duration-200 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-dark transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-5 h-0.5 bg-dark transition-transform duration-200 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden border-t border-orange-100 mt-4 pt-4 flex flex-col gap-2">
                    {navLinks}
                    <div className="pt-2 border-t border-orange-100">
                        {authSection}
                    </div>
                </div>
            )}
        </header>
    );
}
