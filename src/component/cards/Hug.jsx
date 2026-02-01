import React, { useEffect, useState } from 'react'
import letterHug from "../../assets/image/letterHug.png";
import littleBaby from "../../assets/littleBaby.mp3";


function Hug() {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true); // auto play animation
    }, []);
    return (
        <div className='bg-linear-to-t from-[#eea7cb] to-pink-200 h-screen flex flex-col relative bg-cover items-center justify-center'>
            <h1 className='text-3xl font-bold fixed top-20'>For You Baby (-ve♥️)💕</h1>
            <div className='bg-[#fff8e7] flex flex-col rounded-2xl w-200 p-5 border-2 border-[#e450b3]'>
                <div className='flex gap-10  flex-col items-center justify-center '>
                    {/* <h2 className='text-3xl font-bold capitalize text-pink-500'>click on envelop to see surprise✨</h2> */}
                    <audio src={littleBaby} autoPlay></audio>
                   <img src={letterHug} alt="" className={` h-120 origin-bottom transform transition-all duration-700 ease-in-out ${open
      ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-75 opacity-0"} `}/>
                </div>
            </div>
        </div>
    )
}

export default Hug
