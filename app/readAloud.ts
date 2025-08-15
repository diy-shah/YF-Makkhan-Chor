// utils/readAloud.ts
export const readAloudHindi = (text: string) => {
    if (typeof window === "undefined") return; // Ensure code runs only in browser

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    // Try to find an Indian Hindi voice
    const voices = synth.getVoices();
    const hindiVoice = voices.find(
        (v) =>
            v.lang.toLowerCase().includes("hi") &&
            v.name.toLowerCase().includes("male")
    ) ||
        voices.find((v) => v.lang.toLowerCase().includes("hi"));

    if (hindiVoice) {
        utterance.voice = hindiVoice;
    } else {
        console.warn("Hindi voice not found. Using default voice.");
    }

    utterance.lang = "hi-IN"; // Set language to Hindi
    utterance.rate = 1; // Speed (0.1 - 10)
    utterance.pitch = 1; // Pitch (0 - 2)

    synth.speak(utterance);
};
