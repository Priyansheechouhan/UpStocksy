import React from 'react';

function Awards() {
    return (
        <div className="container mt-4 py-4">
            <div className="row">
                <div className="col-lg-6 col-md-12 px-lg-5 mb-5">
                    <img src="images/largestBroker.svg" alt="" />
                </div>
                <div className="col-lg-6 col-md-12 py-3 px-5 mb-5">
                    <h2>Largest stock broker in India</h2>
                    <p className="fs-7" >2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by 
                        trading and investing in:</p>
                    <div className="row mt-5">
                        <div className="col-6 px-0">
                            <ul>
                                <li>Futures and Options</li><br></br>
                                <li>Commodity derivatives</li><br></br>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6 px-0">
                            <ul>
                                <li>Stocks & IPOs</li><br></br>
                                <li>Direct mutual funds</li><br></br>
                                <li>Bonds and Govt</li>
                            </ul>
                        </div>
                    </div>
                    <img 
                    src="images/pressLogos.png" 
                    alt="press logos" 
                    className='mt-4'
                    style={{ maxWidth: "80vh", width: "auto" }}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;