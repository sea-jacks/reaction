import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/ListActions';

class CreateListForm extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  state = { formOpen: false }

  toggleForm = (e) => {
    e.preventDefault();
    this.setState({ formOpen: !this.state.formOpen });
  }

  handleSubmit = (e) => {    
    const input = document.querySelector('#new-list input');
    if (input.value !== '') {
      const newList = { title: input.value, board_id: this.props.boardId };     
      this.context.store.dispatch(actions.createList(newList));
      this.toggleForm(e);
    }
  }

  render() {
    if (this.state.formOpen) {
      return (
        <div id="new-list" className="new-list">    
          <input type="text" placeholder="Add a list..." />
          <div>
              <input type="submit" className="button" value="Save" onClick={this.handleSubmit} />
              <i className="x-icon icon" onClick={this.toggleForm}></i>
          </div>
        </div> 
      );
    } else {
      return (
        <div id="new-list" className="new-list" onClick={this.toggleForm}>    
          <span>Add a list...</span>
        </div> 
      );
    }
  }
}

export default CreateListForm;
