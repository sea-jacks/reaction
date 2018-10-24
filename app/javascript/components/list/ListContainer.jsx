import React from 'react';
import PropTypes from 'prop-types';

import List from './List';

import * as actions from '../../actions/BoardActions';

class ListContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  

  render() {
    return (
      <List  />
    )
  }
};

export default ListContainer;