/*
 customized global actions typings;

*/

import {TodoActionsTypes} from '../todos/models/action-typings';
import {CounterActionTypes} from '../counter/models/actions-typs';
/*
    if you have any others actions typings, using | join togather;
    reason: 当每个模块的actons，方法需要返回值
*/
export type AppActions = TodoActionsTypes | CounterActionTypes;