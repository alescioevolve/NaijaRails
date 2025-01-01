import React, { useState, useEffect } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import FlashMessage from "../Components/FlashMessage";
import HomeNavbar from "../Components/HomeNavbar";
import HomeAuthNavbar from "../Components/HomeAuthNavbar";
import Footer from "../Components/Footer";

export default function MainLayout({ children }) {
    const { auth } = usePage().props; // Accessing the auth prop via usePage

    // console.log("ViewAUTH", auth); // Verify that auth data is being received

    // Effect to handle navbar update when auth data changes
    useEffect(() => {
        // Log auth to see if it's updated
        // console.log("Updated auth", auth);
    }, [auth]); // This hook runs when 'auth' changes

    // console.log("ViewAUTH", auth); // Verify that auth data is being received

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
            {/* <header className="sticky top-0 z-10 grid grid-cols-2 items-center gap-2 py-5 md:grid-cols-3">
                <nav className="flex gap-2 justify-center">
                    <Link className="nav-link" href="/about">
                        Train Schedule
                    </Link>
                </nav>
            </header> */}

            {/* {auth === null ? (
                <HomeNavbar />
            ) : // <div>Loading...</div> // Or a spinner while data is loading
            auth && auth.user ? (
                <HomeAuthNavbar />
            ) : (
                <HomeNavbar />
            )} */}

            {auth && auth.user ? <HomeAuthNavbar /> : <HomeNavbar />}

            {/* {auth && !auth ? <HomeAuthNavbar /> : <HomeNavbar />} */}
            <main className="w-5/6 mx-auto">{children}</main>
            <Footer />
        </>
    );
}
