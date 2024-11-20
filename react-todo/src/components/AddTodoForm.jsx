import React, { useState } from "react";

const AddTodoForm = ({ onAddTodo }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;
        onAddTodo(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a new todo"
                style={{
                    padding: "5px",
                    width: "70%",
                    marginRight: "10px",
                    borderRadius: "4px",
                }}
            />
            <button
                type="submit"
                style={{
                    padding: "5px 10px",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Add Todo
            </button>
        </form>
    );
};

export default AddTodoForm;
