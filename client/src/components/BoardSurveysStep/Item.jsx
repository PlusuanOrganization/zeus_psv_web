import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu } from 'semantic-ui-react';

import styles from './Item.module.scss';

const Item = React.memo(({ isActive, survey, onSurveySelect, onSurveyDeselect }) => {
  const handleToggleClick = useCallback(() => {
    if (isActive) {
      onSurveyDeselect();
    } else {
      onSurveySelect(survey.id);
    }
  }, [isActive, onSurveySelect, onSurveyDeselect]);
  
  return (
    <Menu.Item
      active={isActive}
      className={classNames(styles.menuItem, isActive && styles.menuItemActive)}
      onClick={handleToggleClick}
    >
      <div className={classNames(styles.menuItemText, isActive && styles.menuItemTextActive)}>
        { survey.title }
      </div>
    </Menu.Item>
  );
});

Item.propTypes = {
  isActive: PropTypes.bool.isRequired,
  survey: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  onSurveySelect: PropTypes.func.isRequired,
  onSurveyDeselect: PropTypes.func.isRequired,
};

export default Item;
