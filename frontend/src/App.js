import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import PostPage from './pages/PostPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostListPage from './pages/PostListPage';


function App() {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" exact />
      <Route component={RegisterPage} path="/register" exact />
      <Route component={WritePage} path="/write" exact />
      <Route component={PostPage} path="/@:username/:postId" exact />
    </>
  );
}

export default App;
