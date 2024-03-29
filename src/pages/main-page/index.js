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

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #333;
    font-weight: bold;
`;

const UserContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const UsernameContainer = styled.div`
    width: 180px;
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
                    return <UserContainer key={item.id}>
                        <UsernameContainer>{item.username}</UsernameContainer>
                        <StyledNavLink to={`/${item.id}/posts`}>Posts</StyledNavLink>
                        <StyledNavLink to={`/${item.id}/albums`}>Albums</StyledNavLink>
                    </UserContainer>
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