import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Protected from './components/Protected';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<App/>}>
    {/* protecting the home route  */}
    <Route path="/"  element={<Protected/>}>
      <Route path="/" index element={<Home/>}/>
    </Route>
      <Route path="login" index element={<Login/>}/>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>

);

reportWebVitals();
