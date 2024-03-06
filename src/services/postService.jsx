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

export const getPostByCurrentUserId = (id) => {
  return fetch(`http://localhost:8000/posts?userId=${id}`).then((res) =>
    res.json()
  );
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

export const createNewPost = (newPost) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  };
  return fetch("http://localhost:8000/posts", postOptions);
};

export const modifyLike = (currentLike) => {
  return fetch(`http://localhost:8000/likes/${currentLike.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(currentLike),
  });
};

export const deletePost = (post) => {
  const postOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  };
  return fetch(`http://localhost:8000/posts/${post.id}`, postOptions);
};
