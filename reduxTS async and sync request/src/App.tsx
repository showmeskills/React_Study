
import {AsyncHomePage,SyncCounter} from './components'


import {Count,Todos} from './containers';
const App = ()=>{
  return (
    <>
      <h1>Redux async request sample</h1>
      <AsyncHomePage/>
      <hr/>
      <Todos/>
      <h1>connect async demo</h1>
  
      <hr/>
      <h1>reduxt sync request sample</h1>
      <SyncCounter/>
      <hr/>
      <h1>connect sync demo</h1>
      <Count/>
    </>
  )
}

export default App;