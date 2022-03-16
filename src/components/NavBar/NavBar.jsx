import s from './NavBar.module.css';

const NavBar = () => {
   return (
      <nav className={s.menu}>
        <ul className="menu__list">
          <li className={s.item}><a href='/profile'>Profile</a></li>
          <li className={`${s.item} ${s.active}`}><a href='/dialogs'>Messages</a></li>
          <li className={s.item}>News</li>
          <li className={s.item}>Massages 2</li>
        </ul>
    </nav>
   )
};

export default NavBar;