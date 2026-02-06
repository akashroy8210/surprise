import React from 'react'
// import RoseFloating from '../RoseFloating'
import firstTimeMovie from './image/firstTimeMovie.jpg'
import firstTimeMovie2 from './image/firstTimeMovie2.jpg'

import a from './image/a.jpg'
import b from './image/b.jpg'
import c from './image/c.jpg'
import d from './image/d.jpg'
import e from './image/e.jpg'
import f from './image/f.jpg'
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


function Propose() {

  const [index, setIndex] = useState(0);

  const cards = [
    {
      img1: firstTimeMovie,
      img2: firstTimeMovie2,
      text: "Our first time when we went for a movie."
    },
    {
      img1: a,
      img2: b,
      text: "Beautiful memory together."
    },
    {
      img1: c,
      img2: d,
      text: "A special day."
    },
    {
      img1: e,
      img2: f,
      text: "One of my favorites ❤️"
    }
  ];

  function nextCard() {
    setIndex((prev) => (prev + 1) % cards.length);
  }


  const [isAccepted, setIsAccepted] = useState();
  if (isAccepted === "yes") {
    return (
      <div className='flex bg-pink-200 h-screen flex-col justify-center items-center'>
        <AnimatePresence mode="wait">

          <motion.div
            key={index}

            initial={{
              opacity: 0,
              x: 80,
              scale: 0.9
            }}

            animate={{
              opacity: 1,
              x: 0,
              scale: 1
            }}

            exit={{
              opacity: 0,
              x: -80,
              scale: 0.9
            }}

            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}

            className="bg-[#f2f2f2] p-4 flex flex-col gap-5 shadow-lg relative rounded-2xl border-4 border-pink-500 w-120 h-160"
          >
            <img src={cards[index].img1} className=" rounded-2xl shadow-xl" />
            <img src={cards[index].img2} className=" rounded-2xl shadow-xl" />

            <p className="p-2 text-pink-500 font-bold text-xl text-center absolute bottom-5 left-0 right-0">
              {cards[index].text}
            </p>

          </motion.div>

        </AnimatePresence>

        <button
          onClick={nextCard}
          className="cursor-pointer mt-10 px-6 py-3 bg-pink-500 text-white rounded-xl
                   hover:scale-110 active:scale-95 transition shiny-btn"
        >
          Forward →
        </button>
      </div>
    )
  }
  const text="Babu i love you so much i cant even imagine a nanosecond without you baby i know you are thinking that i hurt you but you know baby that i dont hurt you intentionally we will talk on it for now i love you baby.";
  return (
    <div className='bg-linear-to-t from-[#eea7cb] to-pink-200 h-screen flex flex-col  relative bg-cover items-center justify-center'>
      <h1 className='text-1xl font-bold fixed top-20 flex justify-center items-center bg-[#f2f2f2] border-2 shadow-2xl border-white px-5 py-3 rounded-full text-[#590d22] mb-10'>Happy Propose Day (-ve)💕</h1>

      <div className=' flex flex-col rounded-2xl w-200 p-5'>
        <h2 className='text-8xl text-center opacity-0 animate-down' style={{ fontFamily: 'Playfair Display' }} >
          I Love You
          <span className='block text-8xl text-pink-700 mt-3' style={{ fontFamily: 'Playfair Display' }}>Babu cutie</span>
        </h2>
        

        <p className='text-2xl px-5 text-center text-[#59656f]'>
          {text.split(" ").map((word, i) => (
            <span
              key={i}
              className="inline-block opacity-0 animate-word"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>

        <div className='flex gap-10 items-center justify-center p-20 opacity-0 animate-pop'
style={{ animationDelay: "1.8s" }}>
          <button onClick={() => {
            setIsAccepted("yes")
          }} className='px-10 text-2xl py-3 cursor-pointer bg-black rounded-2xl shiny-btn shadow-4xl text-white  flex items-center transition-all duration-300 ease-out hover:transform hover:-translate-y-1 hover:scale-105 ' style={{ fontFamily: 'Montserrat' }}>I Love you too dudu <ion-icon className='ml-2 ' name="heart-circle-outline"></ion-icon>   </button>
          <button className='px-10 text-2xl py-3 cursor-pointer bg-black rounded-2xl shiny-btn shadow-3xl text-white flex   items-center   transition-all duration-300  hover:transform hover:-translate-y-1  ease-out hover:scale-105' style={{ fontFamily: 'Montserrat' }}>I Hate You</button>
        </div>
      </div>
    </div>
  );
}



export default Propose
{/* CARD */ }





