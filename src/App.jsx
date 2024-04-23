
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Movielist from './components/Movielist/Movielist'
import Detail from './pages/Detail'

function App() {


  return (
   <div className='App'>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/movie/:id' element={<Detail/>} />
        <Route path='/movies/:type' element={<Movielist/>}/>
        {/* <Route path='/*' element={<h1>eorr page</h1>}/> */}
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
