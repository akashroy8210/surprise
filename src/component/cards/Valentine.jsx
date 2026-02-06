import React, { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import loveSong from "../../assets/kanomebali.mp3";

function Valentine(){

const [open,setOpen] = useState(false);
const audioRef = useRef(null);
const fadeRef = useRef(null);

/* ---------------- SAFE MUSIC FADE ---------------- */

const playMusic = async ()=>{

 if(!audioRef.current) return;

 try{
   await audioRef.current.play();
 }catch{
   return; // browser blocked — ignore safely
 }

 audioRef.current.volume = 0;

 let vol = 0;

 fadeRef.current = setInterval(()=>{

   if(vol < 0.35){
     vol += 0.02;
     audioRef.current.volume = vol;
   }else{
     clearInterval(fadeRef.current);
   }

 },120);

};

/* ---------------- OPEN SCENE ---------------- */

const openValentine = ()=>{

 playMusic();
 setOpen(true);

};

/* ---------------- STABLE PARTICLES ---------------- */

const particles = useMemo(()=>{

 return Array.from({length:18}).map(()=>({
   left:`${Math.random()*100}%`,
   top:`${Math.random()*100}%`,
   size:`${6+Math.random()*10}px`,
   duration:`${6+Math.random()*6}s`
 }));

},[]);


return(

<div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070508] text-white">

<audio ref={audioRef} src={loveSong} loop />

{/* 🌸 CINEMATIC GLOW */}
<div className="absolute w-[500px] h-[500px] bg-pink-500/20 blur-[160px] rounded-full animate-pulse"/>
<div className="absolute w-[350px] h-[350px] bg-rose-400/20 blur-[140px] rounded-full top-[10%] left-[70%]"/>

{/* 🎬 FILM GRAIN */}
<div
 className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
 style={{
   backgroundImage:"url('https://grainy-gradients.vercel.app/noise.svg')",
 }}
/>

{/* ✨ FLOATING PARTICLES */}
{
particles.map((p,i)=>(
<motion.span
 key={i}
 className="absolute text-pink-200"
 style={{
   left:p.left,
   top:p.top,
   fontSize:p.size
 }}
 animate={{y:[0,-30,0],opacity:[0,1,0]}}
 transition={{duration:8,repeat:Infinity,delay:i*.3}}
>
✦
</motion.span>
))
}

{/* 🎬 CINEMATIC TRANSITION */}
<AnimatePresence mode="wait">

{!open ? (

<motion.div
 key="intro"
 initial={{opacity:0,scale:.96}}
 animate={{opacity:1,scale:1}}
 exit={{opacity:0,scale:1.05}}
 transition={{duration:1.4}}
 className="text-center px-6"
>

<motion.h1
 initial={{y:80,opacity:0}}
 animate={{y:0,opacity:1}}
 transition={{duration:1.2}}
 className="text-5xl md:text-7xl font-serif mb-12 max-w-3xl mx-auto leading-tight"
>
In all the noise of the world…  
I still found you.
</motion.h1>


<motion.button
 onClick={openValentine}
 whileHover={{scale:1.08}}
 whileTap={{scale:.95}}
 className="
 px-10 py-4
 rounded-full
 bg-gradient-to-r
 from-pink-400
 to-rose-400
 text-black
 font-semibold
 shadow-[0_20px_60px_rgba(255,105,180,.45)]
"
>
Open Your Valentine ❤️
</motion.button>

</motion.div>

) : (

<motion.div
 key="final"
 initial={{opacity:0,filter:"blur(10px)"}}
 animate={{opacity:1,filter:"blur(0px)"}}
 transition={{duration:1.6}}
 className="text-center max-w-2xl px-6"
>

<motion.h1
 initial={{y:60,opacity:0}}
 animate={{y:0,opacity:1}}
 transition={{duration:1}}
 className="text-6xl md:text-7xl font-serif mb-6"
>
Happy Valentine’s Day ❤️
</motion.h1>

<motion.p
 initial={{opacity:0}}
 animate={{opacity:1}}
 transition={{delay:.6,duration:1.2}}
 className="text-xl leading-relaxed text-pink-100"
>
If I could give you one thing,  
it would be the ability to see yourself  
through my eyes…

Only then would you realize  
how incredibly special you are.
</motion.p>

<motion.div
 initial={{opacity:0}}
 animate={{opacity:1}}
 transition={{delay:1.2}}
 className="mt-10 text-2xl italic text-pink-200"
>
— Yours, always
</motion.div>

</motion.div>

)}

</AnimatePresence>

</div>
);
}

export default Valentine;
