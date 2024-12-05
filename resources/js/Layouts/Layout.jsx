import React, { useState, useEffect } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import FlashMessage from "../Components/FlashMessage";

export default function Layout({ children }) {
    return (
        <>
            <Head title="NaijaRails">
                <meta
                    head-key="description"
                    name="description"
                    content="NaijaRails is a RailWay Booking System"
                />
                <link rel="icon" type="image/png" href="/favicon.ico" />
            </Head>
            <header className="sticky top-0 z-10 grid grid-cols-2 items-center gap-2 py-5 md:grid-cols-3">
                <nav className="flex gap-2 justify-center">
                    <Link className="nav-link" href="/">
                        Home
                    </Link>
                    <Link className="nav-link" href="/about">
                        AboutUs
                    </Link>
                    <Link className="nav-link" href="/blogs">
                        Blog
                    </Link>
                    <Link className="nav-link" href="/dashboard">
                        Login
                    </Link>
                    <Link className="nav-link" href="/posts/create">
                        Create
                    </Link>
                </nav>
            </header>
            <main>
                <FlashMessage />

                {children}
            </main>
        </>
    );
}
