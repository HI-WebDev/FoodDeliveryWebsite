import React from 'react'
import quotes from '../imgs/quotes.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// import './style.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Feedback = () => {
    return (
        <div className='feedback mt-5 mb-5 '>
            <h1 className="title fs-1 fw-bold text-center ">Our Clients Feedback</h1>
            <span className="subTitle ms-auto me-auto mb-5 d-flex text-center w-50 fw-bold ">
                The food at your doorstep. Why starve when you have us. You hunger partner.
                Straight out of the oven to your doorstep.
            </span>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="Testimonial d-flex flex-column">
                        <span className="quote text-center mt-3 mb-4">
                            <img className='img-fluid' src={quotes} alt="" />
                        </span>
                        <q className='col-6 fs-5 mb-4 mt-1 fw-bold text-center m-auto'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsum sapiente nesciunt impedit nulla quaerat, debitis reiciendis
                            cupiditate optio quia error, eius consectetur at ex quasi animi
                        </q>
                        <div className="user text-center mt-2 mb-5">
                            <h1 className="fs-5 text-capitalize fw-bold mb-0">until death</h1>
                            <span className="fs-6 text-black-50 fw-bold">front-end dev</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Testimonial d-flex flex-column">
                        <span className="quote text-center mt-3 mb-4">
                            <img className='img-fluid' src={quotes} alt="" />
                        </span>
                        <q className='col-6 fs-5 mb-4 mt-1 fw-bold text-center m-auto'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsum sapiente nesciunt impedit nulla quaerat, debitis reiciendis
                            cupiditate optio quia error, eius consectetur at ex quasi animi
                        </q>
                        <div className="user text-center mt-2 mb-5">
                            <h1 className="fs-5 text-capitalize fw-bold mb-0">Amine k.</h1>
                            <span className="fs-6 text-black-50 fw-bold">fullstack dev</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="Testimonial d-flex flex-column">
                        <span className="quote text-center mt-3 mb-4">
                            <img className='img-fluid' src={quotes} alt="" />
                        </span>
                        <q className='col-6 fs-5 mb-4 mt-1 fw-bold text-center m-auto'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsum sapiente nesciunt impedit nulla quaerat, debitis reiciendis
                            cupiditate optio quia error, eius consectetur at ex quasi animi
                        </q>
                        <div className="user text-center mt-2 mb-5">
                            <h1 className="fs-5 text-capitalize fw-bold mb-0">Adriano M.</h1>
                            <span className="fs-6 text-black-50 fw-bold">Engineer </span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Feedback
