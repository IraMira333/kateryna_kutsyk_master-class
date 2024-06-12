"use client";
import React, { useState } from "react";
import { Button } from "./Button";

export const FormGetCourse = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto mt-2 p-4 "
            >
                <div className="mb-4 ">
                    <label
                        htmlFor="email"
                        className="block text-darkText text-base font-black uppercase"
                    >
                        ваш E-MAIL
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="block text-darkText text-base w-full mx-auto px-2 py-1 border-b-2 border-darkText"
                    />
                </div>
                <div className="mb-4 ">
                    <label
                        htmlFor="phone"
                        className="block text-darkText text-base font-black uppercase"
                    >
                        ваш телефон
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                        className="block text-darkText text-base w-full mx-auto px-2 py-1 border-b-2 border-darkText"
                    />
                </div>
                <Button type="submit" />
            </form>
        </>
    );
};
