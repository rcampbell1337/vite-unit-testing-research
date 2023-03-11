import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { describe, it, expect } from 'vitest';
import React from 'react'
import Todo from '../src/Todo'


describe('Todo', () => {
    it('Renders the Hello Prop', async () => {
        render(<Todo />);

        expect(await screen.findByText("Go to shop")).toBeInTheDocument();
    });
});

describe('Todo', () => {
    it('Checks that clicking the first checkbox sets the state of the row', async () => {
        const todoList = render(<Todo />);

        const inputs: HTMLElement[] = [...todoList.container.querySelectorAll("input")];

        const checkbox = inputs.filter(x => x.getAttribute("type") === "checkbox")[0];
        
        checkbox.click();

        expect(checkbox.getAttribute("data-is-checked")).toBe("false");
    });
});

describe('Todo', () => {
    it('Checks that submitting a new todo list item creates it in the list', async () => {
        const todoList = render(<Todo />);

        const inputs: HTMLElement[] = [...todoList.container.querySelectorAll("input")];
        const submit: HTMLElement = [...todoList.container.querySelectorAll("button")]
            .filter(x => x.id === "submit")[0];

        const title = inputs.filter(x => x.getAttribute("name") === "title")[0];
        const body = inputs.filter(x => x.getAttribute("name") === "body")[0];

        act(() => {
            title.setAttribute("value", "play golf");
            body.setAttribute("value", "Go to iford");
            submit.click();
        })

        const todos = [...todoList.container.querySelectorAll(".todo")]
        
        expect(todos.length).toBe(2);
    });
});