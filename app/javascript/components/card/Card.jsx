import React from 'react';
import moment from 'moment';

const Card = (props) => {
  const labels = props.card.labels.map(labelName => {
    return (<div className={`card-label ${labelName} colorblindable`}></div>);
  });

  return (
    <div className="card-background">
        <div className="card "><i className="edit-toggle edit-icon sm-icon"></i>
            <div className="card-info">
                {labels}
                <p>{props.card.title}</p>
            </div>
            <div className="card-icons">{props.card.due_date ? <i className="clock-icon sm-icon overdue-recent completed">{moment(props.card.due_date).format('MMM DD')}</i> : ''}{props.card.description ? <i className="description-icon sm-icon"></i> : ''}{props.card.comments_count > 0 ? <i className="comment-icon sm-icon"></i> : ''}
            </div>
        </div>
    </div>
  );
}

export default Card;
