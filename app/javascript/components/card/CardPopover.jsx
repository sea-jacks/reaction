import React from 'react';
import CardDueDatePopover from './CardDueDatePopover';

const CardPopover = (props) => (
  <div className="popover {props.componentClass}">
    <div id="add-options-labels-dropdown">
      <header>
        <span>{props.componentName}</span>
        <a href="#" className="icon-sm icon-close"></a>
      </header>
      <CardDueDatePopover />
    </div>
  </div>
);

export default CardPopover;
