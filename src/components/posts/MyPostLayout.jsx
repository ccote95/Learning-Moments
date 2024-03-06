import { deletePost } from "../../services/postService.jsx";

export const MyPostLayout = ({ post, refresh }) => {
  const handleDelete = () => {
    deletePost(post).then(refresh);
  };

  return (
    <div className="post">
      <div className="post-title">{post.title}</div>

      <div className="btn-container">
        <button className="delete-btn" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};
