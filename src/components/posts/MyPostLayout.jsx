import { Link } from "react-router-dom";
import { deletePost } from "../../services/postService.jsx";

export const MyPostLayout = ({ post, refresh }) => {
  const handleDelete = () => {
    deletePost(post).then(refresh);
  };

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
        <button className="delete-btn" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};
