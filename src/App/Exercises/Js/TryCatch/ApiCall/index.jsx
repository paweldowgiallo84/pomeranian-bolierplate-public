import React, { useEffect, useState } from 'react';

const ApiCallExercises = () => {
  const [getPosts, setPosts] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);
  const [getError, setError] = useState(null);

  const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

  useEffect(() => {
    async function fetchPosts() {
      try {
        const respoonse = await fetch(`${BASE_API_URL}/posts`);
        if (!respoonse.ok) {
          throw new Error('Network respoonse was not ok');
        }
        const postsData = await respoonse.json();
        setPosts(postsData);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
        console.log('We got this!');
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      {getIsLoading && 'Loading'}
      {getError && getError}
      <ul>
        {getPosts.map((post) => (
          <li key={post?.id}>{post?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiCallExercises;

/*
fetch()
axios()

https://redux-toolkit.js.org/rtk-query/overview

*/