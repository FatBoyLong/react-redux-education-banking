import { act } from "react-dom/test-utils";
import { combineReducers, createStore } from "redux";

// Initial state like in useReducer
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

// Reducer function like in useReducer
function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

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

// Action creator function
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

// Action creator function
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

// Action creator function
function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}

// Action creator function
function payLoan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(500));

console.log(store.getState());

function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return { type: "account/updateName", payload: fullName };
}
