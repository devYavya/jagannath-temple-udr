import React, { useState } from "react";
import SideNav from "./Sidenav";
import "./Admin.css";

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({
    name: "",
    date: "",
    location: "",
    status: "active",
  });

  const handleAddEvent = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentEvent({ name: "", date: "", location: "", status: "active" });
  };

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setCurrentEvent({ ...currentEvent, [name]: value });
  };

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (currentEvent.name && currentEvent.date && currentEvent.location) {
      setEvents([...events, { ...currentEvent, id: Date.now() }]);
      handleCloseModal();
    }
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="event-management-container">
      {/* SideNav Component */}
      <SideNav />

      {/* Main Content */}
      <div className="event-main-content">
        <h1 className="donation-management-title">🙏 Manage Events</h1>
        <p className="donation-management-subtitle">
          May your efforts be blessed 🙌
        </p>

        <section className="events-section">
          <div className="event-actions">
            <button onClick={handleAddEvent}>Add New Event</button>
          </div>

          <table className="events-table">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Date</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>{event.status}</td>
                  <td>
                    <button onClick={() => handleDeleteEvent(event.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span onClick={handleCloseModal} className="close">
                &times;
              </span>
              <h2>{currentEvent.id ? "Edit Event" : "Add New Event"}</h2>
              <form onSubmit={handleSubmitEvent}>
                <label>Event Name</label>
                <input
                  type="text"
                  name="name"
                  value={currentEvent.name}
                  onChange={handleEventChange}
                  required
                />
                <label>Event Date</label>
                <input
                  type="date"
                  name="date"
                  value={currentEvent.date}
                  onChange={handleEventChange}
                  required
                />
                <label>Event Location</label>
                <input
                  type="text"
                  name="location"
                  value={currentEvent.location}
                  onChange={handleEventChange}
                  required
                />
                <label>Event Status</label>
                <select
                  name="status"
                  value={currentEvent.status}
                  onChange={handleEventChange}
                  required
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <button type="submit">
                  {currentEvent.id ? "Update" : "Add"} Event
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventManagement;
