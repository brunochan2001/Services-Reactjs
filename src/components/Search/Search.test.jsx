import { render } from '@testing-library/react';
import Search from './Search';

describe('Pruebas en el componente <Search/>', () => {
  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<Search></Search>);
    expect(container).toMatchSnapshot();
  });
});
