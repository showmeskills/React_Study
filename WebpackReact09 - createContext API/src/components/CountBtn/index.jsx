import React from 'react';

import {CountConsumer} from '../../countStore'

const Count = (props) =>{

    return(
        <CountConsumer>
            {
                ({increment,decrement})=>{
                   
                    return(
                        <button onClick={props.type === 'increment'? increment:decrement}
                        >
                        {props.children}
                        </button>
                    )
                }
            }
        </CountConsumer>
    )
}

export default Count