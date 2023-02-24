import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './ReplayStep.module.scss';

import api from '../../../api';

function ReplayStep({ cardId }) {
  const avatar = 'https://ui-avatars.com/api/?name=:name';
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api.getNotificationsApi(cardId, {}).then((res) => {
      res.forEach((item) => {
        item.status = item.answered ? 'Respondido' : 'Notificado';
      });

      setMessages(res);
    });
  }, []);

  return (
    <ul className={styles.ul}>
      {messages.map((message) => (
        <li key={message.id}>
          <img src={avatar.replace(':name', message.user.name)} alt={message.user.name} />
          <div>
            <span>{message.user.name}</span>
            <span>{message.user.email}</span>
          </div>
          <span
            className={classNames(
              styles.status,
              message.status === 'Respondido' ? 'reply' : 'notify',
            )}
          >
            {message.status}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ReplayStep;
