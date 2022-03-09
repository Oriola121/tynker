import react from "react";
import './Hirate.css';
import Card from './cards.jpg';
import Tblue from './tblue.jpg';
import starz from './4.5 stars.png';
import Tred from './tred.jpg';
import Mod from './mod.jpg';
import Grab from './grab.jpg';
import starz2 from './4 stars.png';




function App() {
  return (
    <div className="Mainholder">
      <div className="phase1">
        <h1 className="phase1bigtext">3 Highly-Rated Mobile Apps for Learning Code</h1>
        <p className="phase1smalltext">Download Tynker apps and learn to code on the go.</p>
      </div>
      <div className="phase1btnholder"><button className="phase1btn">LEARN MORE</button></div>

      <div className="phase2">
        <div className="phase2left"> <img src={Card} className='phase2image1'/> 
        </div>
        <div className="phase2right">
          <div className="right1">
          <img src={Tblue} className="phase2image2" alt="JUST A NORMAL IMAGE"/>
          <h1 className="right1bigtext">Tynker Junior</h1>
          <p className="right1smalltext">Tap-Tap picture coding with voice-overs. Pre-readers solve story-based
             puzzles and build their first programs in coding sandboxes. Ages 5-7</p>
             <img src={starz} className="fourhalfstarrating"/>
                <p className="startext1">4.5 &nbsp; &nbsp; &nbsp; &nbsp; 2,200+ reviews</p>
          </div>
          <div className="right2">
            <img src={Tred} className="phase2image3"/>
            <h1 className="right2bigtext">Tynker</h1>
            <p className="right2smalltext">Drag-and-drop block coding with a
             full-featured workshop. Build games and apps, compose music and art, 
            control smart devices, and much, much more. Ages 6-11</p>
            <img src={starz} className="fourhalfstarrating2"/>
            <p className="startext2">4.7 &nbsp; &nbsp; &nbsp; &nbsp; 10,400+ reviews</p>

          </div>
          <div className="right3">
          <img src={Mod} className="phase2image4"/>
            <h1 className="right3bigtext">Mod Creator</h1>
            <p className="right3smalltext">Drag-and-drop Minecraft modding. Design skins, blocks and items.\
             Modify mob behaviors. Create mods and add ons. Explore worlds! Ages 6-11</p>
            <img src={starz2} className="fourhalfstarrating3"/>
            <p className="startext3">4.0  &nbsp; &nbsp; &nbsp; &nbsp; 3,300+ reviews</p>

          </div>
        </div>

      </div>

      <div className="phase3">
        <h1 className="phase3bigtext">A Mini-Computer for the Internet of Things!</h1>
        <div className="phase3holder">
          <div className="phase3holderleft">
            <p className="phase3lefttext">The BBC Doctor Who HiFive Inventor is a visually stunning IoT-enabled hand-shaped
                 mini-computer designed to teach kids how to control robots or interface with
                IoT systems to investigate the world around them.<br/><br/>
                Younger students will begin their learning journey with 
                visual block coding and advanced students with Micropython.<br/><br/>
                The HiFive Inventor was developed by Tynker in collaboration with BBC Learning and SiFive,
                 a fabless RISC-V semiconductor company.<br/><br/>
                Learn More:<br/>
                <a href="www.HiFiveInventor.com" className="highfivelink">www.HiFiveInventor.com </a>
                </p>
            
          </div>
          <div className="phase3holderright">
            <img src={Grab} className="phase3image5"/>
          </div>

        </div>
        <div></div>

      </div>
     
    </div>

 );
}

export default App;
