import React from 'react';

const FriendList = ({ friends }) => (
  <>
    { friends.map( f => <div className='friend' key={f.id}>{ f.name }</div> ) }
  </>
);

export default FriendList;
