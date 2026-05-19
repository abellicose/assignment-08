import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function Profile() {
    const session = await auth.api.getSession({headers: await headers()});
    if (!session) return <p className="text-red-500">Failed to load profile.</p>;
    const {name, email, image} = session.user;

    return (
        <section className="bg-white border border-orange-100 rounded-xl p-6">
            <div className="flex items-center gap-4 pb-5 mb-5 border-b border-orange-100">
                <Image src={image || "/user.png"} width={64} height={64} alt="User Image" className="rounded-full object-cover" />
                <div>
                    <h2 className="text-lg font-semibold text-dark">{name}</h2>
                    <p className="text-sm text-gray-400">Member</p>
                </div>
            </div>
            <dl className="flex flex-col divide-y divide-orange-50">
                <div className="flex gap-4 py-3">
                    <dt className="text-sm text-gray-400 w-24 shrink-0">Name</dt>
                    <dd className="text-sm text-dark">{name}</dd>
                </div>
                <div className="flex gap-4 py-3">
                    <dt className="text-sm text-gray-400 w-24 shrink-0">Email</dt>
                    <dd className="text-sm text-dark">{email}</dd>
                </div>
                <div className="flex gap-4 py-3">
                    <dt className="text-sm text-gray-400 w-24 shrink-0">Avatar URL</dt>
                    <dd className="text-sm text-dark truncate">{image || "No Custom Avatar Used"}</dd>
                </div>
            </dl>
            <Link href="/profile/update" className="inline-block mt-5 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors">
                Edit Profile
            </Link>
        </section>
    );
}
