import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

import { configureStore } from "@reduxjs/toolkit";

// Creating Redux store by using createStore(REDUCER FUNCTION)
const store = configureStore({
  reducer: { account: accountReducer, customer: customerReducer },
});

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
