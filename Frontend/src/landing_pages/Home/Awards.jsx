import React from 'react';

function Awards() {
    return (
        <div className="container mt-5 py-4">
            <div className="row">
                <div className="col-6 px-5">
                    <img src="images/largestBroker.svg" alt="" />
                </div>
                <div className="col-6 py-3 px-5">
                    <h2>Largest stock broker in India</h2>
                    <p className="fs-7 fw-semibold" >2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by 
                        trading and investing in:</p>
                    <div className="row mt-5 fw-semibold">
                        <div className="col-6">
                            <ul>
                                <li>Futures and Options</li><br></br>
                                <li>Commodity derivatives</li><br></br>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Stocks & IPOs</li><br></br>
                                <li>Direct mutual funds</li><br></br>
                                <li>Bonds and Govt</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;