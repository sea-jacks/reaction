import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/CardActions';

class CreateCardForm extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  handleCreateCard = (e) => {
    e.preventDefault();

    const store = this.context.store;
    const parentElement = e.target.parentElement;
    const cardTitle = parentElement.querySelector('textarea').value;
    const newCard = { title: cardTitle, list_id: this.props.listId };

    if (cardTitle !== '') {
      store.dispatch(actions.createCard(newCard));
      this.props.onCardFormToggle();
    }
  }

  render () {
    return (
      <div className="add-dropdown add-bottom active-card">
        <div className="card">
          <div className="card-info"></div>
          <textarea name="add-card"></textarea>
          <div className="members"></div>
        </div>
        <a className="button" onClick={this.handleCreateCard}>Add</a>
        <i className="x-icon icon" onClick={this.props.onCardFormToggle}></i>
        <div className="add-options">
          <span>...</span>
        </div>
      </div>
    );
  }
}

export default CreateCardForm;
