import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import CreateCouch from './components/CreateCouch';
import ShowCouchList from './components/ShowCouchList';
import ShowCouchDetails from './components/ShowCouchDetails';
import UpdateCouchInfo from './components/UpdateCouchInfo';

const router = createBrowserRouter([
  { path: '/', element: <ShowCouchList /> },
  { path: '/create-couch', element: <CreateCouch /> },
  { path: '/show-couch/:id', element: <ShowCouchDetails /> },
  { path: '/edit-couch/:id', element: <UpdateCouchInfo /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
