import { useEffect, useState } from "react";
import { getAllPosts, getPostById } from "../../services/postService.jsx";
import { useParams } from "react-router-dom";

export const PostDetailsView = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    getPostById(postId).then((post) => {
      // const postObj = data[0];
      setPost(post);
    });
  }, []);

  //   useEffect(() => {
  //     const foundPost = post
  //   },[])
  console.log("these are posts", post);
  return (
    <article>
      <section>
        <div>{post.title}</div>
        <div>{post.user?.fullName}</div>
        <div>{post.topic?.name}</div>
      </section>
      <section>
        <div>{post.body}</div>
      </section>
      <section>
        <div>{post.date}</div>
        <div>{post.likes?.length}</div>
      </section>
    </article>
  );
};
