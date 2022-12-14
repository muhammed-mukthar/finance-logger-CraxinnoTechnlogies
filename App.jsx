import { useState } from 'react'
import './App.css'
import Graph from './component/Graph'
import Sidebar from "./component/Sidebar"

function App() {

  return (
    <div className="App">
    <div className='sidebar'>    <Sidebar /></div>
     <div className='graph'>     <Graph/></div>
 
   
    </div>
  )
}

export default App
