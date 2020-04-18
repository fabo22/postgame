import React from 'react';
import AddComment from '../../components/AddComment';
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
	<div>
		<AddComment user={props.user} handleAddComment={props.handleAddComment} post={post}/>
		{post.comments.map(comment =>
		<>
		<h1>{comment.content}</h1>
		<p>{comment.commentUser.name}</p>
		</>
		)}
	</div>
    </>
  );
}