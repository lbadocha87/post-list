import { useEffect, useState } from "react";
import Post from "./Post";
import LoadMoreButton from "./LoadMoreButton";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getData = (page) => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_start=${page}&_limit=10`
    )
      .then((response) => response.json())
      .then((json) => setPosts(posts.concat(json)));
  };

  useEffect(() => {
    getData(0);
  }, []);

  return (
    <div className="postList">
      {posts.map((post) => {
        return (
          <Post
            title={post.title}
            thumbnailUrl={post.thumbnailUrl}
            id={post.id}
            key={post.id}
          />
        );
      })}

      <LoadMoreButton postsLength={posts.length} getData={getData} />
    </div>
  );
};

export default PostList;
