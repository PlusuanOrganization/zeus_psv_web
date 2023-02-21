import { connect } from 'react-redux';
import SurveyPopup from '../components/SurveyPopup/SurveyPopup';

import 'survey-core/modern.min.css';

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(SurveyPopup);
