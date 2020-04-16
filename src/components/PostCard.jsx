import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post, handleDeletePost }) {
    
	return (
		<div className="row">
			<div className="col s12 m6">
				<div className="card">
					<div className="card-content black-text">
                        <h3>{post.title}</h3>
                        <p>Created By: { post.postUser }</p>
                        { console.log(post.postUser) }
					</div>
					<div>
						<dl>
							<dd>{post.content}</dd>

						</dl>
					</div>
					<div className="card-action">
                        <Link to={{ pathname: '/post-details', state: { post } }}>Details</Link>
						<Link to={{ pathname: '/edit-post', state: { post } }}>Edit Post</Link>
						<Link onClick={() => handleDeletePost(post._id)}>Delete Post</Link>
					</div>
				</div>
			</div>
		</div>
	);
}