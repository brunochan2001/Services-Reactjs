import { render, screen } from '@testing-library/react';
import CardItem from './CardItem';

describe('Pruebas en el componente <CardItem/>', () => {
  const service = {
    title: 'Salud',
    description: 'Compra de medicamentos',
    id: 1
  };

  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<CardItem service={service}></CardItem>);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el titulo y description indicado', () => {
    render(<CardItem service={service}></CardItem>);
    expect(screen.getByText(service.title)).toBeTruthy();
    expect(screen.getByText(service.description)).toBeTruthy();
  });
});
