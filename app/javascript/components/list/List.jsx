import React from 'react';

import CardContainer from '../card/CardContainer';
import CreateCardForm from '../card/CreateCardForm';

const List = (props) => (
  <div className="list-wrapper">
    <div className="list-background">
        <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>
                <p className="list-title">Stuff to try (this is a list)</p>
            </div>
            <div className="add-dropdown add-top">
                <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
                <div className="add-options"><span>...</span>
                </div>
            </div>
            <div id="cards-container" data-id="list-1-cards">
                <CardContainer />
                <CardContainer />
                <CardContainer />
            </div>
            <CreateCardForm />
            <div class="add-card-toggle" data-position="bottom">Add a card...</div>
        </div>
    </div>
  </div>
);

export default List;
