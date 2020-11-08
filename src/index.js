import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

function Room(){
  const [temp, setTemp] =React.useState(22);
  const state = React.useState(true);
  const isLit = state[0];
  const setLit = state[1];
  const brightness = isLit ? 'lit' : 'dark';

  return(
    <div className={brightness}>
      <p>The room is {isLit ? 'lit' : 'dark'}.</p>
      <button onClick={()=> setLit(!isLit)}>Toggle</button>
      <button onClick={()=>{setLit(true)}}>On</button>
      <button onClick={()=>{setLit(false)}}>Off</button>
      <p>Room Temperature is {temp} Celsius.</p>
      <button onClick={()=>{setTemp(temp+1)}}>+</button>
      <button onClick={()=>{setTemp(temp-1)}}>-</button>
    </div>
  );
}

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