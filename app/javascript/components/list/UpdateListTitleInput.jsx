import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/ListActions';

class UpdateListTitleInput extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  state = { title: this.props.list.title };

  updateInput = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  submitInput = (e) => {
    if (e.target.value !== '') {
      const store = this.context.store;
      store.dispatch(actions.updateList(this.props.list.id, this.state));
    }
  }

  handleKeyPressInput = (e) => {
    if (e.charCode === 13) {
      e.target.blur();
    }
  }

  moveCursorToPosition = (e) => {
    let val = e.target.value;
    e.target.value = '';
    e.target.value = val;
  }

  render() {
    return (
      <input type="text"
        className="list-title"
        value={this.state.title}
        autoFocus="true"
        onChange={this.updateInput}
        onKeyPress={this.handleKeyPressInput}
        onBlur={this.submitInput}
        onFocus={this.moveCursorToPosition}
      />
    )
  }
};

export default UpdateListTitleInput;
