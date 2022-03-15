import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
   return (
    <div>
      <div>My Posts</div>
      <textarea></textarea>
      <button>Add Post</button>
      < Post />
      < Post />
      < Post />
      < Post />
      < Post />
    </div>
   )
};

export default MyPosts;