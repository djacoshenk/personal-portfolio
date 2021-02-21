import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Commits } from './Commits';

test('component is accessible', async () => {
  const { container } = render(<Commits />);

  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
