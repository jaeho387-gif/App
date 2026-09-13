import { useState } from 'react'
import './App.css'
import {Routes, Route, useNavigate} from "react-router-dom";
import HomePage from './HomePage';
import Chat from './Chat';
import FAQ from './FAQ';
import Logsigin from './Logsigin';
import Notes from './Notes';
import Post from './Post';

function App() {

  const navi = useNavigate();  

  return(
    <div>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Chat" element={<Chat />}/>
          <Route path="/FAQ" element={<FAQ />}/>
          <Route path="/Logsigin" element={<Logsigin />}/>
          <Route path="/Notes" element={<Notes />}/>
          <Route path="/Post" element={<Post />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
