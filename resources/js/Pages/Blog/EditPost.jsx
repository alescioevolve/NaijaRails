import React from "react";
import { Head, useForm } from "@inertiajs/react";
// import { useRoute } from "../../../../vendor/tightenco/ziggy";
import { useRoute } from "ziggy";

export default function EditPost({ post }) {
    const { data, setData, put, processing, errors } = useForm({
        body: post.body,
    });
    const route = useRoute(Ziggy);
    function submit(e) {
        e.preventDefault();
        // put(`/posts/${post.id}`);
        put(route("posts.update", post.id));
    }
    return (
        <>
            <Head title="Edit Post" />
            <div className="w-1/2 mx-auto">
                <h1 className="title">Edit Post</h1>
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
