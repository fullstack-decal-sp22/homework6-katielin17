import React from 'react';
import Post from "./Post";
import NewPost from "./NewPost";
import axios from 'axios';

const Feed = () => {
  const [post, setPost] = useState();
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const onSubmit = () => {
    console.log({
      id,
      title,
      body
    })
    const newPost = {"id": id, "body": body, "title": title}
    const updateArray = [...post, newPost]
    setPost(updateArray);
  }

  const getPostsData = () => {
    axios
      .get('http://localhost:3002/posts') 
      .then((post) => setPost(post.data)) 
      .catch((error) => console.log(error)); 
  };

  useEffect(() => {
    getPostsData();
  }, []);

  return (
    <div style={{ maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
      {
        data ?
        data.map(d =>
          <Post title={d.title} body={d.body} key={d.id} comments = {d.comments}/>
        ) : 'loading'
      }

      <NewPost/>
    </div>
  )

}


export default Feed;
