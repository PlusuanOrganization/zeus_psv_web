import { connect } from 'react-redux';

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

import api from '../api';

import 'survey-core/modern.min.css';

const mapStateToProps = (state) => {
  api.getSurvey(state.surveyId, {});
  
  const surveyJson = {};

  console.log('surveyJson', surveyJson);
    
  const model = new Model(surveyJson);

  return {
    model: model,
  };
};

export default connect(mapStateToProps)(Survey);
