import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
// import Odd from './Odd';
// import Even from './Even';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    {/* <Odd />
    <Even /> */}
  </React.StrictMode>
);