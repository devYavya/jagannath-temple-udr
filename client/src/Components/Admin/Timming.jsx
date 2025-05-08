import React, { useState } from "react";

const Timming = () => {
  const [poojas, setPoojas] = useState([
    { id: 1, name: "Mangala Aarti", start: "05:00", end: "05:30" },
    { id: 2, name: "Madhyanha Pooja", start: "12:00", end: "12:45" },
  ]);

  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const addPooja = () => {
    if (name && start && end) {
      setPoojas([...poojas, { id: Date.now(), name, start, end }]);
      setName("");
      setStart("");
      setEnd("");
    }
  };

  const removePooja = (id) => {
    setPoojas(poojas.filter((pooja) => pooja.id !== id));
  };

  return (
    <div className="section-card">
      <h2 className="section-title">Daily Pooja Timings</h2>
      <input
        className="input-field"
        type="text"
        placeholder="Pooja Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="time-input"
        type="time"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        className="time-input"
        type="time"
        value={end}
        onChange={(e) => setEnd(e.target.value)}
      />
      <button className="btn" onClick={addPooja}>
        Add Pooja
      </button>

      <div className="pooja-list">
        {poojas.map((p) => (
          <div key={p.id} className="pooja-item">
            <strong>{p.name}</strong> — {p.start} to {p.end}
            <button
              className="btn"
              onClick={() => removePooja(p.id)}
              style={{ marginLeft: "10px", backgroundColor: "#e74c3c" }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timming;
