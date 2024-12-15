// import React from "react";
// import { Head, Link, useForm } from "@inertiajs/react";
// import { useRoute } from "ziggy";

// export default function SinglePost({ post }) {
//     const route = useRoute(Ziggy);
//     const { delete: destroy, errors } = useForm({});

//     function submit(e) {
//         e.preventDefault();
//         destroy(`/posts/${post.id}`);
//     }
//     return (
//         <>
//             <Head title="SinglePost" />
//             <div className="pt-5 w-5/6 mx-auto">
//                 <h1 className="title">SinglePost</h1>
//                 <p className="text-sm text-slate-600">{post.created_at}</p>
//                 <div className="flex flex-row justify-between">
//                     <p>{post.body}</p>
//                     <div className="flex flex-row md:flex-col gap-3 mt-4 md:mt-0">
//                         <form
//                             onSubmit={submit}
//                             className="flex flex-row md:flex-col gap-3"
//                         >
//                             <button className="text-white bg-red-700 px-5 py-2 rounded-lg justify-end">
//                                 Delete
//                             </button>
//                         </form>
//                         <Link
//                             // href={`/posts/${post.id}/edit`}
//                             href={route("posts.edit", post.id)}
//                             className="text-white bg-blue-700 px-5 py-2 rounded-lg justify-end"
//                         >
//                             Update
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
