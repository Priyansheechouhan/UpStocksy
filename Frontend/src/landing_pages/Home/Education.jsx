import React from 'react';

function Education() {
    return (
        <div className="container px-5 my-5 py-5">
            <div className="row mx-5 my-4">
                <div className="col-lg-6">
                    <img src="images/education.svg" alt="" 
                    style={{width: "78%"}}
                    />
                </div>
                <div className="col-lg-6 mt-5">
                    <h2 className='fs-3 mb-4'>Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world 
                        covering everything from the basics to advanced trading.</p>
                    <a href="#" className='text-decoration-none'>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment
                         community in India for all your market related queries.</p>
                    <a href="#" className='text-decoration-none'>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>

            </div>
        </div>
    );
}

export default Education;