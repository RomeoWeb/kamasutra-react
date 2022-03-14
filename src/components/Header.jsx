import s from './Header.module.css';

const Header = () => {
   return (
   
      <header className={s.header}>
         <div className="container">
            <div className={s.logo}>
               <img className={s.logo__img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/640px-ZDF_logo%21_Logo_2021.svg.png" alt="logo" />
            </div>
         </div>
      </header>
  
   )
};

export default Header;