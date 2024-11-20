import React from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";

// Placeholder components for nested routes
const ProfileDetails = () => <div>Your Profile Details</div>;
const ProfileSettings = () => <div>Your Profile Settings</div>;

const Profile = () => {
    return (
        <div style={styles.container}>
            <h2>Profile Page</h2>
            <nav style={styles.nav}>
                <NavLink to="details" style={styles.link} activeStyle={styles.activeLink}>
                    Details
                </NavLink>
                <NavLink to="settings" style={styles.link} activeStyle={styles.activeLink}>
                    Settings
                </NavLink>
            </nav>
            <div style={styles.content}>
                <Routes>
                    <Route path="details" element={<ProfileDetails />} />
                    <Route path="settings" element={<ProfileSettings />} />
                </Routes>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
    },
    nav: {
        marginBottom: "20px",
        display: "flex",
        gap: "10px",
    },
    link: {
        textDecoration: "none",
        color: "#007bff",
    },
    activeLink: {
        fontWeight: "bold",
        textDecoration: "underline",
    },
    content: {
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
    },
};

export default Profile;
