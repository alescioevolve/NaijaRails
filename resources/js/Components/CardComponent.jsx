import React from "react";
import { AiFillStar } from "react-icons/ai";

const cardData = [
    {
        id: 1,
        title: "“A real sense of community, nurtured”",
        description:
            "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
        name: "Olga",
        from: "Weave studio",
        to: "Kai tak",
        src: "/Review1.png",
    },
    {
        id: 2,
        title: "“The facilities are superb. Clean, slick, bright.”",
        description:
            "“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle",
        name: "Thomas",
        from: "Brighton hotel",
        to: "Yangon",
        src: "/Review2.png",
    },
    {
        id: 3,
        title: "“A real sense of community, nurtured”",
        description:
            "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
        name: "Eliot",
        from: "Weave studios",
        to: "Kai Tak",
        src: "/Review3.png",
    },
];

function CardComponent({ id, title, description, name, from, to, src }) {
    return (
        <div className="h-auto w-full mx-auto">
            <div className="w-full">
                {/* Title and Description */}
                <h2 className="font-semibold text-lg">{title}</h2>
                <p className="font-light text-sm text-gray-600 truncate">
                    {description}
                </p>

                {/* View More Link */}
                <a
                    className="font-medium text-[12px] text-end block mt-2 text-blue-500 hover:underline"
                    href="/src/pages/DetailedPage/"
                >
                    View more
                </a>

                {/* Star Icons */}
                <span className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, index) => (
                        <AiFillStar key={index} className="text-yellow-500" />
                    ))}
                </span>

                {/* Additional Info */}
                <div className="mt-4">
                    <h1 className="font-medium">{name}</h1>
                    <p className="text-sm text-gray-500">
                        {from} - {to}
                    </p>
                    <span className="flex items-center gap-2 mt-2">
                        <img
                            className="w-5 h-5"
                            src="/google.png"
                            alt="Google"
                        />
                        <h4 className="text-sm font-medium">Google</h4>
                    </span>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full mx-auto mt-4">
                <img
                    className="w-full h-auto rounded-md"
                    src={src}
                    alt={title}
                />
            </div>
        </div>
    );
}

function CardList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
            {cardData.map((card, index) => (
                <div key={card.id} className="relative">
                    {/* Green overlay for the first three cards */}
                    {index < 3 && (
                        <div
                            className="absolute top-4 left-2 w-full h-full rounded-md bg-[#84e9c666] shadow-md"
                            style={{
                                zIndex: 0,
                                transform: "translate(5px, 3px)", // Offset below and left
                            }}
                        ></div>
                    )}

                    {/* Actual Card Content */}
                    <div className="relative z-10 bg-white shadow-lg rounded-md p-4">
                        <CardComponent {...card} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardList;
