import { Resource } from './type';

export const Posts = ({ resource }: { resource: Resource }) => {
  const posts = resource.posts.read();

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
