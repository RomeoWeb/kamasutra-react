import s from './Post.module.css';


const Post = (props) => {
   return ( 
    <div>
      <div className={s.item}>
        <img className={s.item_img}src = 'https://econet.ru/uploads/pictures/456175/content_photo_1.jpg'/>
        {props.message +' '+ 'Likes: ' + props.likesCount}
      </div>
    </div>
   )
};

export default Post;