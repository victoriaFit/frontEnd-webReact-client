// ParticipantSlider.js
import React from 'react';
import styles from '../css/ParticipantSlider.module.css'; 
const Member = ({ participants }) => {
  return (
    <div className={styles.slider}>
      {participants.map((participant, index) => (
        <div key={index} className={styles.slide}>
          <img src={participant.image} alt={participant.name} className={styles.participantImage} />
          <div className={styles.participantInfo}>
            <h3>{participant.name}</h3>
            <p>{participant.description}</p>
            <a href={participant.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
              <img src="https://media.discordapp.net/attachments/1091506792900595863/1177061149309665310/github.png?ex=6571229e&is=655ead9e&hm=54909f45c5ac466d3a8dd51785e5acd5edcbb5370851243a80aa227d4cef41e8&=" alt="GitHub" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Member;
