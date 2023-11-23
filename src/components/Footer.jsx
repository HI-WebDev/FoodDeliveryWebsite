import React from 'react';
import pizza from '../imgs/🍕.png';
import Astore from '../imgs/appStore.png';
import GPlay from '../imgs/GPlay.png';
import Download from './Download';
import Folists from './FoLists';

const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <div className='footer pt-5 pb-5'>
            <div className="container">
                <div className="row top ">
                    <div className="col-12 col-lg-4 flex-column">
                        <a className="navbar-brand  " href="/">
                            <img className='img-fluid mb-lg-5 d-flex ms-auto me-auto ms-lg-0 me-lg-0 ' src={pizza} alt="pizza logo" />
                        </a>
                        <div className='d-flex mt-5'>
                            <Download logo={Astore} alt='app store logo' top='Download on the' down='App Store' />
                            <Download logo={GPlay} alt='google play app' top='GET IT ON' down='Google Play' />
                        </div>
                    </div>
                    <div className="col-6 col-lg-2 mt-4 mt-lg-0">
                        <Folists title='Quick links' items={['features', 'food menu', 'offer', 'review', 'rider']} />
                    </div>
                    <div className="col-6 col-lg-2 mt-4 mt-lg-0">
                        <Folists title='Quick links' items={['gift cards', 'DoorDash Stories', 'LinkedIn', 'Glassdoor', 'Accessibility']} />
                    </div>
                    <div className="col-6 col-lg-2 mt-4 mt-lg-0">
                        <Folists title='Quick links' items={['blog', 'faq', 'lift media', 'press', 'presse kit']} />
                    </div>
                    <div className="col-6 col-lg-2 mt-4 mt-lg-0">
                        <Folists title='Quick links' items={['whatsApp', 'support 24']} />
                    </div>
                </div>

                <div className="row bottom mt-5 d-flex text-light">
                    <div className="col-12 col-lg-6 copyright d-flex justify-content-center justify-content-lg-start mb-3 mb-lg-0">&copy; {date} pizza All right reserved</div>
                    <div className="col-12 col-lg-6 heads d-flex justify-content-center justify-content-lg-end">
                        <span className='text-capitalize me-4'>privacy</span>
                        <span className='text-capitalize me-4'>policy</span>
                        <span className='text-capitalize me-4'>terms</span>
                        <span className='text-capitalize '>services</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
