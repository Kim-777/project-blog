import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
    </>
  );
}

export default App;
