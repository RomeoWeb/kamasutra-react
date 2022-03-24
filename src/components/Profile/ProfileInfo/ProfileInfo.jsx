import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
   return (
     <div>
      <div className={s.main__img}>
        <img src="https://cdn.wallpapersafari.com/99/16/zUOgPe.jpg"/>
      </div>

      <div className={s.client}>
        <div className={s.client__img}>Аватарка</div>
        <div className={s.client__decs}>Описание клиента</div>
      </div>
    </div>
   )
};

export default ProfileInfo;