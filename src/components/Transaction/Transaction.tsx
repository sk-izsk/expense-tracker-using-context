import React, { useContext } from "react";
import { GlobalContext, TransactionType } from "../../Context/GlobalState";

export interface TransactionProps {
  transaction: TransactionType;
}

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const handleDeleteTransaction = (e: KeyboardEvent) => {
    e.preventDefault();
    deleteTransaction !== undefined && deleteTransaction(transaction.id as any);
  };

  const sign: "-" | "+" = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={handleDeleteTransaction as any}>
        x
      </button>
    </li>
  );
};

export { Transaction };
