import React from 'react'
import ArrowLeft from '../../assets/svgs/Arrow-left.svg'
import StatusBar from '../../assets/svgs/statusbar.svg'
import UserImg from '../../assets/image/user.jpg'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

const Navbar:React.FC<{name:string}> = ({name}):JSX.Element => {
  const navigate = useNavigate()

  const handleGoBack=()=>{
    navigate('/')
  }

  return( 
  <>
  <img src={StatusBar} alt="Static Status Bar" />
    <NavContainer>
        <img src={ArrowLeft} alt="Arrow To Go Back" style={{cursor:'pointer'}} onClick={handleGoBack}/>
        <img src={UserImg} alt="User" />
        <div>
          <h4>{name}</h4>
          <h5>Active now</h5>
        </div>
    </NavContainer>
  </>
  )
}

export default Navbar

const NavContainer = styled.nav`
background: #fff;
display:flex;
gap: 1rem;
padding-top:1rem;
margin-top:3rem;

img{
  display: inline-block;
  width:2rem;
  height:2rem;
}
div{
  h4{
    font-size:.8rem;
  }
  h5{
    font-size:.65rem;
    opacity:70%;
    color:rgba(0, 0, 0, 0.31);
    margin-top:.4rem;
  }
}
`