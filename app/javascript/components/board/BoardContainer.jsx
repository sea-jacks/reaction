import React from 'react';
import PropTypes from 'prop-types';

//import BoardsDashboard from './Board';
import BoardHeader from './BoardHeader';
import ListListingContainer from './ListListingContainer';
import Card from '../card/Card';

import * as boardActions from '../../actions/BoardActions';
import * as cardActions from '../../actions/CardActions';

class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    if (/boards/.test(this.props.match.url)) {
      const boardId = +this.props.match.params.id;
      store.dispatch(boardActions.fetchBoard(boardId));
    } else if (/cards/.test(this.props.match.url)) {
      const cardId = +this.props.match.params.id;
      const card = this.context.store.getState().cards.find(c => c.id === cardId);
      store.dispatch(cardActions.fetchCard(cardId));
    }
  }


  render() {
    if (/boards/.test(this.props.match.url)) {
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
    } else if (/cards/.test(this.props.match.url)) {
      const cardId = +this.props.match.params.id;
      const card = this.context.store.getState().cards.find(c => c.id === cardId);  

      if (card) {
        const boardId = card.board_id;
        const board = this.context.store.getState().boards.find(b => b.id === boardId); 
        return (
          <div>
            <BoardHeader title={board.title} />
            <ListListingContainer boardId={boardId} />
            <Card card={card} />
          </div>
        )
      } else {
          return (null);
      }
    }
  }
}

export default BoardContainer;
