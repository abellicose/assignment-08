"use client";
import { useForm } from "@/util/form";
import { authClient } from "@/lib/authclient";
import { useState } from "react";

export default function UpdateData() {
    const { form, handleChange, reset } = useForm({ name: "", image: "" });
    const [updating, setUpdating] = useState(false);
    const [message, setMessage] = useState("");

    function getCleanForm(prev) {
        const payload = {};
        if (prev.name.trim()) payload.name = prev.name.trim();
        if (prev.image.trim()) payload.image = prev.image.trim();
        return payload;
    }
    function isFormEmpty() {
        return Object.keys(getCleanForm(form)).length === 0;
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setUpdating(true);
        setMessage("");
        const payload = getCleanForm(form);
        const { data, error } = await authClient.updateUser(payload);
        setUpdating(false);
        if (error) {
            setMessage(error.message);
        } else {
            setMessage("Profile Updated Successfully");
            reset();
        }
    }

    return (
        <section className="bg-white border border-orange-100 rounded-xl p-6">
            <p className="text-base font-semibold text-dark mb-1">Update your profile</p>
            <p className="text-sm text-gray-400 mb-5">Leave a field blank to keep it unchanged.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {message && (
                    <p className={`text-sm px-4 py-2 rounded-lg ${message === "Profile Updated Successfully" ? "text-green-700 bg-green-50" : "text-red-600 bg-red-50"}`}>
                        {message}
                    </p>
                )}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-dark">Display Name <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <input name="name" value={form.name} onChange={handleChange} id="name" type="text" placeholder="Enter your updated name" className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-orange-50" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="image" className="text-sm font-medium text-dark">Image URL <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <input name="image" value={form.image} onChange={handleChange} id="image" type="url" placeholder="https://example.com/image/..." className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-orange-50" />
                    <p className="text-xs text-gray-400">Must be a publicly accessible image link.</p>
                </div>
                <button disabled={updating || isFormEmpty()} type="submit" className="self-start px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    {updating ? "Saving..." : "Save Changes"}
                </button>
            </form>
        </section>
    );
}
