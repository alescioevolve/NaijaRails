import React from "react";

function Banner() {
    return (
        <>
            {/* -ml-[10%] */}
            {/* <div className="w-[100%] md:w-[100%] mx-auto md:-ml-[20%]"> */}
            <div className="w-[100%] mx-auto -px-5">
                <div className="relative mx-auto overflow-hidden">
                    <div
                        className="w-full h-[350px] md:h-[450px] rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                        style={{
                            backgroundImage: "url(/banner.png)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
                        <div className="absolute top-20 left-0 right-0 px-4 pb-4 text-center flex flex-col justify-end items-center">
                            {/* Hero Content */}
                            <div className="hero-content text-white">
                                <h2 className="text-2xl md:text-3xl mb-2">
                                    Helping Others
                                </h2>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    Live & Travel
                                </h1>
                                <p className="text-lg md:text-xl">
                                    NewYear Special offers to suit your travel
                                    comforts
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;
