"use client";
import { authClient } from "@/lib/authclient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, use } from "react";

export default function Login({params, searchParams}) {
    const sparam = use(searchParams);
    const from = sparam.from;
    const [error, setError] = useState(from ? "You need to log in to see the " + from : "");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setIsLoading(true);
        const { data, error } = await authClient.signIn.email({
            email: e.target.email.value,
            password: e.target.password.value
        });
        if (error) {
            setError(error.message);
            return;
        }
        router.push("/");
    }

    return (
        <main className="bg-bg min-h-screen flex items-center justify-center px-6 md:py-16 sm:py-2">
            <div className="bg-white rounded-2xl shadow-sm border border-orange-100 w-full max-w-md p-8">
                <h1 className="text-3xl font-black text-dark mb-2">Welcome Back</h1>
                <p className="text-gray-500 text-sm mb-8">Login to your SunCart account</p>
                {error && <p className="text-red-500 text-sm mb-4 bg-red-50 px-4 py-2 rounded-lg">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">Email</label>
                        <input name="email" type="email" required placeholder="alex@example.com" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-dark mb-1">Password</label>
                        <input name="password" type="password" required placeholder="Min 8 characters" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary" />
                    </div>
                    <button type="submit" disabled={isLoading} className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">{isLoading ? "Logging in..." : "Login"}</button>
                    <button type="button" onClick={() => authClient.signIn.social({ provider: "google" })} className="border border-gray-200 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition cursor-pointer">Continue with Google</button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-6">Don't have an account? <Link href="/register" className="text-primary font-semibold">Register Now</Link></p>
            </div>
        </main>
    );
}
