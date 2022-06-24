import React, { useEffect, useState } from 'react';
import classes from './app.module.css';
import { getTweets } from './apis/auth';

export default function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    getTweets().then((response) => {
      setTweets(response.data.results);
    });
  }, []);

  return <div className={classes.container}></div>;
}
