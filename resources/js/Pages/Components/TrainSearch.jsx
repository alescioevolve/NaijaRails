import React, { useState } from "react";
import { Link } from "@inertiajs/react"; // Assuming you're using Inertia for routing

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

function TrainSearch({ onSearch }) {
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
        // Generate dummy results with all combinations of origin and destination
        const dummyResults = [];
        let idCounter = 1; // Initialize ID counter

        locations.forEach((origin) => {
            locations.forEach((destination) => {
                if (origin !== destination) {
                    trainClasses.forEach((trainClass) => {
                        const price = generateRandomPrice(trainClass);
                        // Generate a unique ID for each train result
                        dummyResults.push({
                            id: idCounter++, // Assign unique ID
                            origin,
                            destination,
                            date: formData.date,
                            trainClass,
                            price,
                        });
                    });
                }
            });
        });

        // Filter dummy results based on formData
        const filteredResults = dummyResults.filter(
            (result) =>
                (formData.origin ? result.origin === formData.origin : true) &&
                (formData.destination
                    ? result.destination === formData.destination
                    : true) &&
                (formData.trainClass
                    ? result.trainClass === formData.trainClass
                    : true)
        );

        // Ensure at least 5 results are returned
        const resultsToReturn =
            filteredResults.length >= 5
                ? filteredResults
                : dummyResults.slice(0, 5);

        // Pass results to parent if `onSearch` is defined
        if (onSearch && typeof onSearch === "function") {
            onSearch(resultsToReturn);
        } else {
            console.error("onSearch is not a function");
        }
    };

    // Function to generate a random price based on train class
    const generateRandomPrice = (trainClass) => {
        switch (trainClass) {
            case "Economy":
                return (Math.random() * (1000 - 500) + 500).toFixed(2); // Price range: 500 to 1000
            case "Business":
                return (Math.random() * (2000 - 1500) + 1500).toFixed(2); // Price range: 1500 to 2000
            case "First Class":
                return (Math.random() * (3000 - 2500) + 2500).toFixed(2); // Price range: 2500 to 3000
            default:
                return (Math.random() * (1000 - 500) + 500).toFixed(2); // Default to Economy price range
        }
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
                            Search Routes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TrainSearch;
