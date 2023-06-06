import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatGPT.css'

const WhatGPT = () => {
  return (
    <div className='gpt-3__whatgpt section__margin' id='wgpt3'>
      <div className='gpt-3__whatgpt-feature'>
        <Feature title={"What is GPT-3"} text={"We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."}/>
      </div>
      <div className='gpt-3__whatgpt-heading'>
        <h1 className='gradient__text'>Possibilities are beyond your Imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt-3__whatgpt-container'>
        <Feature title={"Chatbots"} text={"We so opinion friends me message as delight. Whole front do of plate heard oh ought. "}/>
        <Feature title={"KnowledgeBase"} text={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}/>
        <Feature title={"Education"} text={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}/>
      </div>
    </div>
  )
}

export default WhatGPT