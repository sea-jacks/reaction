import React from 'react';

import CardContainer from '../card/CardContainer';

class CardListing extends React.Component {
  state = {
    cardFormOpen: true,
  };


  render() {
    const cardContainers = this.props.card.map(card => (
      <CardContainer key={card.id} card={card} />)
    );

    return (
      <div>
        {cardContainers}
      </div>
    );
  }
}

export default CardListing;
