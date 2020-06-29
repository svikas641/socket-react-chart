import {
  CONNECTION_ADDED,
  CONNECTION_ERROR,
  DATA_ERROR,
  UPDATE_DATA,
} from "../actions.js";

const initialState = {
  arrayData: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CONNECTION_ADDED:
      return state;
    case UPDATE_DATA:
      return {
        ...state,
        arrayData: [payload, ...state.arrayData],
        loading: false,
      };
    case DATA_ERROR:
    case CONNECTION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
