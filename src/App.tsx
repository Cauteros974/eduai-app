import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { CoursePage } from './pages/CoursePage';
import { useUserStore } from './store/userStore';
import { Header } from './components/layout/Header';

const MainLayout = () => (
  <>
    <Header />
    <main style={{ maxWidth: '120px', margin: '0px auto', padding: '40px 20px'}}>
      <Outlet />
    </main>
  </>
);

const PrivateRoute = () => {
  const user = useUserStore((state) => state.user);
  return user ? <MainLayout /> : <Navigate to="/login" />
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/course/:courseId"
          element={
            <PrivateRoute>
              <CoursePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;