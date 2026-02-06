import React, { useEffect, useState } from "react";

function Rose() {

const [showMessage, setShowMessage] = useState(false);
const [roses, setRoses] = useState([]);


// 🌹 Initial floating roses
useEffect(() => {
  createRoses(12);
}, []);


// create roses function
const createRoses = (count) => {

  const newRoses = Array.from({ length: count }).map((_, i) => ({
    id: Math.random(),
    left: Math.random() * 100,
    delay: Math.random() * 2,
    size: 20 + Math.random() * 40
  }));

  setRoses(prev => [...prev, ...newRoses]);
};


// when user clicks anywhere → rose burst
const handleBurst = () => {
  createRoses(8);
};


return (

<div
onClick={handleBurst}
className="relative h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-200 to-red-200"
>

{/* 🌹 Floating Roses */}
{roses.map((rose) => (

  <span
    key={rose.id}
    className="absolute animate-float"
    style={{
      left: `${rose.left}%`,
      fontSize: rose.size,
      animationDelay: `${rose.delay}s`
    }}
  >
    🌹
  </span>

))}



{/* Glass Card */}
<div className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-2xl rounded-3xl p-12 text-center z-10 max-w-xl">

<h1 className="text-5xl font-semibold text-rose-700 mb-6">
Happy Rose Day
</h1>

<p className="text-gray-700 mb-10 text-lg">
These roses are a small way to show how special you are.
</p>


{/* ACCEPT BUTTON */}

{!showMessage ? (

<button
onClick={(e)=>{
e.stopPropagation(); // stop burst
setShowMessage(true);
createRoses(20); // BIG BURST 🌹
}}

className="
px-8 py-4
bg-gradient-to-r from-rose-500 to-red-500
text-white
rounded-full
text-lg
shadow-lg
hover:scale-105
transition-all
duration-300
"
>
I accept the flowers 🌹
</button>

) : (

<div className="animate-fade">

<h2 className="text-3xl text-rose-700 font-semibold mb-4">
For You ❤️
</h2>

<p className="text-gray-700 text-lg leading-relaxed">
May these roses remind you that you are appreciated,
valued, and thought of today.
</p>

</div>

)}

</div>

</div>
);
}

export default Rose;
