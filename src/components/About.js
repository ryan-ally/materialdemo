import React from 'react';
import bg from './rr.jpeg';
import Quote from './Quote.js';
import QuoteAndAuthor from './QuoteAndAuthor.js';
import QuotesDatabase from './QuotesDatabase.js';


const About = () => {
   return (
      <div>
      <br/>
               <h1>About US</h1><br/>
                        <img src={bg} className="App-rr" alt="rr"/>
                        <Quote />
                        <hr/>
         <p>About US page body content</p>
      </div>
   );
}

export default About;