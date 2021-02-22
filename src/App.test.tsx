import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { App } from './App';

test('toggling switch will change theme', () => {
  render(<App />);

  // light theme logos should be rendered
  expect(screen.getByRole('img', { name: /logo-light/i })).toBeInTheDocument();
  expect(screen.getByTitle(/linkedin-logo-light/i)).toBeInTheDocument();

  // dark theme logos should NOT be rendered
  expect(screen.queryByRole('img', { name: /logo-dark/i })).toBeNull();
  expect(screen.queryByTitle(/linkedin-logo-dark/i)).toBeNull();

  // user toggles theme with switch
  userEvent.click(screen.getByRole('switch', { name: /theme-toggle/i }));

  // dark theme logos should be rendered
  expect(screen.getByRole('img', { name: /logo-dark/i })).toBeInTheDocument();
  expect(screen.getByTitle(/linkedin-logo-dark/i)).toBeInTheDocument();

  // light theme logos should NOT be rendered
  expect(screen.queryByRole('img', { name: /logo-light/i })).toBeNull();
  expect(screen.queryByTitle(/linkedin-logo-light/i)).toBeNull();
});
