import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";// import TodoList from "../components/TodoList";
import TodoList from "../components/TodoList";


describe("TodoList Component", () => {
    test("renders todo items", () => {
        render(<TodoList />);
        // Check if initial todo items are rendered
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Learn Testing")).toBeInTheDocument();
    });

    test("adds a new todo", () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText("Add new todo");
        const button = screen.getByText("Add Todo");

        fireEvent.change(input, { target: { value: "New Todo" } });
        fireEvent.click(button);

        expect(screen.getByText("New Todo")).toBeInTheDocument();
    });

    test("toggles todo completion", () => {
        render(<TodoList />);
        const todoItem = screen.getByText("Learn React");
        fireEvent.click(todoItem); // Toggle completion

        // Check if the class or text changes to show the completion state
        expect(todoItem).toHaveClass("completed"); // Make sure your component marks the completed todo
    });

    test("deletes a todo", () => {
        render(<TodoList />);
        const deleteButton = screen.getAllByText("Delete")[0]; // Assuming you have multiple delete buttons
        fireEvent.click(deleteButton);

        // Check that the todo is no longer in the document
        expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
    });
});