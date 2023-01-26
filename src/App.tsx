import { Suspense, useState } from 'react';
import { fetchData, User as SuspenseUser } from './after';
import './App.css';
import { User as NonSuspenseUser } from './before';

function App() {
  const [useSuspense, setUseSuspense] = useState(false);

  return (
    <>
      <button onClick={() => setUseSuspense((prev) => !prev)}>
        Suspense {useSuspense ? '끄기' : '켜기'}
      </button>
      <hr />
      {useSuspense ? (
        <main>
          <h2>Suspense 사용</h2>
          <Suspense fallback={<p>사용자 정보 로딩중...</p>}>
            <SuspenseUser resource={fetchData('1')} />
          </Suspense>
        </main>
      ) : (
        <main>
          <h2>Suspense 미사용</h2>
          <NonSuspenseUser userId="1" />
        </main>
      )}
    </>
  );
}

export default App;
