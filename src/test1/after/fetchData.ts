import { Resource } from './type';

export const fetchUser = (userId: string) => {
  let user: { name: string; email: string } | null = null;
  const suspender = fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        user = data;
      }, 3000);
    });
  return {
    read() {
      if (user === null) {
        throw suspender;
      } else {
        return user;
      }
    },
  };
};

export const fetchPosts = (userId: string) => {
  let posts: { id: number; title: string }[] | null = null;
  const suspender = fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  )
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        posts = data;
      }, 3000);
    });
  return {
    read() {
      if (posts === null) {
        throw suspender;
      } else {
        return posts;
      }
    },
  };
};

export const fetchData = (userId: string): Resource => {
  return {
    user: fetchUser(userId),
    posts: fetchPosts(userId),
  };
};
