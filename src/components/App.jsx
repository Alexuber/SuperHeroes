import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from 'shared/Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const HeroPage = lazy(() => import('../pages/HeroPage/HeroPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hero/:id" element={<HeroPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
