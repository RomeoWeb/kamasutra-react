let rerenderEntireTree = () => {
   console.log('state changed');
}

let state = {
   profilePage: {
      posts : [
         {id: 1, post: 'Hi', likesCount: 20},
         {id: 2, post: 'How are you', likesCount: 20},
         {id: 3, post: 'What did you do yesterday?', likesCount: 50},
         {id: 4, post: 'Have a nice day', likesCount: 30}
      ],
      newPostText: "Lizka"
   },
   dialogsPage : {
      messages : [
         {id: 1, message: 'Hi'},
         {id: 2, message: 'How are you'},
         {id: 3, message: 'What did you do yesterday?'},
         {id: 4, message: 'Have a nice day'}
      ],
      dialogs: [
         {id: 1, name: 'Dimitch'},
         {id: 2, name: 'Andrey'},
         {id: 3, name: 'Sveta'},
         {id: 4, name: 'Olya'},
         {id: 5, name: 'Valera'},
         {id: 5, name: 'Sergey'}
      ]
   }
   
}

// window.state = state;
export const addPost = () => {
 
   let newPost  = {
      id: 6,
      post: state.profilePage.newPostText,
      likesCount: 30
   }
   state.profilePage.posts.push(newPost);
   state.profilePage.newPostText = '';
   rerenderEntireTree(state);

}

export const updateNewText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);

}

export const addNewMessage = (newMesaage) => {
 
  state.dialogsPage.messages = newMesaage;
  rerenderEntireTree(state);

}

export const subscribe = (observer) => {
   rerenderEntireTree = observer
}
export default state;
