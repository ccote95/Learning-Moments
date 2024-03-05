import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <ul>
      <li>
        <Link to="/posts">All Posts</Link>
      </li>
      {localStorage.getItem("learning_user") ? (
        <li>
          <Link
            to=""
            onClick={() => {
              localStorage.removeItem("learning_user");
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
