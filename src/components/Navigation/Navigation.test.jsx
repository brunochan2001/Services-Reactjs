import { render } from '@testing-library/react';
import Navigation from './Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Pruebas en el componente <Navigation/>', () => {
  test('debe de hacer match con el snapshot', () => {
    const { container } = render(
      <Router>
        <Navigation></Navigation>
      </Router>
    );
    expect(container).toMatchSnapshot();
  });
});
