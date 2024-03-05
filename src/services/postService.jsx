export const getAllPosts = () => {
  return fetch("http://localhost:8000/posts?_embed=likes&_expand=topic").then(
    (res) => res.json()
  );
};

export const getPostById = (postId) => {
  return fetch(
    `http://localhost:8000/posts/${postId}?_embed=likes&_expand=topic&_expand=user `
  ).then((res) => res.json());
};
