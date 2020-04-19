import React from 'react';

export default function ProfilePage(props) {
    return (
        <div>
          <h1>My Profile !</h1>
          <img id="images" src={props.user.avatar}/>
        </div>
      );
}