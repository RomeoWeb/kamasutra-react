import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

  
let postsData = [
  {id: 1, post: 'Hi', likesCount: 20},
  {id: 2, post: 'How are you', likesCount: 20},
  {id: 3, post: 'What did you do yesterday?', likesCount: 50},
  {id: 4, post: 'Have a nice day', likesCount: 30}
  ]

  let dialogsData = [
    {id: 1, name: 'Dimitch'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Olya'},
    {id: 5, name: 'Valera'},
    {id: 5, name: 'Sergey'}
 ]

 let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'What did you do yesterday?'},
    {id: 4, message: 'Have a nice day'}
    ]

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogs = {dialogsData} messages = {messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
