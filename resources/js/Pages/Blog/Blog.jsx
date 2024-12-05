import React from "react";
import { Link, Head } from "@inertiajs/react";

export default function Blog({ posts }) {
    return (
        <>
            <Head title="Blog" />
            <div>
                <h1 className="title">Blog Page</h1>
                <div className="w-5/6 mx-auto">
                    {posts.data.map((post, index) => (
                        <div
                            key={post.id}
                            className="text-left text-2xl my-3 py-1"
                        >
                            <p className="text-left text-sm text-slate-600">
                                Posted On:{" "}
                                {new Date(post.created_at).toLocaleDateString()}{" "}
                                @{""}
                                {new Date(post.created_at).toLocaleTimeString()}
                            </p>

                            <p className="text-left text-2xl my-1 py-3 border-b">
                                {index + 1}.&nbsp;&nbsp;&nbsp; {post.body}
                                <Link
                                    href={`/posts/${post.id}`}
                                    className="p-1 m-2 text-blue-800 text-sm"
                                    dangerouslySetInnerHTML={{
                                        __html: "Read More",
                                    }}
                                />
                            </p>
                        </div>
                    ))}

                    <div className="py-2">
                        {posts.links.map((link) =>
                            link.url ? (
                                <Link
                                    key={link.label}
                                    href={link.url}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                    className={`p-1 m-2 ${
                                        link.active
                                            ? "text-blue-600 font-bold"
                                            : ""
                                    }`}
                                />
                            ) : (
                                <span
                                    key={link.label}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                    className="p-1 m-2 text-slate-500"
                                ></span>
                            )
                        )}
                        <p>
                            Showing {posts.from} to {posts.to} of {posts.total}{" "}
                            results
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
