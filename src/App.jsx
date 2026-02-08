import './App.css'
import LandingPage from './component/Landing Page/LandingPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Teddy, Choclate, Love, Promise, Valentine, Hug, Kiss, Propose } from './component/cards'
import GlobalEffects from './component/GlobalEffects'
import MusicPlayer from "./component/MusicPlayer";
import ValentineWeek from "./component/ValentineWeek";
import Message from './component/cards/Message';

function App() {
  return (
  //   <BrowserRouter>
  //   <GlobalEffects>
  //     <MusicPlayer />
  //   <Routes>
  //      <Route path="/" element={<LandingPage />} />
  //       <Route path="/valentine-week" element={<ValentineWeek />} />
  //       <Route path="/promise" element={<Promise />} />
  //       <Route path="/valentine" element={<Valentine />} />
  //       <Route path="/teddy" element={<Teddy />} />
  //       <Route path="/chocolate" element={<Choclate />} />
  //       <Route path="/love" element={<Love />} />
  //       <Route path="/hug" element={<Hug />} />
  //       <Route path="/kiss" element={<Kiss />} />
  //       <Route path="/propose" element={<Propose />} />
  //   </Routes>
  // </GlobalEffects>
  //   </BrowserRouter>
  // <Promise/>
  <Message/>
  // <Hug/>
  )
}

export default App



