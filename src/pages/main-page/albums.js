import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {albumsRequest} from '../../actions/albums';


const Container = styled.div``;

const ItemContainer = styled.div``;

const TitleContainer = styled.h4``;

const Albums = ({albumsRequest, albums}) => {
    const {id} = useParams();

    useEffect(() => {
        albumsRequest(id)
    }, [id]);
    
    return (
        <Container>
            {albums.map(album => {
                return (<ItemContainer key={album.id}><TitleContainer>{album.title}</TitleContainer></ItemContainer>)
            })}
        </Container>
    );
};

export default connect((state) => ({albums: state.albums.albums}), {albumsRequest})(Albums);
