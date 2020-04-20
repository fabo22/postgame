import React from 'react';
import {Link} from 'react-router-dom';

export default function PostCardNew({post}) { 
  return (
    <div className='container'>
      <div className="detail-header">
        <h3 className='detail-title'>{post.title}</h3>
        <dd>{post.userCount}</dd>
        <dd>{post.game}</dd>
      </div>
      <div className='detail-body'>
          <dd>{post.content}</dd>
      </div>
      <div className='detail-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}