import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';

const DialogItem = (props) => {
   let path = "/dialogs/" + props.id;
   return(
      <div className={d.dialogsItem + ' '+ d.active}><NavLink to={path}>{props.name}</NavLink></div>
   )
}
const Message = (props)=> {
   
   return (
      <div className={d.messagesItem}>{props.message}</div>
   )
}

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

   return (
      <div className={d.wrapper}>
         <h2 className={d.title}>Dialogs</h2>
         <div className={d.wrapperInner}>
            <div className={d.dialogs}>

               <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>
               <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id}/>
               <DialogItem name = {dialogsData[2].name} id = {dialogsData[2].id}/>
               <DialogItem name = {dialogsData[3].name} id = {dialogsData[3].id}/>
               <DialogItem name = {dialogsData[4].name} id = {dialogsData[4].id}/>
               <DialogItem name = {dialogsData[5].name} id = {dialogsData[5].id}/>
               
            </div>
            <div className={d.messages}>
               <Message message = {messagesData[0].message}/>
               <Message message = {messagesData[1].message}/>
               <Message message = {messagesData[2].message}/>
               <Message message = {messagesData[3].message}/>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;