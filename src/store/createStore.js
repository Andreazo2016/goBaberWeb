import { createStore,applyMiddleware } from 'redux';

export default (redurces, middlewares) =>{
    return createStore(redurces,applyMiddleware(...middlewares))
}