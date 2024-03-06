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
  const [currentUsersPosts, setCurrentUsersPosts] = useState([]);
  useEffect(() => {
    if (currentUser.id > 0) {
      getPostByCurrentUserId(parseInt(currentUser.id)).then((userPosts) => {
        setCurrentUsersPosts(userPosts);
        console.log(userPosts);
      });
    }
  }, []);

  useEffect(() => {
    if (currentUser.id > 0) {
      getPostByCurrentUserId(parseInt(currentUser.id)).then((userPosts) => {
        setCurrentUsersPosts(userPosts);
        console.log(userPosts);
      });
    }
  }, [currentUser]);
  console.log("my posts rendering", currentUsersPosts);

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
