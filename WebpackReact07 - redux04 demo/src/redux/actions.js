import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENT} from './action-types';

export const addComment = (comments)=>({type:ADD_COMMENT,data:comments});
export const deleteComment = (indx)=>({type:DELETE_COMMENT,data:indx});

const receiveComment = (comments)=>({type:RECEIVE_COMMENT,data:comments});

export const getComments = ()=>{
    return dispatch=>{
        setTimeout(() =>{
            const comments = [
                { username: 'Tom',content:'React挺好的'},
                { username: 'Jack',content:'React太难了'},
            ]
            dispatch(receiveComment(comments))
        },1000)
    }
}
