import { connect } from 'react-redux';

import 'survey-core/modern.min.css';
import selectors from '../selectors';
import SurveyPopup from '../components/SurveyPopup/SurveyPopup';

import 'survey-core/modern.min.css';

const mapStateToProps = (state) => {
  const { surveyId, userId, cardId } = selectors.selectPath(state);
  
  return {
    surveyId,
    userId,
    cardId,
  };
};

export default connect(mapStateToProps)(SurveyPopup);
