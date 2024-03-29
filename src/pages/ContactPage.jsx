import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Contact, Whatsapp } from '../components'
import styled from 'styled-components'
import envelope from '../assets/envelope.png'
import location from '../assets/location.png'
import ringer from '../assets/ringer.png'
import watermark from '../assets/watermark.png'


const ContactPage = () => {
    const form = useRef()

  const submitDetails = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_wep21d5',
      'template_43e9y49',
      form.current,
      'XtRzW6PtmW2LCiHl9'
    )
    e.target.reset()
  }
  return (
    <>
      <>
        <Contact />
        <Whatsapp />
        <ContactUs>
          <section>
            <div className='bg-img'></div>
            <div className='bg-text'>
              <div className='form'>
                <h1>
                  Make sure you enter the (<span>*</span>) required information
                  where indicated.
                </h1>
                <form ref={form} onSubmit={submitDetails}>
                  <h2>
                    <span>*</span>Your Name:
                  </h2>
                  <input className='box-s' type='name' required name='name' />
                  <h2>
                    <span>*</span>Your Email:
                  </h2>
                  <input className='box-s' type='email' name='email' required />
                  <h2>
                    <span>*</span>Comments and Questions
                  </h2>

                  <textarea
                    className='comment box-s'
                    required
                    name='message'
                    type='text'
                    cols='30'
                    rows='10'
                  ></textarea>
                  <div className='t-c'>
                    <input type='checkbox' required className='agree' />
                    <h5>
                      <span>*</span>By proceeding, you agree that your details
                      can be stored and used for future research purposes. Note
                      that your details will not not be passed to a third party.
                    </h5>
                  </div>
                  <button>Submit</button>
                </form>
              </div>
              <div className='direct-contact'>
                <h3>Direct Contact:</h3>
                <div className='phone'>
                  <div className='phone-number'>
                    <a href='tel:+2349166089980'>+234 916 608 9980</a>
                    <a href='tel:+2348182440889'>+234 818 244 0889</a>
                  </div>
                  <img src={ringer} alt='Atunlo' />
                </div>
                <div className='mail'>
                  <a href='mailto:Operations@atunlotech.com'>
                    operations@atunlotech.com
                  </a>
                  <img src={envelope} alt='Atunlo' />
                </div>
                <div className='location'>
                  <p>
                    Temidire Market, Phase 2, Eleyele
                    <br />
                    Waterworks, Eleyele, Ibadan
                  </p>
                  <img src={location} alt='Atunlo' />
                </div>
              </div>
            </div>
          </section>
          <iframe
            id='gmap_canvas'
            src='https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Temidire%20Market,%20Phase%202,%20Eleyele%20Waterworks,%20Eleyele,%20Ibadan%20Nigeria%20Ibadan+(Atunlo)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          ></iframe>
        </ContactUs>
      </>
    </>
  )
}
const ContactUs = styled.section`
  section {
    display: flex;
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
    height: 900px;
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
    display: flex;
    width: 90%;
    margin: 0 auto;
  }
  h1 {
    margin: 25px 0 55px 0;
    font-size: 15px;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  h2 {
    font-size: 16px;
    color: #8a8a8a;
    margin: 7px 0;
  }
  span {
    color: #ff0000;
  }
  textarea,
  input {
    height: 40px;
    width: 550px;
    margin: 7px 0;
    background: linear-gradient(0deg, #f7f7f7, #f7f7f7),
      linear-gradient(0deg, #8a8a8a, #8a8a8a);
    outline: 0;
    padding: 0 10px;
    border: 1px solid #8a8a8a;
    font-family: inherit;
    font-size: 15px;
  }
  textarea {
    resize: none;
    padding: 10px;
    font-size: 15px;
    height: 250px;
  }
  .box-s {
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }

  .t-c {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 430px;
    margin: 25px 0 15px 0;
  }
  .agree {
    width: 50px;
    margin: 0;
  }
  h5 {
    margin: 7px 0;
    padding-left: 10px;
    text-align: justify;
    font-weight: 400;
  }
  button {
    margin: 15px 0;
    text-align: center;
    padding: 9px 42px;
    border: 2px solid #4cc800;
    color: #4cc800;
    background: #fff;
    cursor: pointer;
    :hover {
      background: #4cc800;
      color: #fff;
      transition: all 0.3s ease-in;
    }
  }
  .direct-contact,
  .form {
    width: 100%;
    padding: 0 20px;
  }
  .direct-contact {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  h3 {
    margin: 25px 40px 20px 0;
    color: #4cc800;
  }
  .phone,
  .mail,
  .location {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  img {
    width: 8%;
    margin-left: 10px;
  }
  .phone-number {
    display: flex;
    flex-direction: column;
  }
  p {
    text-align: right;
  }
  iframe {
    width: 100%;
    height: 80vh;
  }
  @media screen and (min-width: 1600px) {
    .bg-text {
      width: 1300px;
      justify-content: space-evenly;
    }
  }
  @media screen and (max-width: 1000px) {
    .bg-text {
      flex-direction: column-reverse;
    }
    .form,
    .direct-contact {
      align-items: center;
      justify-content: center;
    }
    h3 {
      margin-right: 0;
    }
    .bg-img {
      height: 1200px;
    }
  }
  @media screen and (max-width: 600px) {
    section {
      width: 100%;
    }
    textarea,
    .t-c,
    input {
      width: 350px;
    }
    img {
      width: 6%;
    }
  }
  @media screen and (max-width: 400px) {
    h1{
      text-align: center;
    }
    textarea,
    .t-c,
    input {
      width: 300px;
    }
  }
  @media screen and (max-width: 320px) {

    textarea,
    .t-c,
    input {
      width: 270px;
    }
  }
`
export default ContactPage
