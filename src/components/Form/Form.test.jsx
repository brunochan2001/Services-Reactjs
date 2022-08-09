import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import Form from './Form';

describe('Pruebas en el componente <Form/>', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    render(
      <Provider store={store}>
        <Form></Form>
      </Provider>
    );
    const input = screen.getByTestId('input-element');
    const textarea = screen.getByTestId('textarea-element');
    const select = screen.getByTestId('select-element');

    fireEvent.input(input, { target: { value: 'Saitama' } });
    fireEvent.input(textarea, { target: { value: 'Descripcion de Saitama' } });
    fireEvent.change(select, { target: { value: 'Auto' } });

    expect(input.value).toBe('Saitama');
    expect(textarea.value).toBe('Descripcion de Saitama');
    expect(select.value).toBe('Auto');
  });

  test('Debe de Agregar servicio si Agregamos los datos', () => {
    const inputValue = 'Salud';
    const textArea = 'Descripcion de Salud';
    const type = 'Auto';

    render(
      <Provider store={store}>
        <Form></Form>
      </Provider>
    );

    const input = screen.getByTestId('input-element');
    const textarea = screen.getByTestId('textarea-element');
    const select = screen.getByTestId('select-element');
    const form = screen.getByTestId('button-onsubmit-element');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.input(textarea, { target: { value: textArea } });
    fireEvent.change(select, { target: { value: type } });
    fireEvent.click(form);
  });
});
