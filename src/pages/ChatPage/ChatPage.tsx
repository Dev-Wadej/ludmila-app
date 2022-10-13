import React from 'react'
import styled from 'styled-components'
import Navbar from '../../component/Navbar/Navbar'
import UserImg from '../../assets/image/user.jpg'
import SenderChat from '../../component/Chat/Sender'
import ReceiverChat from '../../component/Chat/Receiver'
import {ReactComponent as SendBtn} from '../../assets/svgs/sendbtn.svg'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import {getUserSelector} from '../../features/Chatslice/chatslice'
import {useSelector} from 'react-redux'


const ChatPage = () => {
const user = useSelector(getUserSelector)
const [messages,setMessages]=React.useState<string>('')
const [receiverMessage,setReceiverMessage]=React.useState<string[]>([])


const{state,setState}=useLocalStorage(user,[])
console.log(receiverMessage)


const handleMessageInput =(e:React.ChangeEvent<HTMLInputElement>)=>{
  setMessages(e.target.value)
}
const handleSendMessage=()=>{
  setState([...state,messages])
  setMessages('')
}

React.useEffect(()=>{
  const receiver = ()=>{
    const person1 = localStorage.key(0)
    const person2 = localStorage.key(1)
  
    if(person1===user){
      return person2
    }
    else {
      return person1
    }
  }
 setReceiverMessage(JSON.parse(localStorage.getItem(receiver()!)!))

 receiver()
},[user,messages])




  return (
    <ChatPageWrapper>
      <Navbar name={user}/>
      <ChatPageTopBar>
        <img src={UserImg} alt="User" />
        <h3>{user}</h3>
      </ChatPageTopBar>

      {state.map((message:string,idx:number)=>(
        <ChatToRight key={idx}> <SenderChat message={message}/> </ChatToRight>
      ))}

      {receiverMessage?.map((messages:string,idx:number)=>(

        <ChatToLeft key={idx}> <ReceiverChat messages={messages} /> </ChatToLeft>
        ))
        }
      <MessageContainer>
        <input type="text" placeholder='Message...' onChange={handleMessageInput} value={messages}/>
        <SendBtn onClick={handleSendMessage}/>
      </MessageContainer>  
    </ChatPageWrapper>
  )
}

export default ChatPage

const ChatPageWrapper=styled.section`
background:#fff;
height:100vh;
overflow: scroll;
margin-bottom: 9rem;
padding-bottom:1rem;
`
const ChatPageTopBar=styled.div`
margin-top: 4rem;
text-align: center;
  font-size:'.8rem';
  h3{
    margin-top:.7rem;
    font-size:.9rem;
  }
`
const ChatToRight=styled.div`
display:flex;
justify-content: right;
`
const ChatToLeft=styled.div`
display:flex;
justify-content: left;
`

const MessageContainer=styled.div`

input{
  width:18rem;
  display:inline-block;
  background: rgba(236, 234, 234, 0.33);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.06);
  border:none;
  padding: .9rem 1rem;
  &:focus{
    outline: none;
  }

}
display:flex;
justify-content: space-between;
align-items: center;
padding:  1rem;
position:absolute;
bottom:0;
padding-bottom:1rem;
width:23.5rem;

  svg{
    background: #13089A;
    padding: .2rem;
    border-radius:50%;
    cursor:pointer;
  }
`