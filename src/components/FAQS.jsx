import React, { useContext } from 'react'
import styled from 'styled-components'
import { FAQ } from '../data'
import { Atunlo } from '../Context'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

const FAQS = () => {
  const { accordion, toggleAccordion } = useContext(Atunlo)
  return (
    <>
      <Wrapper id='faqs'>
        <main>
          <div className='faqs-h'>
            <div className='line'></div>
            <h1>Frequently Asked Questions</h1>
            <div className='line'></div>
          </div>
          {FAQ.map((data, i) => {
            const { id, question, answer } = data
            return (
              <div key={id} className='accordion'>
                <div className='title' onClick={() => toggleAccordion(i)}>
                  <h2>{question}</h2>
                  <span>
                    {accordion === i ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )}
                  </span>
                </div>
                <p className={accordion === i ? 'content show' : 'content'}>
                  {answer}
                </p>
              </div>
            )
          })}
        </main>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  background-color: #f6f6f6;
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .faqs-h {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .line {
    width: 120px;
    height: 2px;
    background: #4cc800;
  }
  h1 {
    color: #4cc800;
    font-size: 29px;
    padding: 25px 10px;
    font-weight: 700;
  }

  .accordion {
    width: 650px;
    margin: 7px 0;
    background: #fff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    padding: 20px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid #8a8a8a;
      cursor: pointer;
    }
    h2 {
      font-size: 18px;
      font-weight: 500;
      color: #000;
    }
    span {
      color: #4cc800;
      font-size: 25px;
      text-align: right;
      cursor: pointer;
    }

    p {
      font-size: 15px;
      line-height: 27px;
      font-weight: lighter;
      text-align: justify;
    }
    .content {
      max-height: 0;
      overflow: hidden;
    }
    .content.show {
      height: auto;
      padding: 15px;
      max-height: 9999px;
    }
  }

  @media screen and (max-width: 750px) {
    .accordion {
      width: 500px;
      padding: 10px;

      h2 {
        font-size: 17px;
      }
    }
    h1 {
      font-size: 22px;
      padding: 20px 5px;
    }
    .line {
      width: 80px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
    }
  }
  @media screen and (max-width: 550px) {
    .accordion {
      width: 370px;
    }
    .line {
      width: 50px;
    }
  }
  @media screen and (max-width: 430px) {
    .accordion {
      width: 350px;
    }
    .line {
      width: 20px;
    }
  }
  @media screen and (max-width: 325px) {
    .accordion {
      width: 280px;
    }
    h2 {
      font-size: 15px;
    }
    h1 {
      font-size: 17px;
      padding: 0 5px;
    }
    .line {
      width: 17px;
    }
  }
`
export default FAQS
