import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Provider } from 'react-redux';

import { ContactBar } from './ContactBar';

import { store } from 'store/index';

test('component is accessible', async () => {
  const { container } = render(
    <Provider store={store}>
      <ContactBar />
    </Provider>
  );

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

test('component renders social links and icons', () => {
  render(
    <Provider store={store}>
      <ContactBar />
    </Provider>
  );

  expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();

  expect(screen.getByTitle(/github-logo-light/i)).toBeInTheDocument();
  expect(screen.getByTitle(/linkedin-logo-light/i)).toBeInTheDocument();
});
