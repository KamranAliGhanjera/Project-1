import './Integrated.css'; 

const Integrated = () => {
  return (
    <div className="integrated-container">
    
      <div className="big-picture-container">
        <img src="images/integrated.png" alt="Big Picture" className="big-picture" />
      </div>

    
      <h1 className="main-headingI">
        Integrated into the tools <br /> you already use
      </h1>

  
      <p className="description">
        Whether it is Figma or Sketch, your favorite web browser, or even GitHub and beyond,
        Stark integrates into the tools your team already uses for maximum efficiency and no learning curve.
        Our AI-powered integrations help your teammates find and fix accessibility issues as early as
        the first designs and all across the development cycle.
      </p>

      
      <button className="get-started-button">Get Started for Free</button>
    </div>
  );
};

export default Integrated;
