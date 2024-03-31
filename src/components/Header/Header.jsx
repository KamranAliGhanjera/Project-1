
import './Header.css'; 

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
       
       <img src="images/logo2.png" alt="My Logo" /> 
      
      </div>
      <nav className="navbar">
        <ul>
          <li>USE CASES</li>
          <li>PRICING</li>
          <li>SUPPORT</li>
          <li>RESOURCES</li>
        </ul>
      </nav>
      <div className="buttons">
        <button className="login-button">LOG IN</button>
        <button className="free-trial-button">START FREE TRIAL</button>
      </div>
    </header>
  );
};

export default Header;
