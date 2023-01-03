import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="ChatGPT (Generative Pre-trained Transformer) is a chatbot launched by OpenAI in November 2022. It is built on top of OpenAI's GPT-3.5 family of large language models, and is fine-tuned with both supervised and reinforcement learning techniques.

ChatGPT was launched as a prototype on November 30, 2022, and quickly garnered attention for its detailed responses and articulate answers across many domains of knowledge. Its uneven factual accuracy was identified as a significant drawback." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="With its 175 billion parameters, its hard to narrow down what GPT-3 does. The model is, as you would imagine, restricted to language. It can’t produce video, sound or images like its brother Dall-E 2, but instead has an in-depth understanding of the spoken and written word." />
      <Feature title="Knowledge bank" text="On the face of it, GPT-3's technology is simple. It takes your requests, questions or prompts and quickly answers them. As you would imagine, the technology to do this is a lot more complicated than it sounds.

The model was trained using text databases from the internet. This included a whopping 570GB of data obtained from books, webtexts, Wikipedia, articles and other pieces of writing on the internet. To be even more exact, 300 billion words were fed into the system." />
      <Feature title="Concerns" text="Because the system is trained largely using words from the internet, it can pick up on the internet’s biases, stereotypes and general opinions. That means you’ll occasionally find jokes or stereotypes about certain groups or political figures depending on what you ask it. In places, OpenAI has put in warnings for your prompts. Ask how to bully someone, and you'll be told bullying is bad. Ask for a gory story, and the chat system will shut you down. The same goes for requests to teach you how to manipulate people or build dangerous weapons. " />
    </div>
  </div>
);

export default WhatGPT3;
