import { useEffect, useState } from "react";
import { GetAllTopics } from "../../services/TopicService.jsx";
import { TopicDropDown } from "./Dropdown.jsx";
import "./NewPost.css";
import {
  createNewPost,
  getPostByIdForEdit,
  updatePost,
} from "../../services/postService.jsx";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
export const NewPost = ({ currentUser }) => {
  const [post, setPost] = useState({});
  const [allTopics, setAllTopics] = useState([]);
  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    GetAllTopics().then((topicArray) => {
      setAllTopics(topicArray);
    });
  }, []);

  useEffect(() => {
    if (postId) {
      getPostByIdForEdit(postId).then((postObj) => {
        setPost(postObj);
      });
    }
  }, [postId]);

  const handleSave = (e) => {
    e.preventDefault();
    if (postId) {
      const updatedPost = {
        id: post.id,
        userId: currentUser.id,
        title: post.title,
        topicId: parseInt(post.topicId),
        body: post.body,
        date: post.date,
      };

      updatePost(updatedPost).then(() => {
        navigate(`/myposts`);
      });
    } else {
      const newPostObject = {
        userId: currentUser.id,
        title: post.title,
        topicId: parseInt(post.topicId),
        body: post.body,
        date: new Date().toDateString(),
      };
      createNewPost(newPostObject);
      navigate(`/myposts`);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="form" onSubmit={handleSave}>
          <div className="new-pst-title">
            <input
              className="title-input"
              type="text"
              value={post.title || ""}
              placeholder="Post Title"
              required
              onChange={(event) => {
                const postCopy = { ...post };
                postCopy.title = event.target.value;
                setPost(postCopy);
              }}
            />
          </div>
          <div>
            <select
              required
              className="new-pst-topic"
              value={post.topicId || "0"}
              onChange={(event) => {
                const postCopy = { ...post };
                postCopy.topicId = event.target.value;
                setPost(postCopy);
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
              value={post.body}
              type="text"
              placeholder="type your post here"
              onChange={(event) => {
                const postCopy = { ...post };
                postCopy.body = event.target.value;
                setPost(postCopy);
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
