import React from 'react'
import './Paredu.css'
import Kids from './kids.jpg'
import Test from './test.jpg'


function Paredu () {
	return (
		<div className='paredu'>
		<div className='parlet'>
		 <div className='partop'>
			<img src={Kids} className='kids'/>
			<div className='partex'>
			<h1>Parents</h1>
			<p>Coding is quickly becoming an essential skill, one that will prepare<br/> 
			your kids to succeed in an increasingly digital world.</p>
			<p>Tynker offers a range of options to learn coding: Your children can<br/> 
			learn to code with our self-paced, <a href='https://www.tynker.com/parents/courses'
			 className='game'>immersive 
			game-like courses</a>, and<br/> 
			then advance to learning real-world Python and JavaScript.</p>
			<p>Select the option that’s best for your child!</p>
			<button className='read'>LEARN MORE</button></div>
		 </div>
		 <div className='pardown'>
			<img src={Test} className='test'/>
			<div className='partey'>
			<h1>Educators</h1>
			<p>Join over 100,000 schools that use Tynker to engage students with<br/>
			 coding and connect with other educators who love to code!</p>
			<p>Teaching coding with Tynker is as easy as 1-2-3. In just minutes, you can<br/>
			 <a href='https://www.tynker.com/#/join/teacher'
			  className='free'>create a free account</a>, set up your virtual classroom, 
			 and assign ready-<br/>made lesson plans!</p>
			<p>Tynker empowers K-12 educators with free PD, standards-aligned<br/>
			 curricula, cross-curricular STEM coding, AP Computer Science courses,<br/>
			  and many great coding resources.</p>
			<button className='read'>LEARN MORE</button></div>
		 </div>
		 </div>
		</div>
	)
}




export default Paredu