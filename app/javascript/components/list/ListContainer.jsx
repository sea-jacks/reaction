import React from 'react';
import PropTypes from 'prop-types';

import List from './List';

import * as actions from '../../actions/BoardActions';

class ListContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  state = {
    listFormOpen: false,
    cardFormOpen: false,
  };

  handleCardFormToggle = () => {
    this.setState({ cardFormOpen: !this.state.cardFormOpen});
  }

  handleToggleTitleForm = () => {
    this.setState({ listFormOpen: true });
  }

  render() {
    const globalState = this.context.store.getState();
    const listId = this.props.list.id;
    const cards = globalState.cards.filter(card => card.list_id === listId);

    return (
      <List list={this.props.list}
        cards={cards}
        listId={listId}
        listFormOpen={this.state.listFormOpen}
        cardFormOpen={this.state.cardFormOpen}
        onCardFormToggle={this.handleCardFormToggle}
        onToggleFrom={this.handleToggleTitleForm}
      />
    )
  }
};

export default ListContainer;
