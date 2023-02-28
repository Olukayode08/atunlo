import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import { slider } from '../data'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import styled from 'styled-components'

const OurPartners = () => {
  return (
    <>
      <section>
        <Wrapper>
          <div>
            <h1>Our Partners</h1>
            <div className='slider-container'>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  prevEl: '.swiper-custom-navigation-prev',
                  nextEl: '.swiper-custom-navigation-next',
                }}
              >
                {slider.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div>
                      <article className='slider'>
                        <h3 className='name'>{slide.name}</h3>
                      </article>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className='btn-container'>
            <button className='swiper-custom-navigation swiper-custom-navigation-prev backNavigate'>
              <AiOutlineArrowLeft size={25} />
            </button>
            <button className='swiper-custom-navigation swiper-custom-navigation-next frontNavigate'>
              <AiOutlineArrowRight size={25} />
            </button>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 30px 0;
  h1{
    font-size: 30px;
    color: #4cc800;
    text-align: center;
  }
  .slider-container {
    width: 200px;
    height: 100px;
    background: #8a8a8a;
    color: #fff;
    padding: 20px;
    border-radius: 20px;
    margin: 30px 0;
  }
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .name {
    font-size: 17px;
  }
  .frontNavigate {
    position: absolute;
    top: 45%;
    right: 5%;
    background-color: #4cc800;
    border: none;
    padding: 7px;
    color: #fff;
    border-radius: 10px;
  }
  .backNavigate {
    position: absolute;
    top: 45%;
    left: 5%;
    background-color: #4cc800;
    border: none;
    padding: 7px;
    color: #fff;
    border-radius: 7px;
  }
  @media screen and (max-width: 1200px) {
    .backNavigate {
      left: 10%;
    }
    .frontNavigate {
      right: 10%;
    }
  }
  @media screen and (max-width: 700px) {
    .slider-container {
      width: 365px;
      height: 280px;
    }
  }
  @media screen and (max-width: 370px) {
    .slider-container {
      width: 350px;
      height: 300px;
    }
  }
  @media screen and (max-width: 280px) {
    .slider-container {
      width: 270px;
      height: 300px;
    }
  }
`
export default OurPartners
