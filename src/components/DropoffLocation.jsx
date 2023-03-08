import React from 'react'
import styled from 'styled-components'
import { dropoffs } from '../data'

const DropoffLocation = () => {
  return (
    <>
      <Wrapper>
        <section>
          <h2>Dropoff Locations</h2>

          <main>
            {dropoffs.map((dropoff) => {
              const {
                id,
                header,
                footer,
                contact
              } = dropoff
              return (
                <article key={id}>
                  <h3>{header}</h3>
                  <ul>

                  </ul>
                  <div className='contact-address'>
                    <h4 className='address'>{footer}</h4>
                    <h4>{contact}</h4>
                  </div>
                </article>
              )
            })}
          </main>
        </section>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  margin-top: 60px;
  section {
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  h2 {
    text-align: left;
    margin-left: 20px;
    font-weight: 700;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  article {
    width: 350px;
    margin: 15px;
    background: #fff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  }
  h3 {
    background: #4cc800;
    color: #fff;
    padding: 7px;
    font-weight: lighter;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    text-align: center;
  }
  ul {
    margin-left: 40px;
    padding: 15px 0;
    height: 140px;
    li {
      margin: 5px 0;
    }
  }
  .contact-address {
    display: flex;
    flex-direction: column;
    justify-content: left;
    background: #000;
    color: #fff;
    padding: 20px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .address {
    margin-bottom: 28px;
  }
  h4 {
    font-weight: lighter;
  }
  @media screen and (max-width: 1350px) {
    h2 {
      margin-left: 0;
      text-align: center;
    }
  }
`
export default DropoffLocation
