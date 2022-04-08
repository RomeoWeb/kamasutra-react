import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  // debugger;
   return (
    <main className={s.main}>
      < ProfileInfo /> 
      < MyPosts post = { props.state.posts } addPost = {props.addPost}/>
    </main>
   )
};

export default Profile;