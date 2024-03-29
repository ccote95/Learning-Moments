import "./Post.css";
import { Link } from "react-router-dom";

export const PostLayout = ({ post }) => {
  const filteredLikes = post.likes.filter((like) => like.isLiked === true);
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

      <div className="post-topic">{post.topic.name}</div>

      <div className="post-likes">
        <span className="likes">Likes:</span>
        {filteredLikes.length}
      </div>
    </div>
  );
};
