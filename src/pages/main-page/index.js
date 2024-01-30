import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import {usersRequest} from '../../actions/users';


const Container = styled.div`
    display: flex;
`;

const UsersContainer = styled.div`
    min-width: 300px;
`;

const OutletContainer = styled.div`
    margin-left: 20px;
`;

const MainPage = ({usersRequest, users}) => {
    useEffect(() => {
        usersRequest();
    }, []);

    const [searchValue, setSearchValue] = useState('');
    const handleChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    };

    const [sortOrder, setSortOrder] = useState('asc');
    const handleSortOrderChange = () => {
        setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
    };

    const filteredAndSortedUsers = users
    .filter((user) =>
        user.username.toLowerCase().includes(searchValue.toLowerCase())
    )
    .sort((a, b) => {
        const usernameA = a.username.toLowerCase();
        const usernameB = b.username.toLowerCase();

        if (sortOrder === 'asc') {
            return usernameA.localeCompare(usernameB);
        } else {
            return usernameB.localeCompare(usernameA);
        };
    });

    return (
        <Container>
            <UsersContainer>
                <input placeholder='Search' value={searchValue} onChange={handleChangeSearchValue}/>
                <button onClick={handleSortOrderChange}>Change Sort</button>
                {filteredAndSortedUsers.map(item => {
                    return <div key={item.id}>
                        {item.username}
                        <NavLink to={`/${item.id}/posts`}>Posts</NavLink>
                        <NavLink to={`/${item.id}/albums`}>Albums</NavLink>
                    </div>
                })}
            </UsersContainer>
            <OutletContainer>
                <Outlet />
            </OutletContainer>
        </Container>
    );
};

export default connect((state) => ({
    users: state.users.users
}), {usersRequest})(MainPage);