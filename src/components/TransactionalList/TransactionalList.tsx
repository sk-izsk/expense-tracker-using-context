import React, { useContext } from "react";
import { GlobalContext, TransactionType } from "../../Context/GlobalState";
import { Transaction } from "../Transaction/Transaction";

export interface TransactionalListProps {}

const TransactionalList: React.FC<TransactionalListProps> = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction: TransactionType) => {
          return (
            <Transaction transaction={transaction} key={transaction.text} />
          );
        })}
      </ul>
    </>
  );
};

export { TransactionalList };
