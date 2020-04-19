import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ user, post, handleDeletePost }) {
    
	return (
		<div className="row">
			<div className="col s12 m6">
				<div className="card mat-card">
					<div className="card-content black-text">
                        <h3>{post.title}</h3>
                        <p>Created By: { post.postUser.name }</p>
						<p>Game: { post.game }</p>
					</div>
					{/* {user.name === post.postUser.name ? */}
					<div className="card-action">
						<Link onClick={() => handleDeletePost(post._id)}>Delete Post</Link>
                        <Link to={{ pathname: '/post-details', state: { post } }}>Details</Link>
					</div>
						{/* : */}
					
				</div>
			</div>
		</div>
	);
}