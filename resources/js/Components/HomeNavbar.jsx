import React, { useState } from "react";
import { Link } from "@inertiajs/react";

function HomeNavbar({ auth }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-green-50 w-full py-1 px-4 sm:px-6 md:px-10 sticky top-0 z-50">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 flex-wrap">
                {/* Logo Section */}
                <a href="/" className="flex items-center space-x-2">
                    <img
                        src="/favicon.ico"
                        className="h-8 md:h-10"
                        alt="Logo"
                    />
                    <span className="text-xl md:text-2xl font-semibold text-green-900">
                        Naija<span className="text-black">Rails</span>
                    </span>
                </a>

                {/* Login Button */}
                <Link
                    href={route("login")}
                    className="text-white font-medium rounded-2xl text-sm px-10 py-2 bg-green-700 md:hidden -mr-8"
                >
                    Log in
                </Link>

                {/* Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-sticky"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                {/* Navigation Menu */}
                <div
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } w-full md:flex md:w-auto`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 space-y-4 md:space-y-0">
                        <li>
                            <a
                                href="/"
                                className="block py-2 px-3 text-green-700 hover:text-green-900 md:hover:bg-transparent md:p-0"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/schedules"
                                className="block py-2 px-3 text-gray-900 hover:text-green-700 md:hover:bg-transparent md:p-0"
                            >
                                Trains Schedule
                            </a>
                        </li>
                        <li>
                            <a
                                href="/faq"
                                className="block py-2 px-3 text-gray-900 hover:text-green-700 md:hover:bg-transparent md:p-0"
                            >
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="block py-2 px-3 text-gray-900 hover:text-green-700 md:hover:bg-transparent md:p-0"
                            >
                                HelpDesk
                            </a>
                        </li>
                    </ul>
                </div>

                {/* SignUp Button */}

                <div className="hidden md:flex gap-2">
                    <Link
                        href={route("login")}
                        className="text-black font-medium rounded-2xl text-sm px-20 py-2 border-2 border-green-700"
                    >
                        Log in
                    </Link>
                    <Link
                        href={route("register")}
                        className="text-white bg-green-700 hover:bg-green-800 font-medium rounded-2xl text-sm px-20 py-2"
                    >
                        SignUp
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomeNavbar;
