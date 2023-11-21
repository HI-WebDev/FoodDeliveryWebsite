import React from 'react';
import motor from '../imgs/motor.png';
import pizza from '../imgs/🍕.png';
import burger from '../imgs/🍔.png';
import sushi from '../imgs/🍣.png';
import pasta from '../imgs/🍝.png';
import deserts from '../imgs/🍰.png';
import salade from '../imgs/🥗.png';
import quotesD from '../imgs/quotes down.png';

import Box from './Box';

const Menu = () => {
    return (
        <>
            <div className="menu mt-5 mb-5">
                <div className="container">
                    <h1 className='title text-capitalize text-center fw-bold'>more than <span>10,000</span> dishes <br /> to order!</h1>
                    <span className="subTitle fs-6 d-block text-center mb-5 fw-bold ">Welcome to The Biggest Network of Food Ordering & Delivery</span>
                    <div className='row justify-content-end'>
                        <div className="col-2 ">
                            <Box logo={pizza} size='50%' text='Pizza' />
                        </div>
                        <div className="col-2 ">
                            <Box logo={burger} size='50%' text='Burger' />
                        </div>
                        <div className="col-2 ">
                            <Box logo={sushi} size='50%' text='Sushi' />
                        </div>
                        <div className="col-5">
                            <div className='menuBox  ps-3 pe-3 pt-4'>
                                <h1 className="fs-6 ms-1 lh-base fw-">
                                    Find <span>deals</span>, <span>free delivery</span>, and more <br className='d-none d-lg-block' /> from our restaurant partners.
                                </h1>
                                <div className="motor mt-3 ms-auto">
                                    <img className='img-fluid' src={motor} alt="motor" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 justify-content-start">
                        <div className="col-5 flex-column d-flex">
                            <span className='mb-4'>
                                <img src={quotesD} alt="quotes" className="img-fluid" />
                            </span>
                            <q className='fw-bold fs-5 lh-base'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incidid ut labore et dolore magna aliqua.
                            </q>
                        </div>
                        <div className="col-2">
                        <Box logo={pasta} size='50%' text='Pasta' />
                        </div>
                        <div className="col-2">
                        <Box logo={salade} size='50%' text='Salad' />
                        </div>
                        <div className="col-2">
                        <Box logo={deserts} size='50%' text='Desserts' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu
