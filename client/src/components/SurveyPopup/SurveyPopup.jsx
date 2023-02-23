import React, { useCallback, useState } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { Loader } from 'semantic-ui-react';

import api from '../../api';

import 'survey-core/modern.min.css';
import './Survey.module.scss';

function SurveyPopup({ surveyId, userId }) {
  const [ survey, setSurvey ] = useState(new Model({}));
  
  if (survey.isEmpty) {
    api.getSurvey(surveyId, {}).then((res) => {
      setSurvey(new Model(res));
    });
  }

  // useEffect(() => {
  //   api.getSurvey(surveyId, {}).then((res) => {
  //     setSurvey(new Model(res));
  //   });
  // }, []);
  
  const surveyResults = useCallback((sender) => {
    const answer = JSON.stringify(sender.data);
    api.submitSurvey(surveyId, userId, answer, {});
  }, []);

  survey.onComplete.add(surveyResults);

  return survey.isEmpty ? (
    <Loader active size="massive" />
  ) : (
    <Survey model={survey} />
  );
}

export default SurveyPopup;
