import React from 'react';
import PropTypes from 'prop-types';

import CardTile from './CardTile';

import * as actions from '../../actions/BoardActions';

class CardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    return (
      <CardTile key={this.props.card.id} card={this.props.card}/>
    )
  }
}

export default CardContainer;
