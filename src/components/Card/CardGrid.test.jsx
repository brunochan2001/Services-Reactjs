import { render } from '@testing-library/react';
import CardGrid from './CardGrid';

describe('Pruebas en el componente <CardGrid/>', () => {
  const services = [
    { title: 'salud', description: 'compra' },
    { title: 'Hogar', description: 'Compra de comida' }
  ];

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<CardGrid services={services}></CardGrid>);
    expect(container).toMatchSnapshot();
  });
});
