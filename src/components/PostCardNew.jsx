import React from 'react';
import {Link} from 'react-router-dom';

export default function PostCardNew({post}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{post.title}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Content</dt>
          <dd>{post.content}</dd>
          <dt>User Count</dt>
          <dd>{post.userCount}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}