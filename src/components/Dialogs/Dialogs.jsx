import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';
import DialogItem  from './DialogItem/DialogItem';
import Message  from './Mesage/Mesage';

const Dialogs = (props)=> {

   let dialog = props.state.dialogs.map(d => <DialogItem name = {d.name} id = {d.id}/> )
   let message = props.state.messages.map(m =>  <Message message = {m.message}/>)

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