const countries = [
  // Western Europe
  { name: "France", code: "fr", region: "Western Europe", capital: "Paris", population: "67.7M", area: "643,801 km²", language: "French", currency: "EUR (€)", euMember: true },
  { name: "Germany", code: "de", region: "Western Europe", capital: "Berlin", population: "83.4M", area: "357,022 km²", language: "German", currency: "EUR (€)", euMember: true },
  { name: "United Kingdom", code: "gb", region: "Western Europe", capital: "London", population: "67.2M", area: "242,495 km²", language: "English", currency: "GBP (£)", euMember: false },
  { name: "Ireland", code: "ie", region: "Western Europe", capital: "Dublin", population: "5.1M", area: "70,273 km²", language: "English", currency: "EUR (€)", euMember: true },
  { name: "Netherlands", code: "nl", region: "Western Europe", capital: "Amsterdam", population: "17.5M", area: "41,543 km²", language: "Dutch", currency: "EUR (€)", euMember: true },
  { name: "Belgium", code: "be", region: "Western Europe", capital: "Brussels", population: "11.6M", area: "30,528 km²", language: "Dutch, French", currency: "EUR (€)", euMember: true },
  { name: "Luxembourg", code: "lu", region: "Western Europe", capital: "Luxembourg City", population: "0.7M", area: "2,586 km²", language: "Luxembourgish", currency: "EUR (€)", euMember: true },
  
  // Southern Europe
  { name: "Spain", code: "es", region: "Southern Europe", capital: "Madrid", population: "47.6M", area: "505,992 km²", language: "Spanish", currency: "EUR (€)", euMember: true },
  { name: "Portugal", code: "pt", region: "Southern Europe", capital: "Lisbon", population: "10.4M", area: "92,090 km²", language: "Portuguese", currency: "EUR (€)", euMember: true },
  { name: "Italy", code: "it", region: "Southern Europe", capital: "Rome", population: "57.8M", area: "301,340 km²", language: "Italian", currency: "EUR (€)", euMember: true },
  { name: "Greece", code: "gr", region: "Southern Europe", capital: "Athens", population: "10.6M", area: "131,957 km²", language: "Greek", currency: "EUR (€)", euMember: true },
  { name: "Malta", code: "mt", region: "Southern Europe", capital: "Valletta", population: "0.5M", area: "316 km²", language: "Maltese", currency: "EUR (€)", euMember: true },
  { name: "Cyprus", code: "cy", region: "Southern Europe", capital: "Nicosia", population: "1.2M", area: "9,251 km²", language: "Greek", currency: "EUR (€)", euMember: true },
  
  // Nordic Countries
  { name: "Sweden", code: "se", region: "Nordic", capital: "Stockholm", population: "10.5M", area: "450,295 km²", language: "Swedish", currency: "SEK (kr)", euMember: true },
  { name: "Norway", code: "no", region: "Nordic", capital: "Oslo", population: "5.5M", area: "385,207 km²", language: "Norwegian", currency: "NOK (kr)", euMember: false },
  { name: "Denmark", code: "dk", region: "Nordic", capital: "Copenhagen", population: "5.9M", area: "43,094 km²", language: "Danish", currency: "DKK (kr)", euMember: true },
  { name: "Finland", code: "fi", region: "Nordic", capital: "Helsinki", population: "5.6M", area: "338,455 km²", language: "Finnish", currency: "EUR (€)", euMember: true },
  { name: "Iceland", code: "is", region: "Nordic", capital: "Reykjavík", population: "0.4M", area: "103,000 km²", language: "Icelandic", currency: "ISK (kr)", euMember: false },
  
  // Central Europe
  { name: "Poland", code: "pl", region: "Central Europe", capital: "Warsaw", population: "37.8M", area: "312,696 km²", language: "Polish", currency: "PLN (zł)", euMember: true },
  { name: "Czech Republic", code: "cz", region: "Central Europe", capital: "Prague", population: "10.5M", area: "78,866 km²", language: "Czech", currency: "CZK (Kč)", euMember: true },
  { name: "Slovakia", code: "sk", region: "Central Europe", capital: "Bratislava", population: "5.5M", area: "49,035 km²", language: "Slovak", currency: "EUR (€)", euMember: true },
  { name: "Hungary", code: "hu", region: "Central Europe", capital: "Budapest", population: "9.7M", area: "93,028 km²", language: "Hungarian", currency: "HUF (Ft)", euMember: true },
  { name: "Austria", code: "at", region: "Central Europe", capital: "Vienna", population: "9.0M", area: "83,879 km²", language: "German", currency: "EUR (€)", euMember: true },
  { name: "Switzerland", code: "ch", region: "Central Europe", capital: "Bern", population: "8.8M", area: "41,285 km²", language: "German, French", currency: "CHF (Fr)", euMember: false },
  
  // Eastern Europe
  { name: "Romania", code: "ro", region: "Eastern Europe", capital: "Bucharest", population: "19.1M", area: "238,391 km²", language: "Romanian", currency: "RON (lei)", euMember: true },
  { name: "Bulgaria", code: "bg", region: "Eastern Europe", capital: "Sofia", population: "6.9M", area: "110,879 km²", language: "Bulgarian", currency: "BGN (лв)", euMember: true },
  { name: "Ukraine", code: "ua", region: "Eastern Europe", capital: "Kyiv", population: "38.0M", area: "603,550 km²", language: "Ukrainian", currency: "UAH (₴)", euMember: false },
  { name: "Belarus", code: "by", region: "Eastern Europe", capital: "Minsk", population: "9.4M", area: "207,600 km²", language: "Belarusian", currency: "BYN (Br)", euMember: false },
  { name: "Russia", code: "ru", region: "Eastern Europe", capital: "Moscow", population: "144M", area: "17,098,242 km²", language: "Russian", currency: "RUB (₽)", euMember: false },
  { name: "Moldova", code: "md", region: "Eastern Europe", capital: "Chișinău", population: "2.6M", area: "33,846 km²", language: "Romanian", currency: "MDL (L)", euMember: false },
  
  // Baltic Countries
  { name: "Lithuania", code: "lt", region: "Baltic", capital: "Vilnius", population: "2.8M", area: "65,300 km²", language: "Lithuanian", currency: "EUR (€)", euMember: true },
  { name: "Latvia", code: "lv", region: "Baltic", capital: "Riga", population: "1.9M", area: "64,589 km²", language: "Latvian", currency: "EUR (€)", euMember: true },
  { name: "Estonia", code: "ee", region: "Baltic", capital: "Tallinn", population: "1.3M", area: "45,227 km²", language: "Estonian", currency: "EUR (€)", euMember: true },
  
  // Balkans
  { name: "Serbia", code: "rs", region: "Balkans", capital: "Belgrade", population: "6.6M", area: "88,361 km²", language: "Serbian", currency: "RSD (дин.)", euMember: false },
  { name: "Bosnia and Herzegovina", code: "ba", region: "Balkans", capital: "Sarajevo", population: "3.2M", area: "51,209 km²", language: "Bosnian", currency: "BAM (KM)", euMember: false },
  { name: "Croatia", code: "hr", region: "Balkans", capital: "Zagreb", population: "3.9M", area: "56,594 km²", language: "Croatian", currency: "EUR (€)", euMember: true },
  { name: "Slovenia", code: "si", region: "Balkans", capital: "Ljubljana", population: "2.1M", area: "20,273 km²", language: "Slovenian", currency: "EUR (€)", euMember: true },
  { name: "Montenegro", code: "me", region: "Balkans", capital: "Podgorica", population: "0.6M", area: "13,812 km²", language: "Montenegrin", currency: "EUR (€)", euMember: false },
  { name: "North Macedonia", code: "mk", region: "Balkans", capital: "Skopje", population: "2.1M", area: "25,713 km²", language: "Macedonian", currency: "MKD (ден)", euMember: false },
  { name: "Albania", code: "al", region: "Balkans", capital: "Tirana", population: "2.9M", area: "28,748 km²", language: "Albanian", currency: "ALL (L)", euMember: false },
  { name: "Kosovo", code: "xk", region: "Balkans", capital: "Pristina", population: "1.7M", area: "10,887 km²", language: "Albanian", currency: "EUR (€)", euMember: false },
  
  // Caucasus & Turkey
  { name: "Turkey", code: "tr", region: "Caucasus & Anatolia", capital: "Ankara", population: "85.5M", area: "783,562 km²", language: "Turkish", currency: "TRY (₺)", euMember: false },
  { name: "Georgia", code: "ge", region: "Caucasus & Anatolia", capital: "Tbilisi", population: "3.7M", area: "69,700 km²", language: "Georgian", currency: "GEL (₾)", euMember: false },
  
  // Microstates & Mountain
  { name: "Andorra", code: "ad", region: "Microstates", capital: "Andorra la Vella", population: "0.08M", area: "468 km²", language: "Catalan", currency: "EUR (€)", euMember: false },
  { name: "Liechtenstein", code: "li", region: "Microstates", capital: "Vaduz", population: "0.04M", area: "160 km²", language: "German", currency: "CHF (Fr)", euMember: false },
  { name: "Monaco", code: "mc", region: "Microstates", capital: "Monaco", population: "0.04M", area: "2.02 km²", language: "French", currency: "EUR (€)", euMember: false },
  { name: "San Marino", code: "sm", region: "Microstates", capital: "San Marino", population: "0.035M", area: "61.2 km²", language: "Italian", currency: "EUR (€)", euMember: false },
  { name: "Vatican City", code: "va", region: "Microstates", capital: "Vatican City", population: "0.001M", area: "0.44 km²", language: "Italian", currency: "EUR (€)", euMember: false },
];
