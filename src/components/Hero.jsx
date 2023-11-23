import React from "react";
import Download from "./Download";
import Astore from '../imgs/appStore.png';
import GPlay from '../imgs/GPlay.png';
import livreur from '../imgs/livreur.png'
import Btn from "./Btn";

export default function Hero() {
    return (
        <>
            <div id="hhero" className="hero d-flex align-items-center ">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6 d-flex align-items-center">
                            <div className="lft">
                                <h1 className="title fw-bold">Your Favorite Food Delivery Partner</h1>
                                <span className="subTitle fs-5">
                                    The food at your doorstep. Why starve when you have us.
                                    You hunger partner. Straight out of the oven to your doorstep.
                                </span>
                                <div className="input-group mb-4 mt-4  p-1 rounded-pill w-">
                                    <input type="text" className="form-control rounded-pill" placeholder="Enter your delivery location" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <Btn text='order now' bg='#FF5331' />
                                </div>
                                <div className="d-flex">
                                    <Download logo={Astore} alt='app store logo' top='Download on the' down='App Store' />
                                    <Download logo={GPlay} alt='google play app' top='GET IT ON' down='Google Play' />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="image ">
                                <img className="img-fluid" src={livreur} alt="livreur" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}