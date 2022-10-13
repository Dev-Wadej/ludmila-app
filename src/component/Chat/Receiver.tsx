import React from 'react'
import styled from 'styled-components'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const ReceiverChat = ({messages}:{messages:string}) => {

  return (
    <ReceiverChatContainer>
      {messages}
    </ReceiverChatContainer>
  )
}

export default ReceiverChat

const ReceiverChatContainer=styled.div`
  background: rgba(196, 196, 196, 0.21);
  border-radius: 1.3rem 1.3rem 1.3rem 0;
  color:#000;
  padding: 1rem;
  width: 10rem;
  max-width: 15rem;
  margin-top: 2rem;
  font-size:.7rem;
` 