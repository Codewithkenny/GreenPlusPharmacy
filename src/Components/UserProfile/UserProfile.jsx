import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
    const user = useSelector((state) => state.user);

    return (
        <div>
            <h2 className="text-dark">Welcome, {user.firstName}!</h2>
           
        </div>
    );
};

export default UserProfile;
