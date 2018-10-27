import React from 'react';
import PropTypes from 'prop-types';

import List from './List';

import * as actions from '../../actions/BoardActions';

class ListContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  state = { formOpen: false };

  handleToggleTitleForm = () => {
    this.setState({ formOpen: true });
  }

  render() {
    const globalState = this.context.store.getState();
    const listId = this.props.list.id;
    const cards = globalState.cards.filter(card => card.list_id === listId)

    return (
      <List list={this.props.list}
        cards={cards}
        formOpen={this.state.formOpen}
        onToggleFrom={this.handleToggleTitleForm}
      />
    )
  }
};

export default ListContainer;
