import React from 'react'
import '../Css/Middle2.css'
import { GiSuitcase } from 'react-icons/gi';
import { AiOutlineSolution } from 'react-icons/ai';
import { FaLaptop } from 'react-icons/fa';

function Middle2() {
    return (
        <div className='serviceSection'>
          <div className='intro-to-services'>
            <h1 className='serviceSection-h1'>Our Services Section</h1>
            <p className='serviceSection-p' >It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>
            </div>

            <div className='card-service-section'>
              <div className='individual-cards'>
                <GiSuitcase size={50} color='#3a9bbe' />
                <h3 className='individual-card-h3' >Careers</h3>
                <p className='individual-card-p' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='btn1 btn--primary btn--medium' type='button'>More...</button>
              </div>
              <div className='individual-cards'>
                <AiOutlineSolution size={50} color='#3a9bbe' />
                <h3 className='individual-card-h3' >Solutions</h3>
                <p className='individual-card-p' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='btn1 btn--primary btn--medium' type='button'>More...</button>
              </div>
              <div className='individual-cards'>
                <FaLaptop size={50} color='#3a9bbe' />
                <h3 className='individual-card-h3' >Courses</h3>
                <p className='individual-card-p' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='btn1 btn--primary btn--medium' type='button'>More...</button> 
              </div>
            </div>
            
        </div>
    )
}

export default Middle2