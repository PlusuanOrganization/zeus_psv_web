import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTranslation, Trans } from 'react-i18next';
import { Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import ModalTypes from '../../constants/ModalTypes';
import FixedContainer from '../../containers/FixedContainer';
import StaticContainer from '../../containers/StaticContainer';
import UsersModalContainer from '../../containers/UsersModalContainer';
import UserSettingsModalContainer from '../../containers/UserSettingsModalContainer';
import ProjectAddModalContainer from '../../containers/ProjectAddModalContainer';
import Background from '../Background';

import Paths from '../../constants/Paths';
import zeusLogo from '../../assets/images/zeusLogo.svg';

import stylesHeader from '../Header/Header.module.scss';
import styles from './Core.module.scss';

const Core = React.memo(
  ({ isInitializing, isSocketDisconnected, currentModal, currentProject, surveyId }) => {
    const [t] = useTranslation();

    if (isInitializing && surveyId != null) {
      return (
        <>
          <div className={stylesHeader.wrapper}>
            <Link to={Paths.ROOT} className={classNames(stylesHeader.logo, stylesHeader.title)}>
              <img src={zeusLogo} alt="Logo" />
            </Link>
          </div>
          <StaticContainer />
        </>
      )
    }
    
    return (
      <>
        {isInitializing ? (
          <Loader active size="massive" />
        ) : (
          <>
            {currentProject && currentProject.background && (
              <Background
                type={currentProject.background.type}
                name={currentProject.background.name}
                imageUrl={currentProject.backgroundImage && currentProject.backgroundImage.url}
              />
            )}
            <FixedContainer />
            <StaticContainer />
            {currentModal === ModalTypes.USERS && <UsersModalContainer />}
            {currentModal === ModalTypes.USER_SETTINGS && <UserSettingsModalContainer />}
            {currentModal === ModalTypes.PROJECT_ADD && <ProjectAddModalContainer />}
          </>
        )}
        {isSocketDisconnected && (
          <div className={styles.message}>
            <div className={styles.messageHeader}>{t('common.noConnectionToServer')}</div>
            <div className={styles.messageContent}>
              <Trans i18nKey="common.allChangesWillBeAutomaticallySavedAfterConnectionRestored">
                All changes will be automatically saved
                <br />
                after connection restored
              </Trans>
            </div>
          </div>
        )}
      </>
    );
  },
);

Core.propTypes = {
  isInitializing: PropTypes.bool.isRequired,
  isSocketDisconnected: PropTypes.bool.isRequired,
  currentModal: PropTypes.oneOf(Object.values(ModalTypes)),
  currentProject: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Core.defaultProps = {
  currentModal: undefined,
  currentProject: undefined,
};

export default Core;
