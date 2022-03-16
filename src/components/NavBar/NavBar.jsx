import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
   return (
      <nav className={s.menu}>
        <ul className="menu__list">
          <li className={s.item}><NavLink to ='/profile' className={navData=>navData.isActive ? s.active : s.item}>Profile</NavLink></li>
          <li className={`${s.item} ${s.active}`}><NavLink to='/dialogs' className={navData=>navData.isActive ? s.active : s.item}>Messages</NavLink></li>
          <li className={s.item}>News</li>
          <li className={s.item}>Massages 2</li>
        </ul>
    </nav>
   )
};

export default NavBar;