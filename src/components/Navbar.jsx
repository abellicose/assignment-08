"use client";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/authclient";
import { useState } from "react";
import { useRouter } from "next/navigation"

export default function Navbar() {
    let avatarUrl = "/next.svg";
    const { data: session, isPending } = authClient.useSession();
    const [ isLogout, setIsLogout ] = useState(false);
    const router = useRouter();

    async function handleLogout() {
        setIsLogout(true);
        await authClient.signOut();
        router.push("/");
        setIsLogout(false);
    }

    return (
        <header className="bg-white border-b border-orange-100 px-6 md:px-12 py-4">
            <div className="max-w-[1110px] mx-auto flex justify-between items-center">
                <Link href="/"><h2 className="text-xl font-bold text-dark"><span className="text-primary">Sun</span>Cart</h2></Link>
                <nav>
                    <ul className="flex items-center gap-2 list-none p-0 m-0">
                        <li><Link href="/" className="px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors">Home</Link></li>
                        <li><Link href="/products" className="px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors">Products</Link></li>
                        {isPending ? <li className="w-24 h-8 bg-gray-100 rounded-lg animate-pulse" /> : session ? (
                            <li className="flex items-center gap-3">
                                <Link href="/profile" className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="relative">
                                        <Image 
                                            src={avatarUrl} 
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
                            </li>
                        ) : (
                                <>
                                    <li><Link href="/login" className="px-4 py-2 text-sm text-gray-600 hover:text-primary transition-colors">Login</Link></li>
                                    <li><Link href="/register" className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-orange-600 transition-colors">Register</Link></li>
                                </>
                            )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
