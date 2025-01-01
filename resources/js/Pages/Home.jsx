import React from "react";
import { Head, usePage } from "@inertiajs/react";
import Newsletter from "../Components/Newsletter";
import ReviewUi from "../Components/ReviewUi";
import BookingUi from "../Components/BookingUi";
import BookingRoutes from "../Components/BookingRoutes";
import Banner from "../Components/Banner";
import SearchRoutesCard from "../Components/SearchRoutesCard";

export default function Home({ name, auth }) {
    const { component } = usePage();
    // Log full auth object
    // console.log("Full auth object:", auth);

    const handleSearch = (results) => {
        console.log("Search results:", results);
        // Handle search results here (e.g., update state or navigate)
    };

    return (
        <>
            {/* <Head title="Home | NaijaRails" /> */}
            <Head title={component} />
            <div className="w-full">
                <Banner className="mx-10" />
                <SearchRoutesCard className="mx-1" onSearch={handleSearch} />
            </div>
            {/* {auth.name} */}
            {/* <h1 className="text-4xl mx-auto text-center py-10">
                Hello {auth?.name || "Guest"}
            </h1>{" "} */}
            <div className="overflow-hidden mx-2">
                <BookingRoutes />
                <BookingUi />
                <ReviewUi />

                <div className="mx-auto ">
                    <img
                        src="/Train.png"
                        class="mx-auto my-10 w-full md:w-1/2"
                        alt="NaijaRails Logo"
                    />
                </div>
            </div>
            <Newsletter />
        </>
    );
}
