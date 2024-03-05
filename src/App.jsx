import { Posts } from "./components/posts/Allposts.jsx";
import "./App.css";
import { Login } from "./components/auth/Login.jsx";
import { Register } from "./components/auth/Register.jsx";
import { Authorized } from "./views/Authorized.jsx";
import { ApplicationViews } from "./views/ApplicationViews.jsx";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <div className="title">
        <h1>Welcome to Learning Moments!</h1>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            <Authorized>
              <ApplicationViews />
            </Authorized>
          }
        />
      </Routes>
    </>
  );
};
