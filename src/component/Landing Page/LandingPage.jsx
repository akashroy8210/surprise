import React, { useState } from 'react'
import Happy from "./Happy";
import envelop from "../../assets/image/envelop.png";
import { Choclate, Promise, Hug, Kiss, Propose, Valentine, Teddy,Rose} from '../cards/index'

function LandingPage() {

const [mood, setMood] = useState("landing");
const [letter, setletter] = useState()
const [day, setDay] = useState()

// ✅ Valentine Unlock Logic (ADDED)
const valentineWeek = {
  Rose: 7,
  Propose: 8,
  Choclate: 9,
  Teddy: 10,
  Promise: 11,
  Hug: 12,
  Kiss: 13,
  Valentine: 14,
};

const today = new Date();
const currentDate = today.getDate();
const currentMonth = today.getMonth(); // Feb = 1

const isUnlocked = (dayName) => {
  return currentMonth === 1 && currentDate >= valentineWeek[dayName];
};

// ✅ Auto unlock at midnight
setTimeout(() => {
  window.location.reload();
}, (24 - today.getHours()) * 3600000);


// -------- YOUR ORIGINAL FLOW (NOT TOUCHED) --------

if (day === "Promise") return <Promise />
else if (day === "Hug") return <Hug />
else if (day == "Teddy") return <Teddy />
else if (day == "Propose") return <Propose />
else if (day === "Valentine") return <Valentine />
else if (day === "Choclate") return <Choclate />
else if (day === "Kiss") return <Kiss />
else if(day==="Rose") return <Rose/>


if (mood === "bad") {
return <Happy />;
}

if (mood === "good") {
if (letter === "open") {

return (
<div className='bg-linear-to-t from-[#eea7cb] to-pink-200 h-screen flex flex-col relative bg-cover items-center justify-center'>
<h1 className='text-3xl font-bold fixed top-20'>For You Baby (-ve♥️)💕</h1>

<div className='bg-[#fff8e7] flex flex-col rounded-2xl w-200 p-5 border-2 border-[#e450b3]'>
<h2 className='text-2xl p-2 border-b-2 border-[#eea2a2] text-center font-bold font-[Great_Vibes]'>
Now Its time for surprise✨
</h2>

<div className='grid grid-cols-3 p-20 gap-8'>

{/* ✅ BUTTON TEMPLATE APPLIED */}

{["Rose","Propose","Choclate","Teddy","Promise","Hug","Kiss","Valentine"].map((d)=>{

const unlocked = isUnlocked(d);

return(
<button
key={d}
onClick={()=> unlocked && setDay(d)}
disabled={!unlocked}
style={{ fontFamily: 'Lato' }}

className={`
border-2 px-10 py-4 rounded-md shadow-lg
transition-all duration-300 relative

${unlocked
? "bg-black text-white hover:-translate-y-1 hover:bg-pink-600 cursor-pointer shadow-[0_0_20px_rgba(255,105,180,0.6)]"
: "bg-gray-300 text-gray-500 cursor-not-allowed"
}
`}
>

{/* LOCK ICON */}
{!unlocked && (
<span className="absolute right-2 top-1">
🔒
</span>
)}

{d} Day

</button>
)

})}

</div>
</div>
</div>
)
}

return (
<div className='bg-linear-to-t from-[#eea7cb] to-pink-200 h-screen flex flex-col relative bg-cover items-center justify-center'>
<h1 className='text-3xl font-bold fixed top-20'>For You Baby (-ve♥️)💕</h1>

<div className='bg-[#fff8e7] flex flex-col rounded-2xl w-200 p-5 border-2 border-[#e450b3]'>

<div className='flex gap-10 flex-col items-center justify-center p-20'>
<h2 className='text-3xl font-bold capitalize text-pink-500'>
click on envelop to for surprise✨
</h2>

<button onClick={() => setletter("open")}>
<img src={envelop} alt="" className='w-2xs transition-all duration-300 hover:scale-110 cursor-pointer' />
</button>

</div>
</div>
</div>
);
}

return (
<div className='bg-linear-to-t from-[#eea7cb] to-pink-200 h-screen flex flex-col relative bg-cover items-center justify-center'>
<h1 className='text-1xl font-bold fixed top-20 bg-[#f2f2f2] border-2 shadow-2xl border-white px-5 pb-3 rounded-full text-[#590d22] mb-10'>
Special Delivery <span className='inline-flex text-3xl text-red-400 ml-2 mr-2'>.</span> For You (-ve)💕
</h1>

<div className='flex flex-col rounded-2xl w-200 p-5'>

<h2 className='text-8xl text-center font-[Great_Vibes] animate-down' style={{ fontFamily: 'Playfair Display' }}>
Will You be my
<span className='block text-8xl text-pink-700 mt-3'>Valentine?</span>
</h2>

<p className='text-2xl px-30 text-center text-[#59656f] animate-down' style={{ fontFamily: 'Lato' }}>
I've planned a day full of sweet moments, but it's missing the most important ingredient:
<span className='text-pink-700'> You</span>.
</p>

<div className='flex gap-10 items-center justify-center p-20'>
<button
onClick={() => setMood("good")}
className='px-10 text-2xl py-3 cursor-pointer bg-black rounded-2xl shadow-4xl text-white flex items-center transition-all duration-300 hover:-translate-y-1'
style={{ fontFamily: 'Montserrat' }}>
Yes, i'd love to
</button>

<button
onClick={() => setMood("bad")}
className='px-10 text-2xl py-3 cursor-pointer animate-bounce bg-black rounded-2xl shadow-3xl text-white flex items-center transition-all duration-300 hover:-translate-y-1'
style={{ fontFamily: 'Montserrat' }}>
No
</button>
</div>

</div>
</div>
)
}

export default LandingPage