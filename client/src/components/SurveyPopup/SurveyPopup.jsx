import React, { useCallback, useEffect, useState } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

import api from '../../api';

import 'survey-core/modern.min.css';
import './Survey.module.scss';

function SurveyPopup() {
  const [ survey, setSurvey ] = useState(new Model({}));
  
  if (survey.isEmpty) {
    api.getSurvey(undefined, {}).then((res) => {
      setSurvey(new Model(res));
    });
  }

  const surveyResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    // api.sendSurveyResults(results, userId, surveyId, {});
  }, []);

  survey.onComplete.add(surveyResults);

  return <Survey model={survey} />;
}

export default SurveyPopup;
