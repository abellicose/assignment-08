import Link from "next/link";
import ProfileNav from "@/components/ProfileNav";

export default function ProfileLayout({ children }) {
    return (
        <main className="bg-bg min-h-screen px-6 md:px-12 py-10">
            <div className="max-w-[860px] mx-auto flex flex-col md:flex-row gap-6 items-start">
                <ProfileNav />
                <div className="flex-1 w-full">{children}</div>
            </div>
        </main>
    );
}
