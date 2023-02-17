import React, { useCallback } from 'react';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

import 'survey-core/modern.min.css';
// import './Survey.module.scss';

function SurveyPopup() {
  const surveyJson = {
    /* pages: [
      {
        elements: [
          {
            name: 'satisfaction-score',
            title: 'How would product?',
            type: 'radiogroup',
            choices: [
              { value: 5, text: 'Fully satisfying' },
              { value: 4, text: 'Generally satisfying' },
              { value: 3, text: 'Neutral' },
              { value: 2, text: 'Rather unsatisfying' },
              { value: 1, text: 'Not satisfying at all' },
            ],
            isRequired: true,
          },
        ],
      },
      {
        elements: [
          {
            name: 'what-wo',
            title: 'What can atisfying?',
            type: 'comment',
          },
          {
            name: 'nps-score',
            title: 'On a scale of zero to ten',
            type: 'rating',
            rateMin: 0,
            rateMax: 10,
          },
        ],
      },
      {
        elements: [
          {
            name: 'how-can-we-improve',
            title: 'In your opinion, ?',
            type: 'comment',
          },
        ],
      },
      {
        elements: [
          {
            name: 'disappointing-experience',
            title: 'Please let us know why ',
            type: 'comment',
          },
        ],
      },
    ], */
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
