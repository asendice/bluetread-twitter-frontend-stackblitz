import React from 'react';
import classes from './media.module.css';
function Media({ url }) {
  return <img className={classes.media} alt="media" src={url} />;
}

export default Media;
