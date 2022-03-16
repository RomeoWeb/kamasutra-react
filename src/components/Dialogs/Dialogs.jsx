import d from './Dialogs.module.css';

const Dialogs = (props)=> {
   return (
      <div className={d.wrapper}>
         <h2 className={d.title}>Dialogs</h2>
         <div className={d.wrapperInner}>
            <div className={d.dialogs}>
               <div className={d.dialogsItem + ' '+ d.active}>Dmytriy</div>
               <div className={d.dialogsItem}>Andrey</div>
               <div className={d.dialogsItem}>Sveta</div>
               <div className={d.dialogsItem}>Olya</div>
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