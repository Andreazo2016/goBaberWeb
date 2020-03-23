import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/globalStyles';

import { store } from './store';
import { persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          < Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000}/>
        </Router>
      </PersistGate>

    </Provider>

  );
}

export default App;
