import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  // debugger;
   return (
    <main className={s.main}>
      < ProfileInfo /> 
      < MyPosts
         post = {props.profilePage.posts }
         newPostText = {props.profilePage.newPostText}
         addPost = {props.addPost}
         updateNewText = {props.updateNewText}/>
    </main>
   )
};

export default Profile;