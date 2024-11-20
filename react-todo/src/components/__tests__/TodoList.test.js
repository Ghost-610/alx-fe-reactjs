import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";// import TodoList from "../components/TodoList";

import TodoList from "../components/TodoList";


describe("TodoList Component", () => {
    test("renders initial todos correctly", () => {
        render(<TodoList />);
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
        expect(screen.getByText("Practice React Testing")).toBeInTheDocument();
    });

    test("adds a new todo", () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText(/add a new todo/i);
        const button = screen.getByText(/add todo/i);

        fireEvent.change(input, { target: { value: "Write Tests" } });
        fireEvent.click(button);

        expect(screen.getByText("Write Tests")).toBeInTheDocument();
    });

    test("toggles todo completion status", () => {
        render(<TodoList />);
        const todo = screen.getByText("Learn React");

        fireEvent.click(todo);

        expect(todo).toHaveStyle("text-decoration: line-through");

        fireEvent.click(todo);

        expect(todo).toHaveStyle("text-decoration: none");
    });

    test("deletes a todo", () => {
        render(<TodoList />);
        const todo = screen.getByText("Learn React");
        const deleteButton = todo.nextElementSibling;

        fireEvent.click(deleteButton);

        expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
    });
});
