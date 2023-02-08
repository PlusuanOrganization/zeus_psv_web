import React from 'react';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

import styles from './CalificationsPopup.module.scss';

function CalificationsPopup() {
  return (
    <main>
      <header>
        <h3>Calificación de la tarea</h3>
        <Button fluid className={classNames(styles.actionButton, styles.customButtonX)}>
          ✖
        </Button>
      </header>
      <div className={styles.container}>
        <div className={styles.promedio}>
          <span className={styles.promedio_number}>
            4.1
            <small>/5</small>
          </span>
          <span className="stars">13,638 calificaciones</span>
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <img src="" alt="" />
        </div>
        <div className={styles.resenia}>
          <ul>
            <li>
              <span className={styles.avatar}>z</span>
              <h4 className={styles.usuario}>z</h4>
              <span className={styles.calificacion}>z</span>
              <span className={styles.fecha}>z</span>
              <textarea name="" id="" cols="30" rows="10" className={styles.comentario}>
                z
              </textarea>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default CalificationsPopup;
