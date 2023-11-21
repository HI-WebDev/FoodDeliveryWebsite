import React from 'react';
import Box from './Box';
import icon1 from '../imgs/📍.png';
import icon2 from '../imgs/🙇🏻‍♂️.png';
import icon3 from '../imgs/🍔.png';
import icon4 from '../imgs/🏠.png';

const Order = () => {
    return (
        <div className='order mt-5 mb-5'>
            <div className="container">
                <h1 className="text-center fw-bold text-capitalize mb-5">how to order?</h1>
                <div className="row">
                    <div className="col-3">
                        <div className="position-relative">
                            <h1 className='num position-absolute fw-bold'>01</h1>
                            <Box logo={icon1} size='16px' text=' Choose your location' />
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="position-relative d-flex">
                            <h1 className='num position-absolute fw-bold'>02</h1>
                            <Box logo={icon2} size='16px' text='Choose what to eat' />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="position-relative d-flex">
                            <h1 className='num position-absolute fw-bold'>03</h1>
                            <Box logo={icon3} size='16px' text='May your first order' />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="position-relative d-flex">
                            <h1 className='num position-absolute fw-bold'>04</h1>
                            <Box logo={icon4} size='16px' text='Now! Your food in way' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order
