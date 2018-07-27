import {
  SET_TOTAL
} from './actions';

export function setTotal (total) {
  return { type: SET_TOTAL, payload: total}
}