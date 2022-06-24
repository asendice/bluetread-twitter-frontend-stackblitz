import React from 'react';
import classes from './text.module.css';

function Text(props) {
  const replaceSpace = props.text.replace('\n', ' ');
  const text = replaceSpace.split(' ');
  return (
    <div className={classes.textContainer}>
      {text.map((text, index) => {
        if (text.includes('@') || text.includes('#') || text.includes(':/')) {
          return (
            <p key={index} className={classes.text}>
              {text}{' '}
            </p>
          );
        }
        return `${text} `;
      })}
    </div>
  );
}

export default Text;
