import { persistMiddleware } from './middlewares/persist-middleware';
import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import reducers from "./reducers/index"
export const store=createStore(reducers,{},applyMiddleware(persistMiddleware, thunk))




