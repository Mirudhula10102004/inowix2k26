// src/EventCard.js
import React from "react";
import { motion } from "framer-motion";

const EventCard = ({ event }) => {
  return (
    <motion.div
      className="event-card"
      whileHover={{ scale: 1.04, y: -6 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="event-title">{event.title}</h3>

      {event.subtitle && (
        <span className="event-subtitle">{event.subtitle}</span>
      )}

      {/* show date only (if present) */}
      {event.date && (
        <div className="event-date">
          {event.date}
        </div>
      )}

      <p className="event-description">{event.description}</p>
    </motion.div>
  );
};

export default EventCard;
