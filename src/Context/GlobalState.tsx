import React, { Context, createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

export interface TransactionType {
  id: number | string;
  text: string;
  amount: number;
}

export interface InitialState {
  transactions: TransactionType[];
  deleteTransaction?: (id: number) => void;
  addTransaction?: (transaction: TransactionType) => void;
}

const initialState: InitialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

const GlobalContext: Context<InitialState> = createContext<InitialState>(
  initialState
);

export interface GlobalContextProviderProps {}

const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction: (id: number) => void = (id: number) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction: (transaction: TransactionType) => void = (
    transaction: TransactionType
  ) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContextProvider, GlobalContext };
