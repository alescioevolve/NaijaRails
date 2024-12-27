import React from "react";

function Newsletter() {
    return (
        <div className="flex h-48 mx-2 lg:mx-auto gap-5 bg-[#CDEAE1] items-center justify-between rounded-xl p-5 lg:p-10 relative top-[15px] z-50">
            <div className="w-full md:w-2/3 mb-2 md:mb-0 md:pr-10">
                <h2 className="text-xl w-full flex-wrap  md:text-2xl font-bold text-[#2D3748] mb-1">
                    Subscribe Newsletter
                </h2>
                <h3 className="text-lg md:text-xl font-semibold text-[#4A5568] mb-1">
                    The Travel
                </h3>
                <p className="text-xs break-normal  md:text-sm text-[#4A5568] mb-1">
                    Get inspired! Receive travel discounts, tips and behind the
                    scenes stories.
                </p>
                <div className="w-full max-w-lg">
                    <form
                        className="flex flex-col gap-3"
                        action="#"
                        method="POST"
                    >
                        <div className="flex">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="border-2 p-2 rounded-md w-[200px]"
                            />
                            <button
                                type="submit"
                                className="bg-green-700 text-white mx-2 px-5 rounded-md hover:bg-green-900"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-2/3 md:w-1/2 flex justify-center items-center hidden md:block">
                <img
                    src="/mailbox.png"
                    alt="Mailbox"
                    className="w-full h-auto md:max-h-[250px] md:max-w-md object-contain"
                />
            </div>
        </div>
    );
}

export default Newsletter;
