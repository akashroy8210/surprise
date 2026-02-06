import React, {useEffect, useState} from "react";

function Love(){

const [hearts,setHearts] = useState([]);

useEffect(()=>{
const arr = Array.from({length:25}).map(()=>({
left:Math.random()*100,
duration:4+Math.random()*6,
size:10+Math.random()*14
}));
setHearts(arr);
},[]);


const burstHearts = ()=>{

for(let i=0;i<20;i++){
const heart=document.createElement("div");

heart.innerHTML="💖";
heart.style.position="fixed";
heart.style.left=window.innerWidth/2+"px";
heart.style.top=window.innerHeight/2+"px";
heart.style.fontSize="24px";

heart.style.transition="1s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.style.transform=
`translate(${Math.random()*600-300}px,
${Math.random()*-500}px)`;
heart.style.opacity=0;
},50);

setTimeout(()=>heart.remove(),1000);
}

};

return(

<div className="
relative h-screen
flex items-center justify-center
overflow-hidden
bg-linear-to-br
from-pink-200
via-rose-200
to-pink-300
">


{/* FLOATING HEARTS */}
{
hearts.map((h,i)=>(
<span
key={i}
className="absolute animate-hearts"
style={{
left:`${h.left}%`,
fontSize:h.size,
animationDuration:`${h.duration}s`
}}
>
💗
</span>
))
}



<div className="
text-center
backdrop-blur-xl
bg-white/40
p-16
rounded-[40px]
shadow-[0_20px_80px_rgba(0,0,0,.2)]
">

<h1 className="
text-6xl
font-serif
text-rose-700
animate-cinema
">
You Found Me 🧸
</h1>

<p className="
mt-6
text-lg
text-gray-700
max-w-md
">
And maybe… this little story was always meant for you.
</p>


<button
onClick={burstHearts}
className="
mt-10
px-10 py-4
rounded-full
bg-rose-400
text-white
font-semibold

transition
duration-300
hover:scale-110
"
>
Send Love 💖
</button>

</div>

</div>
);
}

export default Love
