import React from 'react';
import PostCard from '../../components/PostCard';
import './PostListPage.css';

export default function PostListPage(props) {
    return (
        <div className="wrapper">
            <h1 id="all-post-title">All Posts</h1>
            {console.log(props)}
            <div className="post-container">
                {props.posts.map((post) => (
                    <PostCard
                        key={post._id}
                        post={post}
                        handleDeletePost={props.handleDeletePost}
                        user={props.user}
                    />
                ))}
            </div>
        </div>
    );
}