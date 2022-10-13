import React from 'react'
import styled from 'styled-components'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useSelector } from 'react-redux'
import { getUserSelector } from '../../features/Chatslice/chatslice'


const SenderChat = ({message}:{message:string}) => {

  
  return (
    <SenderChatContainer>
      {message}
    </SenderChatContainer>
  )
}

export default SenderChat

const SenderChatContainer=styled.div`
  background: #13089A;
  border-radius: 1.3rem 1.3rem 0rem 1.3rem;
  color:#fff;
  padding: 1rem;
  width: 10rem;
  max-width: 15rem;
  margin-top: 2rem;
  font-size:.7rem;
` 