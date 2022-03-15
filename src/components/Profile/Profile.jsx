import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
   return (
    <main className={s.main}>
      <div className={s.main__img}>
        <img src="https://cdn.wallpapersafari.com/99/16/zUOgPe.jpg"/>
      </div>
      <div className={s.client}>
        <div className={s.client__img}>Аватарка</div>
        <div className={s.client__decs}>Описание клиента</div>
        <div className={s.posts}>
          <div className={s.item}>Hello, everybody</div>
          <div className={s.item}>Hi, How are you?</div>
          <div className={s.item}>What a nice weather!</div>
        </div>
      </div>
      < MyPosts />
    </main>
   )
};

export default Profile;