import React from 'react'
import './Hero.css'
import Girl from './girl.jpg'
import Endorsed from './endorsed.jpg'
import Tutor from './icontutor.svg'
import Byjus from './byjus.png'


function Hero (){
	return (
		<div className='hero'>
		<div className='herolayer'>
		<div className='herotext'>
		<h3 className='codplat'>The #1 Coding Platform for Kids</h3>
		<p className='p2'>Tynker powers the creativity of over <strong>60 million kids</strong> and serves thousands<br/> 
		of schools and educators worldwide.</p>
		<p className='p3'>Our interactive story-based learning allows kids to learn the basics with easy<br/> 
		block-based coding challenges before seamlessly transitioning to real-world<br/> 
		<a href='https://www.tynker.com/languages/' className='lglink'>text-based languages like</a> <strong>JavaScript and Python</strong>.</p>
		<p className='p4'>With 70+ award-winning courses, there’s a learning path for every kid, no<br/> 
		matter their age or level. We have over 5,000 learning modules, backed by<br/> 
		hundreds of built-in tutorials and hands-on projects.</p>
		<button className='nostar'>START CODING NOW</button>
		</div>
		<img src={Girl} className='girl'/>
		</div>
		<div className='herotext2'>
		<h1 className='hs2'>Tynker has been busy. Good Busy. Check out what’s NEW!</h1>
		<div className='heromg'>
		<div className='hermg'><img src={Endorsed} className='endorsed'/>
		<div className='hertext'><h3 className='hs3'>AP Computer Science</h3>
		<p className='p5'>2 New AP® CS courses endorsed<br/> by the College Board.</p>
		<a href='https://www.tynker.com/about/press/2021/04-tynker-endorsed-by
		-college-board-for-new-ap-computer-science-curricula'
		 className='more'>Learn More</a></div></div>

		<div className='hermg2'><img src={Tutor} className='icontutor'/>
		<div className='hertext2'><h3 className='hs3'>Live Classes</h3>
		<p className='p5'>2 Live coding classes with a private<br/> teacher.</p>
		<a href='https://www.tynker.com/parents/coding-classes/' className='more'>Learn More</a>
		</div></div>
		
		<div className='hermg3'><img src={Byjus} className='byjus'/>
		<div className='hertext3'><h3 className='hs3'>Tynker + BYJU’S</h3>
		<p className='p5'>Tynker has joined the BYJU’S family<br/> of brands.</p>
		<a href='https://www.tynker.com/about/press/2021/09-byju-s-acquires-leading-k-12
		-creative-coding-platform-tynker-to-continue-u-s-expansion'
		 className='more'>Learn More</a></div></div>

		</div>
		</div>
		</div>
	)
}



export default Hero