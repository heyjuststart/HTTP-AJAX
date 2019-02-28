import React, { useState } from 'react';
import FriendForm from './FriendForm';
import styled from 'styled-components';
import { Button } from './Common';

const Friend = styled.div`
  background-color: lightblue;
  padding: 30px 60px;
  margin: 10px;
`;

export const Name = styled.span`
  padding-right: 10px;
`;

export default ({ deleteFriend, editFriend, friend }) => {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <FriendForm
        addFriend={f => {
          setIsEditing(false);
          editFriend(f);
        }}
        cancel={ () => setIsEditing(false) }
        friend={friend}
      />
    );
  } else {
    return (
      <Friend>
        <Name>
          {friend.name},{friend.age},{friend.email}
        </Name>
        <Button default onClick={() => setIsEditing(true)}>edit</Button>
        <Button error onClick={() => deleteFriend(friend)}>x</Button>
      </Friend>
    );
  }
};
