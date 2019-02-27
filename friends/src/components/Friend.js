import React, { useState } from 'react';
import FriendForm from './FriendForm';

const Friend = ({ deleteFriend, editFriend, friend }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return <FriendForm addFriend={f => {
      setIsEditing(false);
      editFriend(f);
    }} friend={friend} />;
  } else {
    return (
      <div className="friend">
        {friend.name}
        <button onClick={() => setIsEditing(true)}>edit</button>
        <button onClick={() => deleteFriend(friend)}>x</button>
      </div>
    );
  }
};

export default Friend;
