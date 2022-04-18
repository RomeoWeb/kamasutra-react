import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import d from './Dialogs.module.css';
import DialogItem  from './DialogItem/DialogItem';
import Message  from './Mesage/Mesage';

const Dialogs = (props)=> {
   // debugger;  
  
   let newMessageElement = useRef();

   let getNewMessage = () => {
      let text = newMessageElement.current.value;
   
   }
   
   let addMessage = () => {
   console.log('dfdfd');
      let text = newMessageElement.current.value;
      props.addNewMessage(text);
    
   }

   let dialog = props.state.dialogs.map(d => <DialogItem name = {d.name} id = {d.id}/> )
   let message = props.state.messages.map(m =>  <Message message = {m.message}/>)

   return (
      <div className={d.wrapper}>
         <h2 className={d.title}>Dialogs</h2>
         <div className={d.wrapperInner}>
            <div className={d.dialogs}>{dialog}</div>
            <div className={d.messages}>{message}</div>
         </div>
         <div className= {d.wrapper_message}>
            <textarea ref={newMessageElement} />
            <button onClick = {addMessage} className={d.button}>Add message</button>
         </div>
      </div>
   )
}

export default Dialogs;