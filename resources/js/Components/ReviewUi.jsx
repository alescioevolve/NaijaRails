import React from "react";
import CardList from "../Components/CardComponent";

function ReviewUi() {
    return (
        <>
            <div className="mx-10 md:mx-0 h-auto mx-4 my-10">
                <h2 className="text-4xl font-bold text-[#2D3748]">Reviews</h2>
                <p className="text-md font-serif">
                    What people say about Globe facilities
                </p>
                <CardList />
            </div>
        </>
    );
}

export default ReviewUi;
