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
