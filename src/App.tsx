import React from "react";
import "./App.css";
import {
  AddTransaction,
  Balance,
  Header,
  IncomeExpenses,
  TransactionalList,
} from "./components";
import { GlobalContextProvider } from "./Context/GlobalState";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <GlobalContextProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionalList />
        <AddTransaction />
      </div>
    </GlobalContextProvider>
  );
};

export default App;
