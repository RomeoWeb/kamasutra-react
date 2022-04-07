import { useRef } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let newPostElement = useRef();
  //let newPostElement = React.creatRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

   let post =
   props.post.map(p =>  < Post message = { p.post} likesCount = { p.likesCount }/>)
   return (
    <div className={s.posts_wrapper}>
      <h3>My Posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div className = {s.my_posts}>
        { post }
      </div>
    </div>
   )
};

export default MyPosts;