function lengthOfLongestSubstring(s) {

    let dic={}
    let l =0;
    let r =0;
    let len =0;
    // z x y z x y z
    // 0 1 2 3 4 5 6
    while (r < s.length){
      debugger
        while(dic[s[r]] === 1){
            delete dic[s[l]]
            l++
        }
        dic[s[r]]= 1;
        r++
        if(Object.keys(dic).length > len){
        len = Object.keys(dic).length;

        }
    }
    return len;
  }
  // lengthOfLongestSubstring("thequthequjumps")
  function searchMatrix(matrix, target) {
    let l = 0;
    let r = matrix.length-1;
    let correctRow;
    debugger
    while(l <= r) {
        let h = l + Math.floor((r-l) / 2);
        if(matrix[h][0] > target) {
            r= h-1;
            correctRow= h;

        } else if(matrix[h][0] < target) {
            l= h+1;
            correctRow= h;
        } 
    }
    console.log(correctRow)
    l = 0;
    r = matrix[correctRow].length-1;
    // console.log(matrix[correctRow][l + Math.floor((r-l) / 2)])
    while(l <= r) {
        let h = l + Math.floor((r-l) / 2);
        // console.log(h)
        if(matrix[correctRow][h] > target) {
            r= h-1;
            correctRow= h;

        } else if(matrix[correctRow][h] < target) {
            l= h+1;
            correctRow= h;
        } else {
            return true
        }
    }
    return false
  }
// searchMatrix([[1,3,5]], 0)

/**
 * Definition for a binary tree node.
 * }
*/

 class TreeNode {
     constructor(val = 0, left = null, right = null) {
        this.val = val;
         this.left = left;
         this.right = right;
     }

  invertTree(root) {
      if (root === null) return null;

      const node = new TreeNode(root.val);

      node.right = this.invertTree(root.left);
      node.left = this.invertTree(root.right);

      return node;
  }

 
// invertTree([1,2,3,4,5,6,7]);
}
// console.log(new TreeNode.invertTree[1,2,3,4,5,6,7]);
function subsets(nums) {
  const res = [];
  const subset = [];

    function dfs(nums, i, subset, res) {
      debugger
      if (i >= nums.length) {
          res.push([...subset]);
          return;
      }
      subset.push(nums[i]);
      dfs(nums, i + 1, subset, res);
      subset.pop();
      dfs(nums, i + 1, subset, res);
    }

  dfs(nums, 0, subset, res);
  return res;
  }
  console.log(subsets([1,2,3]))















  Step 2: Project Structure
Create the following directory structure:

bash
Copy code
/src
  /components
    UserList.js
  /redux
    actions.js
    reducers.js
    sagas.js
    store.js
// Step 3: Implement Redux Logic
src/redux/actions.js


// Action Types
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
      return { ...state, loading: false, users: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
src/redux/sagas.js


import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USERS_REQUEST, fetchUsersSuccess, fetchUsersFailure } from './actions';

function* fetchUsers() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/users');
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

export function* watchFetchUsers() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
}
src/redux/store.js


import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './reducers';
import { watchFetchUsers } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(userReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchUsers);

export default store;
// Step 4: Create the User List Component
src/components/UserList.js


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../redux/actions';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchUsersRequest());
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