import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Posts } from "../components/posts/Allposts.jsx";

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
        <Route path="/">
          <Route index element={<Posts />} />
        </Route>
      </Routes>
    </>
  );
};
