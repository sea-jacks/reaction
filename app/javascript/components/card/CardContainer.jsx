import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

import * as actions from '../../actions/BoardActions';

class CardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    return (
      <Card />
    )
  }
}

export default CardContainer;