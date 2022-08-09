import { render } from '@testing-library/react';
import App from './App';
test('debe de hacer match con el snapshot', () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
