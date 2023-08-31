// Initial state like in useReducer
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

// Reducer function like in useReducer
export default function accountReducer(state = initialStateAccount, action) {
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

// Action creator function
export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

// Action creator function
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

// Action creator function
export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount: amount, purpose: purpose },
  };
}

// Action creator function
export function payLoan() {
  return { type: "account/payLoan" };
}

