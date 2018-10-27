import React from 'react';
import PropTypes from 'prop-types';

import ListListing from './ListListing';

import * as actions from '../../actions/BoardActions';

class ListListingContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const state = this.context.store.getState();
    const boardId = this.props.boardId;
    const lists = state.lists.filter(list => list.board_id === boardId);

    return (
      <main>
        <ListListing lists={lists} boardId={boardId} />
      </main>
    )
  }
}

export default ListListingContainer;
