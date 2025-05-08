import React, { useState } from "react";

const HeroManager = () => {
  const [featured, setFeatured] = useState([
    { id: 1, name: "Pujari Mahapatra", title: "Chief Priest" },
    { id: 2, name: "Swami Giri", title: "Head Monk" },
  ]);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const addFeatured = () => {
    if (name.trim() && title.trim()) {
      setFeatured([...featured, { id: Date.now(), name, title }]);
      setName("");
      setTitle("");
    }
  };

  const removeFeatured = (id) => {
    setFeatured(featured.filter((person) => person.id !== id));
  };

  return (
    <div className="section-card">
      <h2 className="section-title">Hero Section Manager</h2>
      <input
        className="input-field"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="btn" onClick={addFeatured}>
        Add to Hero Section
      </button>

      <div className="hero-list">
        {featured.map((person) => (
          <div key={person.id} className="hero-card">
            <strong>{person.name}</strong> – <em>{person.title}</em>
            <button
              className="btn"
              onClick={() => removeFeatured(person.id)}
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

export default HeroManager;
