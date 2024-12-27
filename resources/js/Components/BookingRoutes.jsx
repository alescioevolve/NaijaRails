import React from "react";
import { IoIosSend } from "react-icons/io";

const BackImageData = [
    {
        id: 1,
        location: "Lagos",
        description:
            "Search Trains & Places Bookings to our most popular destinations",
        src: "/bookingroute2.png",
    },
    {
        id: 2,
        location: "Abuja",
        description:
            "Search Trains & Places Bookings to our most popular destinations",
        src: "/bookingroute1.png",
    },
];

function BookingRoutes() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {BackImageData.map(({ id, location, description, src }) => (
                <div
                    key={id}
                    className="relative mx-10 md:mx-0 h-[300px] md:h-[350px] rounded-2xl overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="absolute bottom-4 left-0 right-0 px-4 pb-4 text-center flex flex-col justify-end items-center">
                        <h1 className="text-white font-bold text-xl md:text-2xl mb-2">
                            {location}
                        </h1>
                        <p className="text-white text-sm md:text-md mb-4">
                            {description}
                        </p>
                        <button
                            type="submit"
                            className="bg-[#8DD3BB] text-black px-4 py-2 rounded flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-[#7dbf9c]"
                        >
                            <IoIosSend size={24} />
                            Show Route
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BookingRoutes;
