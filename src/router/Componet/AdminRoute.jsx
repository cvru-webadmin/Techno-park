import React, { useContext } from "react";
import { FireContext } from "../../Context/context";

import { Link, Navigate } from "react-router-dom"; // Use Navigate for programmatic redirection

export default function AdminRoute({ children }) {
    const { isAdmin,isLoggin } = useContext(FireContext);

    if (!isAdmin) {
        // Redirect to login page if not an admin
        return <Navigate to="/AdminLogin" replace />;
    }
    if(!isLoggin){
        return <Navigate to="/" replace />;
    }

    // Render children if the user is an admin
    return children;
}
