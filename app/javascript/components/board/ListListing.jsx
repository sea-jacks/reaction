import React from 'react';

import ListContainer from '../list/ListContainer';
import CreateListForm from '../list/CreateListForm';

const ListListing = (props) => {
  const listContainers = props.lists.map(list => (
    <ListContainer key={`list-${list.id}`} list={list}/>)
  );
  return (
    <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {listContainers}
        </div>
        <CreateListForm boardId={props.boardId} />
    </div>
  );
}


export default ListListing;
