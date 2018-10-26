import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/BoardActions';

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
    e.preventDefault();
    if (e.charCode === 13) console.log('hi');
  }

  render() {
    return (
      <input type="text"
        className="list-title"
        defaultValue={this.state.title}
        autoFocus="true"
        onChange={this.updateInput}
        onKeyPress={this.submitInput}
      />
    )
  }
};

export default UpdateListTitleInput;
