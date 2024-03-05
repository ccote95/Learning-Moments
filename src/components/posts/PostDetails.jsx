import { useEffect, useState } from "react";
import { getAllPosts, getPostById } from "../../services/postService.jsx";
import { useParams } from "react-router-dom";
import "./PostDetails.css";

export const PostDetailsView = ({ currentUser }) => {
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
        <div className="pst-details-title">{post.title}</div>
        <div className="post-author">{post.user?.fullName}</div>
        <div className="post-details-topic">{post.topic?.name}</div>
      </section>
      <section className="post-body">
        <div className="body">{post.body}</div>
      </section>
      <section className="date-likes">
        <div className="date">{post.date}</div>
        {/* i want the button to appear if the current user is not the author. other wise just show the amount of likes  */}
        <div className="likes-container">
          <div className="btn-container">
            {currentUser.id != post.userId ? (
              <button className="btn">Like</button>
            ) : (
              <button>Edit Post</button>
            )}
          </div>
          <div className="post-likes">{post.likes?.length} Likes</div>
        </div>
      </section>
    </article>
  );
};
