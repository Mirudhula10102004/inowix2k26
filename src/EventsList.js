// src/EventsList.js
import React from "react";
import EventCard from "./EventCard";
import { technicalEvents, nonTechnicalEvents } from "./eventsData";

const EventsList = () => {
  return (
    <div className="px-6 md:px-16 py-10">

      {/* Technical Events */}
      <div className="section-header">
        <span>💻</span> Technical Events
      </div>
      <div className="cards-grid">
        {technicalEvents.map((event, i) => (
          <EventCard key={i} event={event} />
        ))}
      </div>

      {/* Non-Technical Events */}
      <div className="section-header mt-12">
        <span>🎯</span> Non-Technical Events
      </div>
      <div className="cards-grid">
        {nonTechnicalEvents.map((event, i) => (
          <EventCard key={i} event={event} />
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-300 space-y-1">
        <div className="footer-title">Event Co-Ordinators / Enquiry</div>

        <div className="coordinator">
          Mirudhula K (III Year) — +91-6374470799
        </div>

        <div className="coordinator">
          Rakesh K (III Year) — +91-8778157853
        </div>

        <div className="coordinator">
          📧 inowixadskvcet@gmail.com
        </div>

        {/* Instagram Link */}
        <div className="coordinator mt-2">
          📸 Follow Us On Instagram:
          <a
            href="https://www.instagram.com/inowix_2k25?igsh=MW02dmF5cHJjc2diNA=="
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300 underline ml-1 transition"
          >
            @inowix_2k25
          </a>
        </div>

        <div className="footer-copy">
          © INOWIX 2K25 | Department of Artificial Intelligence & Data Science
        </div>
      </footer>
    </div>
  );
};

export default EventsList;
