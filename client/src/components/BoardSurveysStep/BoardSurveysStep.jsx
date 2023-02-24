import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Menu } from 'semantic-ui-react';
import { Input, Popup } from '../../lib/custom-ui';

import api from '../../api';

import { useField } from '../../hooks';
import Item from './Item';

import styles from './BoardSurveysStep.module.scss';

const BoardSurveysStep = React.memo(
  ({ title, onBack, cardId }) => {
    const [t] = useTranslation();
    const [search, handleSearchChange] = useField('');
    const [ surveys, setSurveys ] = useState([]);
    const cleanSearch = useMemo(() => search.trim().toLowerCase(), [search]);
    const searchField = useRef(null);

    const filteredItems = useMemo(
      () => surveys.filter(({ title }) => title.includes(cleanSearch) || title.toLowerCase().includes(cleanSearch)),
      [surveys, cleanSearch],
    );
    
    const updateSurveys = async () => {
      await api.getAllSurveys(cardId, {}).then((res) => {
        setSurveys(res);
      });
    };

    const handleSurveySelect = useCallback(async (id) => {
        await api.updateCardSurvey(cardId, id, {});

        await updateSurveys();
    }, [cardId]);

    const handleGroudDeselect = useCallback(async () => {
        await api.updateCardSurvey(cardId, null, {});
        
        await updateSurveys();
    }, [cardId]);

    useEffect(() => {
      searchField.current.focus({
        preventScroll: true,
      });

      updateSurveys();
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
                  survey={item}
                  onSurveySelect={handleSurveySelect}
                  onSurveyDeselect={handleGroudDeselect}
                />
              ))}
            </Menu>
          )}
        </Popup.Content>
      </>
    );
  },
);

BoardSurveysStep.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  title: PropTypes.string,
  /* eslint-enable react/forbid-prop-types */
  onBack: PropTypes.func,
};

BoardSurveysStep.defaultProps = {
  title: 'common.members',
  onBack: undefined,
};

export default BoardSurveysStep;
