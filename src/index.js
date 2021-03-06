import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
BrowserRouter as Router,

}
from 'react-router-dom'


  import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
  // minified version is also included
  // import 'react-toastify/dist/ReactToastify.min.css';


    // const notify = () => toast("Wow so easy !");




ReactDOM.render(
  <React.StrictMode>
      <Router>
          {/*<button onClick={notify}>Notify !</button>*/}
          <App />

        <ToastContainer autoClose={1000} />
      </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
