import React from "react";
import { AiFillStar } from "react-icons/ai";

function BookingUi() {
    return (
        <>
            <div className=" flex flex-col md:flex-row md:items-center md:justify-between max-w-5xl w-full mx-auto p-6 rounded-lgh-auto my-10">
                {/* Left Side: Text and Inputs */}
                <div className="md:w-1/2 space-y-10 mx-10">
                    <h1 className="text-4xl font-bold text-[#2D3748]">
                        Make your booking experience easy!
                    </h1>
                    <p className="text-[#4A5568]">
                        We aim to make the booking process as simple as
                        possible.
                    </p>

                    {/* Booking guide Section */}
                    <ol class="relative border-s border-gray-200 dark:border-gray-700">
                        {/* <!-- Step 1: Choose Your Route --> */}
                        <li class="mb-10 ms-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
                                <svg
                                    class="w-2.5 h-2.5 text-green-800 dark:text-green-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 class="flex items-center mb-1 text-lg font-semibold text-black-900 dark:text-black">
                                Step 1: Choose Your Route
                            </h3>
                            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                Visit the NaijaRails website or open the mobile
                                app. Enter your departure and arrival stations,
                                and select your desired travel date to view
                                available train options.
                            </p>
                        </li>

                        {/* <!-- Step 2: Select Your Train --> */}
                        <li class="mb-10 ms-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
                                <svg
                                    class="w-2.5 h-2.5 text-green-800 dark:text-green-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 class="mb-1 text-lg font-semibold text-black-900 dark:text-black">
                                Step 2: Select Your Train
                            </h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                                Browse through the available train options.
                                Select the one that fits your schedule and
                                budget.
                            </p>
                        </li>

                        {/* <!-- Step 3: Enter Your Details --> */}
                        <li class="mb-10 ms-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
                                <svg
                                    class="w-2.5 h-2.5 text-green-800 dark:text-green-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 class="mb-1 text-lg font-semibold text-black-900 dark:text-black">
                                Step 3: Enter Your Details
                            </h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                                Fill in your personal details such as name,
                                contact info, and identification number (if
                                necessary). Double-check your details before
                                proceeding.
                            </p>
                        </li>

                        {/* <!-- Step 5: Make Payment --> */}
                        <li class="mb-10 ms-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
                                <svg
                                    class="w-2.5 h-2.5 text-green-800 dark:text-green-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 class="mb-1 text-lg font-semibold text-black-900 dark:text-black">
                                Step 5: Make Payment
                            </h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                                Choose your preferred payment method (credit
                                card, debit card, or mobile payments). Complete
                                the payment process and receive confirmation.
                            </p>
                        </li>

                        {/* <!-- Step 6: Receive Your Ticket --> */}
                        <li class="mb-10 ms-6">
                            <span class="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-900">
                                <svg
                                    class="w-2.5 h-2.5 text-green-800 dark:text-green-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 class="mb-1 text-lg font-semibold text-black-900 dark:text-black">
                                Step 6: Receive Your Ticket
                            </h3>
                            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                                Once your payment is successful, you will
                                receive your train ticket. You can download or
                                print it. Alternatively, view it in the app
                                under "My Bookings."
                            </p>
                        </li>
                    </ol>

                    {/* Input Section */}
                </div>

                {/* Right Side: Image Placeholder */}
                <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2 overflow-hidden">
                    <div className="w-full h-64 md:h-[1000px] bg-gray-300 rounded-lg flex items-center justify-center">
                        <img
                            src="/Train1.png"
                            className="w-full h-full rounded-md object-cover"
                            alt=""
                        />{" "}
                    </div>
                </div>
            </div>
        </>
    );
}
export default BookingUi;
