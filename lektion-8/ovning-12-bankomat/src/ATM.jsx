import { useEffect, useState } from "react";

function ATM() {
  const [saldo, setSaldo] = useState(1000);
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [message, setMessage] = useState("");

  function handleDeposit() {
    if (depositAmount === 0) {
      setMessage("Please select amount");
      return;
    }

    setSaldo(saldo + depositAmount);
    setMessage("");
  }

  function handleWithdraw() {
    const amount = Number(withdrawAmount);

    if (amount <= 0) {
      setMessage("Please select amount");
      return;
    }

    if (amount > saldo) {
      setMessage("Insufficient funds");
      return;
    }

    setSaldo(saldo - amount);
    setMessage("");
  }

  useEffect(() => {
    console.log("ATM is now ready to use");

    return () => {
      console.log("ATM shutting down.");
    };
  }, []);

  useEffect(() => {
    console.log(`Saldo has been updated! New saldo is ${saldo} SEK`);
  }, [saldo]);

  return (
    <div>
      <h2>ATM</h2>
      <p>Saldo: {saldo} SEK</p>

      <button onClick={() => setDepositAmount(100)}>100</button>
      <button onClick={() => setDepositAmount(200)}>200</button>
      <button onClick={() => setDepositAmount(500)}>500</button>
      <button onClick={handleDeposit}>Sätt in</button>

      <div>
        <input
          type="number"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <button onClick={handleWithdraw}>Ta ut</button>
      </div>

      <p>{message}</p>
    </div>
  );
}

export default ATM; 