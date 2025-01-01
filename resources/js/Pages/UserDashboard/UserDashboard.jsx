import React from "react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

const Dashboard = ({ name }) => {
    return (
        <>
            <Head title="Dashboard" />
            <div>
                <h1 className="title">User Dashboard Page</h1>
                <p className="text-center text-2xl my-1 py-1">
                    <br /> Hello <strong>{name}</strong>
                </p>
            </div>
        </>
    );
};

Dashboard.layout = (page) => (
    <DashboardLayout children={page} title="Welcome User" />
);

export default Dashboard;
