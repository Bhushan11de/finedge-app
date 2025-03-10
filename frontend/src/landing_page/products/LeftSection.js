import React from "react";

function LeftSection({ imageUrl, productName, productDesrption, tryDemo, learnMore, googlePlay, appStore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          {/* Added meaningful alt text for image */}
          <img src={imageUrl} alt={`Image of ${productName}`} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesrption}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none", color: "#387ed1" }}>
              Try Demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href={learnMore} style={{ marginLeft: "50px", textDecoration: "none", color: "#387ed1" }}>
              Learn More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-3">
            {/* Added alt text for Google Play badge image */}
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Download on Google Play" />
            </a>
            {/* Added alt text for App Store badge image */}
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appstoreBadge.svg" alt="Download on the App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
