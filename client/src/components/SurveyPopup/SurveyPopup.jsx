import React, { useCallback } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

import 'survey-core/modern.min.css';
// import './Survey.module.scss';

function SurveyPopup() {
  const surveyJson = {
    elements: [
      {
        name: 'FirstName',
        title: 'Enter your first name:',
        type: 'text',
      },
      {
        name: 'Opinion',
        title: 'Give me your opinion:',
        type: 'number',
      },
      {
        name: 'LastName',
        title: 'Enter your last name:',
        type: 'text',
      },
    ],
  };

  const survey = new Model(surveyJson);
  const surveyResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    console.log(results);
  }, []);

  survey.onComplete.add(surveyResults);

  return <Survey model={survey} />;
}

export default SurveyPopup;
