import {React, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const quotes = [
"A full-stack developer is the Swiss Army knife of coding, equipped to tackle both the front-end user experience and the back-end logic with equal proficiency.",
"Being a full-stack developer means being a bridge between the user's needs and the server's capabilities, making the digital world a seamless experience.",
"A full-stack developer doesn't just build apps—they engineer solutions from the database to the interface, crafting end-to-end functionality.",
"To be a full-stack developer is to understand the complete lifecycle of an application, from concept to deployment, and everything in between."
];

function QuotesRotator(){
  const [index,setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() =>{
      setIndex((index + 1) % quotes.length);
    }, 2000);
    return () => clearInterval(interval);  
    },[index]);
    return(
      <div>
        <h2>Quotes Rotators</h2>
        <p>{quotes[index]}</p>
      </div>
    )
}
export default QuotesRotator;
