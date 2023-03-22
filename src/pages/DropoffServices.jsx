import React from 'react'
import styled from 'styled-components'
import { Stats, Services, DropoffLocation, Whatsapp, OurPartners } from '../components'
import dropoff from '../assets/dropoff-icon.png'
import waste from '../assets/IMG_20230129_153109_285 1.png'
import watermark from '../assets/watermark.png'


const DropoffServices = () => {
  return (
    <>
      <Services />
      <Whatsapp />

      <WasteDropoff>
        <main>
          <div className='bg-img'></div>
          <div className='bg-text'>
            <div className='sec-two'>
              <img src={waste} alt='Atunlo' />
              <div className='sec-two-r'>
                <div className='waste-pick-up'>
                  <img src={dropoff} alt='Atunlo' className='pickup-icon' />
                  <h3>Waste DropOff</h3>
                </div>
                <h5>
                  Please call our drop-off locations to drop off your used PET
                  bottles. Can’t find your location? Drop us a message by
                  filling our contact form here.
                </h5>
              </div>
            </div>
            <Stats />
            <DropoffLocation />
          </div>
        </main>
      </WasteDropoff>
      <OurPartners />
    </>
  )
}


const WasteDropoff = styled.section`
  main {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  .bg-img {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
      url(${watermark});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 200vh;
    width: 100%;
    margin: 0 auto;
    opacity: 0.05;
  }
  .bg-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 90%;
    margin: 0 auto;
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
    .bg-img {
      height: 250vh;
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
      margin: 25px 0;
    }
  }
  @media screen and (max-width: 320px) {
    img {
      width: 280px;
      margin: 30px 0;
    }
    .sec-two-r {
      width: 280px;
      margin: 30px 0;
    }
    .bg-img {
      height: 430vh;
    }
  }
`
export default DropoffServices
