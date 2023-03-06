import React from 'react'
import { Stats, Services, PickupLocation, Whatsapp } from '../components'
import waste from '../assets/IMG_20230129_153109_285 1.png'
import styled from 'styled-components'
import Pickup from '../assets/Pickup-icon.png'


const PickupServices = () => {
  return (
    <>
      <Services />
      <Whatsapp />
      <WastePickup>
        <main>
          <div className='sec-two'>
            <img src={waste} alt='Atunlo' />
            <div className='sec-two-r'>
              <div className='waste-pick-up'>
                <img src={Pickup} alt='Atunlo' className='pickup-icon' />
                <h3>Waste Pickup</h3>
              </div>
              <h5>
                Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque. Ut diam quam,
                semper iaculis condimentum ac, vestibulum eu nisl.
              </h5>
              <p>Request pickup</p>
            </div>
          </div>
        </main>
      </WastePickup>
      <Stats />
      <PickupLocation />
    </>
  )
}

const WastePickup = styled.section`
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
    height: 350px;
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
    text-align: justify;
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
    h5 {
      text-align: center;
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

export default PickupServices
