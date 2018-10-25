import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/BoardActions';

class CreateCardForm extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render () {
    return (
      <div className="add-dropdown add-bottom">
          <div className="card"><div className="card-info"></div><textarea name="add-card"></textarea><div className="members"></div></div>
          <a className="button">Add</a><i className="x-icon icon"></i>
          <div className="add-options"><span>...</span>
          </div>
      </div>
    );
  }
}

export default CreateCardForm;
