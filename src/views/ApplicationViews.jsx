import { useEffect, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Posts } from "../components/posts/Allposts.jsx";
import { NavBar } from "../components/Nav/NavBar.jsx";
import { PostDetailsView } from "../components/posts/PostDetails.jsx";
import { NewPost } from "../components/posts/NewPost.jsx";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localLearningUser = localStorage.getItem("learning_user");
    const learningUserObject = JSON.parse(localLearningUser);
    setCurrentUser(learningUserObject);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route index element={<Posts />} />
          <Route path="posts">
            <Route
              path=":postId"
              element={<PostDetailsView currentUser={currentUser} />}
            />
          </Route>
          <Route path="newpost" element={<NewPost />}>
            {/* <Route element={<NewPost />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
};
