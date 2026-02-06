import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import baby2 from "../assets/music/baby2.mp3";

function MusicPlayer(){

const audioRef = useRef(null);
const [playing, setPlaying] = useState(false);


// SMART AUTOPLAY (after first click anywhere)
useEffect(() => {

const startAudio = () => {

if(audioRef.current){
audioRef.current.volume = 0.4;

audioRef.current.play()
.then(()=> setPlaying(true))
.catch(()=>{});
}

document.removeEventListener("click", startAudio);
};

document.addEventListener("click", startAudio);

}, []);


// Toggle button
const toggleAudio = () => {

if(!audioRef.current) return;

if(playing){
audioRef.current.pause();
}else{
audioRef.current.play().catch(()=>{});
}

setPlaying(!playing);
};

return(
<>
<audio ref={audioRef} src={baby2} loop preload="auto" />

<button
onClick={toggleAudio}
className="
fixed bottom-6 right-6 z-[9999]

bg-white/10
backdrop-blur-lg
p-4
rounded-full
text-white
shadow-lg
hover:scale-110
transition
duration-300
"
>
{playing ? <FaPause size={18}/> : <FaPlay size={18}/>}
</button>
</>
);
}

export default MusicPlayer;
