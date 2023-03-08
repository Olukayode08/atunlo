import React from 'react'
import styled from 'styled-components'
import { Stats, Services, DropoffLocation, Whatsapp, OurPartners } from '../components'
import dropoff from '../assets/dropoff-icon.png'
import waste from '../assets/IMG_20230129_153109_285 1.png'


const DropoffServices = () => {
  return (
    <>
      <Services />
      <Whatsapp />

      <WasteDropoff>
        <main>
          <div className='sec-two'>
            <img src={waste} alt='Atunlo' />
            <div className='sec-two-r'>
              <div className='waste-pick-up'>
                <img src={dropoff} alt='Atunlo' className='pickup-icon' />
                <h3>Waste DropOff</h3>
              </div>
              <h5>
                Please call our drop-off locations to drop off your used PET
                bottles. Can’t find your location? Drop us a message by filling
                our contact form here.
              </h5>
              {/* <p>Find Dropoff Points</p> */}
            </div>
          </div>
        </main>
      </WasteDropoff>
      <Stats />
      <DropoffLocation />
      <OurPartners />
    </>
  )
}


const WasteDropoff = styled.section`
  main {
    margin: 0 auto;
    width: 90%;
  }

  .sec-two {
    display: flex;
    flex-direction: row-reverse;
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
    font-weight: lighter;
    text-align: justify;
  }
  /* p {
    border: 2px solid #4cc800;
    color: #4cc800;
    width: 170px;
    text-align: center;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
  } */

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
export default DropoffServices
