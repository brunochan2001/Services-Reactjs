import servicesdata from '../../data/servicesData';
import { ADD_SERVICE, DELETE_SERVICE, EDIT_SERVICE } from '../actionTypes';

const initialState = {
  data: servicesdata
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SERVICE:
      return state;
    case EDIT_SERVICE:
      return state;
    case ADD_SERVICE:
      return state;
    default:
      return state;
  }
};
export default serviceReducer;
