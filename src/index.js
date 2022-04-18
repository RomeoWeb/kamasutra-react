import reportWebVitals from './reportWebVitals';
import state, {subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewText, addNewMessage} from './redux/state'

  

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
       state = {state}
       addPost = {addPost}
       updateNewText = {updateNewText}
       addNewMessage = {addNewMessage}
       />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


rerenderEntireTree(state);
reportWebVitals();

subscribe(rerenderEntireTree);
