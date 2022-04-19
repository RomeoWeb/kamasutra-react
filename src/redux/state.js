export let store = {
   _state: {
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

   },
   getState() {
      // debugger;
      return this._state;
   },
   _callsubscriber() {
      console.log('state changed');
   },
   addPost() {
      // debugger;
      let newPost  = {
         id: 6,
         post: this._state.profilePage.newPostText,
         likesCount: 30
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callsubscriber(this._state);
   },
   updateNewText(newText) {
      this._state.profilePage.newPostText = newText;
      this._callsubscriber(this._state);
   },
   subscribe(observer) {
      this._callsubscriber = observer
   },
   addNewMessage (newMesaage) {
      this.dialogsPage.messages = newMesaage;
      this._callsubscriber(this._state);
   }
}

window.store = store;

export default store;
