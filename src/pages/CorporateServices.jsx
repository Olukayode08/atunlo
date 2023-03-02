import React from 'react'
import { Stats, Services } from '../components'
import waste from '../assets/corporate-img.png'
import styled from 'styled-components'
import Pickup from '../assets/Pickup-icon.png'

const CorporateServices = () => {
  return (
    <>
      <Services />
      <Corporate>
        <main>
          <div className='sec-two'>
            <img src={waste} alt='Atunlo' />
            <div className='sec-two-r'>
              <div className='waste-pick-up'>
                <img src={Pickup} alt='Atunlo' className='pickup-icon' />
                <h3>Corporate Services</h3>
              </div>
              <h5>
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </h5>
              <p>Get in Touch</p>
            </div>
          </div>
        </main>
      </Corporate>
      <Stats />
    </>
  )
}
const Corporate = styled.section`
  main {
    margin: 0 auto;
    width: 90%;
  }

  .sec-two {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 400px;
    height: 450px;
    margin: 30px;
  }
  .sec-two-r {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    margin: 50px;
    width: 400px;
    text-align: left;
  }
  .waste-pick-up {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 80px;
    img {
      width: 70px;
      height: 70px;
      margin: 0 8px 0 0;
    }
    h3 {
      color: #4cc800;
      font-size: 25px;
      line-height: 33px;
      text-align: left;
    }
  }

  h5 {
    color: #000;
    padding: 10px;
    font-size: 15px;
    line-height: 23px;
  }
  p {
    border: 2px solid #4cc800;
    color: #4cc800;
    width: 170px;
    text-align: center;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    .sec-two {
      display: flex;
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
    .sec-two-r,
    h3 {
      text-align: center;
    }
    p {
      margin: 0 auto;
    }
    .waste-pick-up {
      justify-content: center;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 500px) {
    img {
      width: 350px;
      height: 350px;
      margin: 30px;
    }
    .sec-two-r {
      width: 350px;
    }
  }
  @media screen and (max-width: 290px) {
    img {
      width: 280px;
      margin: 30px 0;
    }
    .sec-two-r {
      width: 280px;
    }
  }
`
export default CorporateServices
