import React from 'react';
import PostCard from '../../components/PostCard';

export default function PostDetailPage(props) {
	const post = props.location.state.post;
	return (
		<>
			<div className="wrapper">
				<h1>Post Details</h1>
				<PostCard key={post._id} post={post} />
			</div>
		</>
	);
}