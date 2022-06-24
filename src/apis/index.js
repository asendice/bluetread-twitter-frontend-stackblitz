import axios from 'axios';

export const getTweets = () => {
  return axios
    .get('http://localhost:8000/api/tweets')
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};
