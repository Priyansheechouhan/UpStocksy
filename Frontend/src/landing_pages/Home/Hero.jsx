import React from 'react';

function Hero() {
    return (
        <section className='text-center px-5 pb-5'>
            <div className="conatiner my-5 align-items-center">
            <div className='row'>
                <img src="images/homeHero.png"
                  alt="Hero image"
                  className='mt-3 mb-5 d-block mx-auto'
                  style={{ width: "55%"}} 
                />
                <h1 className='mt-2 fs-2'>Invest in everything</h1>
                <p className='fs-5 mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary btn-lg m-auto' style={{width: "18%"}}>Sign up for free <i class="fa-solid fa-circle-arrow-right"></i></button>
            </div>
        </div>
        </section>
    );
}

export default Hero;