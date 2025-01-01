import React from "react";
import { Head } from "@inertiajs/react";
export default function Schedules({ schedules }) {
    // console.log(schedules);
    return (
        <>
            <Head>
                <title>All Train Schedules</title>
                <meta
                    head-key="description"
                    name="description"
                    content="About NaijaRails is a RailWay Booking System"
                />
            </Head>
            <div className="my-5">
                <h1 className="text-3xl font-bold">View All Train Schedules</h1>
                <p className="text-center text-lg my-1 py-1">
                    Here are all the available train schedules. We have{" "}
                    {schedules.length} schedules
                </p>
                {schedules && schedules.length > 0 ? (
                    <ul className="space-y-6 md:space-y-4 m-4 md:m-0">
                        {schedules.map((schedule, index) => (
                            <li
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <img
                                        src="/train-1.svg"
                                        class="h-8 me-3"
                                        alt="NaijaRails Logo"
                                    />
                                    <h2 className="text-xl font-bold text-gray-900">
                                        {schedule.train_name}
                                    </h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    <p>
                                        <strong>Origin:</strong>{" "}
                                        {schedule.origin}
                                    </p>
                                    <p>
                                        <strong>Destination:</strong>{" "}
                                        {schedule.destination}
                                    </p>
                                    <p>
                                        <strong>Class:</strong>{" "}
                                        {schedule.train_class}
                                    </p>
                                    <p>
                                        <strong>Departure:</strong>{" "}
                                        {new Date(
                                            schedule.departure_time
                                        ).toLocaleString()}
                                    </p>
                                    <p>
                                        <strong>Arrival:</strong>{" "}
                                        {new Date(
                                            schedule.arrival_time
                                        ).toLocaleString()}
                                    </p>
                                    <p>
                                        <strong>Available Seats:</strong>{" "}
                                        {schedule.available_seats}
                                    </p>
                                    <p>
                                        <strong>Price:</strong>
                                        {schedule.price}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500">
                        No schedules available at the moment.
                    </p>
                )}
            </div>
        </>
    );
}
