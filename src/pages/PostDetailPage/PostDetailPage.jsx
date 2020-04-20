import React from 'react';
import AddComment from '../../components/AddComment';
import PostCardNew from '../../components/PostCardNew';
import './PostDetailPage.css';

export default function PostDetailPage(props) {
  const post = props.location.location.state.post;
  return (
    <>
      <PostCardNew
        key={post._id}
        post={post}
      />
	<div>
		<AddComment user={props.user} handleAddComment={props.handleAddComment} post={post}/>
		{post.comments.map(comment =>
		<div className="comment-section">
      <h1 id="comment-content">{comment.content}</h1>
      <p id="comment-name">{comment.commentUser.name}</p>
		</div>
		)}
	</div>
    </>
  );
}