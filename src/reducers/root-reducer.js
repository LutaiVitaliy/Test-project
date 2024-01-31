import {combineReducers} from 'redux';
import {users} from './users';
import {posts} from './posts';
import { albums } from './albums';


const rootReducer = combineReducers({
    users,
    posts,
    albums
});

export default rootReducer;