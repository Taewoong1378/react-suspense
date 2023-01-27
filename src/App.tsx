import { Suspense, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { fetchData, User as SuspenseUser } from './test1/after';
import { User as NonSuspenseUser } from './test1/before';
import { Test2 } from './test2';

function App() {
  const navigate = useNavigate();

  const [useSuspense, setUseSuspense] = useState(false);

  const Home = () => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <button onClick={() => navigate('/test1')}>
          Suspense 테스트 1으로 이동
        </button>
        <button onClick={() => navigate('/test2')}>
          Suspense 테스트 2으로 이동
        </button>
      </div>
    );
  };

  const Test1 = () => {
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
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test1" element={<Test1 />} />
      <Route path="/test2" element={<Test2 />} />
    </Routes>
  );
}

export default App;
