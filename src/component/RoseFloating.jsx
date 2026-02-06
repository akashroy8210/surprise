import { useEffect, useState } from "react";
import img1 from '../assets/image/img1.jpg'
function RoseFloating() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 20 + 16,
          duration: Math.random() * 6 + 6,
        },
      ]);
    }, 400); // 🔥 lower = more hearts

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute -bottom-30"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `floatUp ${heart.duration}s linear`,
          }}
        >
          <img src={img1} className="w-20"/>
        </span>
      ))}
    </div>
  );
}

export default RoseFloating;
