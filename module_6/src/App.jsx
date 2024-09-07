
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './component/Home'
import Edit from './component/Edit'
import View from './component/View'
import Form from './component/Form'

function App() {
  
  
  return (
    <>
      <div><h3>React Crud</h3></div>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='/view/:id' element={<View />}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
