let prefixSum = new Array(n + 1).fill(0);
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
setinr
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







//promis all
function promiseAll(promises){ //array of promisses
    const output = [];
    let count =0;
    return new Promise ((resolve, reject)=>{
        promises.forEach(promise => {
          promise.then((res)=>{    
              output.push(res);
              count++;
              if(count === promises.length){
                resolve(output)
              }
          }
          )
            .catch(reject)
        });

    })
}   

// let promises = [Promise.resolve(2),Promise.resolve(2)]
// promiseAll(promises)




// BST 

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this. right = null;
    }
}
class BST{
    constructor(){
        this.root = null
    }

    invertTree(root) {
        if(root === null) {
            return null
        }
        let temp = root.left
        root.left = root.right;
        root.right = temp;
        this.invertTree(root.left)
        this.invertTree(root.right)
    
        return root
    }

    insert(value){
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let temp = this.root
        while(true) {
            if(newNode.value == temp.value) return undefined //already in there
            if(newNode.value < temp.value){ // smaller so moveto left 
                if(temp.left === null) {
                    temp.left = newNode
                    return this;
                }
                temp = temp.left // setting the temp node to move to the left 
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp=temp.right;
            }
        }
    }

    contains(value) {
        if (this.root === null) return false
        let temp = this.root
        while (temp){
            if(value < temp.value) {
                temp = temp.left
            } else if (value > temp.value) {
                temp = temp.right
            } else {
                return true
            }
        }
        return false 
    }
    //prints out all the nodes in the tree
    breathFirstSearch (){
        let currentNode = this.root;
        let q = []
        let result = []
        q.push(currentNode);
        while (q.length){
            currentNode = q.shift();
            result.push(currentNode.value)
            if(currentNode.left){
                q.push(currentNode.left);
            }
            if(currentNode.right){
                q.push(currentNode.right)
            }
        }
        return result;
    }
    // preOrder we write to the array first 
    DFSPreOrder(){
        let result =[];
        function traverse(currentNode){
            result.push(currentNode.value) 
            if(currentNode.left) {
                traverse(currentNode.left)
            }
            if(currentNode.right){
                traverse(currentNode.right)
            }
        }
        traverse(this.root)
        return result
    }
// post order we write to the array last 
    DFSPost(){
        let result =[];
        function traverse(currentNode){
            if(currentNode.left) {
                traverse(currentNode.left)
            }
            if(currentNode.right){
                traverse(currentNode.right)
            }
            result.push(currentNode.value) 
        }
        traverse(this.root)
        return result
    }
    // we write the array in the middle
    DFSInOrder(){
        let result =[];
        function traverse(currentNode){
            if(currentNode.left) {
                traverse(currentNode.left)
            }
            if(currentNode.right){
                traverse(currentNode.right)
            }
            result.push(currentNode.value) 
        }
        traverse(this.root)
        return result
    }

     traverseWithLevel(root) {
        let result =[]; 
            let q = [root];
            let level =0;
            while (q.length > 0){
                let levelLength = q.length;
                let biggestLeft =null, biggestRight=null;
                for(let i =0 ; i < levelLength; i ++){
                    const currentNode = q.shift();
                    if(i === 0) {
                        biggestLeft = currentNode.value;
                    } else if(i === levelLength -1) {
                        biggestRight = currentNode.value
                    }

                    if(currentNode.left) q.push(currentNode.left)
                    if(currentNode.right) q.push(currentNode.right)
                }

                if(level % 2 === 0){
                    result.push(biggestLeft);
                }else { 
                    result.push(biggestRight);
                }
                level++;
            }
            return result;






        // if (!root) return [];  // Handle edge case where the tree is empty

        // const result = [];
        // const queue = [[root, 0]];  // Start BFS with the root node and level 0
    
        // while (queue.length > 0) {
        //     const levelSize = queue.length;  // Number of nodes at the current level
        //     let leftMost = null, rightMost = null;
    
        //     for (let i = 0; i < levelSize; i++) {
        //         const [node, level] = queue.shift();  // Get the node and its level
    
        //         // Update leftmost and rightmost nodes for this level
        //         if (i === 0) leftMost = node.value;  // First node at this level
        //         if (i === levelSize - 1) rightMost = node.value;  // Last node at this level
    
        //         // Add children to the queue for the next level
        //         if (node.left) queue.push([node.left, level + 1]);
        //         if (node.right) queue.push([node.right, level + 1]);
        //     }
    
        //     // Append the leftmost or rightmost value to the result based on the level
        //     if (result.length % 2 === 0) {
        //         result.push(leftMost);  // Even level, push leftmost value
        //     } else {
        //         result.push(rightMost);  // Odd level, push rightmost value
        //     }
        // }
    
        // return result;
      }
}
let myTree = new BST();

myTree.insert(47);
myTree.insert(21)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)
// console.log(myTree.root)
console.log(myTree.traverseWithLevel(myTree.root))

class MyCLass {
    constructor(x){
        return (async () =>{
            this.x = await this.initialize(x);
            return this
        })
    }
    async initialize(x){
        return Promise.resolve(x);
    }
}
const obj = await new MyCLass(x);

useEffect(()=>{
    async function fetchData(){
        try{
            const [fetchdata1, fetchdata2] = await Promise.all([
                fetch('ww.google.ocm').then(res=> res.json()), 
                fetch('ww.google.ocm').then(res=> res.json())
            ])
            // setdata(fetchdata);
        }catch (error){
            console.log(error)
        }finally{
            console.log("done")
        }
    }
},[])

async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json(); // Resolve the response to JSON
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error); // Handle any error
    } finally {
        console.log('Fetch attempt completed.'); // Runs regardless of success or failure
    }
}
catDIc = document.createElement('div');
categoryDiv.classList.add('cate')
catdic.innerHTML - "some texg"
let text = document.getElementById("divA").textContent;

.nav_list {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 2rem;
}
.nav_icon{
    font-size: 1.2rem;
}
.nav_item{
    grid-column: span 2;
}