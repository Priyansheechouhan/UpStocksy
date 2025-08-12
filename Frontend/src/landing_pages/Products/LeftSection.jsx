import React from "react";

function LeftSection({
  title,
  description,
  imageUrl,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="m-5">
        <div className="row mx-5 py-5">
          <div className="col-lg-7 col-sm-12 col-md-12">
            <img
              src={imageUrl}
              alt="this is an image"
              style={{ width: "32rem" }}
            />
          </div>
          <div className="col-md-1"></div>
          <div className="col-lg-4 col-sm-12 col-md-12 pt-5">
            <h3 className="mb-4">{title}</h3>
            <p style={{ lineHeight: "1.8rem", fontSize: "1.1rem" }}>
              {description}
            </p>
            <div className="mb-4">
              <a href={tryDemo} className="text-decoration-none me-5">
                Try demo &nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i>
              </a>
              <a href={learnMore} className="text-decoration-none">
                Learn more &nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <a href={googlePlay} className="me-3">
              <img src="images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
