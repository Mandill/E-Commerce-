import './App.css'
import { Outlet } from 'react-router-dom'
import ScrollTop from './components/ScrollTop'
import DataFetch from './components/datafetch/DataFetch'

function App() {

  return (
    <>
    <DataFetch/>
    <ScrollTop/>
    <Outlet/>
    
    </>
  )
}

export default App
