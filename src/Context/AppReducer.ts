import { InitialState, TransactionType } from "./GlobalState";
interface Action {
  type: "DELETE_TRANSACTION" | "ADD_TRANSACTION";
  payload?: any;
}
const AppReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: TransactionType) => {
            return transaction.id !== action.payload;
          }
        ),
      };

    default:
      return state;
  }
};

export { AppReducer };
