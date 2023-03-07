import React from 'react'
import styled from 'styled-components'

const Stats = () => {
  return (
    <>
      <Wrapper>
        <section>
          <div className='stats'>
            <h4>10+</h4>
            <h2>Collection sites</h2>
          </div>
          <div className='line'></div>
          <div className='stats'>
            <h4>100</h4>
            <h2>Tonnes collected</h2>
          </div>
          <div className='line'></div>
          <div className='stats'>
            <h4>100</h4>
            <h2>
              Tonnes preordered by <br></br> 3 offtakers
            </h2>
          </div>
        </section>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  width: 80%;
  margin: 30px auto;
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 40px auto;
    /* text-align: justify; */

    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background: #FFFFFF;
    .stats {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 17px;
    }
    h4 {
      font-size: 18px;
      color: #4cc800;
    }
    h2 {
      font-size: 15px;
      color: #000;
      font-weight: 400;
    }
    .line {
      height: 30px;
      width: 2px;
      background: #8a8a8a;
    }
  }
  @media screen and (max-width: 800px) {
    section {
      display: flex;
      flex-direction: column;
      .stats {
        padding: 25px;
      }
      .line {
        height: 2px;
        width: 40px;
      }
    }
  }
`
export default Stats
