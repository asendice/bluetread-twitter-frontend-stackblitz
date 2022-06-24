import React, { useEffect, useState } from 'react';
import Tweet from './tweet/tweet';
import classes from './list-of-tweets.module.css';

function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}

function ListOfTweets(props) {
  const { tweets } = props;
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className={classes.container}>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} info={tweet} windowSize={windowSize} />
      ))}
    </div>
  );
}

export default ListOfTweets;
