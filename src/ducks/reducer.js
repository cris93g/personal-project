import {
  SET_TOTAL
} from './actions'
const initialState = {
  total: 0
};

const setTotal = (state, payload) => {
  const newState = {};
  Object.assign(newState, state, {total: payload});
  return newState;
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOTAL:
      return setTotal(state, action.payload)
    default:
      return state;
  }
}

