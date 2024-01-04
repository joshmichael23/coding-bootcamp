
"use client"
import Image from 'next/image'
import style from '../app/style.css';
import React, {useState} from 'react';

export default function Home() {
  
  const [tanya, setTanya] = useState(true);


  return (
    <main>
      <div className='wrapper'>
        
        <div className="profilepic">
            <div className="imageContainers">
              <img className={tanya? 'tanya' : 'john'} alt="Tanya" src={'./image-tanya.jpg'}></img>
              <img alt="John" className={tanya? 'tanya' : 'john'} src={'./image-john.jpg'}></img>
              
            </div>
            <div className='buttonNavigations'>
                <button className='buttons' onClick={()=> setTanya(tanya=>true)}><img src='/icon-prev.svg'></img></button>
                <button className='buttons' onClick={()=> setTanya(tanya=>false)}><img src='/icon-next.svg'></img></button>
              </div>
        </div>
        <div className="bottom">
          <div className="quoteContainer">
          <section className={tanya? 'quote tanya' : 'quote john'}>
                <p>“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”</p>
                <h1>
                  <span>Tanya Sinclair</span>
                  <span>UX Engineer</span>
                </h1>
          
            </section>
            <section className={tanya? 'quote tanya' : 'quote john'}>
                <p>“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”</p>
                <h1>
                  <span>John Tarkpor </span>
                  <span>Junior Front-end Developer</span>
                </h1>
            </section>

          </div>
        </div>
      </div>
    </main>
  )
}
