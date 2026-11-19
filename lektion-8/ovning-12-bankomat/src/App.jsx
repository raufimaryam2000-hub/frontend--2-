import { useEffect, useState } from "react"; 
import ATM from "./ATM";

function App() {
  const [showATM, setShowATM] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowATM( !showATM)}>
        Show ATM
      </button>

      {showATM && <ATM />}
    </div>
  ); 
}
export default App;  