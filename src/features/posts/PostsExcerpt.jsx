// import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectPostById } from './postsSlice';
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";


let PostsExcerpt = ({ postId }) => {
    const post = useSelector(state => selectPostById(state, postId));

    return (
        <article>
            <h2>{post.title}</h2>

            <p>{post.body.substring(0, 75)}...</p>

            <p>
                <Link to={`post/${post.id}`}>
                    View Post
                </Link>

                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>

            <ReactionButtons post={post} />
        </article>
    );
};

// MEMO USE
// PostsExcerpt = React.memo(PostsExcerpt);

export default PostsExcerpt;