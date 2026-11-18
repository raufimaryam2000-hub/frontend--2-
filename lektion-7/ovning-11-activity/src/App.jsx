import { useState } from "react"
import Activity from "./Activity"
function App() {
  const [activity, setActivity] = useState(null)
  const [participants, setParticipants] = useState(1)
  const [type, setType] = useState("")
  const [freeOnly, setFreeOnly] = useState(false) 
 
  async function hittaAktivitet() { 
    const params = new URLSearchParams()
    params.append("participants", participants)
    if (type) {
      params.append("type", type)
    }

    if (freeOnly) {
      params.append("price", "0.0")
    }
    
    const res = await fetch(
  `https://bored.api.lewagon.com/api/activity?${params}`
)
    const data = await res.json()
    setActivity(data)
  }

  return ( 
   <div>
      <h1>Activity app</h1>
      <select
        value={participants}
        onChange={(e) => setParticipants(e.target.value)}
      >
        <option value="1">1 person</option>
        <option value="2">2 personer</option>
        <option value="3">3 personer</option>
        <option value="4">4 personer</option>
      </select>

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">Alla aktiviteter</option>
        <option value="education">education</option>
        <option value="recreational">recreational</option>
        <option value="social">social</option>
        <option value="diy">diy</option>
        <option value="charity">charity</option>
        <option value="cooking">cooking</option>
        <option value="relaxation">relaxation</option>
        <option value="music">music</option>
        <option value="busywork">busywork</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={freeOnly}
          onChange={(e) => setFreeOnly(e.target.checked)}
        />
        Endast gratis
      </label> 

      <button onClick={hittaAktivitet}>Hitta aktivitet</button>
      {activity && <Activity activity={activity} />}
    </div>
  )
} 

export default App   