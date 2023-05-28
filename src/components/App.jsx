import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from 'shared/components/Loader/Loader';
import UserBar from './Userbar/UserBar';
import { useEffect } from 'react';
import { getHeroes } from 'redux/hero/hero-operations';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const HeroPage = lazy(() => import('../pages/HeroPage/HeroPage'));
const AddSuperHeroPage = lazy(() =>
  import('../pages/AddSuperHeroPage/AddSuperHeroPage')
);
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);
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
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </>
  );
};
