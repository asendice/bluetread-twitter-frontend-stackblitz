import React from 'react';
import classes from './metrics.module.css';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';

function Metrics({ likes, comments, retweets }) {
  return (
    <div className={classes.metrics}>
      <div className={classes.comment}>
        <div className={`${classes.iconContainer} ${classes.iconComment}`}>
          <FaRegComment className={classes.icon} />
        </div>
        {comments}
      </div>
      <div className={classes.retweet}>
        <div className={`${classes.iconContainer} ${classes.iconRetweet}`}>
          <AiOutlineRetweet className={classes.icon} />{' '}
        </div>
        {retweets}
      </div>
      <div className={classes.heart}>
        <div className={`${classes.iconContainer} ${classes.iconHeart}`}>
          <FaRegHeart className={classes.icon} />
        </div>
        {likes}
      </div>
      <div className={classes.share}>
        <div className={`${classes.iconContainer} ${classes.iconShare}`}>
          <FiShare className={classes.icon} />
        </div>
      </div>
    </div>
  );
}

export default Metrics;
