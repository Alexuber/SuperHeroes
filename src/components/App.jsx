import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from 'shared/Loader/Loader';
import UserBar from './Userbar/UserBar';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const HeroPage = lazy(() => import('../pages/HeroPage/HeroPage'));
const AddSuperHeroPage = lazy(() =>
  import('../pages/AddSuperHeroPage/AddSuperHeroPage')
);
export const App = () => {
  return (
    <>
      <UserBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addSuperHero" element={<AddSuperHeroPage />} />
          <Route path="/hero/:id" element={<HeroPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
