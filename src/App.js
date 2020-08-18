import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import './styles/global.less';
import routes from './routes';

// import rootReducer from './store/reducers';

import Layout from './layout/BasicLayout';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middleware)),
// );

const App = () => (
  <BrowserRouter>
    <Layout>
      <p>This is layout 123456789</p>
    </Layout>
  </BrowserRouter>
);
export default App;
