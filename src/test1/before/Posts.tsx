import { useEffect, useState } from 'react';

export const Posts = ({ userId }: { userId: string }) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      // 데이터를 불러오는데 3초가 걸린다고 가정
      .then((posts) => {
        setTimeout(() => {
          setPosts(posts);
          setLoading(false);
        }, 3000);
      });
  });

  if (loading) return <p>글목록 로딩중...</p>;
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {post.id}. {post.title}
        </li>
      ))}
    </ul>
  );
};
