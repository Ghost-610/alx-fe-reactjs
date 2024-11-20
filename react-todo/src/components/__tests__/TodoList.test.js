import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; // Optional for older Jest setups
import TodoList from "../TodoList";

describe("TodoList Component", () => {
    test("renders initial todos", () => {
        render(<TodoList />);
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
        expect(screen.getByText("Practice React Testing")).toBeInTheDocument();
    });

    test("adds a new todo", () => {
        render(<TodoList />);
        const input = screen.getByTestId("todo-input");
        const submitButton = screen.getByTestId("submit-todo");

        fireEvent.change(input, { target: { value: "New Todo Item" } });
        fireEvent.click(submitButton);

        expect(screen.getByText("New Todo Item")).toBeInTheDocument();
    });

    test("toggles todo completion", () => {
        render(<TodoList />);
        const firstTodo = screen.getByTestId("todo-item-1");

        fireEvent.click(firstTodo);
        expect(firstTodo).toHaveStyle("color: #888");

        fireEvent.click(firstTodo);
        expect(firstTodo).toHaveStyle("color: #000");
    });

    test("deletes a todo", () => {
        render(<TodoList />);
        const deleteButton = screen.getByTestId("delete-todo-1");

        fireEvent.click(deleteButton);
        expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
    });

    test("prevents adding empty todos", () => {
        render(<TodoList />);
        const input = screen.getByTestId("todo-input");
        const submitButton = screen.getByTestId("submit-todo");

        fireEvent.change(input, { target: { value: "" } });
        fireEvent.click(submitButton);

        const todoItems = screen.getAllByRole("listitem");
        expect(todoItems).toHaveLength(3); // Initial todos only
    });
});
