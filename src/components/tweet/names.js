import React from 'react';
import classes from './names.module.css';
import { FaCircle } from 'react-icons/fa';

function Names({ name, userName, time }) {
  return (
    <div className={classes.names}>
      <h5>{name}</h5>
      <p>@{userName}</p>
      <p>
        <FaCircle className={classes.circle} />
      </p>
    </div>
  );
}

export default Names;
