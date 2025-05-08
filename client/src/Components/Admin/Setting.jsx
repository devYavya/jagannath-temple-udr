import React from "react";
import Popup from "./Popup";
import HeroManager from "./HeroManager";
import Timming from "./Timming";
import Sidenav from "./Sidenav";
import "./Setting.css";

const Setting = () => {
  return (
    <div className="settings-wrapper">
      <Sidenav />
      <main className="settings-container">
        <h1 className="settings-title">Jagannath Temple Admin Settings</h1>

        <section className="section-card">
          <h2 className="section-title">Popup Manager</h2>
          <Popup />
        </section>

        <section className="section-card">
          <h2 className="section-title">Hero Manager</h2>
          <HeroManager />
        </section>

        <section className="section-card">
          <h2 className="section-title">Timming Manager</h2>
          <Timming />
        </section>
      </main>
    </div>
  );
};

export default Setting;
