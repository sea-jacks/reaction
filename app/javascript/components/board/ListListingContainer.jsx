import React from 'react';
import PropTypes from 'prop-types';

import ListListing from './ListListing';
import CreateListForm from '../list/CreateListForm';

import * as actions from '../../actions/BoardActions';

class ListListingContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };



  render() {
    const board = this.props.board;
    return (
      <div>
        <ListListing />
        <CreateListForm />
      </div>
    )
  }
}

export default ListListingContainer;
