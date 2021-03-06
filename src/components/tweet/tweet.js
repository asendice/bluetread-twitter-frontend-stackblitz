import React from 'react';
import classes from './tweet.module.css';
import ProfileImage from './profile-image';
import Names from './names';
import Text from './text';
import Metrics from './metrics';
import Media from './media';

function Tweet(props) {
  const { info, windowSize } = props;
  const { like_count, reply_count, retweet_count } = props.info.public_metrics;
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <ProfileImage image={info.profileImage} />
      </div>
      <div className={classes.content}>
        <Names
          name={info.name}
          userName={info.userName}
          time={info.created_at}
          windowSize={windowSize}
        />
        <Text text={info.text} />
        {info.media && <Media url={info.media.url} />}
        <Metrics
          comments={reply_count}
          likes={like_count}
          retweets={retweet_count}
        />
      </div>
    </div>
  );
}

export default Tweet;
