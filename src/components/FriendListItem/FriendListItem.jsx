import React from 'react';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const classNames = ['status'];

  isOnline ? classNames.push('online') : classNames.push('offline');

  return (
    <>
      <span className={classNames.join(' ')}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};
export default FriendListItem;
