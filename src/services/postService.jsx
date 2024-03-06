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

export const createLike = (likedPost) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(likedPost),
  };
  return fetch("http://localhost:8000/likes", postOptions);
};

export const createNewPost = () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  };
  return fetch("http://localhost:8000/posts", postOptions);
};
