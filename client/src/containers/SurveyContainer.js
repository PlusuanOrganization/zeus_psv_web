import { connect } from 'react-redux';

import 'survey-core/modern.min.css';
import selectors from '../selectors';
import SurveyPopup from '../components/SurveyPopup/SurveyPopup';

const mapStateToProps = (state) => {
  const { surveyId, userId } = selectors.selectPath(state);
  
  return {
    surveyId,
    userId,
  };
};

export default connect(mapStateToProps)(SurveyPopup);
