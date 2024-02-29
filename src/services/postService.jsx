export const getAllPosts = () => {
  return fetch("http://localhost:8000/posts?_embed=likes&_expand=topic").then(
    (res) => res.json()
  );
};
