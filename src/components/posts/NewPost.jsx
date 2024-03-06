import { useEffect, useState } from "react";
import { GetAllTopics } from "../../services/TopicService.jsx";
import { TopicDropDown } from "./Dropdown.jsx";
import "./NewPost.css";

export const NewPost = () => {
  const [allTopics, setAllTopics] = useState([]);
  useEffect(() => {
    GetAllTopics().then((topicArray) => {
      setAllTopics(topicArray);
    });
  }, []);

  return (
    <div className="container">
      <div className="form-container">
        <form className="form">
          <div className="new-pst-title">
            <input type="text" placeholder="Post Title" />
          </div>
          <div>
            <select className="new-pst-topic">
              <option>All Topics</option>
              {allTopics.map((topic) => {
                return <TopicDropDown topic={topic} key={topic.id} />;
              })}
            </select>
          </div>
          <div className="post-text">
            <textarea
              className="text"
              type="text"
              placeholder="type your post here"
            ></textarea>
            <button className="save-btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};
