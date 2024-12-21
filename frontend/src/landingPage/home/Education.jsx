import React from "react";
import EdcucationSVG from "../../assets/images/education.svg";
import { Link } from "react-router-dom";
const Education = () => {
  return (
    <div
      className="mt-4 mb-5 container"
      style={{ width: "100%", margin: "0 auto  " }}
    >
      <div>
        <div
          className="row"
          style={{
            justifyContent: "space-between",
          }}
        >
          {/* left side bar */}

          <div className="col-5">
            <div>
              <Link>
                <img src={EdcucationSVG} alt="" />
              </Link>
            </div>
          </div>

          {/*Right sidebar  */}
          <div className="col-6">
            <div>
              <h2 style={{fontSize:"2rem",
                fontWeight:"500",
                marginBottom:"20px", marginTop:"50px"
              }}>Free and open market education</h2>
              <p>
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>
              <div>
                <Link
                  style={{ textDecoration: "none", fontWeight: "500" }}
                  to={"/"}
                >
                  Varsity
                </Link>
              </div>

              <p style={{ marginTop: "30px" }}>
                TradingQ&A, the most active trading and investment community in
                India for all your market related queries.
              </p>

              <div>
                <Link
                  style={{ textDecoration: "none", fontWeight: "500" }}
                  to={"/"}
                >
                  TradingQ&A 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
