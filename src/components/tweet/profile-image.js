import React from 'react';
import classes from './profile-image.module.css';

function ProfileImage({ image }) {
  return <img className={classes.profileImage} alt="profile" src={image} />;
}

export default ProfileImage;
