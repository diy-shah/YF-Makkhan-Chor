
"use client";
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import title from './images/title_logo.png'; // For static imports
import logo from './images/yf_logo.png'; // For static imports
import { readAloudHindi } from "./readAloud";


export default function HomePage() {
  const [code, setCode] = useState("");
  const [clue, setClue] = useState<string | null>(null);
  const [error, setError] = useState("");

  //Typewriter animation
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [voicesLoaded, setVoicesLoaded] = useState(false);

  // Ensure voices are loaded before speaking
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.speechSynthesis.onvoiceschanged = () => {
        setVoicesLoaded(true);
      };
    }
  }, []);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.trim() }),
      });

      const data = await res.json();

      if (res.ok && data.correct) {
        setClue(data.clue);
        setCode("");
        audioRef.current?.play();
        readAloudHindi(data.clue);
        setTimeout(() => {
          startTyping(data.clue);
          console.log("This runs after 3 seconds");
        }, 1300);


      } else {
        setError("❌ Incorrect code. Try again!");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  const startTyping = (text: string) => {
    setDisplayedText("");
    setIsTyping(true);

    let i = -1;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 50); // typing speed (ms per character)

  };

  return (
    <main className="min-h-screen  p-5">
      <header>
        <div className="flex items-center justify-center">
          <Image
            src={logo}
            alt="A description of my image"
            width={140} // Required for local images
          />
        </div>
        <div className="flex items-center justify-center p-5">
          <Image
            src={title}
            alt="A description of my image"
            width={250} // Required for local images
            height={300} // Required for local images
          />
        </div>
      </header>
      <div className="flex items-center justify-center">
        <audio ref={audioRef}>
          <source src="/sounds/om_chant.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="w-full max-w-md rounded-2xl">

          {clue ? (
            <div className="">
              <h2 className="text-xl font-semibold text-orange-700 mb-2">Your Next Clue:</h2>
              <p className="text-gray-700 text-lg whitespace-pre-line">{displayedText}</p>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-6 text-center">
                || कोड डालो, राज़ खुलेगा,
                अपने पथ का अगला पड़ाव मिलेगा ||
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter your code..."
                  className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition"
                >
                  Unlock Clue
                </button>
              </form>
              {error && <p className="text-red-500 mt-3">{error}</p>}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
