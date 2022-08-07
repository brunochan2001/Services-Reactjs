import { ADD_SERVICE, DELETE_SERVICE, EDIT_SERVICE } from '../actionTypes';

export const deleteService = (id, data) => {
  const service = data.filter(e => e.id !== id);
  return { type: DELETE_SERVICE, payload: service };
};
export const addService = data => {
  return { type: ADD_SERVICE, payload: data };
};
export const editService = (service, data) => {
  const newData = data.map(el => (el.id === service.id ? service : el));
  return { type: EDIT_SERVICE, payload: newData };
};
