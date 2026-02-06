import FilmIntro from "./components/FilmIntro";
import Hero from "./components/Hero";
import ParticlesBg from "./components/ParticlesBg";
import MemoryCards from "./components/MemoryCards";
import Timeline from "./components/Timeline";
import Slideshow from "./components/Slideshow";
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

export default function Kiss() {

  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);

  const toggleMusic = () => {
    if (play) audioRef.current.pause();
    else audioRef.current.play();
    setPlay(!play);
  };

  return (
    <div className="bg-black overflow-x-hidden">

      <ParticlesBg />
      <FilmIntro />
      <Hero />
      <MemoryCards />
      <Timeline />
      <Slideshow />

      {/* Music Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-lg p-4 rounded-full text-white"
      >
        {play ? <FaPause /> : <FaPlay />}
      </button>

      <audio ref={audioRef} src="/music.mp3" loop />

    </div>
  );
}

