import { useEffect, useState } from "react";
import { GetAllTopics } from "../../services/TopicService.jsx";
import { TopicDropDown } from "./Dropdown.jsx";
import "./NewPost.css";
import { createNewPost } from "../../services/postService.jsx";

export const NewPost = ({ currentUser }) => {
  const [allTopics, setAllTopics] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [newPostTopic, setNewPostTopic] = useState();
  const [newPostBody, setNewPostBody] = useState("");

  useEffect(() => {
    GetAllTopics().then((topicArray) => {
      setAllTopics(topicArray);
    });
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const newPostObject = {
      userId: currentUser.id,
      title: titleInput,
      topicId: parseInt(newPostTopic),
      body: newPostBody,
      date: new Date().toDateString(),
    };
    createNewPost(newPostObject);
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="form" onSubmit={handleSave}>
          <div className="new-pst-title">
            <input
              type="text"
              placeholder="Post Title"
              required
              onChange={(event) => {
                setTitleInput(event.target.value);
              }}
            />
          </div>
          <div>
            <select
              required
              className="new-pst-topic"
              defaultValue="0"
              onChange={(event) => {
                setNewPostTopic(event.target.value);
              }}
            >
              <option>All Topics</option>
              {allTopics.map((topic) => {
                return <TopicDropDown topic={topic} key={topic.id} />;
              })}
            </select>
          </div>
          <div className="post-text">
            <textarea
              required
              className="text"
              type="text"
              placeholder="type your post here"
              onChange={(event) => {
                setNewPostBody(event.target.value);
              }}
            ></textarea>
            <button className="save-btn" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

/* need to write the functionality of the save button
when a user has filled out each part of the form only then should the send button work
when a user hits save it should send the post to the database, it will need the post title, topic, body, currentuser
 */
