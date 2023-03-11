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
    width: 100px;
    height: 2px;
    background: #4cc800;
  }
  h1 {
    color: #4cc800;
    font-size: 29px;
    padding: 35px 10px;
    font-weight: 700;
  }

  .accordion {
    width: 650px;
    margin: 10px 0;
    background: #fff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    padding: 10px 0 15px 0;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 30px;
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
      line-height: 25px;
      opacity: 0.75;
      text-align: left;
    }
    .content {
      max-height: 0;
      overflow: hidden;
    }
    .content.show {
      height: auto;
      margin: 0 30px;
      padding: 15px 30px 12px 0;
      max-height: 9999px;
      border-top: 0.1px ridge #e6e2e2;
    }
  }

  @media screen and (max-width: 750px) {
    .accordion {
      width: 500px;
      padding: 15px 10px;

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
    .title {
      padding: 15px;
    }
    .content.show {
      margin: 0 15px;
    }
  }
  @media screen and (max-width: 550px) {
    .accordion {
      width: 450px;
    }
    .line {
      width: 50px;
    }
  }
  @media screen and (max-width: 430px) {
    .accordion {
      width: 340px;
      padding: 15px 7px;

      .content.show {
        margin: 0 7px;
      }
      .title {
        padding: 0 7px;
      }
    }
    .line {
      width: 20px;
    }
  }
  @media screen and (max-width: 350px) {
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
