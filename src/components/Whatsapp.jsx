import React from 'react'
import styled from 'styled-components'
import whatsapp from '../assets/Chat-big.png'


const Whatsapp = () => {
  return (
    <>
      <Wrapper>
        <main>
            <img src={whatsapp} alt="Atunlo" />
            <p>Chat with us</p>
        </main>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  position: relative;
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -55px;
    padding: 7px;
    right: 0;
    width: 100px;
    background: #4cc800;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    cursor: pointer;
    p{
        font-size: 11px;
        color: #fff;
    }
  }
`
export default Whatsapp
