import React from "react";
import { Head, useForm } from "@inertiajs/react";

export default function CreatePost() {
    const { data, setData, post, processing, errors } = useForm({
        body: "",
    });
    function submit(e) {
        e.preventDefault();
        // setData("body", data.body.trim());
        console.log("submitted", data);
        post("/posts");
    }
    // console.log("errors", errors);
    return (
        <>
            <Head title="Create Post" />
            <div className="w-1/2 mx-auto">
                <h1 className="title">Create Post</h1>
                {/* {data.body} */}
                <form onSubmit={submit}>
                    <div>
                        <label htmlFor="body">Enter Post Content</label>
                        <textarea
                            rows="4"
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                            className={errors.body && "!ring-red-500"}
                        />
                    </div>
                    {errors.body && (
                        <p className="text-red-500 text-center">
                            {errors.body}
                        </p>
                    )}
                    <div className="flex justify-center">
                        <button
                            className=" text-white bg-blue-600 px-10 py-1 my-2 rounded-md w-full md:w-2/4"
                            type="submit"
                            disabled={processing}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
