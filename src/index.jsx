import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form'; 
import CarsIndex from './containers/cars_index';
import CarsNew from './containers/cars_new';
import carsReducer from './reducers/car_reducer';
import CarsShow from './containers/cars_show';

import '../assets/stylesheets/application.scss';

const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);
const store = createStore(reducers, initialState, middlewares);


// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={CarsIndex} />
        <Route path="/posts/new" exact component={CarsNew} />
        <Route path="/cars/:id" component={CarsShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import reduxPromise from 'redux-promise';
// import logger from 'redux-logger';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { createHistory as history } from 'history';
// import { reducer as formReducer } from 'redux-form'; 
// import CarsIndex from './containers/cars_index';
// import CarsNew from './containers/cars_new';
// import CarsShow from './containers/cars_show';
// import carsReducer from './reducers/car_reducer';

// import '../assets/stylesheets/application.scss';

// const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
// const initialState = {
//   garage: garageName,
//   cars: []
// };

// const reducers = combineReducers({
//   garage: (state = null, action) => state,
//   cars: carsReducer,
//   form: formReducer
// });

// const middlewares = applyMiddleware(reduxPromise, logger);
// const store = createStore(reducers, initialState, middlewares);


// // render an instance of the component in the DOM
// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <Switch>
//         <Route path="/" exact component={CarsIndex} />
//         <Route path="/cars/new" exact component={CarsNew} />
//         <Route path="/cars/:id" component={CarsShow} />
//       </Switch>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );
