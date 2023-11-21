import React from 'react';
import pizza from '../imgs/🍕.png';
import Astore from '../imgs/appStore.png';
import GPlay from '../imgs/GPlay.png';
import Download from './Download';
import Folists from './FoLists';

const Footer = () => {
    return (
        <div className='footer pt-5 pb-5'>
            <div className="container">
                <div className="row top">
                    <div className="col-4 flex-column">
                        <a className="navbar-brand" href="/">
                            <img className='img-fluid mb-5' src={pizza} alt="pizza logo" />
                        </a>
                        <div className='d-flex mt-5'>
                            <Download logo={Astore} alt='app store logo' top='Download on the' down='App Store' />
                            <Download logo={GPlay} alt='google play app' top='GET IT ON' down='Google Play' />
                        </div>
                    </div>
                    <div className="col-2 ">
                        <Folists title='Quick links' items={['features', 'food menu', 'offer', 'review', 'rider']} />
                    </div>
                    <div className="col-2 ">
                        <Folists title='Quick links' items={['gift cards', 'DoorDash Stories', 'LinkedIn', 'Glassdoor', 'Accessibility']} />
                    </div>
                    <div className="col-2 ">
                        <Folists title='Quick links' items={['blog', 'faq', 'lift media', 'press', 'presse kit']} />
                    </div>
                    <div className="col-2 ">
                        <Folists title='Quick links' items={['whatsApp', 'support 24']} />
                    </div>
                </div>

                <div className="row bottom"></div>
            </div>

        </div>
    )
}

export default Footer
