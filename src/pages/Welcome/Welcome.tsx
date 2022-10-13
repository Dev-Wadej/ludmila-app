import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { JsxElement } from 'typescript'
import ArrowRight from '../../assets/svgs/Arrowright.svg'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import {AppDispatch } from '../../store/store'
import {getUser} from '../../features/Chatslice/chatslice'





const Welcome:React.FC = ():JSX.Element => {

const dispatch = useDispatch<AppDispatch>()

const [name,setName]= React.useState<string>('')
const navigate=useNavigate()


const handleNameChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const nameInput = e.target.value
    setName(nameInput)
}

const handleSubmit=()=>{
    dispatch(getUser(name))
    navigate('/chat')
}

  return (
    <WelcomeWrapper>
      <h1>Welcome</h1>
      <div>
          <input type="text" placeholder='Enter Name' onChange={handleNameChange} value={name}/>
      </div>
      <div>
          <button type='submit' disabled={name ? false : true} onClick={handleSubmit}>Submit 
          <img src={ArrowRight} alt='Arrow Right Icon'/>
          </button>
      </div>
    </WelcomeWrapper>
  )
}

export default Welcome;

const WelcomeWrapper=  styled.form`
background-color:#fff;
border-radius: .4rem;
padding:1rem ;
h1{
    font-size:1.7rem;
    margin-top:1rem;
    margin-bottom:2rem;
}
div{
    
    input{
        width: 17rem;
        display:inline-block;
        padding: .9rem 1rem;
        border: 0.654468px solid #D9D9D9;
        border-radius: 6.54468px;
        &::placeholder{
            opacity: .7;
        }
       
    }
    button{
        display: flex;
        align-items: center;
        background: #13089A;
        border-radius: 6.54468px;
        color:#fff;
        border:none;
        padding:.5rem .8rem;
        margin-top: 2rem;
        cursor: pointer;
        svg{
            display: inline-block;
        }
        &:disabled{
            background:#D9D9D9;
        }
    }
}
`

