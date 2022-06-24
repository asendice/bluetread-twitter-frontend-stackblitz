import classes from './tweet.module.css';

function Tweet(props) {
  const { info } = props;
  const { like_count, reply_count, retweet_count } = props.info.public_metrics;
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}></div>
      <div className={classes.content}></div>
    </div>
  );
}

export default Tweet;
