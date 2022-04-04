import s from './Post.module.css';


const Post = (props) => {


   return ( 
    <div>
      <div className={s.item}>
        <img className={s.item_img} src = 'https://econet.ru/uploads/pictures/456175/content_photo_1.jpg'/>
        <span className = {s.post_text}>{props.message}</span>
        <div className={s.post_like}>Likes: {props.likesCount}</div>
      </div>
    </div>
   )
};

export default Post;