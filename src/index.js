import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


function Reddit(){
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
      fetch(`https://www.reddit.com/r/reactjs.json`)
      .then(res=>res.json())
      .then((res)=>{
        const newPosts = res.data.children.map(obj => obj.data);
        setPosts(newPosts);
      }
      )
    },[])
    return(
      <div>
        <h1>/r/reactjs</h1>
        <ul style={{listStyleType:"none"}}>
          {posts.map(post => (
            <li key={post.id}><a href={post.url}>{post.title}</a><br /> Score: {post.score} Author: {post.author_fullname}</li>
          ))}
        </ul>
      </div>
    );
}

ReactDOM.render(<Reddit />, document.getElementById('root'));