import React, { useContext } from "react";
import { GlobalContext, TransactionType } from "../../Context/GlobalState";

export interface IncomeExpensesProps {}

const IncomeExpenses: React.FC<IncomeExpensesProps> = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts: number[] = transactions.map(
    (transaction: TransactionType) => transaction.amount
  );

  const income: string = amounts
    .filter((item: number) => item > 0)
    .reduce((acc: number, item: number) => (acc += item), 0)
    .toFixed(2);

  const expense: string = (
    amounts
      .filter((item: number) => item < 0)
      .reduce((acc: number, item: number) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expense}
        </p>
      </div>
    </div>
  );
};

export { IncomeExpenses };
