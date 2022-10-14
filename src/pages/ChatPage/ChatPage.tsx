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

//josshish
const josh=0;
const ChatPage = () => {
const user = useSelector(getUserSelector)
const [messages,setMessages]=React.useState<string>('')
const [donewithLocalStorage,setDonewithlocalstorage]=React.useState(false)

const{state,setState}=useLocalStorage(user,'')
console.log(state)

const{state:toLocalStorage,setState:setToLocalStorage}=useLocalStorage('messages',[])


const received = JSON.parse(localStorage.getItem('messages')!)
console.log(received)

const handleMessageInput =(e:React.ChangeEvent<HTMLInputElement>)=>{
  setMessages(e.target.value)
}
const handleSendMessage=()=>{
  setState(messages)
  setDonewithlocalstorage(true)
  setToLocalStorage([...received,{name:user,message:messages}])

  
}
React.useEffect(()=>{
  setMessages('')
  setDonewithlocalstorage(false)

},[user,donewithLocalStorage])


  return (
    <ChatPageWrapper>
      <Navbar name={user}/>
      <ChatPageTopBar>
        <img src={UserImg} alt="User" />
        <h3>{user}</h3>
      </ChatPageTopBar>


        { toLocalStorage.map((item:{name:string|null;message:string|null},idx:number)=>(
          <div key={idx}>
            {item.name === user ? <ChatContainerRight><SenderChat  message={item.message!}/> </ChatContainerRight>: 
            <ChatContainerLeft><ReceiverChat  messages={item.message!}/> </ChatContainerLeft>}
          </div>
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
const ChatContainerRight=styled.div`
display:flex;
justify-content:right;
`
const ChatContainerLeft=styled.div`
display:flex;
justify-content:left;
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