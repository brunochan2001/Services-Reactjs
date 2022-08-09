import { render, screen, fireEvent } from '@testing-library/react';
import ModalEditService from './Modal';

describe('Pruebas en el componente <Form/>', () => {
  const open = true;
  const serviceSelect = {
    title: 'Salud',
    description: 'Medicamentos',
    type: 'Salud'
  };
  const editServiceSelect = jest.fn();
  const setOpen = jest.fn();

  test('Debe de mostrarme el servicio selecionado', () => {
    render(
      <ModalEditService
        open={open}
        setOpen={setOpen}
        serviceSelect={serviceSelect}
        editServiceSelect={editServiceSelect}
      />
    );
    const input = screen.getByTestId('input-element');
    const textarea = screen.getByTestId('textarea-element');
    const select = screen.getByTestId('select-element');

    expect(input.value).toBe('Salud');
    expect(textarea.value).toBe('Medicamentos');
    expect(select.value).toBe('Salud');
  });

  test('Debe de llamar editServiceSelect con los datos de los servicios', () => {
    render(
      <ModalEditService
        open={open}
        setOpen={setOpen}
        serviceSelect={serviceSelect}
        editServiceSelect={editServiceSelect}
      />
    );
    const form = screen.getByTestId('button-onsubmit-element');
    fireEvent.click(form);

    expect(editServiceSelect).toHaveBeenCalledWith(serviceSelect);
  });

  test('Al darle click al boton cerrar se cierra el modal', () => {
    render(
      <ModalEditService
        open={open}
        setOpen={setOpen}
        serviceSelect={serviceSelect}
        editServiceSelect={editServiceSelect}
      />
    );
    const form = screen.getByTestId('button-hide-modal');
    fireEvent.click(form);

    expect(setOpen).toHaveBeenCalledWith(false);
  });
});
