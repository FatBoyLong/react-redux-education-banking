import { combineReducers, createStore } from "redux";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// Creating Redux store by using createStore(REDUCER FUNCTION)
const store = createStore(rootReducer);

// // Dispatching action like in useReducer
// store.dispatch({ type: "account/deposit", payload: 500 });

// // Dispatching action like in useReducer
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "Buy a car" },
// });

// // Dispatching action like in useReducer
// store.dispatch({ type: "account/payLoan" });
export default store;
