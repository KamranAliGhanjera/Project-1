import "./Enterprise.css"; 

const Enterprise = () => {
  return (
    <div className="enterprise-container">
     
      <div className="big-picture-container">
        <img
          src="images/enterprise.png"
          alt="Big Picture"
          className="big-picture"
        />
      </div>

  
      <h1 className="main-headingE">
        An enterprise-grade platform <br /> you can trust
      </h1>

     
      <p className="description">
        The entire Stark platform and all our integrations are built with
        enterprise-grade security. From SSO and our fully GDPR / SOC2-certified
        platform to our zero-trust policy that underpins all our tool
        integrations, we ensure maximum security and privacy for our customers’
        data and IP.
      </p>

    
      <button className="request-demo-button">Start a free trial</button>
    </div>
  );
};

export default Enterprise;
