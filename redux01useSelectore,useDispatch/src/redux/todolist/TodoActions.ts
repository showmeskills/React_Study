import {ADD_TODOS} from './typings/action-types';

import {addPayloadType} from './typings/action-types'

export const addTodos = (payload:addPayloadType)=>({
    type:ADD_TODOS,
    payload
})