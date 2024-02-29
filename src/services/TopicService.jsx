export const GetAllTopics = () => {
  return fetch("http://localhost:8000/topics").then((res) => res.json());
};
