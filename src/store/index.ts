import { applyMiddleware, compose, createStore, Middleware, Store, StoreEnhancer } from 'redux';
import createSagaMiddleware, { Saga, Task } from 'redux-saga';

import { AppState } from 'src/types/redux';
import { reducers } from './reducers';
import { sagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();

// Gather all middlewares
const allMiddlewares: Middleware[] = [sagaMiddleware];

// Enhance compose function with different enhancers
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Compose all middlewares
const middleware: StoreEnhancer<any, {}> = composeEnhancers(applyMiddleware(...allMiddlewares));

// Create Redux store
export const store: Store<AppState> = createStore(reducers, middleware);

sagas.forEach((saga: Saga): Task => sagaMiddleware.run(saga));
