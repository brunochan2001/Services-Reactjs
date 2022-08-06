import { ADD_SERVICE, DELETE_SERVICE, EDIT_SERVICE } from '../actionTypes';

export const deleteService = (id, data) => {
  const service = data.filter(e => e.id !== id);
  return { type: DELETE_SERVICE, payload: service };
};
export const addService = () => ({ type: ADD_SERVICE });
export const editService = () => ({ type: EDIT_SERVICE });
