import { render } from '@testing-library/react';
import AlertInfo from './AlertInfo';

describe('Pruebas en el componente <AlertInfo/>', () => {
  test('debe hacer match con el snapshot', () => {
    const { container } = render(<AlertInfo></AlertInfo>);
    expect(container).toMatchSnapshot();
  });
});
