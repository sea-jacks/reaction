import React from 'react';
import PropTypes from 'prop-types';
import Router from 'react-router-dom';

import CardModal from './CardModal';

import * as cardActions from '../../actions/CardActions';


class CardModalContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };


  componentDidMount() {
    const store = this.context.store;
    const cardId = +this.props.match.params.id;
    store.dispatch(cardActions.fetchCard(cardId));
  }

  handleCloseModal = () => {
    const cardId = +this.props.match.params.id;
    const card = this.context.store.getState().cards.find(c => c.id === cardId);
    this.props.history.push(`/boards/${card.board_id}`);
  }
  
  render () {
    const cardId = +this.props.match.params.id;
    const card = this.context.store.getState().cards.find(c => c.id === cardId);

    if (card) {
      const list = this.context.store.getState().lists.find(l => l.id === card.list_id);
      if (list) {
        const comments = this.context.store.getState().comments.filter(comment => comment.card_id === cardId)
        if (comments) {
          return (
            <CardModal
              card={card}
              listName={list.title}
              onCloseModal={this.handleCloseModal}
              comments={comments}
              />
          );
        } else {
          return null;
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

export default CardModalContainer;
