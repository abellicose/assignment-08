"use client";
import { useState } from "react";

export function useForm(initialValue) {
    const [form, setForm] = useState(initialValue);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({...prev, [name]: value}));
    }

    function reset() {
        setForm(initialValue);
    }

    return { form, handleChange, reset };
}
