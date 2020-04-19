import React from 'react';
import PostCard from '../../components/PostCard';
import './PostListPage.css';

export default function PostListPage(props) {
    return (
        <div className="wrapper">
            <h1>All Posts</h1>
            <div className="post-container">
                {props.posts.map((post) => (
                    <PostCard
                        key={post._id}
                        post={post}
                        handleDeletePost={props.handleDeletePost}
                    />
                ))}
            </div>
        </div>
    );
}