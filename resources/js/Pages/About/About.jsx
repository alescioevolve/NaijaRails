import React from "react";
import { Head } from "@inertiajs/react";
export default function About() {
    return (
        <>
            <Head>
                <title>About Us</title>
                <meta
                    head-key="description"
                    name="description"
                    content="About NaijaRails is a RailWay Booking System"
                />
            </Head>
            <div>
                <h1 className="title">About Page</h1>
            </div>
        </>
    );
}
