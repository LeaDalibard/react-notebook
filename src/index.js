import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Containers/App/App";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
      <div className="container">
          <App />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

