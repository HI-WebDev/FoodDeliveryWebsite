import React from 'react';
import Btn from './Btn';

const Newsletter = () => {
    return (
        <div className='newsletter mt-5  pt-5 pb-5'>
            <div className="container pt-0 pb-2 pt-lg-4 pb-lg-4">
                <div className="row d-flex align-items-center">
                    <div className="col-12 col-lg-7">
                        <div className="lft text-center mb-2">
                            <h1 className="fs-1 fw-bold">Subscribe our newsletter</h1>
                            <span className="fs-6 fw-bold lh-base  text-black-50">
                                Browse local restaurants and businesses for delivery by entering your address blow.
                            </span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 mt-5 mt-lg-0">
                        <div className="input-group p-1 rounded-pill">
                            <input type="text" className="form-control rounded-pill" placeholder="Enter your email Adress... " aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <Btn text='send' bg='#FF5331' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
