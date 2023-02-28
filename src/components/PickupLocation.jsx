import React from 'react'
import { pickups } from '../data'
import styled from 'styled-components'

const PickupLocation = () => {
  return (
    <>
      <Wrapper>
        <section>
          <h2>Pickup Locations</h2>

          <main>
            {pickups.map((pickup) => {
              const {
                id,
                header,
                text1,
                text2,
                text3,
                text4,
                text5,
                text6,
                footer,
              } = pickup
              return (
                <article key={id}>
                  <h3>{header}</h3>
                  <ul>
                    <li>{text1}</li>
                    <li>{text2}</li>
                    <li>{text3}</li>
                    <li>{text4}</li>
                    <li>{text5}</li>
                    <li>{text6}</li>
                  </ul>
                  <h4>{footer}</h4>
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
  section {
    width: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  h2 {
    text-align: left;
    margin-left: 50px;
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
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    text-align: center;
  }
  ul {
    margin-left: 40px;
    padding: 15px 0;
    li {
      margin: 5px 0;
    }
  }
  h4 {
    background: #000;
    color: #fff;
    padding: 7px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    text-align: center;
  }
  @media screen and (max-width: 1350px) {

    h2 {
      margin-left: 0;
      text-align: center;
    }
  }
`
export default PickupLocation
