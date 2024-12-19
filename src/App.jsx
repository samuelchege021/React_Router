import { BrowserRouter,Routes,Route } from 'react-router-dom';


import Homepage from './Pages/Homepage'
import Dashboard from './Pages/Dashboard';
import PageNotFound from './Pages/PageNotFound';
import Nav from './Pages/Nav';
import Profile from './Pages/Profile';
import Setting from './Pages/Setting';
import Products from './Pages/Products';




function App() {


  return (
  <BrowserRouter>
  

  <Nav/>
  <Routes>

<Route path="/"  element={<Homepage/>}/>



<Route path="/products/:id" element={<Products/>} />

<Route   path="/dashboard"   element={<Dashboard/>}>  
<Route    path="profile" element={<Profile/>}/>

<Route   path="settings"    element={<Setting/>}/>
          </Route>

<Route  path="*" element={<PageNotFound/>}  />


  </Routes>
  
  
  </BrowserRouter>

  );


  
}

export default App
