export const SearchTopic = ({ setSearchTopic }) => {
  return (
    <input
      className="filter-search"
      type="text"
      placeholder="Search Posts"
      onChange={(event) => setSearchTopic(event.target.value)}
    />
  );
};
