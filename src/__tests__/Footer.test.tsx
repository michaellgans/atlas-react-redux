// Test for Footer Component

// Imports
import { render } from "@testing-library/react";
import { expect, test, it } from 'vitest';
import { Footer } from "../components/Footer";

it('Controll Test', () => {
    expect(2 + 2).toBe(4);
});

test('Footer renders correctly', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
});
