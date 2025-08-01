import React from 'react';

function Stats() {
    return (
        <div className="container px-5 mt-4">
            <div className="row py-5 mx-3">
                <div className="col-lg-5 col-md-12 px-5">
                    <h2 className='fw-400 mb-5'>Trust with confidence</h2>
                    <h4>Customer-first always</h4>
                    <p className='text-secondary mb-4'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h4>No spam or gimmicks</h4>
                    <p className='text-secondary mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h4>The Zerodha universe</h4>
                    <p className='text-secondary mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4>Do better with money</h4>
                    <p className='text-secondary mb-4'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-lg-7 col-md-12 text-center mx-md-0">
                    <img
                     src="images/ecosystem.png"
                     alt=""
                     style={{width: "85%", display: "inline-block", margin: "0 auto"}} 
                      /> <br></br>
                     <a href="#" className='text-decoration-none me-5'>
                        Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        
                     <a href="#" className='text-decoration-none'>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Stats;