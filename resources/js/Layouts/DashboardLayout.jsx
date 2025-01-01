import React from "react";
import { Link } from "@inertiajs/react";

export default function DashboardLayout({ children }) {
    return (
        <>
            <header>
                {/* className="sticky top-0 z-10 grid grid-cols-4 items-center gap-2 py-5 md:grid-cols-3" */}
                {/* <nav>
                    <Link className="nav-link" href="/">
                        Home
                    </Link>
                    <Link className="nav-link" href="/about">
                        Profile
                    </Link>
                    <Link className="nav-link" href="/create">
                        Logout
                    </Link>
                </nav> */}
            </header>
            <main>{children}</main>
        </>
    );
}
