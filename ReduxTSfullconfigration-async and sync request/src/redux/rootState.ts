//引入创建store和插件使用函数
import {createStore, applyMiddleware} from "redux";
//引入devtools
import {composeWithDevTools} from 'redux-devtools-extension';
//引入异步请求方法;ThunkMiddleware<2个泛型> 全局数据类型AppState,全局方法类型AppActions,
import thunk,{ThunkMiddleware} from 'redux-thunk';
//引入logger监视
import {createLogger} from "redux-logger";
//引入全局reducer
import {rootReducers} from './rootReducers';
//引入全局actions type
import {AppActions} from './models/actions'
const logger = createLogger();
//ReturnType 判断rootReducers返回值的类型
export type AppState = ReturnType<typeof rootReducers>;
//暴露store
//createStore<4个泛型> AppState,AppActions,{},{}
export const store = createStore<AppState,AppActions,{},{}>(rootReducers,
    composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState,AppActions>,logger)))
