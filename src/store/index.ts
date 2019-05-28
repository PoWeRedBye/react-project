import { applyMiddleware, compose, createStore, Middleware, Store, StoreEnhancer } from 'redux';

import { AppState } from 'src/types/redux';
import { reducers } from './reducers';

// Gather all middlewares
const allMiddlewares: Middleware[] = [];

// Enhance compose function with different enhancers
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Compose all middlewares
const middleware: StoreEnhancer<any, {}> = composeEnhancers(applyMiddleware(...allMiddlewares));

// Create Redux store
export const store: Store<AppState> = createStore(reducers, middleware);
