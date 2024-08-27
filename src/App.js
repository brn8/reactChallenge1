import "./styles.css";
import { useState } from "react";

export default function App() {
  const [filter, setFilter] = useState(true);
  return (
    <div className="App">
      <button
        style={{ background: "purple", borderRadius: "10px", height: "40px" }}
        onClick={() => setFilter(!filter)}
      >
        Show / Hide
      </button>
      {filter ? <h1>Welcome to React Challenge</h1> : ""}
    </div>
  );
}
