import { TopicDropDown } from "./Dropdown.jsx";
import { SearchTopic } from "./SearchBar.jsx";
import "./PostFilter.css";

export const PostFilterBar = ({
  allTopics,
  setShowFilteredPosts,
  setSearchTopic,
}) => {
  const handleChange = (event) => {
    setShowFilteredPosts(event);
  };
  return (
    <div className="filter-bar">
      <div>
        <select
          className="filter-dropdown"
          defaultValue="0"
          onChange={(event) => {
            handleChange(event.target.value);
          }}
        >
          <option value="0">All Topics</option>
          {allTopics.map((topicObj) => {
            return <TopicDropDown topic={topicObj} key={topicObj.id} />;
          })}
        </select>
      </div>
      <div>
        <SearchTopic setSearchTopic={setSearchTopic} />
      </div>
    </div>
  );
};
