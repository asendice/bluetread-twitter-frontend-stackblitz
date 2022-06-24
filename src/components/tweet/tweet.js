import React from 'react';
import classes from './tweet.module.css';
import ProfileImage from './profile-image';

function Tweet(props) {
  const { info } = props;
  const { like_count, reply_count, retweet_count } = props.info.public_metrics;
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <ProfileImage image={info.profileImage} />
      </div>
      <div className={classes.content}></div>
    </div>
  );
}

export default Tweet;
