import React from 'react';

import CardListing from '../card/CardListing';
import CreateCardForm from '../card/CreateCardForm';
import UpdateListTitleInput from './UpdateListTitleInput';

const List = (props) => {
  const listId = props.list.id;

  return (
    <div className={`list-wrapper ${props.cardFormOpen ? 'add-dropdown-active' : ''}`}>
      <div className="list-background">
          <div className="list">
              <a className="more-icon sm-icon" href=""></a>
              <div onClick={props.onToggleFrom}>
                {props.listFormOpen ?
                <UpdateListTitleInput list={props.list} /> :
                <p className="list-title">{props.list.title}</p>}
              </div>
              <div className="add-dropdown add-top">
                  <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
                  <div className="add-options"><span>...</span>
                  </div>
              </div>
              <div id="cards-container" data-id="list-1-cards">
                  <CardListing listId={listId} card={props.cards}/>
              </div>
              <CreateCardForm listId={props.listId} onCardFormToggle={props.onCardFormToggle}/>
              <div className="add-card-toggle" data-position="bottom" onClick={props.onCardFormToggle}>Add a card...</div>
          </div>
      </div>
    </div>
  );
}

export default List;
