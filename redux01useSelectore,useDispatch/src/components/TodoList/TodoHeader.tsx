import {useState} from 'react';

const TodoHeader = (props:any)=>{
   
    const handleKeyDown = (event:any)=>{
        if(event.keyCode === 13){
            if(!event.target.value.trim()){
                alert('输入框不能为空')
            }else{
                console.log(event.target.value)
            }
            event.target.value = "";
        }
    }
    return(
        <> 
            <input type="text"
                onKeyDown={handleKeyDown}
            />
        </>
    )
}

export default TodoHeader;