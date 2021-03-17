import React,{Component} from 'react';

import Another from './Another'

class App extends Component {
    render(){
        return(
            <div>
               <h1>APP</h1>
                <Another name={'this is from an app component'}/>
            </div>
        )
    }
}

export default App