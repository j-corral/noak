import React from 'react';

import { screen, render } from '@testing-library/react';
import { ChakraWrapper } from '@noak/theme';

import { Hero } from '../src/Hero';

beforeEach(() => render(<Hero title="Hello" />, { wrapper: ChakraWrapper }));

describe('Component/Hero', () => {
    it('should display text', () => {
        expect(screen.queryByText(/Hello/i)).toBeInTheDocument();
    });
});
