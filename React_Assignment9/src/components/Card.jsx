import React from 'react';
import '../styles/Card.css'

const Card = ({ user }) => {
  return (
    <div className="card">
      <p>{user.name}</p>
      <p>{user.job}</p>
      <p>{user.hobby}</p>
    </div>
  );
};

export default Card;
