
//https://www.algoexpert.io/frontend/react-crash-course/state
// STARTS AT BOTTOM


// Action Types //////////   1
export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// Action Creators
export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});
src/redux/reducers.js

//  REDUCER     /////////// 2
import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST } from './actions';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload }; // update data from call in fetch users
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
src/redux/sagas.js
///////////////////////////
/// 
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USERS_REQUEST, fetchUsersSuccess, fetchUsersFailure } from './actions';

// 3 runs this 
function* fetchUsers() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
    yield put(fetchUsersSuccess(response.data)); // if successfull runs this action and give it data to update up there in reducer
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);  // step 2 hit the action, then this line watches for that action and 
  // run fetch user
}
src/redux/store.js
////////////////////////////

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './reducers';
import { watchFetchUsers } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchUsers);

export default store;



/////////////////////
// Step 4: Create the User List Component
src/components/UserList.js



///// start of how to use reducer / saga
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../redux/actions';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUsersRequest()); // dispatches here start step 1
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
// Step 5: Set Up the App Component
src/App.js


import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserList from './components/UserList';

const App = () => (
  <Provider store={store}>
    <div>
      <h1>User List</h1>
      <UserList />
    </div>
  </Provider>
);

export default App;