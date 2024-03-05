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
    <article className="full-post">
      <section className="post-info">
        <div className="post-title">{post.title}</div>
        <div className="post-author">{post.user?.fullName}</div>
        <div className="post-topic">{post.topic?.name}</div>
      </section>
      <section className="post-body">
        <div className="body">{post.body}</div>
      </section>
      <section className="date-likes">
        <div className="date">{post.date}</div>
        <div className="likes">{post.likes?.length}</div>
      </section>
    </article>
  );
};
