// Test for Header Component

// Imports
import { render } from "@testing-library/react";
import { expect, test, it } from 'vitest';
import { Header } from "../components/Header";

it('Controll Test', () => {
    expect(2 + 2).toBe(4);
});

test('Header renders correctly', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
});
