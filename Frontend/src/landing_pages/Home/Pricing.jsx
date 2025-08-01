import React from 'react';
import './pricing.css'

function Pricing() {
    return (
        <div className="container px-5 my-5 py-3">
            <div className="row mx-5">
                <div className="col-lg-5">
                    <h2 className='mb-3'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price 
                        transparency in India. Flat fees and no hidden charges.</p>
                </div>
                
                <div className="col-lg-7">
                    <div className="row mt-4">
                <div className="col d-flex justify-content-center">
                            <img
                                src="images/pricing-eq1.svg"
                                alt=""
                                style={{width: "70%"}}
                                className=''
                               />
                            <p className='pricing-para'>Free account opening</p>
                            <br />
                            
                        </div>
                        <div className="col d-flex justify-content-center">
                            <img src="images/pricing-eq2.svg" alt="" style={{width: "70%"}}/>
                            <p className='pricing-para'>Free equity delivery
and direct mutual funds</p>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <img src="images/other-trades3.svg" alt="" style={{width: "70%"}}/>
                            <p className='pricing-para'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-5">
                <a href="#" className='text-decoration-none'>See pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    );
}

export default Pricing;