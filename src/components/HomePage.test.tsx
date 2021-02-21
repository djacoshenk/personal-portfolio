import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { HomePage } from './HomePage';

test('component is accessible', async () => {
  const { container } = render(<HomePage />);

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('component renders title', async () => {
  render(<HomePage />);

  expect(screen.getByRole('heading', { name: /danny/i })).toBeInTheDocument();

  expect(
    screen.getByRole('heading', { name: /developer/i })
  ).toBeInTheDocument();
});
