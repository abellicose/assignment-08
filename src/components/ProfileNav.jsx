"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/authclient";

export default function ProfileNav() {
    const pathname = usePathname();
    const { data: session } = authClient.useSession();

    return (
        <section className="w-full md:w-48 shrink-0 bg-white border border-orange-100 rounded-xl overflow-hidden">
            <div className="px-4 py-3">
                <p className="text-sm font-medium text-dark truncate">{session?.user?.name}</p>
                <p className="text-xs text-gray-400">My Account</p>
            </div>
            <hr className="border-orange-100" />
            <nav className="p-2 flex flex-row md:flex-col gap-0.5">
                <Link href="/profile" className={`px-3 py-2 rounded-lg text-sm transition-colors ${pathname === "/profile" ? "bg-orange-50 text-primary font-medium" : "text-gray-500 hover:bg-gray-50 hover:text-dark"}`}>
                    Your Information
                </Link>
                <Link href="/profile/update" className={`px-3 py-2 rounded-lg text-sm transition-colors ${pathname === "/profile/update" ? "bg-orange-50 text-primary font-medium" : "text-gray-500 hover:bg-gray-50 hover:text-dark"}`}>
                    Update Information
                </Link>
            </nav>
        </section>    
    );
}
