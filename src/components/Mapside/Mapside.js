import React from 'react'
import './Mapside.css'
import Apple from './apple.png'
import Google from './google.png'
import Microsoft from './microsoft.png'
import Pbs from './pbs.png'
import Bbc from './bbc.png'
import Facebook from './fb.png'
import Lego from './lego.png'
import Minecraft from './minecraft.png'
import Mattel from './star.png'
import Hotwheel from './wheels.png'
import Barbie from './barbli.png'
import Cosense from './cosense.png'
import Aasl from './aasl.png'
import Smart from './smart.png'
import Parcho from './parcho.png'
import Brain from './brain.png'
import Nationsl from './national.png'
import Momcho from './momcho.png'
import Digital from './digital.png'
import Parpick from './parpick.png'
import dots from './dot.svg'
import over100 from './100k.png'
import million from './60m.png'
import billion from './7b.png'
import Map from './mapblue.png'
import comma from './comma.svg'
import boy from './boy.png'
import valeries from './valeries.png'
import madam from './madam.png'


function Mapside (){
	return (
		<div className='maplay'>
		<div className='maptop'>
		<div className='uptext'>
		<h1 className='hls'>Why Should Kids Learn to Code with Tynker?</h1>
		<p className='paro'>Because <strong>technology is so integrated</strong> into virtually
		 every aspect of our lives, learning about it is <strong>more<br/>
		 important than ever.</strong> For kids, our coding platform
		  makes it convenient and fun to gain knowledge<br/>
		  that will serve them well throughout their lives.
		   You can count on our <strong>trusted methods</strong> to help them<br/>
		   develop and grow their capabilities with computers.</p>

		<p className='paro2'>Tynker isn’t just for schools and coding camps, though. Parents who value
		 <strong>STEM education</strong> and want<br/>
		 their children to know how to learn to code should know that
		  our kids programming platform can be<br/>
		 used at home, too. There are individual and family home plans,
		  and our online coding classes for kids<br/>
		  are a great way for them to gain the supplemental STEM skills
		   needed for the world of the future.</p></div>

		   <div className='uplist'>
		   <div className='l1'>
		    <h5 className='hmapd1'>CODING BENEFITS</h5>
		    <ol>
				<li>Top 10 Reasons to Code</li>
				<li>Kids Coding Basics</li>
				<li>Develop 21st Century Skills</li>
				<li>Download eBooks on Coding</li>
			</ol></div>

			<div className='l2'>
		    <h5 className='hmapd2'>CODING GUIDES</h5>
		    <ol>
				<li>What is Coding for Kids?</li>
				<li>Coding with Minecraft</li>
				<li>Coding with Electronic Kits</li>
				<li>Coding with Connected Toys</li>
				<li>More Coding Resources</li>
			</ol></div>
			
			<div className='l3'>
		    <h5 className='hmapd3'>TYNKER HIGHLIGHTS</h5>
		    <ol>
				<li>What’s New in Tynker?</li>
				<li>COVID-19 Impact report</li>
				<li>Meet our Featured Makers</li>
				<li>Seasonal Coding Projects</li>
				<li>Celebrating Women in STEM</li>
			</ol></div>

			<div className='l4'>
		    <h5 className='hmapd4'>CODING IN SCHOOLS</h5>
		    <ol>
				<li>K-12 School Plans</li>
				<li>AP Computer Science Principles</li>
				<li>AP Computer Science A</li>
				<li>Remote Learning</li>
				<li>K-12 Success Stories</li>
			</ol></div>

		</div>	
		<div className='upmg'>
		<div className='upmgtext'>
		<h1>Trusted by Leading Brands</h1>
		<p>Our methods for learning to code all are provided within a safe,
		 moderated community that is built <br/>around encouraging students to gain confidence
		  heir abilities and do so without fear of failure.</p>
		</div>
		<div className='up1'>
		<img src={Apple} className='apple'/>
		<img src={Google} className='google'/>
		<img src={Microsoft} className='microsoft'/>
		<img src={Pbs} className='pbs'/>
		<img src={Bbc} className='bbclearn'/>
		<img src={Facebook} className='facebook'/>
		</div>
		<div className='up2'>
		<img src={Lego} className='lego'/>
		<img src={Minecraft} className='minecraft'/>
		<img src={Mattel} className='mattel'/>
		<img src={Hotwheel} className='wheels'/>
		<img src={Barbie} className='barbli'/>
		</div>
		</div>
		
		</div>

		<div className='mapdown'>
		<div className='downt'>
		<h1 className='join'>Join Tynker's Global Community</h1>
		<button className='sigun'>SIGN UP FREE</button>
		</div>

		<div className='tdown'>
		<div className='tover'>
		<div className='mil60'>
		<div className="dot">
        <img src={Map} className='map'/>
        <img src={dots} className="dot1" />
        <img src={dots} className="dot2" />
        <img src={dots} className="dot3" />
        <img src={over100} className="over100" />
        <img src={million} className="million" />
        <img src={billion} className="billion" />
        </div>

        <div className="wrapper_container">
          <div className="card_wrapper">
            <div className="card1">
              <p><img src={comma} className="comma" /><i>I thought a game was<br/>
               going to be extremely <br/>hard to make,but <br/> Tynker made it really easy.</i></p>
              <div className="writeupix">
                <p className="p_f"><b>Tynker Featured<br /> Maker</b></p>
                <img src={boy} className="madam_pix" />
              </div>
            </div>

            <div className="card2">
              <p ><img src={comma} className="comma" /><i>There's so much opportunity once<br/>
               they understand how coding works.<br/>
                It's amazing to see them create<br/>
                 incredible things themselves.</i></p>
              <div className="writeupix">
                <p className="p_f"><b>Charlotte R.</b><br />Parent | Melbourne,<br /> Australia</p>
                <img src={madam} className="madam_pix" />
              </div>
            </div>

            <div className="card3">
              <p><img src={comma} className="comma" /><i>Tynker has made programming fun,<br/>
               exciting, and simple and will help lead<br/> kids into their future.</i></p>
              <div className="writeupix">
                <p className="p_f"><b>Valerie S.</b><br />5th Grade Teacher | California, US</p>
                <img src={valeries} className="madam_pix" />
              </div>
            </div>
          </div>
        </div>
		</div>
		</div>

		<div className='tmg'>
		<div className='tmwrap'>
		<img src={Cosense} className='cosense'/>
		<img src={Aasl} className='aasl'/>
		<img src={Smart} className='smart'/>
		<img src={Parcho} className='parcho'/>
		<img src={Brain} className='brain'/>
		<img src={Nationsl} className='national'/>
		<img src={Momcho} className='momcho'/>
		<img src={Digital} className='digital'/>
		<img src={Parpick} className='parpick'/>
		</div></div>

		</div>


		</div>
		

		</div>
	)
}

export default Mapside