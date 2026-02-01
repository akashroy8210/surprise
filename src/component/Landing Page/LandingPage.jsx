import React, { useState } from 'react'
import Happy from "./Happy";
import envelop from "../../assets/image/envelop.png";
import Hug from '../cards/Hug';



function LandingPage() {

  const [mood, setMood] = useState("landing");
  const [letter, setletter]=useState()
  if (mood === "bad") {
    return <Happy />;
  }
  
  
  

  // 3️⃣ if GOOD clicked → other content
  if (mood === "good") {
    if(letter==="open"){
    return <Hug/>
  }
    return (
      <div className='bg-linear-to-t from-[#eea7cb] to-pink-200 h-screen flex flex-col relative bg-cover items-center justify-center'>
      <h1 className='text-3xl font-bold fixed top-20'>For You Baby (-ve♥️)💕</h1>
      <div className='bg-[#fff8e7] flex flex-col rounded-2xl w-200 p-5 border-2 border-[#e450b3]'>
        {/* <h2 className='text-2xl p-2 border-b-2 border-[#eea2a2]  text-center  font-bold  font-[Great_Vibes] '>Hey Babu kaisi ho bubu💕</h2> */}
        {/* <h2 className='text-2xl p-2 border-b-2 border-[#eea2a2]  text-center  font-bold  font-[Great_Vibes] '>Hey  kaisi ho</h2> */}

        <div className='flex gap-10  flex-col items-center justify-center p-20'>
          <h2 className='text-3xl font-bold capitalize text-pink-500'>click on envelop to see surprise✨</h2>
          <button onClick={()=>{
            setletter("open")
          }}><img src={envelop} alt="" className='w-2xs transition-all duration-300 hover:scale-110 cursor-pointer' /></button>
        </div>
      </div>
    </div>
    );
  }

  return (
    <div className='bg-linear-to-t from-[#eea7cb] to-pink-200 h-screen flex flex-col relative bg-cover items-center justify-center'>
      <h1 className='text-3xl font-bold fixed top-20'>For You Baby (-ve♥️)💕</h1>
      
      <div className='bg-[#fff8e7] flex flex-col rounded-2xl w-200 p-5 border-2 border-[#e450b3]'>
        <h2 className='text-2xl p-2 border-b-2 border-[#eea2a2]  text-center  font-bold  font-[Great_Vibes] '>Hey Babu kaisi ho bubu💕</h2>
        {/* <h2 className='text-2xl p-2 border-b-2 border-[#eea2a2]  text-center  font-bold  font-[Great_Vibes] '>Hey  kaisi ho</h2> */}
        <div className='flex gap-10 items-center justify-center p-20'>
          
          <button onClick={()=>{
            setMood("good")
          }} className='px-10 py-3 cursor-pointer bg-[#ffccd5] rounded-full shadow-lg text-[#590d22] font-bold'>Surprise</button>
          <button onClick={()=>{
            setMood("bad")
          }} className='px-10 py-3 cursor-pointer bg-[#ffccd5] rounded-full shadow-lg text-[#590d22] font-bold '>Bad</button>
        </div>
      </div>
    </div>
  )
}
export default LandingPage
