import { NavLink } from 'react-router-dom';
import d from './Dialogs.module.css';


const Dialogs = (props)=> {
   return (
      <div className={d.wrapper}>
         <h2 className={d.title}>Dialogs</h2>
         <div className={d.wrapperInner}>
            <div className={d.dialogs}>
               <div className={d.dialogsItem + ' '+ d.active}><NavLink to="/dialogs/1">Dmytriy</NavLink></div>
               <div className={d.dialogsItem}><NavLink to="/dialogs/2">Andrey</NavLink></div>
               <div className={d.dialogsItem}><NavLink to="/dialogs/3">Sveta</NavLink></div>
               <div className={d.dialogsItem}><NavLink to="/dialogs/4">Olya></NavLink></div>
            </div>
            <div className={d.messages}>
               <div className={d.messagesItem}>Hi</div>
               <div className={d.messagesItem}>How are you</div>
               <div className={d.messagesItem}>What did you do yesterday?</div>
               <div className={d.messagesItem}>Have a nice day</div>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;