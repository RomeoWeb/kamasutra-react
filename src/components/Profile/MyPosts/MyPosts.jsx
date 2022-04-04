import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  // debugger;

   let post =
   props.post.map(p =>  < Post message = { p.post} likesCount = { p.likesCount }/>)
   return (
    <div className={s.posts_wrapper}>
      <h3>My Posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add Post</button>
      </div>
      <div className = {s.my_posts}>
        { post }
      </div>
    </div>
   )
};

export default MyPosts;