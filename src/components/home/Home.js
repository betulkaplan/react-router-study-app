import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`details/${id}`);
  };
  return (
    <div>
      {posts?.map((post) => (
        <div
          key={post.id}
          onClick={() => handleClick(post.id)}
          style={{
            border: '2px solid black',
            margin: '10px',
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: '#99f9f9',
          }}
        >
          <h3 style={{ textTransform: 'uppercase' }}>{post.title}</h3>
          <p>Status: {post.completed ? 'Completed' : 'Not Completed'}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
