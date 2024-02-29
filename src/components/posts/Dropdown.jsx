export const TopicDropDown = ({ topic }) => {
  return <option value={topic.id}>{topic.name}</option>;
};
