import { createStore } from 'redux'

export const counter = (state = 0,action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  case 'RESET':
    return 0;
  case 'RESETNAME':
        nam="kanihska"
        return nam;
  default:
    return state;
  }
};

let store = createStore(counter);

export default store;