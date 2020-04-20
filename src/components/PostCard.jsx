import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ user, post, handleDeletePost }) {
    
	return (
		<div className="row">
			<div className="col s12 m6">
				<div className="card mat-card">
					<div className="card-content white-text mat-content">
                        <h3>{post.title}</h3>
                        <p>Created By: { post.postUser.name }</p>
						<p>Game: { post.game }</p>
					</div>
					{user && user.name === post.postUser.name ?
					<div className="card-action">
						<Link style={{color: "red"}} onClick={() => handleDeletePost(post._id)}>Delete Post</Link>
                        <Link style={{color: "gray"}} to={{ pathname: '/post-details', state: { post } }}>Details</Link>
					</div>
					: 
					<div className="card-action">
						<Link style={{color: "gray"}} to={{ pathname: '/post-details', state: { post } }}>Details</Link>
					</div>
					}
					
				</div>
			</div>
		</div>
	);
}