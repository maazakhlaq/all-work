import { createStore,applyMiddleware } from 'redux';

import { mainReducer } from './redux';
import loggerMiddleware from './middle'
export const store = createStore(mainReducer,applyMiddleware(loggerMiddleware));
