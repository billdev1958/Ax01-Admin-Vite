import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login.tsx';
import Homepage from './pages/Homepage.tsx';
import Blog from './pages/Blog.tsx';
import AdminCategory from './pages/AdminCategory.tsx';
import AdminBlog from './pages/AdminBlog.tsx';
import AdminPanel from './pages/AdminPanel.tsx';
import UpBlog from './pages/UpBlog.tsx';
import UpdatePage from './pages/UpdatePage.tsx';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<App />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admincategory" element={<AdminCategory />} />
        <Route path="/adminBlog" element={<AdminBlog />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/upblog" element={<UpBlog />} />
        <Route path="/logout" element={<Login />} />
        <Route path="update">

          <Route path=":id" element={<UpdatePage />} />
        </Route>
      </Route>



    </Routes>
  );
};


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
