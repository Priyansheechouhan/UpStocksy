import React from 'react';

function RightSection({
    title,
    description,
    learnMore,
    imageUrl
}) {
    return (
        <div className='container'>
           <div className='m-5'>
                <div className="row mx-5 py-5">
                    <div className="col-lg-4 col-sm-12 col-md-12 align-self-center">
                        <h3 className="mb-4">{title}</h3>
                        <p style={{ lineHeight: "1.8rem", fontSize: "1.1rem" }}>{description}</p>
                        <a href={learnMore} className="text-decoration-none">
                            Learn more &nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-lg-7 col-md-12 col-sm-12 pt-4">
                        <img src={imageUrl} alt=""/>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default RightSection;