import axios from 'axios';
import queryString from 'query-string';

const remote = axios.create({
  baseURL: 'http://52.16.93.248:3000',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  withCredentials: true
});

export const writePost = ({ title, body, tags }) =>
axios.post('/api/posts', { title, body, tags });

export const getPost = id => axios.get(`/api/posts/${id}`);

export const getPostList = ({ tag, page }) =>
axios.get(`/api/posts/?${queryString.stringify({ tag, page })}`);

export const editPost = ({ id, title, body, tags }) =>
axios.patch(`/api/posts/${id}`, { title, body, tags });

export const removePost = id => axios.delete(`/api/posts/${id}`);

export const login = ( userId, password ) => remote.post('/api/auth/login', { userId, password });
export const checkLogin = () => axios.get('/api/auth/check');
export const logout = ( userId ) => remote.post('/api/auth/logout', { userId });
export const signup = ( userId, password, userName ) => remote.post('/api/auth/signin', { userId, password, userName });

export const reservation = ( ) => axios.get('/api/auth/check');

/* BELOW API SHOULD BE IMPLEMETED 
POST /api/auth/signin
POST /api/auth/signout
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/checkUserID
GET /api/auth/check
POST /api/posts/
GET /api/posts/detail
POST /api/posts/comment
GET /api/posts/search
GET /api/posts/search?{userId=}
GET /api/posts/search?{itemName=}
GET /api/posts/search?{category=}
*/