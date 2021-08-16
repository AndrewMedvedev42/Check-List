//REACT
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import of css styles
import "./styles/css/index.css"
//REDUX
  import rootReducers from "./redux/reducers/allReducer"
  import {Provider} from "react-redux"
  import {createStore, applyMiddleware, compose} from "redux"
  import thunk from "redux-thunk" 
//Reduc Devtools Extention
  const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//Redux store
  const store = createStore(rootReducers , composeEnchancer(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
