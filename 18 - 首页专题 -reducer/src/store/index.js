import {createStore,compose,applyMiddleware} from "redux";
import Reducer from './reducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用redux-thunk中间件
const  store=createStore(Reducer,composeEnhancers(
    applyMiddleware(thunk)
))

export default store
