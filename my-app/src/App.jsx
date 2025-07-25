import { useState } from 'react';

export default function InstagramPost() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(prev => !prev);
  };

  return (
    <div style={styles.post}>
      <div style={styles.header}>
        <span style={styles.username}>caelannkim</span>
        <span style={styles.dot}> · </span>
        <span>6주 ·</span>
        <span style={{ marginLeft: 8, color: 'blue', fontWeight: 'bold' }}>팔로우</span>
      </div>

      <div style={styles.videoPlaceholder}>
        <p>죄송합니다. 이 동영상을 재생하는 중 문제가 발생했습니다.</p>
      </div>

      <div style={styles.actions}>
        <button onClick={toggleLike} style={styles.heartButton}>
          {liked ? '♡' : '♥'}
        </button>
      </div>

      <div style={styles.likes}>♥ 300 likes</div>

      <div style={styles.caption}>
        <strong>caelannkim</strong> 모두 화이팅입니다!
      </div>
    </div>
  );
}

const styles = {
  post: {
    width: 500,
    margin: '30px auto',
    border: '1px solid #dbdbdb',
    borderRadius: 8,
    fontFamily: 'sans-serif',
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  username: {
    fontWeight: 'bold',
  },
  dot: {
    margin: '0 4px',
  },
  videoPlaceholder: {
    backgroundColor: '#000',
    color: '#fff',
    height: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 14,
  },
  actions: {
    padding: '12px 16px',
  },
  heartButton: {
    fontSize: 24,
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },
  likes: {
    padding: '0 16px',
    fontWeight: 'bold',
  },
  caption: {
    padding: '8px 16px 16px',
  },
};


// App.jsx
import React, { useState } from 'react';
import Modal from './Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app-container">
      <div className="card" onClick={() => setIsModalOpen(true)}>
        <div className="card-text">click here</div>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2>inside of the modal</h2>
          <p>click outside of the modal or X button to close it</p>
        </Modal>
      )}
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ onClose, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
