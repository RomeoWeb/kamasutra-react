import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsData = [
    {id: 1, post: 'Hi', likesCount: 20},
    {id: 2, post: 'How are you', likesCount: 20},
    {id: 3, post: 'What did you do yesterday?', likesCount: 50},
    {id: 4, post: 'Have a nice day', likesCount: 30}
    ]
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
        < Post message = {postsData[0].post} likesCount = {postsData[0].likesCount}/>
        < Post message = {postsData[1].post} likesCount = {postsData[1].likesCount}/>
        < Post message = {postsData[2].post} likesCount = {postsData[2].likesCount}/>
        < Post message = {postsData[3].post} likesCount = {postsData[3].likesCount}/>
      </div>
    </div>
   )
};

export default MyPosts;