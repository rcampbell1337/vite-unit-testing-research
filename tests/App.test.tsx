import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { describe, it, expect } from 'vitest';
import React from 'react'
import App from '../src/App'

describe('App', () => {
    it('Renders the title prop', async () => {
        render(<App title="React" />);

        screen.debug();

        // 
        expect(await screen.findByText("React")).toBeInTheDocument();
    });
});

describe('App', () => {
    it('Page contains "Test Title for the page"', async () => {
        render(<App title="Nothing" />);

        screen.debug();

        // check if App components renders headline
        expect(await screen.findByText("Test Title for the page")).toBeInTheDocument();
    });
});

describe('App', () => {
    it('Page contains image with alt text "Gael"', async () => {
        render(<App title="Nothing" />);

        screen.debug();

        // check if App components renders headline
        expect(await screen.findByAltText("Gael")).toBeInTheDocument();
    });
});

describe('App', () => {
    it('Click plus button -> increments counter', async () => {
        const page = render(<App title="Nothing" />);

        let incrementButton = page.container.getElementsByTagName("button")[0];

        act(() => {
            incrementButton.click()
        })

        screen.debug();

        // check if App components renders headline
        expect(await screen.findByText("The number is: 1")).toBeInTheDocument();
    });
});

describe('App', () => {
    it('Click minus button -> decrements counter', async () => {
        const page = render(<App title="Nothing" />);

        let decrementButton = page.container.getElementsByTagName("button")[1];

        act(() => {
            decrementButton.click()
        })

        screen.debug();

        // check if App components renders headline
        expect(await screen.findByText("The number is: -1")).toBeInTheDocument();
    });
});