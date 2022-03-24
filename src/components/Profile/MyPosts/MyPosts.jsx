import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
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
        < Post message = "Hi. How are you" likesCount="10"/>
        < Post message = "Hello. Im fine and you?" likesCount="0"/>
        < Post message = "Im great, thank you" likesCount="30"/>
      </div>
    </div>
   )
};

export default MyPosts;