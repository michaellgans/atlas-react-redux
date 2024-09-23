// Test for DeleteCardButton Component

// Imports
import { render } from "@testing-library/react";
import { expect, test, it } from 'vitest';
import { DeleteCardButton } from "../components/DeleteCardButton";

it('Controll Test', () => {
    expect(2 + 2).toBe(4);
});

test('DeleteCardButton renders correctly', () => {
    const { container } = render(<DeleteCardButton />);
    expect(container).toMatchSnapshot();
});
