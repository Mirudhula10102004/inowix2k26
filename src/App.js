// src/App.js
import React, { useState, useEffect } from "react";
import EventsList from "./EventsList";
import HighTechBackground from "./HighTechBackground";
import "./index.css";

export default function App() {

  const [timeLeft, setTimeLeft] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // Countdown Timer Logic
  useEffect(() => {
    const eventDate = new Date("2026-01-28T00:00:00"); // ✔ moved inside useEffect

    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []); // ✔ empty dependency — no warning

  // Show Popup for Registration
  const handleRegisterClick = () => {
    window.open("https://forms.gle/ZMYYuMY4wnNaKdur9", "_blank");

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="relative min-h-screen text-white">
      <HighTechBackground />

      {/* Registration Success Popup */}
      {showPopup && (
        <div className="popup-success">
          Registration page opened! Complete your form submission.
        </div>
      )}

      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="main-title">INOWIX 2K25</h1>

        <h2 className="dept-title">
          Department of Artificial Intelligence & Data Science
        </h2>

        {/* Event Date */}
        <p className="event-date-top">
          Event Date: 28.01.2026
        </p>

        {/* Countdown Timer */}
        {timeLeft.days !== undefined && (
          <div className="countdown-box">
            <div className="count-item">
              <span>{timeLeft.days}</span> Days
            </div>
            <div className="count-item">
              <span>{timeLeft.hours}</span> Hours
            </div>
            <div className="count-item">
              <span>{timeLeft.mins}</span> Mins
            </div>
            <div className="count-item">
              <span>{timeLeft.secs}</span> Secs
            </div>
          </div>
        )}

        <div className="register-block">
          <h3>Ready to Participate?</h3>
          <p>Show your innovation. Join the fest now!</p>

          <button
            onClick={handleRegisterClick}
            className="register-btn"
          >
            Register Now
          </button>
        </div>
      </header>

      <EventsList />
    </div>
  );
}
