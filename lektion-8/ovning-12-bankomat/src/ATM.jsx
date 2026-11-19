import { useEffect, useState } from "react";

const EUR_TO_SEK = 11; // ny: fast växelkurs

function ATM() {
  const [saldo, setSaldo] = useState(1000);
  const [depositAmount, setDepositAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [currency, setCurrency] = useState("SEK"); // ny: vald valuta
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

    // ny: räkna om till SEK
    const amountInSek = currency === "EUR" ? amount * EUR_TO_SEK : amount;

    if (amountInSek > saldo) {
      setMessage("Insufficient funds");
      return;
    }

    setSaldo(saldo - amountInSek);
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
        {/* ny: dropdown för valuta */}
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="SEK">SEK</option>
          <option value="EUR">EUR</option>
        </select>
        <button onClick={handleWithdraw}>Ta ut</button>
      </div>

      <p>{message}</p>
    </div>
  );
}

export default ATM; 