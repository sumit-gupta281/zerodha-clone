import React from "react";

function Footer() {
  // Single style variable for all anchor tags
  const linkStyle = {
    textDecoration: "none",
    opacity: 0.7,
    color: "black",
    transition: "opacity 0.2s ease",
  };

  const onHover = (e) => (e.target.style.opacity = 1);
  const onLeave = (e) => (e.target.style.opacity = 0.7);

  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          {/* Logo Section */}
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="Logo"
            />
            <p>
              &copy; 2010 - 2025, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>


          {/* Account Section */}
          <div className="col text-muted">
            <p>
              <b>Account</b>
            </p>
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Open demat account
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Minor demat account
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              NRI demat account
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Commodity
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Dematerialisation
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Fund transfer
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              MTF
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Referral program
            </a>
            <br />
          </div>

          {/* Support Section */}
          <div className="col text-muted">
            <p>
              <b>Support</b>
            </p>
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Contact us
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Support portal
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              How to file a complaint?
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Status of your complaints
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Bulletin
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Circular
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Z-Connect blog
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Downloads
            </a>
            <br />
          </div>

          {/* Company Section */}
          <div className="col text-muted">
            <p>
              <b>Company</b>
            </p>
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              About
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Philosophy
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Press & media
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Careers
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Zerodha Cares (CSR)
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Zerodha.tech
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Open source
            </a>
            <br />
          </div>

          {/* Quick Links Section */}
          <div className="col text-muted">
            <p>
              <b>Quick links</b>
            </p>
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Upcoming IPOs
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Brokerage charges
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Market holidays
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Economic calendar
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Calculators
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Market
            </a>
            <br />
            <a style={linkStyle} onMouseOver={onHover} onMouseOut={onLeave}>
              Sectors
            </a>
            <br />
          </div>
        </div>

        {/* Long Footer Text */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to <a href="" style={{ textDecoration: "none" }}> complaints@zerodha.com,</a> for DP
            related to <a href="" style={{ textDecoration: "none" }}>dp@zerodha.com.</a> Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on <a href="" style={{ textDecoration: "none" }}>SEBI SCORES:</a> Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism{" "}
          </a>

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
            India's largest broker based on networth as per NSE.{" "}
            <a href="" style={{ textDecoration: "none" }}>
              NSE broker factsheet
            </a>
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
            claiming to be part of Zerodha and offering such services, please
             <a href="" style={{ textDecoration: "none" }}>create a ticket here.</a>
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
      </div>
      <div className="row ">
      <p> <a href="" style={{ textDecoration: "none" }}>NSE</a></p>
      <p>  <a href="" style={{ textDecoration: "none" }}>BSE</a></p>
      </div>
    </footer>
  );
}

export default Footer;
