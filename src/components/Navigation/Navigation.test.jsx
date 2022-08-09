import { render } from '@testing-library/react';
import Navigation from './Navigation';

describe('Pruebas en el componente <Navigation/>', () => {
  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<Navigation></Navigation>);
    expect(container).toMatchSnapshot();
  });
});
