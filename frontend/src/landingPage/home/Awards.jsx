import React from "react";
import largestBroker from "../../assets/images/ecosystem.png";
import { Link } from "react-router-dom";
import pressImageLogo from "../../assets/images/pressLogos.png"

const Award = () => {
  return (
    <div
      className="container mt-5"
      style={{ maxWidth: "75%", margin: "0 auto" }}
    >
      <div className="row">
        <div className="col-md-6">
          <div>
            <h2 className="text-dark" style={{ fontSize: "32px" }}>
              Trust with confidence
            </h2>

            <div className="mt-5">
              <h3 className="font-weight-bold" style={{ fontSize: "20px" }}>
                Customer-first always
              </h3>
              <p
                className="text-muted"
                style={{ fontSize: "16px", marginBottom: "32px" }}
              >
                That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
                crores of equity investments and contribute to 15% of daily
                retail exchange volumes in India.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="font-weight-bold" style={{ fontSize: "20px" }}>
                No spam or gimmicks
              </h3>
              <p className="text-muted" style={{ fontSize: "16px" }}>
                No gimmicks, spam, "gamification", or annoying push
                notifications. High-quality apps that you use at your pace, the
                way you like.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="font-weight-bold" style={{ fontSize: "20px" }}>
                The Zerodha universe
              </h3>
              <p className="text-muted" style={{ fontSize: "16px" }}>
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="font-weight-bold" style={{ fontSize: "20px" }}>
                Do better with money
              </h3>
              <p className="text-muted" style={{ fontSize: "16px" }}>
                With initiatives like Nudge and Kill Switch, we don't just
                facilitate transactions, but actively help you do better with
                your money.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <img className="w-100" src={largestBroker} alt="largestBroker" />
          <div
            className="mt-3"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap:"40px",
              color:"#387ed1",
              fontWeight:"500"
            }}
          >
            <Link  style={{textDecoration:"none"}} to="/product">
              Explore our products 
            </Link>
            <Link  to="/" style={{textDecoration:"none"}} >Try Kite demo </Link>
          </div>
        </div>
      </div>
            <div className="mt-5 d-flex justify-content-center align-items-center">
              <img src={pressImageLogo} alt="Press-Image-logo" />
            </div>
    </div>
  );
};

export default Award;

