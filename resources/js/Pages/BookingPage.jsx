import { useState, useEffect } from "react";
import JsBarcode from "jsbarcode";
import { usePage } from "@inertiajs/react";

export default function BookingPage() {
    const { train_name, origin, destination, date, trainClass, price } =
        usePage().props;
    const [showPopup, setShowPopup] = useState(false);

    const handleCompleteBooking = () => {
        setShowPopup(true);
    };

    const handleCancelBooking = () => {
        alert("Booking canceled.");
    };

    const handleDownloadTicket = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 400;
        canvas.height = 400;

        // Draw ticket background and details
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#333";
        ctx.font = "16px Arial";
        ctx.fillText("Ticket: " + generateTicketID(), 20, 95);
        ctx.font = "14px Arial";
        ctx.fillText(
            // "Train: " + (train_name ? train_name : "Naija Modern Expressway"),
            "Train: Naija Modern Expressway",
            20,
            120
        );
        ctx.fillText("Origin: " + origin, 20, 140);
        ctx.fillText("Destination: " + destination, 20, 160);
        ctx.fillText("Date: " + date, 20, 180);
        ctx.fillText("Class: " + trainClass, 20, 200);
        ctx.fillText("Price: ₦" + price, 20, 220);

        // Add Logo
        const logo = new Image();
        logo.src = "/NaijaRailsLogo.png"; // Assuming you have a logo at this path
        logo.onload = () => {
            ctx.drawImage(logo, 100, 10, 200, 50); // Place logo at top

            // Generate Barcode after logo is loaded
            const barcodeCanvas = document.createElement("canvas");
            JsBarcode(barcodeCanvas, generateTicketID(), {
                format: "CODE128",
                width: 200,
                height: 40,
                displayValue: false,
            });

            // Draw the barcode on the ticket
            ctx.drawImage(barcodeCanvas, 150, 240, 200, 50); // Place barcode at the bottom

            // Trigger image download once barcode is drawn
            const dataUrl = canvas.toDataURL("image/png");
            const a = document.createElement("a");
            a.href = dataUrl;
            a.download = "ticket.png";
            a.click();
        };
    };

    const generateTicketID = () => {
        // A simple ticket ID generator (you can adjust this logic as needed)
        return "TICKET-" + Math.floor(Math.random() * 1000000);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                Final Booking Details
            </h2>
            <div className="space-y-4">
                <div className="flex justify-between">
                    <p className="text-gray-600 font-medium">
                        <strong>Train:</strong>
                    </p>
                    <p className="text-gray-800">
                        {train_name == undefined
                            ? train_name
                            : "Naija Modern Expressway"}
                    </p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-600 font-medium">
                        <strong>Origin:</strong>
                    </p>
                    <p className="text-gray-800">{origin}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-600 font-medium">
                        <strong>Destination:</strong>
                    </p>
                    <p className="text-gray-800">{destination}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-600 font-medium">
                        <strong>Date:</strong>
                    </p>
                    <p className="text-gray-800">{date}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-600 font-medium">
                        <strong>Class:</strong>
                    </p>
                    <p className="text-gray-800">{trainClass}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-gray-600 font-medium">
                        <strong>Price:</strong>
                    </p>
                    <p className="text-gray-800">₦{price}</p>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex px-5 mx-5 md:mx-20 md:px-20 justify-between mt-6">
                <button
                    onClick={handleCompleteBooking}
                    className="w-full sm:w-auto bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
                >
                    Complete Booking
                </button>
                <button
                    onClick={handleCancelBooking}
                    className="w-full sm:w-auto bg-red-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-red-700 transition duration-300"
                >
                    Cancel Booking
                </button>
            </div>

            {/* Success Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-sm w-full relative">
                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <div className="flex justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-16 h-16 text-green-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-center text-gray-800 mt-4">
                            Booking Completed!
                        </h3>
                        <p className="text-center text-gray-600 mt-2">
                            Your ticket details are ready.
                        </p>
                        <div className="mt-4 flex justify-center">
                            <button
                                onClick={handleDownloadTicket}
                                className="bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700"
                            >
                                Download Ticket
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="relative z-10">
                <img
                    src="/Train.png"
                    style={{
                        mixBlendMode: "darken",
                    }}
                    className="mx-auto mt-5 w-full md:w-1/2 screen"
                    alt="NaijaRails Logo"
                />
                <p className="py-5 items-center text-center text-gray-800">
                    Ensuring You Travel Safely and In Comfort to your desired
                    destination
                </p>
            </div>
        </div>
    );
}
