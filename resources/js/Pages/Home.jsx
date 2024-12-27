import React from "react";
import { Head, usePage } from "@inertiajs/react";
import Newsletter from "../Components/Newsletter";
import ReviewUi from "../Components/ReviewUi";
import BookingUi from "../Components/BookingUi";
import BookingRoutes from "../Components/BookingRoutes";
import Banner from "../Components/Banner";
import SearchRoutes from "../Components/SearchRoutes";

export default function Home({ name }) {
    const { component } = usePage();
    return (
        <>
            {/* <Head title="Home | NaijaRails" /> */}
            <Head title={component} />

            <div className="w-full">
                <Banner className="mx-10" />
                <SearchRoutes className="mx-1" />
            </div>
            <div className="overflow-hidden mx-2">
                <h1 className="title">Popular Travel Destinations</h1>
                <BookingRoutes />
                <BookingUi />
                <ReviewUi />

                <div className="mx-auto ">
                    <img
                        src="/Train.png"
                        class="mx-auto my-10 w-full md:w-1/2"
                        alt="Flowbite Logo"
                    />
                </div>
            </div>
            <Newsletter />
        </>
    );
}
