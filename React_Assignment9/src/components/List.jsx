import React from 'react';
import Card from './Card';

const List = ({ users }) => {
  return (
    <div style={{ display: 'flex', flexDirection :'column', flexWrap: 'wrap' }}>
      {users.map((user, index) => (
        <Card key={index} user={user} />
      ))}
    </div>
  );
};

export default List;
