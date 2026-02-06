import React, { useRef, useState } from "react";
import loveSong from "../../assets/kanomebali.mp3";

function Valentine(){

const [zoom,setZoom] = useState(false);
const [open,setOpen] = useState(false);

const audioRef = useRef(null);


// soft music fade
const playMusic = ()=>{

audioRef.current.volume = 0;
audioRef.current.play();

let vol = 0;

const fade = setInterval(()=>{

 if(vol < 0.35){
   vol += 0.02;
   audioRef.current.volume = vol;
 }else{
   clearInterval(fade);
 }

},200);

};



const openValentine = ()=>{

playMusic();
setZoom(true);

setTimeout(()=>{
setOpen(true);
},1000);

};



const particles = Array.from({length:22});

return(

<div className="
relative h-screen
flex items-center justify-center
overflow-hidden
bg-[#0b070a]
text-white
">

<audio ref={audioRef} src={loveSong} loop />


{/* CINEMATIC LIGHT */}

<div className="
absolute
w-250
h-250
bg-pink-500/20
blur-[180px]
rounded-full
opacity-60
animate-cinematicGlow
"/>

<div className="
absolute
w-150
h-150
bg-rose-400/20
blur-[160px]
rounded-full
top-[10%]
left-[70%]
animate-cinematicGlow
"/>



{/* FLOATING LIGHT PARTICLES */}

{
particles.map((_,i)=>(
<span
key={i}
className="absolute text-pink-200 animate-sparkle"
style={{
left:`${Math.random()*100}%`,
fontSize:`${8+Math.random()*10}px`,
animationDuration:`${6+Math.random()*8}s`
}}
>
✦
</span>
))
}



{/* INITIAL SCENE */}

{!open && (

<div className="text-center">

<h1 className="
text-6xl
md:text-7xl
font-serif
mb-10
max-w-3xl
mx-auto
animate-rise
">
In all the noise of the world…  
I still found you.
</h1>


<button
onClick={openValentine}
className={`
px-10 py-4
rounded-full
bg-linear-to-r
from-pink-400
to-rose-400
text-black
font-semibold
transition
duration-500
hover:scale-110
hover:shadow-[0_20px_70px_rgba(255,105,180,.6)]
${zoom ? "animate-valentineZoom":""}
`}
>
Open Your Valentine ❤️
</button>

</div>

)
}



{/* FINAL MESSAGE */}

{open && (

<div className="
text-center
max-w-2xl
px-6
animate-rise
">

<h1 className="
text-7xl
font-serif
mb-6
">
Happy Valentine’s Day ❤️
</h1>

<p className="
text-xl
leading-relaxed
text-pink-100
">
If I could give you one thing,  
it would be the ability to see yourself  
through my eyes…

Only then would you realize  
how incredibly special you are.
</p>


<div className="
mt-10
text-2xl
italic
text-pink-200
">
— Yours, always
</div>

</div>

)
}

</div>
);
}

export default Valentine;

