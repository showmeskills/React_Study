import React from 'react';

import {Count,CountBtn} from './components'

const App = ()=>{
    return (
        <>
            <CountBtn type='increment'>++</CountBtn>
            <Count/>
            <CountBtn type='decrement'>--</CountBtn>
        </>
    )
}

export default App