import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Banner from "../Components/Banner";
import TrainSearch from "@/Pages/Components/TrainSearch";

export default function Dashboard(auth, results, trains = []) {
    // const user = usePage().props.auth.user;
    const user = usePage().props.auth || {
        name: "Guest",
        email: "guest@example.com",
    };

    // console.log(usePage().props.auth);

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (results) => {
        setSearchResults(results);
        console.log("Search results received:", results);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Welcome,{" "}
                    <span className="text-green-800 capitalize">
                        {user?.name || "User"}
                    </span>{" "}
                    to Naija Rails
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-2">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="w-full">
                        <Banner className="mx-10" />
                        <TrainSearch className="mx-1" onSearch={handleSearch} />
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg my-1">
                        <h1 className="text-2xl font-bold px-6 pt-10 mb-10">
                            View Available Train Schedules from your search
                        </h1>
                        {/* Search Results */}
                        <div className="px-5 pb-10 mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {searchResults && searchResults.length > 0 ? (
                                searchResults.map((result) => (
                                    <div
                                        key={result.id}
                                        className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                                    >
                                        <div className="flex items-center mb-4">
                                            <img
                                                src="/train-1.svg"
                                                className="h-8 me-3"
                                                alt="NaijaRails Logo"
                                            />
                                            <h2 className="text-xl font-bold text-gray-900">
                                                {result.train_name}
                                            </h2>
                                        </div>

                                        <div className="mb-2">
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {result.origin} →{" "}
                                                {result.destination}
                                            </h3>
                                            <p className="text-gray-600 mb-1">
                                                Date: {result.date}
                                            </p>
                                            <p className="text-gray-600 mb-1">
                                                Class: {result.trainClass}
                                            </p>
                                            <p className="text-gray-800 font-bold">
                                                Price: &#8358;{result.price}
                                            </p>
                                        </div>

                                        {/* Book Now Button with ID */}
                                        <div className="mt-4">
                                            <Link
                                                href={`/dashboard/booking/${
                                                    result.id
                                                }?train_name=${encodeURIComponent(
                                                    result.train_name
                                                )}&origin=${encodeURIComponent(
                                                    result.origin
                                                )}&destination=${encodeURIComponent(
                                                    result.destination
                                                )}&date=${encodeURIComponent(
                                                    result.date
                                                )}&trainClass=${encodeURIComponent(
                                                    result.trainClass
                                                )}&price=${encodeURIComponent(
                                                    result.price
                                                )}`}
                                                className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                            >
                                                Book Now
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <>
                                    {" "}
                                    <div className="flex items-center mb-4 mx-auto">
                                        <img
                                            src="./train-1.svg"
                                            class="h-8 me-3"
                                            alt="NaijaRails Logo"
                                        />
                                        <div className="px-2 py-1 text-gray-900">
                                            No result for train search!
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg my-10">
                        <div className="p-6 text-gray-900">
                            You have no ongoing train bookings!
                        </div>
                    </div>
                    <div
                        className="mx-auto pt-5 bg-white text-center relative"
                        style={{
                            backgroundImage: "url(/banner.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Black overlay with opacity */}
                        <div
                            className="absolute inset-0 bg-white opacity-100"
                            style={{ zIndex: 0 }}
                        ></div>

                        {/* Content */}
                        <div className="relative z-10">
                            <img
                                src="/Train.png"
                                style={{
                                    mixBlendMode: "darken", // Darken blending mode
                                }}
                                className="mx-auto mt-5 w-full md:w-1/2 screen"
                                alt="NaijaRails Logo"
                            />
                            <p className="py-5 text-gray-800">
                                Ensuring You Travel Safely and In Comfort to
                                your desired destination
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
