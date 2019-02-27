import React from 'react';

import Friend from './Friend';

const FriendList = ({ deleteFriend, editFriend, friends }) => (
  <>
    {friends.map(f => (
      <Friend
        key={f.id}
        friend={f}
        deleteFriend={deleteFriend}
        editFriend={editFriend}
      />
    ))}
  </>
);

export default FriendList;
