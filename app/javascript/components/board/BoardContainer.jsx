import React from 'react';
import PropTypes from 'prop-types';

//import BoardsDashboard from './Board';
import BoardHeader from './BoardHeader';
import ListListingContainer from './ListListingContainer';

import * as actions from '../../actions/BoardActions';

class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    const boardId = +this.props.match.params.id;
    store.dispatch(actions.fetchBoard(boardId));
  }


  render() {
    const boardId = +this.props.match.params.id;
    const board = this.context.store.getState().boards.find(b => b.id === boardId);

    if (board) {
      return (
        <div>
          <BoardHeader title={board.title} />
          <ListListingContainer boardId={boardId} />
        </div>
      )
    } else {
        return (null);
    }
  }
}

export default BoardContainer;
