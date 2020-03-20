import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import rootReducer from './module/rootReducer';
import rootSaga from './module/rootSaga';


const sagaMiddleare =  createSagaMiddleware()

const middlewares = [ sagaMiddleare ]

const store = createStore(rootReducer,middlewares)

sagaMiddleare.run(rootSaga)

export default store;

