import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LogiPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { CoursePage } from './pages/CoursePage';
import { useUserStore } from './store/userStore';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const user = useUserStore((state) => state.user);
  return user ? children : <Navigate to="/login" />;
};