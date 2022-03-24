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
   return (
      <div className={d.wrapper}>
         <h2 className={d.title}>Dialogs</h2>
         <div className={d.wrapperInner}>
            <div className={d.dialogs}>
               <DialogItem name = 'Dimitch' id= '1'/>
               <DialogItem name = 'Andrey' id= '2'/>
               <DialogItem name = 'Sveta' id= '3'/>
               <DialogItem name = 'Olya' id= '4'/>
               <DialogItem name = 'Valera' id= '5'/>
               <DialogItem name = 'Sergey' id= '6'/>
               
            </div>
            <div className={d.messages}>
               <Message message = 'Hi'/>
               <Message message = 'How are you'/>
               <Message message = 'What did you do yesterday?'/>
               <Message message = 'Have a nice day'/>
              
            </div>
         </div>
      </div>
   )
}

export default Dialogs;