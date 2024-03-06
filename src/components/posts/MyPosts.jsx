import { useParams } from "react-router";
import { getPostById } from "../../services/postService.jsx";
import { useEffect, useState } from "react";

export const MyPost = ({ currentUser }) => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [currentUsersPosts, setCurrentUsersPosts] = useState({});

  useEffect(() => {
    refreshPage();
  }, []);

  const refreshPage = () => {
    getPostById(postId).then((post) => {
      setPost(post);
    });
  };

  useEffect(() => {
    if (post.userId === currentUser.id) {
      setCurrentUsersPosts(post);
    }
  }, [post, currentUser]);

  return (
    <div className="post-card">
      <div className="post">
        <div className="post-title">{currentUsersPosts.title}</div>
      </div>
    </div>
  );
};
