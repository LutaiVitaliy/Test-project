import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {postsRequest} from '../../actions/posts';


export const Posts = ({postsRequest, posts}) => {
    const {id} = useParams();

    useEffect(() => {
        postsRequest(id)
    }, [id])

    return (
        <div>
            {posts.map(post => {
                return (
                    <div key={post.id}>
                        {post.title}
                        {post.body}
                    </div>
                )
            })}
        </div>
    );
};

export default connect((state) => ({posts: state.posts.posts}), {postsRequest})(Posts);
