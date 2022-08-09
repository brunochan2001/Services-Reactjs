import { render } from '@testing-library/react';

import Spin from './Spin';

describe('Pruebas en el componente <Spin/>', () => {
  test('debe hacer match con el snapshot', () => {
    const { container } = render(<Spin></Spin>);
    expect(container).toMatchSnapshot();
  });
});
