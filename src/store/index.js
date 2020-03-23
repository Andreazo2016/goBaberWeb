import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import createStore from './createStore';
import rootReducer from './module/rootReducer';
import rootSaga from './module/rootSaga';
import persisteReducer from './persistReducers';



const sagaMiddleare =  createSagaMiddleware()

const middlewares = [ sagaMiddleare ]

const store = createStore(persisteReducer(rootReducer),middlewares)
const persistor = persistStore(store)
sagaMiddleare.run(rootSaga)

export { store, persistor };

