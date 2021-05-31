import React, { useEffect, useState } from 'react';

const Detail = (props) => {
  const [post, setPost] = useState();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${props.match.params.id}`)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
        console.log(post);
      });
  }, []);
  return (
    <div>
      <h1>Burası detaylar sayfası</h1>
      <h2>{props.match.params.id}</h2>
      <h3>{post?.title}</h3>
    </div>
  );
};

export default Detail;
