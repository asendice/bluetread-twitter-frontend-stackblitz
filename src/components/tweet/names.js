import React, { useMemo } from 'react';
import classes from './names.module.css';
import { FaCircle } from 'react-icons/fa';
import { useMemo } from 'react';
import { convertMilisecondsToReadableTime } from '../../utils/index';

const calculateTimeSinceTweetCreated = (created_at) => {
  return convertMilisecondsToReadableTime(new Date() - new Date(created_at));
};

function Names({ name, userName, time }) {
  const ago = useMemo(() => calculateTimeSinceTweetCreated(time), [time]);
  return (
    <div className={classes.names}>
      <h5>{name}</h5>
      <p>@{userName}</p>
      <p>
        <FaCircle className={classes.circle} /> {ago}
      </p>
    </div>
  );
}

export default Names;
