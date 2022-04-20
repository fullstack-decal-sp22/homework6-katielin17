import {useState} from "react";
import axios from 'axios';

const NewPost = () => {
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [post, setPost] = useState();
  const [posts, setPosts] = useState([]);

  const onSubmit = () => {
    console.log({
      id,
      title,
      body
    })
    const newPost = <Post title={title} body={body} postID={id}/>
    const updateArray = [...posts, newPost]
    setPosts(updateArray);
  }
  function clearInput() {
    setId('')
    setTitle('')
    setBody('')
  }

  const postData = () => {
    axios
      .post('http://localhost:3002/post', {"id":id, "title": title, "body": body, "comments": []}) 
      .then((response) => { clearInput(); })
      .catch((error) => console.log(error)); 
  }

  useEffect(() => {
    postData();
  }, []);


  return <div>
    <div>
      <input type="text" placeholder="ID" value={id} onChange={e => setId(e.target.value)} />
    </div>
    <div>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
    </div>
    <div>
      <input type="text" placeholder="Body" value={body} onChange={e => setBody(e.target.value)} />
    </div>
    <button style={{ marginTop: '4px'}} onClick={onSubmit}>
      Submit
    </button>
  </div>
}

export default NewPost;
