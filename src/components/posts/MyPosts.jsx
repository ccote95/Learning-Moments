import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  getPostByCurrentUserId,
  getPostById,
} from "../../services/postService.jsx";
import { useEffect, useState } from "react";
import "./MyPost.css";

export const MyPost = ({ currentUser }) => {
  const [post, setPost] = useState({});
  const [currentUsersPosts, setCurrentUsersPosts] = useState([]);
  //   const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    if (currentUser.id > 0) {
      getPostByCurrentUserId(parseInt(currentUser.id)).then((userPosts) => {
        setCurrentUsersPosts(userPosts);
      });
    }
  }, [currentUser]);
  console.log(currentUsersPosts);

  return (
    <div className="post-card">
      {currentUsersPosts.map((post) => {
        return (
          <div className="post">
            <div className="post-title">
              <Link
                to={`/posts/${post.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                {post.title}
              </Link>
            </div>
            <div className="btn-container">
              <button className="delete-btn">DELETE</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
