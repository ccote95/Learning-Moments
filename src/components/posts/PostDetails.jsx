import { useEffect, useState } from "react";
import { createLike, getPostById } from "../../services/postService.jsx";
import { useParams } from "react-router-dom";
import "./PostDetails.css";

export const PostDetailsView = ({ currentUser }) => {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const [hasLikedPost, setHasLikedPost] = useState(false);

  useEffect(() => {
    refreshPage();
  }, []);

  // if the current user id matches a like in the likes database set haslikepost to true
  useEffect(() => {
    if (post.likes) {
      const likedPost = post.likes.find(
        (like) => like.userId === currentUser.id
      );

      if (likedPost) {
        setHasLikedPost(true);
      }
    }
  }, [post, currentUser]);

  const refreshPage = () => {
    getPostById(postId).then((post) => {
      setPost(post);
    });
  };

  const handleLike = () => {
    const likedPost = {
      userId: currentUser.id,
      postId: post.id,
      isLiked: true,
      date: new Date().toDateString(),
    };
    createLike(likedPost).then(refreshPage);
  };

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
              hasLikedPost ? (
                <button>Unlike</button>
              ) : (
                <button className="btn" onClick={handleLike}>
                  Like
                </button>
              )
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

// figure out a way to check if the current user had already liked the post. if not then show the button to like. if they have dont show the button at all
