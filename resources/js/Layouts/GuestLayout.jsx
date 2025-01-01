import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="mx-auto -mt-[5%] flex min-h-screen flex-col items-center sm:justify-center sm:pt-0">
            <div className="-mr-[10%]  flex flex-warp items-center justify-center">
                {/* <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link> */}
                {/* Form Section */}
                <div className="mt-6 py-20 w-full overflow-hidden bg-white px-10 shadow-md sm:max-w-md sm:rounded-lg">
                    {children}
                </div>
                {/* Right Side: Image */}
                <div className="mt-5 md:mt-0 md:ml-8 md:w-1/2 hidden md:block ">
                    <div className="w-3/4 h-64 bg-gray-300 rounded-lg flex items-center">
                        <img
                            src="/Signup.png"
                            className="rounded-lg shadow-md"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
