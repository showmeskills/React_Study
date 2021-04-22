import {PropsWithChildren} from 'react';
//PropsWithChildren 泛型是约束
//这里color:stirng;当父组件引入该组件时候,会有提示子组件必须有color:string
//这里用于父子传值
interface ButtonProps{
    color: string;
    margin:string;
    padding:string;
    handleClick:(payload:number)=>void;
}


const Button = (props:PropsWithChildren<ButtonProps>)=>{
    const {color,margin,padding,children,handleClick} = props;
    return(
        <span style={{
            cursor:"pointer",
            backgroundColor:color,
            margin,
            padding,
        }}
         onClick={()=>handleClick(5)}
        >
            {children}
        </span>
    )
}

export default Button;