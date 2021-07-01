import React from 'react';
import ReactDOM from 'react-dom';
import "./bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  
<Provider store={store}>
<App />
</Provider>,
 
  document.getElementById('root')
);
