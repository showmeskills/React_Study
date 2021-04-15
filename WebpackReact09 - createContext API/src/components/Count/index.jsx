import React from 'react';

import {CountConsumer} from '../../countStore'

const Count = () =>{

    return(
        <CountConsumer>
            {
               ({count})=>{
                return(
                    <span>{count}</span>
                )
               }
            }
        </CountConsumer>
    )
}

export default Count