import react from "react"
import './Prefoot.css';
import Safe from './kidsafe.png';

function App(){

    return(

        <div className="TopContainer">
        <div className="ameed">
          <div className="Hammedholder">
         <div className="about">
           <h4>ABOUT</h4>
        <p>Tynker is the world’s leading K-12 creative coding platform,
          enabling students of all ages to learn to code at home,
          school, and on the go. Tynker’s highly successful coding
          curriculum has been used by one in three U.S.  K-8 schools,
          100,000 schools globally, and over 60 million kids 
          across 150 countries.</p>
          </div>


          <div className="Resources">
                <h4>RESOURCES</h4>
                        <p>Blog</p>
                        <p>About Us</p>
                        <p>Press</p>
                        <p>Jobs</p>
                        <p>Mobile Apps</p>
                        <p>Coding eBooks</p>
                        <p>Scholarship</p>
                        <p>Forum</p>
                        <p>Store</p>
                        <p>CS Authors</p>
                      </div>


                <div className="Parents">
                       <h4>PARENTS</h4>
                        <p>Overview</p>
                        <p>Private Tutoring</p>
                        <p>Give a Gift</p>
                        <p>Redeem</p>
                        <p> Why Coding</p>
                        <p>Featured Makers</p>
                </div>


                <div className="Educators">
                  <h4>EDUCATORS</h4>
                 <p>Overview</p>
                 <p>Elementary</p>
                 <p>Middle School</p>
                 <p>High School</p>
                 <p>AP CS Courses</p>
                 <p>PD</p>
                 <p>Hour of Code</p>
                 <p>STEM Projects</p>
                 <p>Request a Quote</p>
                  </div>


                <div className="NEWS">
                  <h4>PARENT NEWSLETTER</h4>
                  <div className="themail">
                  <input className="Input" placeholder="Enter Your Email"></input>
                  <button className="theok">OK</button>
                  </div>
                  
                  </div>
                
                </div>
                  
                <div className="hammedbutton">
                  <div className="butorder">
                    <div><img src={Safe}/></div>
                    <div className="lastp">
                      <p>&copy; 2022 Neuron Fuel </p> |
                      <p>Terms & Conditions</p> |
                      <p className="privacy">PRIVACY POLICY</p> |
                      <p>Kids & Online Safety</p>|
                      <p>About Us</p> |
                      <p>Contact Us</p>
                    </div>
                    
                    </div>
                  </div>
                </div>
                </div>
                    
    )
}


export default App;
