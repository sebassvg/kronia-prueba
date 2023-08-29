import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CustomModal = ({ isOpen, onClose }) => {
        return (
            <Modal
              isOpen={isOpen}
              onRequestClose={onClose}
              style={customStyles}
              contentLabel="Sign up Modal"
            >
              <div className="p-4">
                <h2 className="mb-4 text-xl font-bold">Successful registration!</h2>
                <p>Your registration has been successfully completed.</p>
                <p>We'll use the force to contact you.</p>
                <button
                  className="px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </Modal>
          );
 
}
