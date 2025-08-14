// app/data/clues.ts

export interface Clue {
  code: string; // previously "answer"
  zone: string;
  clue: string;
}

export const clues: Clue[] = [
  {
    code: "Mahaveer Pratishtaan",
    zone: "Poonawala",
    clue: `Where rows are straight and minds are fed,
Lessons replace the flute instead.
Its name recalls a charioteer of peace,
Jainism’s final beacon, where all journeys cease.`,
  },
  {
    code: "7th adventist church",
    zone: "Poonawala",
    clue: `In Vrindavan, my music filled the air,
Here, devotion rises with every prayer.
Not to me, but to the One they call Lord,
In the seventh house where His name is adored.`,
  },
  {
    code: "Poonawala lane",
    zone: "Poonawala",
    clue: `Jinki galiyon me guzri har shaam,
Adar se lo inka naam,
Sahab ke naam se saara sheher bacha hai,
Yaha tehelne jane ka bahana accha hai.`,
  },
  {
    code: "Gujrat dairy",
    zone: "Poonawala",
    clue: `Jaha beheti hai doodh ki nadiya 
Uske saare prakar milenge, na hai pabandiya 
Mata guy hai aur makhan hai pyaar
Kya aapko samajh aaya yeh izhar?`,
  },
  {
    code: "Aykar Sadan",
    zone: "Poonawala",
    clue: `Main toh Makhan chor, lekin yeh choron ko pakad-ne wala,
Sach ko dhoondne wala, Amay Patnaik jaisa nirbhaya wala.
Na bansuri, na mor, yahan kagazon ka raaj,
Jahan hisaab-kitaab se hoti hai sach ki talash`,
  },
  {
    code: "Surya namaskar point",
    zone: "Poonawala",
    clue: `Mitra se shuru, Bhaskara pe the end,
Barah naam, barah pose, all in perfect bend.
Ravi, Surya, Bhanu – sab khade yahan saj ke,
Khaga se Ark tak, Surya ko pranam karte bhaj ke.
Na gop, na gopi – yeh sab sooraj ke sevak,
Dhoondo jahan barah roop banate hain ek aakarshak devak.`,
  },
  {
    code: "Cafe blaend",
    zone: "Poonawala",
    clue: `Garm cup haathon mein, baatein lambe waqt tak,
Coffee ki khushboo se bhare har pal ka rang pak.
Alag-alag beans milkar banta hai swaad lajawab,
Dhoondo us jagah, jahan har bleand deta hai sukoon ka jawab.`,
  },
];
