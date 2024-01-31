import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {postsRequest} from '../../actions/posts';


const Container = styled.div``;

const ItemContainer = styled.div``;

const TitleContainer = styled.h4``;

const BodyContainer = styled.div``;

export const Posts = ({postsRequest, posts}) => {
    const {id} = useParams();

    useEffect(() => {
        postsRequest(id)
    }, [id])

    return (
        <Container>
            {posts.map(post => {
                return (
                    <ItemContainer key={post.id}>
                        <TitleContainer>{post.title}</TitleContainer>
                        <BodyContainer>{post.body}</BodyContainer>
                    </ItemContainer>
                )
            })}
        </Container>
    );
};

export default connect((state) => ({posts: state.posts.posts}), {postsRequest})(Posts);
