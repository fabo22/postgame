import React from 'react';
import PostCardNew from '../../components/PostCardNew';

export default function PostDetailPage(props) {
  const post = props.location.location.state.post;
  return (
    <>
      <h1>Post Details</h1>
      <PostCardNew
        key={post._id}
        post={post}
      />
    </>
  );
}