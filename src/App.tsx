import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import styled from 'styled-components'
import ChatPage from './pages/ChatPage/ChatPage'
import Welcome from './pages/Welcome/Welcome'

const App = () => {
  return (
    <AppWrapper>
      <Router>
        <Routes>
          <Route path='/' element={<Welcome/>}></Route>
          <Route path='/chat' element={<ChatPage/>}></Route>
        </Routes>
      </Router>
      
    </AppWrapper>
  )
}

export default App

const AppWrapper=styled.main`
position:relative;
height:100vh;
display:grid;
place-content: center;
background-color:#F5F5F5;
`