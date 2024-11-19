import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

const FormikForm = () => {
    // Initial form values
    const initialValues = {
        username: "",
        email: "",
        password: "",
    };

    // Handle form submission
    const handleSubmit = (values, { resetForm }) => {
        console.log("Form Submitted:", values);
        alert("Registration Successful!");
        resetForm(); // Clear form fields after submission
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2>Register</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        {/* Username Field */}
                        <div style={{ marginBottom: "10px" }}>
                            <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>Username:</label>
                            <Field
                                type="text"
                                id="username"
                                name="username"
                                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
                            />
                            <ErrorMessage name="username" component="div" style={{ color: "red", marginTop: "5px" }} />
                        </div>

                        {/* Email Field */}
                        <div style={{ marginBottom: "10px" }}>
                            <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email:</label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
                            />
                            <ErrorMessage name="email" component="div" style={{ color: "red", marginTop: "5px" }} />
                        </div>

                        {/* Password Field */}
                        <div style={{ marginBottom: "10px" }}>
                            <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password:</label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
                            />
                            <ErrorMessage name="password" component="div" style={{ color: "red", marginTop: "5px" }} />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            style={{
                                padding: "10px 15px",
                                backgroundColor: "#28a745",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            {isSubmitting ? "Submitting..." : "Register"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormikForm;
