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
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        let page = pages[`./Pages/${name}.jsx`];

        console.log("Resolved page:", name, page);

        if (page?.default) {
            // Apply layout conditionally
            page.default.layout =
                page.default.layout ||
                ((pageContent) => {
                    // if (name === "Home") {
                    if (name === "Home" || name === "Pages/Home") {
                        return <HomeLayout>{pageContent}</HomeLayout>; // For homepage
                    }
                    // if (name === "Login" || name === "Register") {
                    if (name.startsWith("Auth/")) {
                        return <HomeLayout>{pageContent}</HomeLayout>; // For auth pages
                    }

                    if (name.startsWith("Dashboard")) {
                        return <DashboardLayout>{pageContent}</DashboardLayout>; // For auth pages
                    }
                    return <HomeLayout children={pageContent} />; // Default layout
                });
        }

        return (
            page ||
            resolvePageComponent(
                `./Pages/${name}.jsx`,
                import.meta.glob("./Pages/**/*.jsx")
            )
        );
    },

    // resolve: (name) => {
    //     const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
    //     let page = pages[`./Pages/${name}.jsx`];
    //     page.default.layout =
    //         page.default.layout || ((page) => <Layout children={page} />);
    //     return page;
    // },

    // resolve: (name) =>
    //     resolvePageComponent(
    //         `./Pages/${name}.jsx`,
    //         import.meta.glob("./Pages/**/*.jsx")
    //     ),

    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: "#0ebb20",
    },
});
