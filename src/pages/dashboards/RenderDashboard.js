import React from "react";
import { Dashboard } from "./Dashboard";
import { OpenDashboard } from "./OpenDashboard";
import MandiDashboard from "./MandiDashboard";

export function RenderDashboard({ user }) {
    // const [role, setRole] = useState('farmer')
    console.log("render", user);

    return (
        <>
            {user?.role === "farmer" ? (
                <Dashboard user={user} />
            ) : null}
            {user?.role === "mandi" ? (
                <MandiDashboard user={user} />
            ) : null}
            {user?.role === "market" ? (
                <OpenDashboard user={user} />
            ) : null}
        </>
    );
}
