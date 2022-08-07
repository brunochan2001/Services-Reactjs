import servicesdata from '../../data/servicesData';
import {
  ADD_SERVICE,
  DELETE_SERVICE,
  EDIT_SERVICE,
  GET_SERVICE_LOADING,
  GET_SERVICE_SUCCESS
} from '../actionTypes';

const initialState = {
  data: [],
  loading: false
};

const serviceReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case DELETE_SERVICE:
      return {
        ...state,
        data: payload
      };
    case EDIT_SERVICE:
      return { ...state, data: payload };
    case ADD_SERVICE:
      return { ...state, data: [...state.data, payload] };
    case GET_SERVICE_LOADING:
      return { ...state, loading: true };
    case GET_SERVICE_SUCCESS:
      return { ...state, loading: false, data: servicesdata };
    default:
      return state;
  }
};
export default serviceReducer;
