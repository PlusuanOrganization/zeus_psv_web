import React from 'react';
import classNames from 'classnames';
import styles from './ReplayStep.module.scss';

function ReplayStep() {
  const users = [
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 1,
      name: 'Matt',
      status: 'Finished',
      email: 'matt@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 2,
      name: 'Adri',
      status: 'Finished',
      email: 'adri@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
    {
      id: 3,
      name: 'Darilo',
      status: 'Finished',
      email: 'daril@plus.uy',
      avatar: 'https://ui-avatars.com/api/?name=random',
    },
  ];

  const mapUsers = users.map((user) => (
    <li key={user.id}>
      <img src={user.avatar} alt={user.name} />
      <div>
        <span>{user.name}</span>
        <span>{user.email}</span>
      </div>
      <span className={classNames(styles.status)}>{user.status}</span>
    </li>
  ));

  return <ul className={styles.ul}>{mapUsers}</ul>;
}

export default ReplayStep;
