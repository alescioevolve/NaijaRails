import React from "react";
import { Head, usePage } from "@inertiajs/react";

export default function Home({ name }) {
    const { component } = usePage();
    return (
        <>
            {/* <Head title="Home | NaijaRails" /> */}
            <Head title={component} />

            <div>
                <h1 className="title">Home Page</h1>
                <p className="text-center text-2xl my-1 py-1">
                    <br /> Hello <strong>{name}</strong>
                </p>
            </div>
        </>
    );
}
