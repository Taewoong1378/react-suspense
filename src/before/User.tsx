import { useEffect, useState } from 'react';
import { Posts } from './Posts';

export const User = ({ userId }: { userId: string }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<{ name: string }>({ name: '' });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      // 데이터를 불러오는데 3초가 걸린다고 가정
      .then((user) => {
        setTimeout(() => {
          setUser(user);
          setLoading(false);
        }, 3000);
      });
  });

  if (loading) return <p>사용자 정보 로딩중...</p>;
  return (
    <div>
      <p>{user.name} 님이 작성한 글</p>
      <Posts userId={userId} />
    </div>
  );
};
