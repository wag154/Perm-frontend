import { NavBar } from './layout';
import { Login, Home } from './page';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
 <>
  <Routes>
    
    <Route path = "/Login" element = {<Login />}/>

    <Route path = "/" element = {<NavBar/>}>
    
      <Route index element = {< Home />} />
    
    </Route>

  </Routes>
 </>
  );
}

export default App;
