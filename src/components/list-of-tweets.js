// import Tweet from "./tweet";
import classes from "./list-of-tweets.module.css";

function ListOfTweets(props) {
  const { tweets } = props;
  return (
    // <div className={classes.container}>
    //   {tweets.map((tweet) => (
    //     <Tweet key={tweet.id} info={tweet} />
    //   ))}
    // </div>
  );
}

export default ListOfTweets;