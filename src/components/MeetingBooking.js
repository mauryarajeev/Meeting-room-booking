import React, { useState } from "react";
import "./MeetingBooking.css";

const MeetingBooking = () => {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [date, setDate] = useState("");
  const [meetings, setMeetings] = useState([]);
  const [editMeetings, setEditMeetings] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTicket = {
      id: Date.now(),
      name: name,
      from: from,
      destination: destination,
      time: time,
      endTime:endTime,
      date: date,
    };

    setMeetings([...meetings, newTicket]);

    setName("");
    setFrom("");
    setDestination("");
    setTime("");
    setEndTime("")
    setDate("");
    alert(`Dear Cutomer ${name} your meeting room has been booked`);
  };

  const handleDeleteMeeting = (id) => {
    const filtered = meetings.filter((ticket) => ticket.id !== id);
    setMeetings(filtered);
  };

  const handleEditMeeting = (editMeetingIndex) => {
    const meetingToEdit = meetings[editMeetingIndex];
    setMeetings(editMeetingIndex);

    setName(meetingToEdit.name);
    setFrom(meetingToEdit.from);
    setDestination(meetingToEdit.destination);
    setTime(meetingToEdit.time);
    setEndTime(meetingToEdit.endTime);
    setDate(meetingToEdit.date);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();

    const updatedMeeting = [...meetings];
    updatedMeeting[editMeetings] = {
      ...updatedMeeting[editMeetings],
      name: name,
      from: from,
      destination: destination,
      time: time,
      endTime:endTime,
      date: date,
    };

    setMeetings(updatedMeeting);
    setEditMeetings(null);
    setName("");
    setFrom("");
    setDestination("");
    setTime("");
    setEndTime("");
    setDate("");
    alert(`Dear Cutomer ${name} changes has been made`);
  };
  return (
    <>
      <div className="meeting-booking-container">
        <h1 style={{ textAlign: "center" }}>Meeting Room Booking</h1>
        <form onSubmit={handleSubmit} className="meeting-form">
          <input
            type="text"
            placeholder="Your Name"
            name="personName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Number of person"
            name="name"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Meting Room Name"
            name="room name"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />

          <input
            type="time"
            placeholder="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <input
            type="time"
            placeholder="Meeting End time"
            name="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />

          <input
            type="date"
            placeholder="Date"
            name="time"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          {editMeetings === null ? (
            <button type="submit">Confirm</button>
          ) : (
            <button type="button" onClick={handleSaveChanges}>
              Confirm Changes
            </button>
          )}
        </form>
      </div>

      <div className="meeting-list">
        <ul>
          {meetings.map((meeting, index) => (
            <li className="meeting-card" key={meeting.id}>
              <div className="meeting-details">
                <span>
                  <h4 style={{ textAlign: "center" }}>
                    Meeting Admin : {meeting.name}
                  </h4>
                </span>
                <span>From: {meeting.from}</span>
                <span>To: {meeting.destination}</span>
                <span>Time: {meeting.time}</span>
                <span>endTime: {meeting.endTime}</span>
                <span>Date: {meeting.date}</span>
                <button
                  className="edit-button"
                  onClick={() => handleEditMeeting(index)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteMeeting(meeting.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MeetingBooking;
