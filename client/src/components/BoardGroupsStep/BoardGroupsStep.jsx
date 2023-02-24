import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Menu } from 'semantic-ui-react';
import { Input, Popup } from '../../lib/custom-ui';

import api from '../../api';

import { useField } from '../../hooks';
import Item from './Item';

import styles from './BoardGroupsStep.module.scss';

const BoardGroupsStep = React.memo(
  ({ title, onBack, cardId }) => {
    const [t] = useTranslation();
    const [search, handleSearchChange] = useField('');
    const [ groups, setGroups ] = useState([]);
    const cleanSearch = useMemo(() => search.trim().toLowerCase(), [search]);
    const searchField = useRef(null);

    const filteredItems = useMemo(
      () => groups.filter(({ name }) => name.includes(cleanSearch) || name.toLowerCase().includes(cleanSearch)),
      [groups, cleanSearch],
    );

    const updateGroups = async () => {
      await api.getAllGroups(cardId, {}).then((res) => {
        setGroups(res);
      });
    };

    const handleGroudSelect = useCallback(async (id) => {
        await api.updateCardGroup(cardId, id, {});

        await updateGroups();
    }, [cardId]);

    const handleGroudDeselect = useCallback(async () => {
        await api.updateCardGroup(cardId, null, {});
        
        await updateGroups();
    }, [cardId]);

    useEffect(() => {
      searchField.current.focus({
        preventScroll: true,
      });

      updateGroups();
    }, []);

    return (
      <>
        <Popup.Header onBack={onBack}>
          {t(title, {
            context: 'title',
          })}
        </Popup.Header>
        <Popup.Content>
          <Input
            fluid
            ref={searchField}
            value={search}
            placeholder={t('common.searchMembers')}
            icon="search"
            onChange={handleSearchChange}
          />
          {filteredItems.length > 0 && (
            <Menu secondary vertical className={styles.menu}>
              {filteredItems.map((item) => (
                <Item
                  key={item.id}
                  isActive={item.selected}
                  group={item}
                  onGroupSelect={handleGroudSelect}
                  onGroupDeselect={handleGroudDeselect}
                />
              ))}
            </Menu>
          )}
        </Popup.Content>
      </>
    );
  },
);

BoardGroupsStep.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  title: PropTypes.string,
  /* eslint-enable react/forbid-prop-types */
  onBack: PropTypes.func,
};

BoardGroupsStep.defaultProps = {
  title: 'common.members',
  onBack: undefined,
};

export default BoardGroupsStep;
