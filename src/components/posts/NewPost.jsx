import { useEffect, useState } from "react";
import { GetAllTopics } from "../../services/TopicService.jsx";
import { TopicDropDown } from "./Dropdown.jsx";

export const NewPost = () => {
  const [allTopics, setAllTopics] = useState([]);
  useEffect(() => {
    GetAllTopics().then((topicArray) => {
      setAllTopics(topicArray);
    });
  }, []);

  return (
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
        <div>
          <input type="text" placeholder="type your post here" />
        </div>
      </form>
    </div>
  );
};
