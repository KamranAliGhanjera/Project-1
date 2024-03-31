
import './InclusiveSoftware.css'; 

const InclusiveSoftware = () => {
  return (
    <div className="inclusive-software-container">
    
      <div className="big-box">
     
        <h1 className="why-stark-heading">WHY STARK?</h1>

        
        <h2 className="main-headingIS">
          Build and ship inclusive software, <br />
          accelerate time-to-compliance.
        </h2>

        <div className="icons-container">
         
          <div className="icon">
            <img src="images/increase.png" alt="Icon 1" />
            <h3 className="icon-heading">Increase Velocity</h3>
            <p className="icon-text">
              Stark is the only end-to-end platform that helps your team find
              and fix accessibility issues from design and code to the live
              product. All this, while being up to 10x faster than any other
              tool in the market.
            </p>
          </div>

          <div className="icon">
            <img src="images/accelerate.png" alt="Icon 2" />
            <h3 className="icon-heading">Accelerate Compliance</h3>
            <p className="icon-text">
              Reports and Insights are available in real-time for every project
              in Stark. Plus, time-stamped historic reports are available at any
              time for up-to-date compliance reporting across departments.
            </p>
          </div>

          <div className="icon">
            <img src="images/reduce.png" alt="Icon 3" />
            <h3 className="icon-heading">Reduce Cost</h3>
            <p className="icon-text">
              Stark’s fully integrated solution enables fixing of accessibility
              issues as early as first design drafts, reducing 56% of issues
              that typically make it into code where remediation costs can be up
              100x higher.
            </p>
          </div>

         
          <div className="icon">
            <img src="images/mitigate.png" alt="Icon 4" />
            <h3 className="icon-heading">Mitigate Risk</h3>
            <p className="icon-text">
              The entire Stark platform and all our integrations are built with
              enterprise-grade security. From SSO and our fully SOC2-certified
              platform stack to our zero-trust policy that underpins all our
              tool .
            </p>
          </div>
        </div>
      </div>

      <div className="new-box">
        
        <div className="new-data-box">
         
          <h3 className="small-heading">STREAMLINING WORKFLOWS, CONSOLIDATING TOOLS</h3>
          
         
          <h2 className="main-headingSD">We scale with you <br/>across departments</h2>
          
         
          <h3 className="blue-heading">Designers</h3>
          <p>Create accessible design in record time in Figma, Sketch, and Adobe XD.</p>
          
         
          <h3 className="blue-heading2">Developers</h3>
          <p>Create accessible design in record time in Figma, Sketch, and Adobe XD.</p>
          
       
          <h3 className="blue-heading3">Product Managers</h3>
          <p>Create accessible design in record time in Figma, Sketch, and Adobe XD.</p>
          
          
          <h3 className="blue-heading4">Compliance Managers</h3>
          <p>Create accessible design in record time in Figma, Sketch, and Adobe XD.</p>
        </div>
      </div>
    </div>
  );
};

export default InclusiveSoftware;
