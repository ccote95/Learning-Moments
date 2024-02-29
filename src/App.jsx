import { Posts } from "./components/posts/Allposts.jsx";
import "./App.css";

export const App = () => {
  return (
    <>
      <div className="title">
        <h1>Welcome to Learning Moments!</h1>
      </div>
      <Posts />
    </>
  );
};
