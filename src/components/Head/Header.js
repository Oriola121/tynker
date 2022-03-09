import React from 'react'
import Tynker from './tynker.jpg'
import Tynkerlogo from './tynkerlogo.png'
import './Header.css'

function Header () {
    return (
        <div className='head'>
        <div className='headwrap'>
            <img src={Tynkerlogo} className='tynkerlogo'/>
            <div className='but'>
            <div className='lb'>
            <button className='b1'>PLAY</button>
            <button className='b1'>PARENT</button>
            <button className='b1'>EDUCATOR</button>
            <button className='b1'>WHY CODE?</button>
            </div>
            <div className='rb'>
            <button className='b2'>JOIN FOR FREE</button>
            <button className='b3'>LOG IN</button>
            </div>
            </div>
        </div>

            <div className='headcont'>
            <div className='headtext'>
            <h1 className='hs1'>Coding Made Easy</h1>
            <p className='funway'>The fun way to leran programming and develop<br/>
            problem-solving & critivcal thinking skills! Ages 5-18</p>
            <button className='b4'>GET STARTED FOR FREE </button>
            <p className='prlink'>
            <a href="https://www.tynker.com/parents/pricing">At-home plans from    
            <span class="price"> $7.50 per month</span></a>
            </p>
            </div>
            <img src={Tynker} className='tynker'/>
            </div>
        </div>
    )
}
export default Header