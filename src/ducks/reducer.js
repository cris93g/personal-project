import axios from "axios";

const GET_FOOD = "GET_FOOD";

const initialState = {
  food: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOOD + "_FULFILLED":
      return { ...state, food: action.payload.data };
    default:
      return state;
  }
}

export function getFood() {
  return {
    type: GET_PRODUCTS,
    payload: axios.get("/api/food")
  };
}