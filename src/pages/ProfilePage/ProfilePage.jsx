import React from 'react';
import './ProfilePage.css';

export default function ProfilePage(props) {
    return (
        <div id="profile-content">
          <h1 id="profile-title">{props.user.name}'s Profile</h1>
          <img id="profile-images" src={props.user.avatar}/>
        </div>
      );
}