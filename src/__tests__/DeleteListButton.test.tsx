// Test for DeleteListButton Component

// Imports
import { render } from "@testing-library/react";
import { expect, test, it } from 'vitest';
import { DeleteListButton } from "../components/DeleteListButton.tsx";

it('Controll Test', () => {
    expect(2 + 2).toBe(4);
});

test('DeleteListButton renders correctly', () => {
    const { container } = render(<DeleteListButton />);
    expect(container).toMatchSnapshot();
});
