import "../css/app.css";
import "./bootstrap";
import HomeLayout from "@/Layouts/MainLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { Inertia } from "@inertiajs/inertia"; // Import from the main package

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx");
        return pages[`./Pages/${name}.jsx`]().then((module) => {
            const page = module.default;

            // Apply layout conditionally
            page.layout =
                page.layout ||
                ((pageContent) => {
                    if (name === "Home" || name === "Pages/Home") {
                        return <HomeLayout>{pageContent}</HomeLayout>; // For homepage
                    }

                    if (name.startsWith("Auth/")) {
                        return <HomeLayout>{pageContent}</HomeLayout>; // For auth pages
                    }

                    if (name.startsWith("Dashboard")) {
                        return <DashboardLayout>{pageContent}</DashboardLayout>; // For dashboard pages
                    }

                    return <HomeLayout children={pageContent} />; // Default layout
                });

            return page;
        });
    },

    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: "#0ebb20",
    },
});
