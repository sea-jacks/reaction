import React from 'react';

import ListContainer from '../list/ListContainer';

const ListListing = (props) => {
  const listContainers = props.lists.map(list => (
    <ListContainer key={`list-${list.id}`} list={list}/>)
  );

  return (
    <main>
        <div id="list-container" className="list-container">
            <div id="existing-lists" className="existing-lists">
              {listContainers}
            </div>
        </div>
    </main>
  );
}


export default ListListing;
