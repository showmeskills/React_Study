import {PropsWithChildren} from "react";
interface ButtonProps{
    color: string;
    margin:string;
    padding:string;
     handleClick:()=>void;
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
          onClick={handleClick}
        >
            {children}
        </span>
    )
}

export default Button;
