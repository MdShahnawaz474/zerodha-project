import React from "react";
import { Link } from "react-router-dom";
import zerodha_Logo from "../assets/images/logo.svg";

const Footer = () => {
    const linkStyle = {
        textDecoration: "none",
        color: "#666",
        fontWeight: "500"
    };



  return (
    <footer style={{ backgroundColor: "#fbfbfb", paddingTop: "20px" }}>
      <div
        className="container mt-5"
        style={{ maxWidth: "72%", margin: "0 auto"}}
      >
        <div className="row">
          {/* Logo Section */}
          <div className="col-lg-3  col-md-6 mb-4">
            <img
              src={zerodha_Logo}
              alt="Zerodha Logo"
              style={{ width: "50%" }}
            />
            <p  style={{fontSize:".8rem"}}>&copy; 2010 - 2025, Zerodha Broking Ltd. <br />All rights reserved.</p>
          </div>

          {/* Company Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <p>
              <strong>Company</strong>
            </p>
            <Link to="/about" style={linkStyle}>
              About
            </Link>
            <br />
            <Link to="/product" style={linkStyle}>
              Products
            </Link>
            <br />
            <Link to="/pricing" style={linkStyle}>
              Pricing
            </Link>
            <br />
            <Link to="/" style={linkStyle}>
              Referral programme
            </Link>
            <br />
            <Link to="/https://careers.zerodha.com/" style={linkStyle}>
              Careers
            </Link>
            <br />
            <Link to="/https://zerodha.tech/" style={linkStyle}>
              Zerodha.tech
            </Link>
            <br />
            <Link to="/" style={linkStyle}>
              Press & media
            </Link>
          </div>

          {/* Support Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <p>
              <strong>Support</strong>
            </p>
            <Link to="/" style={linkStyle}>
              Contact us
            </Link>
            <br />
            <Link to="/" style={linkStyle}>
              Support portal
            </Link>
            <br />
            <Link to="/" style={linkStyle}>
              Z-Connect blog
            </Link>
            <br />
            <Link to="/" style={linkStyle}>
              List of charges
            </Link>
            <br />
            <Link to="/" style={linkStyle}>
              Downloads & resources
            </Link>
            <br />
            <Link to="/" style={linkStyle}>
              Videos
            </Link>
            <br />
            <Link to="/" style={linkStyle}>
              Market overview
            </Link>
            <br />
            <Link to="/" style={linkStyle}>
              How to file a complaint?
            </Link>
            <br />
            <Link to="/" style={linkStyle}>
              Status of your complaints
            </Link>
          </div>

          {/* Account Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <p>
              <strong>Account</strong>
            </p>
            <Link to="/" style={linkStyle}>
              Open an account
            </Link>
            <br />
            <Link to="/" style={linkStyle}>
              Fund transfer
            </Link>
          </div>
        </div>

        <div style={{
            color:"#9b9b9b",
            marginTop:"40px",
            fontSize:".65rem",
            wordWrap:"break-word"
        }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to <span style={{color:"#387ed1"}}>complaints@zerodha.com,</span> for DP related to <span style={{color:"#387ed1"}}>dp@zerodha.com.</span>
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on <span style={{color:"#387ed1"}}>SEBI SCORES:</span> Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
          <span style={{color:"#387ed1"}}>
          Smart Online Dispute Resolution | Grievances Redressal Mechanism</span>
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please <span style={{color:"#387ed1"}}>create a ticker here.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
