import reducers from "./reducers";
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
const { createStore,applyMiddleware } = require("redux");
const sagaMiddleware=createSagaMiddleware()
const store=createStore(reducers,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(sagas)
export default store
