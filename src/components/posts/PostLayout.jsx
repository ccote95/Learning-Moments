import "./Post.css";

export const PostLayout = ({ post }) => {
  return (
    <div className="post">
      <div className="post-title">{post.title}</div>

      <div className="post-topic">{post.topic.name}</div>

      <div className="post-likes">
        <span className="likes">Likes:</span>
        {post.likes.length}
      </div>
    </div>
  );
};
