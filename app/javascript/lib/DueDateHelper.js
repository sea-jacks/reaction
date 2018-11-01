export function dueDateClass(card) {
  const completed = card.completed ? 'completed' : '';
  const timingDiff = new Date(card.due_date) - new Date();
  const msInDay = 86400000;

  if (timingDiff < -msInDay) {
    return 'overdue ' + completed;
  } else if (timingDiff < 0) {
    return 'overdue-recent ' + completed;
  } else if (timingDiff < msInDay) {
    return 'due-soon ' + completed;
  } else {
    return 'due-later ' + completed;
  }
};

export function dueDateSpanText(card) {
  if (card.completed) return '';
  const timingDiff = new Date(card.due_date) - new Date();
  const msInDay = 86400000;

  if (timingDiff < -msInDay) {
    return ' (past due)';
  } else if (timingDiff < 0) {
    return ' (recently past due)';
  } else if (timingDiff < msInDay) {
    return ' (due soon)';
  }
};
