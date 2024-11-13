import React from 'react';

const TaskItem = ({ task }) => (
  <li style={{ padding: '0.5rem', borderBottom: '1px solid #ddd' }}>
    {task.text}
  </li>
);

export default TaskItem;