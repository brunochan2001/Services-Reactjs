import { ADD_SERVICE, DELETE_SERVICE, EDIT_SERVICE } from '../actionTypes';

export const deleteService = () => ({ type: DELETE_SERVICE });
export const addService = () => ({ type: ADD_SERVICE });
export const editService = () => ({ type: EDIT_SERVICE });
