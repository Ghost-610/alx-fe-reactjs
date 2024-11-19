import React, { useState } from "react";

const RegistrationForm = () => {
    // State variables for input fields and error handling
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic validation: check if all fields are filled
        if (!username || !email || !password) {
            setError("All fields are required.");
            return;
        }
        // Clear the error message
        setError("");

        // Simulate form submission (you can replace this with an actual API call)
        console.log("Form Submitted:", { username, email, password });
        alert("Registration Successful!");

        // Clear the input fields
        setUsername("");
        setEmail("");
        setPassword("");
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2>Register</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                {/* Username Field */}
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                </div>

                {/* Email Field */}
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                </div>

                {/* Password Field */}
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    style={{
                        padding: "10px 15px",
                        backgroundColor: "#28a745",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegistrationForm;
