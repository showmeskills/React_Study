import Button from './ButtonCounter'

const HomePage = (props:any)=>{
    console.log(props)
    return(  
            <div
                style={{textAlign: 'center',marginTop:"40px",fontSize:"25px"}}
            >
                <span>{props.count}</span>
                <Button 
                color={"lightgreen"}
                margin={"20px"}
                padding={"10px"}
                handleClick={props.increment}
                >Increment</Button>
                 <Button 
                color={"lightpink"}
                margin={"20px"}
                padding={"10px"}
                handleClick={props.decrement}
                >Decrement</Button>
            </div>
    )
}

export default HomePage;

