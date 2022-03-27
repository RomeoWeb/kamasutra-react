import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';
import DialogItem  from './DialogItem/DialogItem';
import Message  from './Mesage/Mesage';

const Dialogs = (props)=> {

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

   let dialog = dialogsData.map(d => <DialogItem name = {d.name} id = {d.id}/> )
   let message = messagesData.map(m =>  <Message message = {m.message}/>)

   return (
      <div className={d.wrapper}>
         <h2 className={d.title}>Dialogs</h2>
         <div className={d.wrapperInner}>
            <div className={d.dialogs}>

               {dialog}
               
            </div>
            <div className={d.messages}>
               {message}
            </div>
         </div>
      </div>
   )
}

export default Dialogs;