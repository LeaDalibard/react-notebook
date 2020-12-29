import React from 'react';
import ReactDOM from 'react-dom';
import './Containers/index.css';
import App from './Containers/App';
import Form from "./Components/Form";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
      <div className="container">
          <Form />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

