import React from 'react';

class Card extends React.Component {
  render () {
    return (
      <span>
        <div className="screen"></div>
        <div id="modal">
          <i className="x-icon icon close-modal"></i>
          <header>
            <i className="card-icon icon .close-modal"></i>
            <textarea className="list-title" defaultValue="Cards do many cool things. Click on this card to open it and learn more..."></textarea>
            <p>in list <a className="link">Stuff to try (this is a list)</a><i className="sub-icon sm-icon"></i>
            </p>
          </header>
        </div>
      </span>
    );
  }
}

export default Card;
