import { User } from './User';

export const Main = () => {
  return (
    <main>
      <h2>Suspense 미사용</h2>
      <User userId="1" />
    </main>
  );
};

export default Main;
