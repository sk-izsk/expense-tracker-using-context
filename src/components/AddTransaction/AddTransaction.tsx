import React, { ChangeEvent, useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { GlobalContext } from "../../Context/GlobalState";

export interface AddTransactionProps {}

const AddTransaction: React.FC<AddTransactionProps> = () => {
  const [amount, setAmount] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const { addTransaction } = useContext(GlobalContext);

  const handleAddTransaction = (e: any) => {
    e.preventDefault();
    addTransaction !== undefined &&
      addTransaction({
        id: uuidV4(),
        amount,
        text,
      });
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAmount(e.target.value as any)
            }
            placeholder="Enter amount..."
          />
        </div>
        <button onClick={handleAddTransaction} className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
};

export { AddTransaction };
