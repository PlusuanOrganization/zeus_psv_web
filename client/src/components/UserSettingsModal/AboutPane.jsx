import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Tab } from 'semantic-ui-react';

import Config from '../../constants/Config';

import zeusLogo from '../../assets/images/zeusLogo.svg';

import styles from './AboutPane.module.scss';

const AboutPane = React.memo(() => {
  const [t] = useTranslation();

  return (
    <Tab.Pane attached={false} className={styles.wrapper}>
      <Image centered src={zeusLogo} size="large" />
      <div className={styles.version} />
    </Tab.Pane>
  );
});

export default AboutPane;
