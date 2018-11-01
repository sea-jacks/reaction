import React from 'react';
import PropTypes from 'prop-types';
import Router from 'react-router-dom';


import { withRouter } from 'react-router'

import CardTile from './CardTile';

import * as actions from '../../actions/BoardActions';

class CardContainer extends React.Component {
  
  handleOpenModal = () => {  
    this.props.history.push(`/cards/${this.props.card.id}`);
  }

  render() {
    return (
      <CardTile key={this.props.card.id} card={this.props.card} onOpenModal={this.handleOpenModal} />
    )
  }
}

export default withRouter(CardContainer);
