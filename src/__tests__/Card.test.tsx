// Test for Card Component

// Imports
import { render } from "@testing-library/react";
import { expect, test, it } from 'vitest';
import { Card } from "../components/Card";

it('Controll Test', () => {
    expect(2 + 2).toBe(4);
});

test('Card renders correctly', () => {
    const { container } = render(<Card title="Test Title" description="Test description..."/>);
    expect(container).toMatchSnapshot();
});
