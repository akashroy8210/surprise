import React, { useState } from 'react'
import Happy from "./Happy";
import envelop from "../../assets/image/envelop.png";
import { Choclate, Promise, Hug, Kiss, Propose, Valentine, Teddy } from '../cards/index'
function LandingPage() {

  const [mood, setMood] = useState("landing");
  const [letter, setletter] = useState()
  const [day, setDay] = useState()
  if (day === "Promise") {
    return <Promise />
  } else if (day === "Hug") {
    return <Hug />
  } else if (day == "Teddy") {
    return <Teddy />
  } else if (day == "Propose") {
    return <Propose />
  } else if (day === "Valentine") {
    return <Valentine />
  } else if (day === "Choclate") {
    return <Choclate />
  } else if (day === "Kiss") {
    return <Kiss />
  }

  if (mood === "bad") {
    return <Happy />;
  }
  // 3️⃣ if GOOD clicked → other content
  if (mood === "good") {
    if (letter === "open") {
      return (
        <div className='bg-linear-to-t from-[#eea7cb] to-pink-200 h-screen flex flex-col relative bg-cover items-center justify-center'>
          <h1 className='text-3xl font-bold fixed top-20'>For You Baby (-ve♥️)💕</h1>

          <div className='bg-[#fff8e7] flex flex-col rounded-2xl w-200 p-5 border-2 border-[#e450b3]'>
            <h2 className='text-2xl p-2 border-b-2 border-[#eea2a2]  text-center  font-bold  font-[Great_Vibes] '>Now Its time for surprise✨</h2>

            <div className='grid grid-cols-3 p-20 gap-8'>
              <button onClick={() => {
                setDay("Propose")
              }} style={{ fontFamily: 'Lato' }} className='px-10 py-2 cursor-pointer shiny-btn bg-black  hover:transform hover:-translate-y-1  rounded-md shadow-lg text-white   transition-all duration-100 ease-in hover:bg-pink-600 hover:text-white' > Propose Day</button>
              <button onClick={() => {
                setDay("Choclate")
              }} style={{ fontFamily: 'Lato' }} className='px-10 py-2 cursor-pointer shiny-btn bg-black  hover:transform hover:-translate-y-1  rounded-md shadow-lg text-white   transition-all duration-100 ease-in hover:bg-pink-600 hover:text-white' > Choclate Day</button>
              <button onClick={() => {
                setDay("Teddy")
              }} style={{ fontFamily: 'Lato' }} className='px-10 py-5 cursor-pointer shiny-btn bg-black  hover:transform hover:-translate-y-1  rounded-md shadow-lg text-white   transition-all duration-100 ease-in hover:bg-pink-600 hover:text-white' > Teddy Day</button>
              <button onClick={() => {
                setDay("Promise")
              }} style={{ fontFamily: 'Lato' }} className='px-10 py-5 cursor-pointer shiny-btn bg-black  hover:transform hover:-translate-y-1  rounded-md shadow-lg text-white   transition-all duration-100 ease-in hover:bg-pink-600 hover:text-white' >Promise Day </button>
              <button onClick={() => {
                setDay("Hug")
              }} style={{ fontFamily: 'Lato' }} className='px-10 py-5 cursor-pointer shiny-btn bg-black  hover:transform hover:-translate-y-1  rounded-md shadow-lg text-white   transition-all duration-100 ease-in hover:bg-pink-600 hover:text-white' > Hug Day</button>
              <button onClick={() => {
                setDay("Kiss")
              }} style={{ fontFamily: 'Lato' }} className='px-10 py-5 cursor-pointer shiny-btn bg-black  hover:transform hover:-translate-y-1  rounded-md shadow-lg text-white   transition-all duration-100 ease-in hover:bg-pink-600 hover:text-white' > Kiss Day</button>
              <button onClick={() => {
                setDay("Valentine")
              }} style={{ fontFamily: 'Lato' }} className='px-10 py-5 cursor-pointer shiny-btn bg-black  hover:transform hover:-translate-y-1  rounded-md shadow-lg text-white   transition-all duration-100 ease-in hover:bg-pink-600 hover:text-white col-span-3' > Valentine's Day </button>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className='bg-linear-to-t from-[#eea7cb] to-pink-200 h-screen flex flex-col relative bg-cover items-center justify-center'>
        <h1 className='text-3xl font-bold fixed top-20'>For You Baby (-ve♥️)💕</h1>
        <div className='bg-[#fff8e7] flex flex-col rounded-2xl w-200 p-5 border-2 border-[#e450b3]'>

          <div className='flex gap-10  flex-col items-center justify-center p-20'>
            <h2 className='text-3xl font-bold capitalize text-pink-500'>click on envelop to for surprise✨</h2>
            <button onClick={() => {
              setletter("open")
            }}><img src={envelop} alt="" className='w-2xs transition-all duration-300 hover:scale-110 cursor-pointer' /></button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className='bg-linear-to-t from-[#eea7cb] to-pink-200 h-screen flex flex-col  relative bg-cover items-center justify-center'>
      <h1 className='text-1xl font-bold fixed top-20 bg-[#f2f2f2] border-2 shadow-2xl border-white px-5 pb-3 rounded-full text-[#590d22] mb-10'>Special Delivery   <span className='inline-flex text-3xl justify-center items-center text-red-400 ml-2 mr-2'>.</span>   For You (-ve)💕</h1>

      <div className=' flex flex-col rounded-2xl w-200 p-5'>
        <h2 className='text-8xl p-2  text-center font-[Great_Vibes] animate-down  ' style={{ fontFamily: 'Playfair Display' }}>
          Will You be my
          <span className='block text-8xl text-pink-700 mt-3' style={{ fontFamily: 'Playfair Display' }}>Valentine?</span>
        </h2>
        <p className='text-2xl px-30  text-center text-[#59656f]' style={{ fontFamily: 'Lato' }}>I've planned a day full of sweet moments, but it's missing the most important ingredient: <span className='text-pink-700'>You</span> .

        </p>
        <div className='flex gap-10 items-center justify-center p-20'>
          <button onClick={() => {
            setMood("good")
          }} className='px-10 text-2xl py-3 cursor-pointer bg-black rounded-2xl shiny-btn shadow-4xl text-white  flex items-center transition-all duration-300 ease-in hover:transform hover:-translate-y-1 ' style={{ fontFamily: 'Montserrat' }}>Yes, i'd love to <ion-icon className='ml-2' name="heart-circle-outline"></ion-icon>   </button>
          <button onClick={() => {
            setMood("bad")
          }} className='px-10 text-2xl py-3 cursor-pointer bg-black rounded-2xl shiny-btn shadow-3xl text-white flex   items-center   transition-all duration-300 ease-in hover:transform hover:-translate-y-1 ' style={{ fontFamily: 'Montserrat' }}>No</button>
        </div>
      </div>
    </div>
  )
}
export default LandingPage
