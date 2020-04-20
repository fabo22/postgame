import React from 'react';
import {Link} from 'react-router-dom';

export default function PostCardNew({post}) { 
  return (
    <div className='container'>
      <div className="detail-header">
        <h3 className='detail-title'>{post.title}</h3>
        <p className='detail-data'><strong>{post.userCount} Player(s) Needed for {post.game}</strong></p>
      </div>
      <div className='detail-body'>
          <dd>{post.content}</dd>
      </div>
      <div className='detail-footer'>
        <Link style={{color: 'grey'}} to='/'>CLICK TO RETURN TO POSTS</Link>
      </div>
    </div>
  );
}