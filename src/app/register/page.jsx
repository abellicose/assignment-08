"use client";
import { authClient } from "@/lib/authclient";
import { useForm } from "@/util/form";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
    const { form, handleChange, reset } = useForm({ name: "", email: "", password: "", image: "" });
    const [errors, setErrors] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    function validate(form) {
        const errors = [];
        if (!form.name.trim()) errors[0] = "Name is required";
        if (!form.email.trim()) errors[1] = "Email is required";
        if (form.password.trim().length < 8) errors[2] = "Password must be longer than 8 characters";
        return errors;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const errors = validate(form);
        if (errors.length > 0) {
            setErrors(errors);
            return;
        }
        setErrors([]);
        setIsLoading(true);
        const { data, error } = await authClient.signUp.email(form);
        setIsLoading(false);
        if (error) {
            setError(error.message);
            return;
        }
        setError("");
        router.push("/login");
    }

    return (
        <main className="bg-bg min-h-screen flex items-center justify-center px-6 py-16">
            <div className="bg-white rounded-2xl shadow-sm border border-orange-100 w-full max-w-md p-8">
                <h1 className="text-3xl font-black text-dark mb-2">Create Account</h1>
                <p className="text-gray-500 text-sm mb-8">Join SunCart and explore summer essentials</p>
                {error && <p className="text-red-500 text-sm mb-4 bg-red-50 px-4 py-2 rounded-lg">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">Name</label>
                        <input name="name" type="text" value={form.name} onChange={handleChange} required placeholder="Alex Kim" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary" />
                        {errors[0] && <p className="text-red-500 text-xs mt-1">{errors[0]}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">Email</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="alex@example.com" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary" />
                        {errors[1] && <p className="text-red-500 text-xs mt-1">{errors[1]}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-dark mb-1">Password</label>
                        <input name="password" type="password" value={form.password} onChange={handleChange} required placeholder="Min 8 characters" className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary" />
                        {errors[2] && <p className="text-red-500 text-xs mt-1">{errors[2]}</p>}
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-dark mb-1">Profile picture url (Optional): </label>
                        <input name="image" type="url" value={form.image} onChange={handleChange} placeholder="https://example.com/image/..." className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary" />
                    </div>
                    <button type="submit" disabled={isLoading} className="bg-primary text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">Register</button>
                    <button type="button" onClick={() => authClient.signIn.social({ provider: "google" })} className="border border-gray-200 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition cursor-pointer">Continue with Google</button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-6">Already have an account? <Link href="/login" className="text-primary font-semibold">Login</Link></p>
            </div>
        </main>
    );
}
