// TeamClues.ts

export interface TeamClue {
  team: string;
  zone: string;
  current_location: string;
  code: string;
  clue_location: string;
  clue: string;
}

export const teamClues: TeamClue[] = [
  {
    team: "Team A",
    zone: "Salisbury",
    current_location: "MAHAVEER PRATISHTAAN",
    code: "A14B2C",
    clue_location: "7TH ADVENTIST CHURCH",
    clue: `In Vrindavan, my music filled the air,
    Here, devotion rises with every prayer.
    Not to me, but to the One they call Lord,
    In the seventh house where His name is adored.`
  },
  {
    team: "Team A",
    zone: "Salisbury",
    current_location: "7TH ADVENTIST CHURCH",
    code: "A25D7E",
    clue_location: "POONAWALA LANE",
    clue: `"Jinki galiyon me guzri har shaam,
    Adar se lo inka naam,
    Sahab ke naam se saara sheher bacha hai,
    Yaha tehelne jane ka bahana accha hai."`
  },
  {
    team: "Team A",
    zone: "Salisbury",
    current_location: "POONAWALA LANE",
    code: "A39F6G",
    clue_location: "GUJRAT DAIRY",
    clue: `"Jaha beheti hai doodh ki nadiya 
    Uske saare prakar milenge, na hai pabandiya 
    Mata gaai hai aur makhan hai pyaar
    Kya aapko samajh aaya yeh izhar?"`
  },
  {
    team: "Team A",
    zone: "Salisbury",
    current_location: "GUJRAT DAIRY",
    code: "A41H8J",
    clue_location: "GAGAN GALAXY",
    clue: `"Maa ne socha main mitti kha raha hoon, par jab mujhse muh khulwaya, samay bhi ruk gaya. Us pal, unhone dekhe taare, chaand aur anagint brahmand mere andar. 
    Ab tum mujhe wahan dhoondo, jahan aakash zameen ko chhoota hai aur tare chhupkar muskaan ban jaate hain."`
  },
  {
    team: "Team A",
    zone: "Gangadham",
    current_location: "GAGAN GALAXY",
    code: "A56K2L",
    clue_location: "MIRROR",
    clue: `Jahan tum dekhte ho, par tum nahin ho akela,
    Saamne khada hai ek aur, bilkul tum jaisa chela.
    Krishna ke roop bhi yahan dikhte saaf-saaf,
    Khojo uss raaz ko, jo chhupa hai Cru ke raftar ke paas.`
  },
  {
    team: "Team A",
    zone: "Gangadham",
    current_location: "MIRROR",
    code: "A67M3N",
    clue_location: "SIDDHAM OPTICS",
    clue: `Na bansuri ka sur, na mor ka nartan,
    Par yahan milti hai aankhon ko nayi pehchan.
    JSG Downtown ke Trump hai ye,
    Dhoondo unhe jahan chashmon ke piche chhupi hai muskaan.`
  },
  {
    team: "Team A",
    zone: "Gangadham",
    current_location: "SIDDHAM OPTICS",
    code: "A78P4Q",
    clue_location: "GOPAL MEDICAL",
    clue: `"Govind bolo hare Gopal bolo
    Krishna ka upnaam mann mai basakar chalo
    Murli ke suron ka jadoo hai pyara,
    Jao vaha mit jaye yaha har peeda jaise kanha ka hi ho sahara"`
  },
  {
    team: "Team A",
    zone: "Gangadham",
    current_location: "GOPAL MEDICAL",
    code: "A89R5S",
    clue_location: "TURF",
    clue: `Khush toh boht hoge tum, kyunki yeh hai aakhri padav
    Apne pure mann se khudko kanha ki aur badhav
    Aapke bhav aur sahyog ko bana li hai humne apni aadat 
    NA JHUKO Naa  ruko, chauko aur chakko se karenge SHREEmanji aapka swagat.`
  },

  {
    team: "Team B",
    zone: "Salisbury",
    current_location: "MAHAVEER PRATISHTAAN",
    code: "B1P4K3",
    clue_location: "AYKAR SADAN",
    clue: `Main toh Makhan chor, lekin yeh choron ko pakad-ne wala,
    Sach ko dhoondne wala, Amay Patnaik jaisa nirbhaya wala.
    Na bansuri, na mor, yahan kagazon ka raaj,
    Jahan hisaab-kitaab se hoti hai sach ki talash`
  },
  {
    team: "Team B",
    zone: "Salisbury",
    current_location: "AYKAR SADAN",
    code: "B2X2M9",
    clue_location: "SURYA NAMASKAR POINT",
    clue: `Mitra se shuru, Bhaskara pe the end,
    Barah naam, barah pose, all in perfect bend.
    Ravi, Surya, Bhanu – sab khade yahan saj ke,
    Khaga se Ark tak, Surya ko pranam karte bhaj ke.
    Na gop, na gopi – yeh sab sooraj ke sevak,
    Dhoondo jahan barah roop banate hain ek aakarshak devak.`
  },
  {
    team: "Team B",
    zone: "Salisbury",
    current_location: "SURYA NAMASKAR POINT",
    code: "B3H8W1",
    clue_location: "CAFE BLEND",
    clue: `Garm cup haathon mein, baatein lambe waqt tak,
    Coffee ki khushboo se bhare har pal ka rang pak.
    Alag-alag beans milkar banta hai swaad lajawab,
    Dhoondo us jagah, jahan har blend deta hai sukoon ka jawab.`
  },
  {
    team: "Team B",
    zone: "Salisbury",
    current_location: "CAFE BLEND",
    code: "B4D5T6",
    clue_location: "ZENKO",
    clue: `Jab main chhota bacha tha, akal ka thoda kacha tha,
    Par yahan aate hi khush hota tha, phir na kabhi rota tha. 
    Khilone, games aur masti ka samaa,
    Yahan aakar jeelo bachpan, aur karlo dhamaal.`
  },
  {
    team: "Team B",
    zone: "Hyde Park",
    current_location: "ZENKO",
    code: "B5Q9E7",
    clue_location: "GRAFFITI",
    clue: `"Safai ke baad Kanha ne socha kuch rang bharna,
    Deewaron pe apni kala ka asar karna.
    Jaha ek haathi badi shaan se khada,
    Rang-birange roop se bilkul saja.
    Deewaron ka yeh chhupa hua geet,
    Socho kahan milega yeh rangin preet?"`
  },
  {
    team: "Team B",
    zone: "Hyde Park",
    current_location: "GRAFFITI",
    code: "B6R5T0",
    clue_location: "NOBLE DENTAL CLINIC",
    clue: `Muskan jiski pehchaan hai,
Daaton ki rakhwali jiska kaam hai,
2 baar brush karo nahi toh padegi chhadi,
Uska doctor hi dega agli kadi`
  },
  {
    team: "Team B",
    zone: "Hyde Park",
    current_location: "NOBLE DENTAL CLINIC",
    code: "B7V6C2",
    clue_location: "UNITY BAKERY",
    clue: "Clue for Coffee Stories"
  },
  {
    team: "Team B",
    zone: "Hyde Park",
    current_location: "UNITY BAKERY",
    code: "B8M3Z8",
    clue_location: "TURF",
    clue: `Khush toh boht hoge tum, kyunki yeh hai aakhri padav
    Apne pure mann se khudko kanha ki aur badhav
    Aapke bhav aur sahyog ko bana li hai humne apni aadat 
    NA JHUKO Naa  ruko, chauko aur chakko se karenge SHREEmanji aapka swagat.`
  },

  {
    team: "Team C",
    zone: "Gangadham",
    current_location: "GD PHASE 2",
    code: "C1F2Q9",
    clue_location: "CHEAP STORE",
    clue: `Ek aisi dukaan jahan daam hamesha saste,
    Phir bhi mil jaaye yahan saamaan sab haste.
    Bina jeb khali kiye bhar lo apna jhola,
    Yahi hai jagah jo budget walon ka hai mola.`
  },
  {
    team: "Team C",
    zone: "Gangadham",
    current_location: "CHEAP STORE",
    code: "C2L4P2",
    clue_location: "SPICE STORIES",
    clue: `Aao tumhe ek kahani sunata hoon…
    Usme thoda mirch, masala aur tadka lagata hoon -
    Raadha vrindavan ke raste se jaa rahi thi,
    bhindi fry kha rahi thi,
    Usko mirchi lagi 
    toh me kya karu?
    Tum toh kahani me clue dhundte reh gaye…
    Hum apna clue to shuru me hi keh gaye.`
  },
  {
    team: "Team C",
    zone: "Gangadham",
    current_location: "SPICE STORIES",
    code: "C3V8M1",
    clue_location: "GOVIND SANDWICH",
    clue: `Cheese mai lipta, toast me band,
Sabka hai ye mann pasand.
Govind naam yaad rakho pyaare,
Bhuk mitegi unhi ke sahare.`
  },
  {
    team: "Team C",
    zone: "Gangadham",
    current_location: "GOVIND SANDWICH",
    code: "C4J5X7",
    clue_location: "MAHAVEER PRATISHTAAN",
    clue: `Where rows are straight and minds are fed,
    Lessons replace the flute instead.
    Its name recalls a charioteer of peace,
    Jainism’s final beacon, where all journeys cease.`
  },
  {
    team: "Team C",
    zone: "Salisbury",
    current_location: "MAHAVEER PRATISHTAAN",
    code: "C5W1H5",
    clue_location: "GUJRAT DAIRY",
    clue: `Jaha beheti hai doodh ki nadiya 
    Uske saare prakar milenge, na hai pabandiya 
    Mata guy hai aur makhan hai pyaar
    Kya aapko samajh aaya yeh izhar?`
  },
  {
    team: "Team C",
    zone: "Salisbury",
    current_location: "GUJRAT DAIRY",
    code: "C6R8T4",
    clue_location: "POONAWALA GARDEN",
    clue: `The name’s a hint - a family known
In this garden the seeds are sown
BENCHES, trees & paths so wide,
Nature’s beauty you cannot hide.`
  },
  {
    team: "Team C",
    zone: "Salisbury",
    current_location: "POONAWALA GARDEN",
    code: "C7M9E6",
    clue_location: "BREW SO",
    clue: `Makhan ki kahani toh sab jaante hain,
    Par yahan kahani ubalti hai har garm pyaale mein.
    Baatein bhi banti hain, yaadein bhi nayi,
    Chalo us jagah, jahan har ‘brew’ likhta hai apni kahani.`
  },
  {
    team: "Team C",
    zone: "Salisbury",
    current_location: "BREW SO",
    code: "C8Y4Q3",
    clue_location: "TURF",
    clue: `Khush toh boht hoge tum, kyunki yeh hai aakhri padav
    Apne pure mann se khudko kanha ki aur badhav
    Aapke bhav aur sahyog ko bana li hai humne apni aadat 
    NA JHUKO Naa  ruko, chauko aur chakko se karenge SHREEmanji aapka swagat.`
  },

  // Team D
  {
    team: "Team D",
    zone: "Gangadham",
    current_location: "GD PHASE 2",
    code: "D1A2B3",
    clue_location: "RAJKAMAL DRYCLEANERS",
    clue: `Khoj karo us jagah ki,
    Jisme rajai bhi hai aur raj bhi.
    Ek mahal jaisa naam,
    Par yeh kapdon se hi raaj chalaate hain.
    Jo kapde sansaar ke rangon se meli ho jaayein,
    Yahaan aakar kamal ki tarah khil jaate hain.`
  },
  {
    team: "Team D",
    zone: "Gangadham",
    current_location: "RAJKAMAL DRYCLEANERS",
    code: "D2C5D6",
    clue_location: "PYRAMID",
    clue: `Janmashtami mein bante hain yeh minar,
    Doston ke kadmon se chhua asmaan ka paar.
    Upar hota hai Govinda, sabki nazar mein pyaara,
    Wahi roop chhupa hai is jagah ka khel khelta saara.`
  },
  {
    team: "Team D",
    zone: "Gangadham",
    current_location: "PYRAMID",
    code: "D3E8F9",
    clue_location: "FALAHAR",
    clue: `Thoda khatta, thoda meetha, ek shot ka swaad nirala,
    Chhote se glass mein chhupa mazaa bawaala.
    Ek baar piya toh dil bas yahi chahe,
    Agla clue tumhe yahin pe laaye`
  },
  {
    team: "Team D",
    zone: "Gangadham",
    current_location: "FALAHAR",
    code: "D4G1H2",
    clue_location: "EKTA UDYAN",
    clue: `Koi tehelne aata hai, toh koi khuli hawa khane 
Koi apni gopi ke saath, koi dusre ki, hum kya jane
Dil sabka garden garden hota hai
Par jo sthirta aur ekta ke saath kaam kare
Wahi vijayee hota hai
`
  },
  {
    team: "Team D",
    zone: "Hyde Park",
    current_location: "EKTA UDYAN",
    code: "D5I4J5",
    clue_location: "CHANDAN MEDICAL",
    clue: `Yeh woh Chandan hai, jisme koi khushbo nahi
Har dard ka ilaaj hai waha par dil ka koi ilaaj nahi
Waha jaake milega sirf kuch der ka aaram,
Is paheli ko suljhana hai tumhara kaam`
  },
  {
    team: "Team D",
    zone: "Hyde Park",
    current_location: "CHANDAN MEDICAL",
    code: "D6K7L8",
    clue_location: "COFFEE STORIES",
    clue: ""
  },
  {
    team: "Team D",
    zone: "Hyde Park",
    current_location: "UNIVERSAL GYM",
    code: "D7M0N1",
    clue_location: "EKTA UDYAN",
    clue: ""
  },
  {
    team: "Team D",
    zone: "Hyde Park",
    current_location: "EKTA UDYAN",
    code: "D8O3P4",
    clue_location: "TURF",
    clue: ""
  },

  // Team E
  {
    team: "Team E",
    zone: "Hyde Park",
    current_location: "UNITY BAKERY",
    code: "E1A2B3",
    clue_location: "ELEPHANT GRAFFITI",
    clue: ``
  },
  {
    team: "Team E",
    zone: "Hyde Park",
    current_location: "ELEPHANT GRAFFITI",
    code: "E2C5D6",
    clue_location: "32 CROWNS",
    clue: ""
  },
  {
    team: "Team E",
    zone: "Hyde Park",
    current_location: "32 CROWNS",
    code: "E3E8F9",
    clue_location: "GAVRAN DAIRY",
    clue: ""
  },
  {
    team: "Team E",
    zone: "Hyde Park",
    current_location: "GAVRAN DAIRY",
    code: "E4G1H2",
    clue_location: "RO AND CO",
    clue: `Ye 5 pandav karte hai masti ka tandav
    Fir kitna bhi ROKO ye rukte nahi
    Khudme hi basta hai inka saara jaha
    Dhundo Zara ye rehte hai kaha`
  },
  {
    team: "Team E",
    zone: "Salisbury",
    current_location: "RO AND CO",
    code: "E5I4J5",
    clue_location: "BANARAS DAIRY",
    clue: `Kashi ki galiyon ki yaad dila dega
    Inka doodh aur makkhan aapko swaad dila dega
    Mat hoiye majboor,
    Nahi jana padega aapko itna dur
    Bas iss clue ke pehle shabd par farmaiiye gaur
    aur vohi le jayega aapko agle clue ke aur`
  },
  {
    team: "Team E",
    zone: "Salisbury",
    current_location: "BANARAS DAIRY",
    code: "E6K7L8",
    clue_location: "SHREEJI",
    clue: `Iss baar jawab me morpankh hoga
    Thandi duniya me aapka Swagat hoga
    Basuri dikhgayi toh lagega jackpot
    This clue will hit your sweet spot.`
  },
  {
    team: "Team E",
    zone: "Salisbury",
    current_location: "SHREEJI",
    code: "E7M0N1",
    clue_location: "SPICE STORIES",
    clue: `Aao tumhe ek kahani sunata hoon…
    Usme thoda mirch, masala aur tadka lagata hoon -
    Raadha vrindavan ke raste se jaa rahi thi,
    bhindi fry kha rahi thi,
    Usko mirchi lagi 
    toh me kya karu?
    Tum toh kahani me clue dhundte reh gaye…
    Hum apna clue to shuru me hi keh gaye.`
  },
  {
    team: "Team E",
    zone: "Salisbury",
    current_location: "SPICE STORIES",
    code: "E8O3P4",
    clue_location: "TURF",
    clue: ""
  },

  // Team F
  {
    team: "Team F",
    zone: "Hyde Park",
    current_location: "WARM GLOVES",
    code: "F1C5D6",
    clue_location: "EKTA UDYAN",
    clue: ""
  },
  {
    team: "Team F",
    zone: "Hyde Park",
    current_location: "EKTA UDYAN",
    code: "F2E8F9",
    clue_location: "CHANDAN MEDICAL",
    clue: ""
  },
  {
    team: "Team F",
    zone: "Hyde Park",
    current_location: "CHANDAN MEDICAL",
    code: "F3G1H2",
    clue_location: "TUPPERWARE",
    clue: ""
  },
  {
    team: "Team F",
    zone: "Hyde Park",
    current_location: "TUPPERWARE",
    code: "F4I4J5",
    clue_location: "MAHAVEER PRATISHTAAN",
    clue: `"Where rows are straight and minds are fed,
    Lessons replace the flute instead.
    Its name recalls a charioteer of peace,
    Jainism’s final beacon, where all journeys cease."`
  },
  {
    team: "Team F",
    zone: "Salisbury",
    current_location: "MAHAVEER PRATISHTAAN",
    code: "F5K7L8",
    clue_location: "CAFE BLEND",
    clue: `Garm cup haathon mein, baatein lambe waqt tak,
    Coffee ki khushboo se bhare har pal ka rang pak.
    Alag-alag beans milkar banta hai swaad lajawab,
    Dhoondo us jagah, jahan har bleand deta hai sukoon ka jawab.`
  },
  {
    team: "Team F",
    zone: "Salisbury",
    current_location: "CAFE BLEND",
    code: "F6M0N1",
    clue_location: "POONAWALA LANE",
    clue: `Jinki galiyon me guzri har shaam,
    Adar se lo inka naam,
    Sahab ke naam se saara sheher bacha hai,
    Yaha tehelne jane ka bahana accha hai.`
  },
  {
    team: "Team F",
    zone: "Salisbury",
    current_location: "POONAWALA LANE",
    code: "F7O3P4",
    clue_location: "AYKAR SADAN",
    clue: `Main toh Makhan chor, lekin yeh choron ko pakad-ne wala,
    Sach ko dhoondne wala, Amay Patnaik jaisa nirbhaya wala.
    Na bansuri, na mor, yahan kagazon ka raaj,
    Jahan hisaab-kitaab se hoti hai sach ki talash`
  },
  {
    team: "Team F",
    zone: "Salisbury",
    current_location: "AYKAR SADAN",
    code: "F8Q6R7",
    clue_location: "TURF",
    clue: ""
  }
];
