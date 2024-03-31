import "./Explore.css";

const Explore = () => {
  return (
    <div className="explore-container">
      <h1 className="explore-main-heading">EXPLORE THE STARK PLATFORM</h1>
      <h2 className="explore-sub-heading">
        The only end-to-end solution
        <br />
        from design and code to live product
      </h2>
      <div className="explore-images">
        <div>
          <img src="images/node1.png" alt="Image 1" className="explore-image" />
          <p className="explore-highlight-text">SPEED UP DESIGN & DEV</p>
          <h3 className="explore-plugins-heading">
            Plug-ins & <br /> Integrations
          </h3>
          <p className="additional-text">
            Meet your team where they work, from Figma and Sketch to GitHub and
            their browser of choice. An accessibility workflow built right into
            the tools they love. No need for them to switch or relearn.
          </p>
        </div>
        <div>
          <img src="images/node2.png" alt="Image 2" className="explore-image" />
          <p className="explore-highlight-text">IMPROVE COLLABORATION</p>
          <h3 className="explore-plugins-heading">
            Projects, Reports <br />& Insights
          </h3>
          <p className="additional-text">
            Meet your team where they work, from Figma and Sketch to GitHub and
            their browser of choice. An accessibility workflow built right into
            the tools they love. No need for them to switch or relearn.
          </p>
        </div>
        <div>
          <img src="images/node3.png" alt="Image 3" className="explore-image" />
          <p className="explore-highlight-text">ACCELERATE WORKFLOWS</p>
          <h3 className="explore-plugins-heading">
            AI-powered <br />
            Automation
          </h3>
          <p className="additional-text">
            Meet your team where they work, from Figma and Sketch to GitHub and
            their browser of choice. An accessibility workflow built right into
            the tools they love. No need for them to switch or relearn.
          </p>
        </div>
        <div>
          <img src="images/node4.png" alt="Image 4" className="explore-image" />
          <p className="explore-highlight-text">MANAGE AT SCALE</p>
          <h3 className="explore-plugins-heading">
            Compliance <br /> Center
          </h3>
          <p className="additional-text">
            Meet your team where they work, from Figma and Sketch to GitHub and
            their browser of choice. An accessibility workflow built right into
            the tools they love. No need for them to switch or relearn.
          </p>
        </div>
      
      </div>
      <div className="button-container">
    <button className="get-started-button">Get started for free</button>
  </div>
    </div>
    
  );
};

export default Explore;
