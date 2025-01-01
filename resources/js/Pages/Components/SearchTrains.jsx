import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const locations = [
    "Abuja",
    "Kaduna",
    "Lagos",
    "Oyo",
    "Port Harcourt",
    "Maiduguri",
    "Kano",
    "Kafanchan",
    "Enugu",
    "Warri-Itakpe",
    "Zaria",
    "Bauchi",
    "Ogun",
    "Cross River",
];

const trainClasses = ["Economy", "Business", "First Class"];

function SearchTrains({ onSearch }) {
    const [formData, setFormData] = useState({
        origin: "",
        destination: "",
        date: "",
        trainClass: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.post(
            "/fetch-schedules",
            {
                origin: formData.origin,
                destination: formData.destination,
                date: formData.date,
                trainClass: formData.trainClass,
            },
            {
                onSuccess: (page) => {
                    const results = page.props.results; // Access results passed from the controller

                    // Pass results to parent if onSearch is defined
                    if (onSearch && typeof onSearch === "function") {
                        onSearch(results);
                    } else {
                        console.error("onSearch is not a function");
                    }

                    console.log("Search Results:", results);
                },
                onError: (errors) => {
                    console.error("Error fetching schedules:", errors);
                },
            }
        );

        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="relative z-30 bottom-[100px] md:bottom-[100px]">
            <div className="px-10 w-11/12 bg-black mx-auto rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 sm:w-5/6 md:w-3/4 lg:w-2/3">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {/* Origin */}
                        <div>
                            <label
                                htmlFor="origin"
                                className="block mb-2 text-sm font-medium text-gray-100"
                            >
                                Origin
                            </label>
                            <select
                                id="origin"
                                name="origin"
                                value={formData.origin}
                                onChange={handleChange}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                            >
                                <option value="">Select Origin</option>
                                {locations.map((location, index) => (
                                    <option key={index} value={location}>
                                        {location}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Destination */}
                        <div>
                            <label
                                htmlFor="destination"
                                className="block mb-2 text-sm font-medium text-gray-100"
                            >
                                Destination
                            </label>
                            <select
                                id="destination"
                                name="destination"
                                value={formData.destination}
                                onChange={handleChange}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                            >
                                <option value="">Select Destination</option>
                                {locations.map((location, index) => (
                                    <option key={index} value={location}>
                                        {location}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Date */}
                        <div>
                            <label
                                htmlFor="date"
                                className="block mb-2 text-sm font-medium text-gray-100"
                            >
                                Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                            />
                        </div>

                        {/* Train Class */}
                        <div>
                            <label
                                htmlFor="trainClass"
                                className="block mb-2 text-sm font-medium text-gray-100"
                            >
                                Train Class
                            </label>
                            <select
                                id="trainClass"
                                name="trainClass"
                                value={formData.trainClass}
                                onChange={handleChange}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                            >
                                <option value="">Select Class</option>
                                {trainClasses.map((trainClass, index) => (
                                    <option key={index} value={trainClass}>
                                        {trainClass}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Search Train Routes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchTrains;
