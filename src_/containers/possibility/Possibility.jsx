import React from 'react'
import './possibility.css'
import possImage from '../../assets/possibility.png'


const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="Possibility">
      <div className='gpt3__possibility-image'>
        <img src={possImage} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>The future of GPT and other natural language processing technologies is likely to involve further advances and improvements in their capabilities. For example, GPT and similar models may become more accurate and efficient at language tasks, and may be able to handle more complex and diverse types of language and text.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility