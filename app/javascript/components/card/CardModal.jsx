import React from 'react';
import moment from 'moment';
import { dueDateClass, dueDateSpanText } from '../../lib/DueDateHelper';

import CardPopover from './CardPopover';

const CardModal = (props) => {
  const labelDivs = props.card.labels.map(labelColor => (
    <div className="member-container" key={labelColor}>
      <div className={`${labelColor} label colorblindable`}></div>
    </div>
  ));

  const dueDate = moment(props.card.due_date).format('MMM DD [at] hh:mm');

  const timeAgo = (ms) => {
    const msAgo = Date.now() - new Date(ms)
    return `${msAgo} milliseconds`;
  }

  const commentLis = props.comments.map((comment) => (
    <li key={comment.id}>
      <div className="member-container">
        <div className="card-member">IN</div>
      </div>
      <h3>Author</h3>
      <div className="comment static-comment"><span>{comment.text}</span>
      </div>
      <small>{timeAgo(comment.created_at)} ago - <span className="link">Edit</span> - <span className="link">Delete</span></small>
      <div className="comment">
        <label>
          <textarea required="" rows="1" defaultValue="The activities have not been implemented yet" />
          <div>
            <a className="light-button card-icon sm-icon"></a>
            <a className="light-button smiley-icon sm-icon"></a>
            <a className="light-button email-icon sm-icon"></a>
          </div>
          <div>
            <p>You haven't typed anything!</p>
            <input type="submit" className="button not-implemented" value="Save" /><i className="x-icon icon"></i>
          </div>
        </label>
      </div>
    </li>
  ));

  return (
    <div id="modal-container">
      {props.cardPopoverOpen ? <CardPopover /> : ''}
      <div className="screen" onClick={props.onCloseModal} ></div>
      <div id="modal">
        <i className="x-icon icon close-modal" onClick={props.onCloseModal} ></i>
        <header>
          <i className="card-icon icon .close-modal"></i>
          <textarea className="list-title" rows="5" defaultValue={props.card.title} />
          <p>in list <a className="link">{props.listName}</a><i className="sub-icon sm-icon"></i>
          </p>
        </header>
        <section className="modal-main">
          <ul className="modal-outer-list">
            <li className="details-section">
              <ul className="modal-details-list">
                <li className="labels-section">
                  <h3>Labels</h3>
                  {labelDivs}
                  <div className="member-container"><i className="plus-icon sm-icon"></i>
                  </div>
                </li>
                {props.card.due_date ?
                  (<li className="due-date-section">
                    <h3>Due Date</h3>
                    <div id="dueDateDisplay" className={dueDateClass(props.card)}>
                      <input
                        id="dueDateCheckbox"
                        type="checkbox"
                        className="checkbox"
                        checked=""
                      />
                      {dueDate}<span>{dueDateSpanText(props.card)}</span>
                    </div>
                  </li>) : ''
                }
              </ul>
              <form className="description">
                <p>Description</p>
                <span id="description-edit" className="link">Edit</span>
                <p className="textarea-overlay">{props.card.description}</p>
                <p id="description-edit-options" className="hidden">You have unsaved edits on this field. <span className="link">View edits</span> - <span className="link">Discard</span>
                </p>
              </form>
            </li>
            <li className="comment-section">
              <h2 className="comment-icon icon">Add Comment</h2>
              <div>
                <div className="member-container">
                  <div className="card-member">TP</div>
                </div>
                <div className="comment">
                  <label>
                    <textarea required="" rows="1" placeholder="Write a comment..." defaultValue='' />
                    <div>
                      <a className="light-button card-icon sm-icon"></a>
                      <a className="light-button smiley-icon sm-icon"></a>
                      <a className="light-button email-icon sm-icon"></a>
                      <a className="light-button attachment-icon sm-icon"></a>
                    </div>
                    <div>
                      <input type="submit" className="button not-implemented" value="Save" />
                    </div>
                  </label>
                </div>
              </div>
            </li>
            <li className="activity-section">
              <h2 className="activity-icon icon">Activity</h2>
              <ul className="horiz-list">
                <li className="not-implemented">Show Details</li>
              </ul>
              <ul className="modal-activity-list">
                {commentLis}
              </ul>
            </li>
          </ul>
        </section>

        <aside className="modal-buttons">
          <h2>Add</h2>
          <ul>
            <li className="member-button"><i className="person-icon sm-icon"></i>Members</li>
            <li className="label-button"><i className="label-icon sm-icon"></i>Labels</li>
            <li className="checklist-button"><i className="checklist-icon sm-icon"></i>Checklist</li>
            <li className="date-button not-implemented" onClick={props.onToggleCardPopover}><i className="clock-icon sm-icon"></i>Due Date</li>
            <li className="attachment-button not-implemented"><i className="attachment-icon sm-icon"></i>Attachment</li>
          </ul>
          <h2>Actions</h2>
          <ul>
            <li className="move-button"><i className="forward-icon sm-icon"></i>Move</li>
            <li className="copy-button"><i className="card-icon sm-icon"></i>Copy</li>
            <li className="subscribe-button"><i className="sub-icon sm-icon"></i>Subscribe<i className="check-icon sm-icon"></i>
            </li>
            <hr/>
            <li className="archive-button"><i className="file-icon sm-icon "></i>Archive</li>
          </ul>
          <ul className="light-list">
            <li className="not-implemented">Share and more...</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default CardModal;
