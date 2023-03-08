import React, { useState } from 'react'
import styled from 'styled-components'
import LogoBlack from '../assets/Atulo full logo (white+green).png'
import Twitter from '../assets/Twitter Squared.png'
import Instagram from '../assets/Instagram.png'
import Linkedin from '../assets/LinkedIn.png'
import Mail from '../assets/Mail.png'
import notify from '../assets/mac-mail.png'

import { Link} from 'react-router-dom'



const Footer = () => {
  const [modal, setModal] = useState(false)
  const toggleModal = () =>{
    setModal(!modal)
  }
  return (
    <>
      <Wrapper>
        <footer>
          <div className='footer-content'>
            <img src={LogoBlack} alt='Atunlo' />
            <p>“The art of recycling”</p>
          </div>
          <div className='footer'>
            <main className='footer-content'>
              <h1>Services</h1>
              <Link className='locations' to='/pickup'>
                Pickup
              </Link>
              <Link className='locations' to='/dropoff'>
                Drop Off
              </Link>
              <Link className='locations' to='/corporate'>
                Corporate services
              </Link>
            </main>
            <main className='footer-content'>
              <h1>About Us</h1>
              <Link className='locations' to='/ourstory'>
                Our Story
              </Link>
              <Link className='locations' to='/'>
                Our Partners
              </Link>
              <Link className='locations' to='/ourteam'>
                Our Team
              </Link>
              <Link className='locations' to='/contact'>
                Join Us
              </Link>
            </main>
            <main className='footer-content'>
              <h1>Contact</h1>
              <Link className='locations' to='/contact'>
                Contact us
              </Link>
            </main>
          </div>
        </footer>
        <section>
          <div>
            <h5>
              *Subscribe to our newsletter to receive news and updates from
              Atunlo
            </h5>
            <form className='subscribe'>
              <input type='email' required placeholder='Your Email' />
              <button onClick={toggleModal}>Subscribe</button>
            </form>
          </div>
          {modal && (
            <div className='modal'>
              <div className='overlay' onClick={toggleModal}></div>
              <div className='modal-content'>
                <div className='modal-heading'>
                  <h2 className='congrats'>Congratulations!</h2>
                  <div className='close-modal' onClick={toggleModal}>
                    X
                  </div>
                </div>
                <img className='notify' src={notify} alt='Atunlo' />
                <p className='modal-text'>
                  You have successfully subscribed to our Newsletter. Follow our
                  social handles for weekly updates and giveaways.
                </p>
              </div>
            </div>
          )}

          <div className='treegar'>
            <h3>t </h3>
            <h6>
              A member of the <br /> <span>Treegar Group</span>
            </h6>
          </div>
        </section>
        <article>
          <div className='copyright'>
            <h3>Copyright 2023 @ Atunlotech. All rights reserved.</h3>
            <h3>Privacy Policy</h3>
            <h3>Terms of Service</h3>
            <h3>Cookies Setting</h3>
          </div>
          <div>
            <img src={Twitter} alt='Atunlo-Twitter' />
            <img src={Instagram} alt='Atunlo-Instagram' />
            <img src={Linkedin} alt='Atunlo-Linkedin' />
            <img src={Mail} alt='Atunlo-Mail' />
          </div>
        </article>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  background: #000;
  padding: 90px 30px;
  color: #fff;
  footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
    margin: 0 auto;
  }
  .footer {
    display: flex;
  }
  .footer-content {
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    text-align: left;
    p {
      margin-top: 30px;
      font-weight: 100;
      color: #8a8a8a;
    }
    h1 {
      color: #4cc800;
      font-size: 19px;
      padding: 10px 0;
    }
    .locations {
      font-size: 15px;
      padding: 10px 0;
      text-decoration: none;
      color: #8a8a8a;
      :hover {
        color: #4cc800;
        transition: all 0.4s ease-in;
      }
    }
  }
  section {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 auto;
    width: 90%;
    padding: 90px 0 10px 0;
  }
  h5 {
    color: #8a8a8a;
    padding-bottom: 8px;
  }
  .subscribe {
    display: flex;
    border-radius: 3px;
    background: #ffffff;
    width: 530px;
    padding-left: 14px;
    height: 53px;
    margin: 0 auto;
    input {
      width: 345px;
      height: 52px;
      border: none;
      outline: 0;
      font-family: inherit;
      ::placeholder {
        font-size: 15px;
        font-family: inherit;
      }
    }
    button {
      border: none;
      text-align: center;
      background: #4cc800;
      color: #fff;
      border-radius: 3px;
      font-size: 18px;
      width: 195px;
      height: 53px;
      font-family: inherit;
      cursor: pointer;
    }
  }
  .treegar {
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      color: #4cc800;
      font-size: 40px;
      padding-right: 5px;
    }
    h6 {
      font-size: 10px;
      color: #8a8a8a;
    }
    span {
      font-size: 15px;
    }
  }

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 5px 0 10px 0;
    border-top: 2px solid #8a8a8a;
    width: 90%;
  }
  img {
    padding: 0 5px;
  }
  .copyright {
    display: flex;
    h3 {
      padding: 10px;
      color: #8a8a8a;
      font-size: 13px;
    }
  }
  /* TOAST NOTIFICATION */
  body.active-modal {
    overflow-y: hidden;
  }

  .btn-modal {
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
  }

  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }

  .overlay {
    background: rgba(49, 49, 49, 0.8);
  }
  .modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 514px;
    padding: 20px;
    min-width: 300px;
  }
  .congrats{
    font-size: 32px;
    color: #4cc800;
    padding: 10px 0;
  }
  .notify{
    padding: 13px;
  }
  .modal-text{
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #000;
  }
  .close-modal {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 5px 7px;
    color: #000;
    font-size: 20px;
    cursor: pointer;
  }
  .content {
    padding: 12px 15px;
    border: 1px solid #222;
    max-width: 400px;
    margin: 0 auto;
  }
  @media screen and (max-width: 900px) {
    footer,
    .footer {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .footer-content {
      text-align: center;
    }
    article,
    section {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
    .copyright {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 500px) {
    .subscribe {
      width: 300px;
      height: 40px;
      input {
        width: 200px;
        height: 39px;
      }
      button {
        width: 100px;
        font-size: 15px;
        height: 40px;
      }
    }
    h5 {
      text-align: center;
    }
  }
  @media screen and (max-width: 290px) {
    .subscribe {
      width: 270px;
      input {
        width: 180px;
      }
      button {
        width: 90px;
        font-size: 15px;
      }
    }
  }
`
export default Footer
