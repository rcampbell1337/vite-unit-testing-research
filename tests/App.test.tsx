import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import React from 'react'
import App from '../src/App'

describe('App', () => {
    it('Renders the title prop', async () => {
      render(<App title="React" />);
  
      screen.debug();
  
      // check if App components renders headline
      expect(await screen.findByText("React")).toBeInTheDocument();
    });
  });