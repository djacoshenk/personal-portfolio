import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';

import { NavBar } from './NavBar';

import { store } from 'store/index';

test('componet is accessible', async () => {
  const { container } = render(
    <Provider store={store}>
      <NavBar />
    </Provider>
  );

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('component renders logo and button', () => {
  render(
    <Provider store={store}>
      <NavBar />
    </Provider>
  );

  expect(screen.getByRole('img', { name: /logo-light/i })).toBeInTheDocument();
  expect(
    screen.getByRole('switch', { name: /theme-toggle/i })
  ).toBeInTheDocument();
});

test('component changes theme', () => {
  render(
    <Provider store={store}>
      <NavBar />
    </Provider>
  );

  expect(screen.getByRole('img', { name: /logo-light/i })).toBeInTheDocument();
  expect(screen.queryByRole('img', { name: /logo-dark/i })).toBeNull();

  userEvent.click(screen.getByRole('switch', { name: /theme-toggle/i }));

  expect(screen.queryByRole('img', { name: /logo-light/i })).toBeNull();
  expect(screen.getByRole('img', { name: /logo-dark/i })).toBeInTheDocument();
});
