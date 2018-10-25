import React from 'react';
import PropTypes from 'prop-types';

import List from './List';

import * as actions from '../../actions/BoardActions';

class ListContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const state = this.context.store.getState();
    const listId = this.props.list.id;
    const cards = state.cards.filter(card => card.list_id === listId)

    return (
      <List list={this.props.list} cards={cards} />
    )
  }
};

export default ListContainer;
