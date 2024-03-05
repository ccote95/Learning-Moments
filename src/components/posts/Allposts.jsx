import { useEffect } from "react";
import { useState } from "react";
import { getAllPosts } from "../../services/postService.jsx";
import { PostLayout } from "./PostLayout.jsx";
import { PostFilterBar } from "./PostFiler.jsx";
import { GetAllTopics } from "../../services/TopicService.jsx";
import { SearchTopic } from "./SearchBar.jsx";
import { Link } from "react-router-dom";
import "./Post.css";

export const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [showFilteredPosts, setShowFilteredPosts] = useState(0);
  const [allTopics, setAllTopics] = useState([]);
  const [searchTopic, setSearchTopic] = useState("");

  useEffect(() => {
    getAllPosts().then((postArray) => {
      setAllPosts(postArray);
    });
  }, []);
  useEffect(() => {
    GetAllTopics().then((topicArray) => {
      setAllTopics(topicArray);
    });
  }, []);
  console.log(allTopics);

  useEffect(() => {
    if (parseInt(showFilteredPosts) != 0) {
      const chosenTopic = allPosts.filter(
        (post) => post.topicId === parseInt(showFilteredPosts)
      );
      setFilteredPosts(chosenTopic);
    } else {
      setFilteredPosts(allPosts);
    }
  }, [showFilteredPosts, allPosts]);
  console.log(allPosts);

  useEffect(() => {
    const foundTopic = allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTopic.toLowerCase())
    );
    setFilteredPosts(foundTopic);
  }, [searchTopic, allPosts]);

  return (
    <>
      <div>
        <PostFilterBar
          allTopics={allTopics}
          setShowFilteredPosts={setShowFilteredPosts}
          setSearchTopic={setSearchTopic}
        />
      </div>
      <div className="post-card">
        {filteredPosts.map((postObj) => {
          return <PostLayout post={postObj} key={postObj.id} />;
        })}
      </div>
    </>
  );
};
