import React, { useContext } from "react";
import { GlobalContext, TransactionType } from "../../Context/GlobalState";

interface BalanceProps {}

const Balance: React.FC<BalanceProps> = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts: number[] = transactions.map(
    (transaction: TransactionType) => transaction.amount
  );

  const total: string = amounts
    .reduce((acc: number, item: number) => (acc += item), 0)
    .toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export { Balance };
