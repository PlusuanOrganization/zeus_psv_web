import { connect } from 'react-redux';

import selectors from '../selectors';
import Static from '../components/Static';

const mapStateToProps = (state) => {
  const { cardId, projectId, surveyId, userId } = selectors.selectPath(state);
  const currentBoard = selectors.selectCurrentBoard(state);

  return {
    projectId,
    cardId,
    board: currentBoard,
    surveyId,
    userId,
  };
};

export default connect(mapStateToProps)(Static);
