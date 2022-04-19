import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import state, {addPost, updateNewText, addNewMessage, subscribe} from './redux/state';
import store from './redux/state';

  

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
       state = {state}
       addPost = {store.addPost.bind(store)}
       updateNewText = {store.updateNewText.bind(store)}
       addNewMessage = {store.addNewMessage.bind(store)}
       />
    </React.StrictMode>,
    document.getElementById('root')
  );
}


rerenderEntireTree(store.getState());
reportWebVitals();

store.subscribe(rerenderEntireTree);
