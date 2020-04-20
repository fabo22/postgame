import React from 'react';
import AddComment from '../../components/AddComment';
import PostCardNew from '../../components/PostCardNew';
import './PostDetailPage.css';

export default function PostDetailPage(props) {
  const post = props.location.location.state.post;
  return (
    <div className="detail-container">
      <PostCardNew
        key={post._id}
        post={post}
      />
	<div>
		<AddComment user={props.user} handleAddComment={props.handleAddComment} post={post}/>
		{post.comments.map(comment =>
		<div className="comment-section">
      <p id="comment-content">{comment.content}</p>
      <p id="comment-name">Posted by {comment.commentUser.name}</p>
		</div>
		)}
	</div>
    </div>
  );
}