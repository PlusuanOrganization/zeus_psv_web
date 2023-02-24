import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu } from 'semantic-ui-react';

import styles from './Item.module.scss';

const Item = React.memo(({ isActive, group, onGroupSelect, onGroupDeselect }) => {
  const handleToggleClick = useCallback(() => {
    if (isActive) {
      onGroupDeselect();
    } else {
      onGroupSelect(group.id);
    }
  }, [isActive, onGroupSelect, onGroupDeselect]);
  
  return (
    <Menu.Item
      active={isActive}
      className={classNames(styles.menuItem, isActive && styles.menuItemActive)}
      onClick={handleToggleClick}
    >
      <div className={classNames(styles.menuItemText, isActive && styles.menuItemTextActive)}>
        { group.name }
      </div>
    </Menu.Item>
  );
});

Item.propTypes = {
  isActive: PropTypes.bool.isRequired,
  group: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  onGroupSelect: PropTypes.func.isRequired,
  onGroupDeselect: PropTypes.func.isRequired,
};

export default Item;
