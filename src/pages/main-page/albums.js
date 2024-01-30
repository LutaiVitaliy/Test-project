import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {albumsRequest} from '../../actions/albums';


const Albums = ({albumsRequest, albums}) => {
    const {id} = useParams();

    useEffect(() => {
        albumsRequest(id)
    }, [id]);
    
    return (
        <div>
            {albums.map(album => {
                return (<div key={album.id}>{album.title}</div>)
            })}
        </div>
    );
};

export default connect((state) => ({albums: state.albums.albums}), {albumsRequest})(Albums);
