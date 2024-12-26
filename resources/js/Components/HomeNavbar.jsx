import React from "react";

function HomeNavbar() {
    return (
        <div className="bg-green-50 w-full py-5 px-10">
            <div class="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="/"
                    class="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src="/favicon.ico" class="h-8" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        <span className="text-green-900">Naija</span>
                        <span className="text-black">Rails</span>
                    </span>
                </a>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        type="button"
                        class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        SignUp
                    </button>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <li>
                            <a
                                href="/"
                                class="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/schedules"
                                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Trains Schedule
                            </a>
                        </li>
                        <li>
                            <a
                                href="/faq"
                                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                HelpDesk
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HomeNavbar;
