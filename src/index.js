import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


function Reddit(){
    const [posts, setPosts] = React.useState([]);
    const [theme, setTheme] = React.useState('blue');
    const onClickHandler = ()=>{setTheme(theme === 'red'? 'blue':'red');};
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
        <Text theme={theme  }/>
        <h1>{theme}</h1>
        <button onClick={onClickHandler}>ToggleTheme</button>
        <h1>/r/reactjs</h1>
        <ul style={{listStyleType:"none"}}>
          {posts.map(post => (
            <li key={post.id}><a href={post.url}>{post.title}</a><br /> Score: {post.score} Author: {post.author_fullname}</li>
          ))}
        </ul>
      </div>
    );
}

function Text({theme}){
  return(
      <h1 style={{color:`${theme}`}}>
          {theme}
      </h1>
  );
}

ReactDOM.render(<Reddit />, document.getElementById('root'));