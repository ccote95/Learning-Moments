import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  deletePost,
  getPostByCurrentUserId,
  getPostById,
} from "../../services/postService.jsx";
import { useEffect, useState } from "react";
import "./MyPost.css";
import { MyPostLayout } from "./MyPostLayout.jsx";

export const MyPost = ({ currentUser }) => {
  //   const [post, setPost] = useState({});
  const [currentUsersPosts, setCurrentUsersPosts] = useState([]);
  //   const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    if (currentUser.id > 0) {
      getPostByCurrentUserId(parseInt(currentUser.id)).then((userPosts) => {
        setCurrentUsersPosts(userPosts);
      });
    }
  }, [currentUser]);

  const refreshAfterDelete = () => {
    getPostByCurrentUserId(parseInt(currentUser.id)).then((userPosts) => {
      setCurrentUsersPosts(userPosts);
    });
  };

  return (
    <div className="post-card">
      {currentUsersPosts.map((post) => {
        return (
          <MyPostLayout
            post={post}
            key={post.id}
            refresh={refreshAfterDelete}
          />
        );
      })}
    </div>
  );
};
