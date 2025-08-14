// // export default function HomePage() {
// //   return (
// //     <div style={{ padding: "20px", textAlign: "center" }}>
// //       <h1>Welcome to the Treasure Hunt!</h1>
// //       <p>Scan your team’s QR code to access the hunt.</p>
// //       <a
// //         href="/hunt"
// //         style={{
// //           display: "inline-block",
// //           padding: "10px 15px",
// //           backgroundColor: "#0070f3",
// //           color: "#fff",
// //           textDecoration: "none",
// //           borderRadius: "5px",
// //           marginTop: "20px"
// //         }}
// //       >
// //         Start Hunt
// //       </a>
// //     </div>
// //   );
// // }
// "use client";

// import { useState } from "react";

// export default function CluePage() {
//   const [code, setCode] = useState("");
//   const [clue, setClue] = useState<string | null>(null);
//   const [error, setError] = useState("");

//   const clues: Record<string, string> = {
//     "KRISHNA01": "Go where the river sings and the wind dances — your next hint lies under the banyan shade.",
//     "YASHODA05": "Find the spot where milk overflows and laughter fills the air.",
//     "GOPAL09": "Look for the wall that tells a story of blue and gold.",
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const nextClue = clues[code.trim().toUpperCase()];
//     if (nextClue) {
//       setClue(nextClue);
//       setError("");
//     } else {
//       setError("❌ Invalid code. Try again!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200 p-6">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 text-center">
        
//         <h1 className="text-2xl font-bold text-orange-800 mb-4">🔍 MakkhanChor QR</h1>

//         {!clue ? (
//           <>
//             <p className="text-gray-600 mb-6">
//               Enter the secret code from your current clue to reveal your next one.
//             </p>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 value={code}
//                 onChange={(e) => setCode(e.target.value)}
//                 placeholder="Enter your code..."
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition"
//               >
//                 Unlock Clue
//               </button>
//             </form>
//             {error && <p className="text-red-500 mt-3">{error}</p>}
//           </>
//         ) : (
//           <div className="bg-yellow-50 border-l-4 border-orange-500 p-5 rounded-lg shadow-sm">
//             <h2 className="text-xl font-semibold text-orange-700 mb-2">Your Next Clue:</h2>
//             <p className="text-gray-700 text-lg">{clue}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

export default function HomePage() {
  const [code, setCode] = useState("");
  const [clue, setClue] = useState<string | null>(null);
  const [error, setError] = useState("");

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
      } else {
        setError("❌ Incorrect code. Try again!");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 text-center">
        <h1 className="text-2xl font-bold text-orange-800 mb-4">🔍 MakkhanChor QR</h1>

        {clue ? (
          <div className="bg-yellow-50 border-l-4 border-orange-500 p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-orange-700 mb-2">Your Next Clue:</h2>
            <p className="text-gray-700 text-lg whitespace-pre-line">{clue}</p>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              Enter the secret code from your current clue to reveal your next one.
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
    </main>
  );
}
