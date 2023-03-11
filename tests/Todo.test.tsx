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

        const checkbox = todoList.container.getElementsByTagName("input")[0];
        checkbox.click()

        //

        expect(checkbox.getAttribute("data-is-checked")).toBe("false");
    });
});