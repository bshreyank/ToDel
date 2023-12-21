// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Modal.css'; // You can define your styles in a separate CSS file

const Modal2 = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === 'overlay') {
      closeModal();
    }
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <div id="overlay" onClick={handleOverlayClick}>
          <div id="modal">
            <span id="close-btn" onClick={closeModal}>&times;</span>
            <div id="modal-content">
              {/* Your dynamic content goes here */}
              <h2>Modal Content</h2>
              <p>This is the dynamic content of the modal.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal2;
