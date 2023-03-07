import React, {useState} from 'react'
import { Contact, Whatsapp } from '../components'
import styled from 'styled-components'
import envelope from '../assets/envelope.png'
import location from '../assets/location.png'
import ringer from '../assets/ringer.png'

const ContactPage = () => {
    const [details, setdetails] = useState({
      username: '',
      email: '',
      password: '',
      phone: '',
      country: '',
    })

    const submitDetails = (e) => {
      const name = e.target.name
      const value = e.target.value
      setdetails({ ...details, [name]: value })
    }
  return (
    <>
      <>
        <Contact />
        <Whatsapp />
        <ContactUs>
          <section>
            <div className='form'>
              <h1>
                Make sure you enter the (<span>*</span>) required information
                where indicated.
              </h1>
              <form onSubmit={submitDetails}>
                <h2>
                  <span>*</span>Your Name:
                </h2>
                <input
                  type='name'
                  required
                  name='name'
                  value={details.name}
                  onChange={submitDetails}
                />
                <h2>
                  <span>*</span>Your Email:
                </h2>
                <input
                  type='email'
                  name='email'
                  value={details.email}
                  onChange={submitDetails}
                  required
                />
                <h2>
                  <span>*</span>Comments and Questions
                </h2>
                <input
                  className='comment'
                  type='text'
                  name='text'
                  value={details.comment}
                  onChange={submitDetails}
                  required
                />
                <div className='t-c'>
                  <input type="checkbox" required className='agree'/>
                  <h5>
                    <span>*</span>I agree that my data are stored and I can be
                    called for information purposes or contacted by e-mail. The
                    data will not be passed on to third parties. I agree with
                    TERMS and CONDITIONS
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
                  Operations@atunlotech.com
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
          </section>
          <iframe
            id='gmap_canvas'
            src='https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Temidire%20Market,%20Phase%202,%20Eleyele%20Waterworks,%20Eleyele,%20Ibadan%20Ibadan+(Atunlo)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          ></iframe>
        </ContactUs>
      </>
    </>
  )
}
const ContactUs = styled.section`
  section {
    display: flex;
    width: 90%;
    margin: 0 auto;
  }
  h1 {
    margin: 25px 0;
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
  input {
    height: 40px;
    width: 450px;
    margin: 7px 0;
    background: linear-gradient(0deg, #f7f7f7, #f7f7f7),
      linear-gradient(0deg, #8a8a8a, #8a8a8a);
    outline: 0;
    border: 1px solid #8a8a8a;
    font-family: inherit;
  }
  .comment {
    height: 250px;
  }
  .t-c {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 430px;
    margin: 15px 0;
  }
  .agree {
    width: 50px;
    margin: 0;
  }
  h5 {
    margin: 7px 0;
    padding-left: 10px;
  }
  button {
    margin: 15px 0;
    text-align: center;
    padding: 9px 39px;
    border: 2px solid #4cc800;
    color: #4cc800;
    background: #fff;
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
    margin-right: 40px;
    color: #4cc800;
  }
  .phone,
  .mail,
  .location {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 7px 0;
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
    margin: 30px 0;
    width: 100%;
    height: 80vh;
  }
  @media screen and (max-width: 1000px) {
    section {
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
  }
  @media screen and (max-width: 500px) {
    section {
      width: 100%;
    }
    .t-c,
    input {
      width: 350px;
    }
    img {
      width: 6%;
    }
  }
  @media screen and (max-width: 300px) {
    .t-c,
    input {
      width: 270px;
    }
  }
`
export default ContactPage
