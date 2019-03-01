import React from 'react';

import Friend from './Friend';
import { Transition } from 'react-spring/renderprops';

const FriendList = ({ deleteFriend, editFriend, friends }) => (
  <Transition
    items={friends}
    keys={friend => friend.id}
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
  >
    {f => styles => f && (
      <Friend
        key={f.id}
        friend={f}
        deleteFriend={deleteFriend}
        editFriend={editFriend}
        style={styles}
      />
    )}
  </Transition>
);

export default FriendList;
// {friends.map(f => (
//   <Friend
//     key={f.id}
//     friend={f}
//     deleteFriend={deleteFriend}
//     editFriend={editFriend}
//   />
// ))}
