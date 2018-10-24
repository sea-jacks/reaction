import React from 'react';

import ListContainer from '../list/ListContainer';

const ListListing = (props) => (
  <main>
      <div id="list-container" className="list-container">
          <div id="existing-lists" className="existing-lists">
              <ListContainer />
              <ListContainer />
          </div>{/*<div id="new-list" className="new-list"><span>Add a list...</span>
              <input type="text" placeholder="Add a list..." />
              <div>
                  <input type="submit" className="button" defaultValue="Save" /><i className="x-icon icon"></i>
              </div>
          </div>*/}
      </div>
  </main>
);

export default ListListing;