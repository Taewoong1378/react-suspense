import { useEffect, useState } from 'react';

import { fetchProfileData } from './fakeApi';

type User = {
  name: string;
};

type Post = {
  id: number;
  text: string;
}[];

type Data = {
  user: User;
  posts: Post;
};

export const Test2 = () => {
  const promise = fetchProfileData();

  const [user, setUser] = useState<User>();
  const [posts, setPosts] = useState<Post>();

  useEffect(() => {
    promise.then((data: Data) => {
      setUser(data.user);
      setPosts(data.posts);
    });
  }, []);

  if (!user) {
    return <p>Loading profile...</p>;
  }
  return (
    <>
      <h1>{user.name}</h1>
      <ProfileTimeline posts={posts} />
    </>
  );
};

// The child doesn't trigger fetching anymore
function ProfileTimeline({ posts }: { posts?: Post }) {
  if (!posts) {
    return <h2>Loading posts...</h2>;
  }
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}
