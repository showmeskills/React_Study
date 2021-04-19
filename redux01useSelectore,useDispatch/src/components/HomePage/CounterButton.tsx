import {PropsWithChildren} from 'react';

interface ButtonProps{
    color: string;
    margin:string;
    padding:string;
    handleClick():void;
}

const Button = (props:PropsWithChildren<ButtonProps>)=>{
    const {color,margin,padding,handleClick} = props;
    return(
        <span
            style={{backgroundColor:color,margin,padding}}
            onClick = {handleClick}
        >
            {props.children}
        </span>
    )
}

export default Button;