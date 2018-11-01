import React from 'react';
import PropTypes from 'prop-types';

import BoardHeader from './BoardHeader';
import ListListingContainer from './ListListingContainer';
import * as cardActions from '../../actions/CardActions';
import * as boardActions from '../../actions/BoardActions';


class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  state = { requestSent: false };

  fetchBoard = () => {
    const store = this.context.store;
    const cardId = +this.props.match.params.id;
    const card = this.context.store.getState().cards.find(c => c.id === cardId);
    if (card && !this.state.requestSent) {
      const boardId = card.board_id;
      this.setState({ requestSent: true });
      store.dispatch(boardActions.fetchBoard(boardId));
    }
  }

  componentDidMount() {
    const store = this.context.store;

    if (/boards/.test(this.props.match.url)) {
      const boardId = +this.props.match.params.id;
      store.dispatch(boardActions.fetchBoard(boardId));
    } else if (/cards/.test(this.props.match.url)) {
      store.subscribe(this.fetchBoard);
    }
  }


  render() {
    let boardId;

    if (/boards/.test(this.props.match.url)) {
      boardId = +this.props.match.params.id;
    } else if (/cards/.test(this.props.match.url)) {
      const cardId = +this.props.match.params.id;
      const card = this.context.store.getState().cards.find(c => c.id === cardId);
      if (card) boardId = card.board_id;
    }

    const board = this.context.store.getState().boards.find(b => b.id === boardId);

    if (board) {
      return (
        <div>
          <BoardHeader title={board.title} />
          <ListListingContainer boardId={boardId} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default BoardContainer;
