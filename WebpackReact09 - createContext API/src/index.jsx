import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {CountProvider} from './countStore'

render(
    <CountProvider>
        <App/>
    </CountProvider>
    , document.getElementById('root')
)