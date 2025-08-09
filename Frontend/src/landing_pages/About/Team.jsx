import React from 'react';

function Team() {
    return (
        <div className="container mt-4 mb-5">
            <div className=' text-center '>
                <h4>People</h4>
            </div>
            <div className='row mt-5'  style={{fontSize: "1.1rem", lineHeight: "1.9rem"}}>
                <div className="col-md-6 text-end pe-5">
                    <img src="images/nithinKamath.jpg" alt="team image" style={{borderRadius: "100%", width: "20rem"}}/>
                    <div className='me-5 pe-5'>
                        <p>Nithin Kamath</p>
                        <p className='text-muted'>
                        Founder, CEO
                        </p>
                    </div>
                </div>
                <div className="col-md-6 pe-5 pt-3">
                    <div className='me-5 pe-5'>
                        <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on Homepage / TradingQnA / Twitter
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;