import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    
   return (
    <main className={s.main}>
      < ProfileInfo /> 
      < MyPosts post = { props.post }/>
    </main>
   )
};

export default Profile;