// Test for List Component

// Imports
import { render } from "@testing-library/react";
import { expect, test, it } from 'vitest';
import { List } from "../components/List";

it('Controll Test', () => {
    expect(2 + 2).toBe(4);
});

test('List renders correctly', () => {
    const { container } = render(<List />);
    expect(container).toMatchSnapshot();
});
