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
            <article>
              <h3>ELEYELE, IBADAN</h3>
              <div className='map'>
                <iframe
                  id='gmap_canvas'
                  src='https://maps.google.com/maps?width=400&amp;height=200&amp;hl=en&amp;q=Temidire%20Market,%20Phase%202,%20Eleyele%20Waterworks,%20Eleyele,%20Ibadan%20Nigeria.%20Ibadan+(Atunlo%20Dropoff%20Location)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                ></iframe>
              </div>
              <div className='contact-address'>
                <h4 className='address'>
                  <span>Address:</span> Temidire Market, Phase 2, Eleyele
                  Waterworks, Eleyele, Ibadan.
                </h4>
                <h4>
                  <span>Contact:</span> +234 916 608 9980
                </h4>
              </div>
            </article>
            <article>
              <h3>APETE, IBADAN</h3>
              <div className='map'>
                <iframe
                  id='gmap_canvas'
                  src='https://maps.google.com/maps?width=400&amp;height=200&amp;hl=en&amp;q=Life%20Forte%20Int.%20School%20road,%20Awotan.%20Apete%20Ibadan%20Nigeria%20+(Atunlo%20Dropoff%20Location)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                ></iframe>
              </div>
              <div className='contact-address'>
                <h4 className='address'>
                  <span>Address:</span> 3rd site after civil defence office,
                  Life Forte Int. School road, Awotan. Apete Ibadan.
                </h4>
                <h4>
                  <span>Contact:</span> +234 816 760 3650
                </h4>
              </div>
            </article>
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
    margin: 0 auto;
  }
  h2 {
    text-align: center;

    font-weight: 700;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  article {
    width: 400px;
    margin: 25px;
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
  iframe {
    height: 200px;
    width: 100%;
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
  span{
    font-size: 15px;
    opacity: 0.78;
    font-weight: 100;
  }
  h4 {
    font-weight: 400;
  }
  @media screen and (max-width: 1200px) {
    h2 {
      margin-left: 0;
      text-align: center;
    }
  }
  @media screen and (max-width: 1200px) {
    main {
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 800px) {
    section {
      width: 100%;
    }

    article {
      margin: 20px 0px;
    }
  }
  @media screen and (max-width: 320px) {
    article {
      width: 280px;
      margin: 15px 0px;
    }
  }
`
export default DropoffLocation
