// src/Modal.js
import React from "react";

const Modal = ({ show, onClose, event }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-800 text-white rounded-xl p-6 w-11/12 max-w-md shadow-lg relative">
        <h2 className="text-2xl font-bold mb-4">{event.name} Registration</h2>
        <p className="mb-4 text-gray-300">
          Please register for this event by clicking the link below:
        </p>
        <a
          href={event.registrationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 hover:bg-indigo-500 px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Register Now
        </a>

        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
