import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Optional for styling, create if needed.

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                <li style={styles.li}>
                    <NavLink
                        to="/"
                        style={styles.link}
                        activeStyle={styles.activeLink}
                    >
                        Home
                    </NavLink>
                </li>
                <li style={styles.li}>
                    <NavLink
                        to="/about"
                        style={styles.link}
                        activeStyle={styles.activeLink}
                    >
                        About
                    </NavLink>
                </li>
                <li style={styles.li}>
                    <NavLink
                        to="/profile"
                        style={styles.link}
                        activeStyle={styles.activeLink}
                    >
                        Profile
                    </NavLink>
                </li>
                <li style={styles.li}>
                    <NavLink
                        to="/blog"
                        style={styles.link}
                        activeStyle={styles.activeLink}
                    >
                        Blog
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "#fff",
    },
    ul: {
        listStyleType: "none",
        display: "flex",
        justifyContent: "space-around",
        padding: 0,
        margin: 0,
    },
    li: {
        display: "inline",
    },
    link: {
        textDecoration: "none",
        color: "#fff",
        fontSize: "18px",
    },
    activeLink: {
        fontWeight: "bold",
        borderBottom: "2px solid #fff",
    },
};

export default Navbar;
