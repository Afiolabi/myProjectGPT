import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
  {
    title:'Plotting movies ',
    text: 'Several Twitter users have tested out ChatGPT’s potential to pen the next Hollywood blockbuster, with varying results The AI crafted without hesitation one sheets for @GuyP’s horror movie, set on an oil rig, and @mostserene‘s rom - com, set at the Hoover Dam, but it balked at @andyyoungfilm’s request for details on a mean - spirited sports flick titled “Four Eyes."'
  },
  {
    title:'Brainstorming Business Ideas',
    text: 'The Twitter account @aifunhouse’s “day job” is providing tips and tutorials on how to use generative AI, but sometimes you need a side hustle to pay the bills. To decide just what that side hustle should be — and how to get it off the ground — the team turned to ChatGPT. The AI provided a five- step plan for launching an online business that included tips for making a website and driving traffic, and it even gave them a list of potential products and services to sell, with the advice to conduct market research to assess potential demand.'
  },
  {
    title:'Telling Jokes',
    text:'ChatGPT can explain jokes upon request, too, and tell jokes even when it isn’t explicitly asked for them. The AI will also sometimes explain a joke right after delivering it, which we all know is the height of comedy.'
  },
  {
    title:'Guiding weight loss',
    text:'A Twitter user tried to use Chatgpt to prepare a weight loss plan. It took some repeated questioning to get the calorie counts right, and the AI never did give him a workout that met his constraints, but it was able to calculate his nutritional needs, prepare a daily menu, and come up with a detailed grocery list.' 
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'> 
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index)=> (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features