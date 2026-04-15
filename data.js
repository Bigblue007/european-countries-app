const countries = [
  // Western Europe
  { name: "France", nameCz: "Francie", code: "fr", region: "Western Europe", regionCz: "Západní Evropa", capital: "Paris", capitalCz: "Paříž", population: "67.7M", area: "643,801 km²", language: "French", languageCz: "Francouzština", currency: "EUR (€)", euMember: true },
  { name: "Germany", nameCz: "Německo", code: "de", region: "Western Europe", regionCz: "Západní Evropa", capital: "Berlin", capitalCz: "Berlín", population: "83.4M", area: "357,022 km²", language: "German", languageCz: "Němčina", currency: "EUR (€)", euMember: true },
  { name: "United Kingdom", nameCz: "Spojené království", code: "gb", region: "Western Europe", regionCz: "Západní Evropa", capital: "London", capitalCz: "Londýn", population: "67.2M", area: "242,495 km²", language: "English", languageCz: "Angličtina", currency: "GBP (£)", euMember: false },
  { name: "Ireland", nameCz: "Irsko", code: "ie", region: "Western Europe", regionCz: "Západní Evropa", capital: "Dublin", capitalCz: "Dublin", population: "5.1M", area: "70,273 km²", language: "English", languageCz: "Angličtina", currency: "EUR (€)", euMember: true },
  { name: "Netherlands", nameCz: "Nizozemsko", code: "nl", region: "Western Europe", regionCz: "Západní Evropa", capital: "Amsterdam", capitalCz: "Amsterdam", population: "17.5M", area: "41,543 km²", language: "Dutch", languageCz: "Nizozemština", currency: "EUR (€)", euMember: true },
  { name: "Belgium", nameCz: "Belgie", code: "be", region: "Western Europe", regionCz: "Západní Evropa", capital: "Brussels", capitalCz: "Brusel", population: "11.6M", area: "30,528 km²", language: "Dutch, French", languageCz: "Nizozemština, Francouzština", currency: "EUR (€)", euMember: true },
  { name: "Luxembourg", nameCz: "Lucembursko", code: "lu", region: "Western Europe", regionCz: "Západní Evropa", capital: "Luxembourg City", capitalCz: "Lucemburk", population: "0.7M", area: "2,586 km²", language: "Luxembourgish", languageCz: "Lucemburština", currency: "EUR (€)", euMember: true },
  
  // Southern Europe
  { name: "Spain", nameCz: "Španělsko", code: "es", region: "Southern Europe", regionCz: "Jižní Evropa", capital: "Madrid", capitalCz: "Madrid", population: "47.6M", area: "505,992 km²", language: "Spanish", languageCz: "Španělština", currency: "EUR (€)", euMember: true },
  { name: "Portugal", nameCz: "Portugalsko", code: "pt", region: "Southern Europe", regionCz: "Jižní Evropa", capital: "Lisbon", capitalCz: "Lisabon", population: "10.4M", area: "92,090 km²", language: "Portuguese", languageCz: "Portugalština", currency: "EUR (€)", euMember: true },
  { name: "Italy", nameCz: "Itálie", code: "it", region: "Southern Europe", regionCz: "Jižní Evropa", capital: "Rome", capitalCz: "Řím", population: "57.8M", area: "301,340 km²", language: "Italian", languageCz: "Italština", currency: "EUR (€)", euMember: true },
  { name: "Greece", nameCz: "Řecko", code: "gr", region: "Southern Europe", regionCz: "Jižní Evropa", capital: "Athens", capitalCz: "Atény", population: "10.6M", area: "131,957 km²", language: "Greek", languageCz: "Řečtina", currency: "EUR (€)", euMember: true },
  { name: "Malta", nameCz: "Malta", code: "mt", region: "Southern Europe", regionCz: "Jižní Evropa", capital: "Valletta", capitalCz: "Valletta", population: "0.5M", area: "316 km²", language: "Maltese", languageCz: "Maltština", currency: "EUR (€)", euMember: true },
  { name: "Cyprus", nameCz: "Kypr", code: "cy", region: "Southern Europe", regionCz: "Jižní Evropa", capital: "Nicosia", capitalCz: "Nikósie", population: "1.2M", area: "9,251 km²", language: "Greek", languageCz: "Řečtina", currency: "EUR (€)", euMember: true },
  
  // Nordic Countries
  { name: "Sweden", nameCz: "Švédsko", code: "se", region: "Nordic", regionCz: "Skandinávie", capital: "Stockholm", capitalCz: "Stockholm", population: "10.5M", area: "450,295 km²", language: "Swedish", languageCz: "Švédština", currency: "SEK (kr)", euMember: true },
  { name: "Norway", nameCz: "Norsko", code: "no", region: "Nordic", regionCz: "Skandinávie", capital: "Oslo", capitalCz: "Oslo", population: "5.5M", area: "385,207 km²", language: "Norwegian", languageCz: "Norština", currency: "NOK (kr)", euMember: false },
  { name: "Denmark", nameCz: "Dánsko", code: "dk", region: "Nordic", regionCz: "Skandinávie", capital: "Copenhagen", capitalCz: "Kodaň", population: "5.9M", area: "43,094 km²", language: "Danish", languageCz: "Dánština", currency: "DKK (kr)", euMember: true },
  { name: "Finland", nameCz: "Finsko", code: "fi", region: "Nordic", regionCz: "Skandinávie", capital: "Helsinki", capitalCz: "Helsinky", population: "5.6M", area: "338,455 km²", language: "Finnish", languageCz: "Finština", currency: "EUR (€)", euMember: true },
  { name: "Iceland", nameCz: "Island", code: "is", region: "Nordic", regionCz: "Skandinávie", capital: "Reykjavík", capitalCz: "Reykjavík", population: "0.4M", area: "103,000 km²", language: "Icelandic", languageCz: "Islandština", currency: "ISK (kr)", euMember: false },
  
  // Central Europe
  { name: "Poland", nameCz: "Polsko", code: "pl", region: "Central Europe", regionCz: "Střední Evropa", capital: "Warsaw", capitalCz: "Varšava", population: "37.8M", area: "312,696 km²", language: "Polish", languageCz: "Polština", currency: "PLN (zł)", euMember: true },
  { name: "Czech Republic", nameCz: "Česká republika", code: "cz", region: "Central Europe", regionCz: "Střední Evropa", capital: "Prague", capitalCz: "Praha", population: "10.5M", area: "78,866 km²", language: "Czech", languageCz: "Čeština", currency: "CZK (Kč)", euMember: true },
  { name: "Slovakia", nameCz: "Slovensko", code: "sk", region: "Central Europe", regionCz: "Střední Evropa", capital: "Bratislava", capitalCz: "Bratislava", population: "5.5M", area: "49,035 km²", language: "Slovak", languageCz: "Slovenština", currency: "EUR (€)", euMember: true },
  { name: "Hungary", nameCz: "Maďarsko", code: "hu", region: "Central Europe", regionCz: "Střední Evropa", capital: "Budapest", capitalCz: "Budapešť", population: "9.7M", area: "93,028 km²", language: "Hungarian", languageCz: "Maďarština", currency: "HUF (Ft)", euMember: true },
  { name: "Austria", nameCz: "Rakousko", code: "at", region: "Central Europe", regionCz: "Střední Evropa", capital: "Vienna", capitalCz: "Vídeň", population: "9.0M", area: "83,879 km²", language: "German", languageCz: "Němčina", currency: "EUR (€)", euMember: true },
  { name: "Switzerland", nameCz: "Švýcarsko", code: "ch", region: "Central Europe", regionCz: "Střední Evropa", capital: "Bern", capitalCz: "Bern", population: "8.8M", area: "41,285 km²", language: "German, French", languageCz: "Němčina, Francouzština", currency: "CHF (Fr)", euMember: false },
  
  // Eastern Europe
  { name: "Romania", nameCz: "Rumunsko", code: "ro", region: "Eastern Europe", regionCz: "Východní Evropa", capital: "Bucharest", capitalCz: "Bukurešť", population: "19.1M", area: "238,391 km²", language: "Romanian", languageCz: "Rumunština", currency: "RON (lei)", euMember: true },
  { name: "Bulgaria", nameCz: "Bulharsko", code: "bg", region: "Eastern Europe", regionCz: "Východní Evropa", capital: "Sofia", capitalCz: "Sofie", population: "6.9M", area: "110,879 km²", language: "Bulgarian", languageCz: "Bulharština", currency: "BGN (лв)", euMember: true },
  { name: "Ukraine", nameCz: "Ukrajina", code: "ua", region: "Eastern Europe", regionCz: "Východní Evropa", capital: "Kyiv", capitalCz: "Kyjev", population: "38.0M", area: "603,550 km²", language: "Ukrainian", languageCz: "Ukrajinština", currency: "UAH (₴)", euMember: false },
  { name: "Belarus", nameCz: "Bělorusko", code: "by", region: "Eastern Europe", regionCz: "Východní Evropa", capital: "Minsk", capitalCz: "Minsk", population: "9.4M", area: "207,600 km²", language: "Belarusian", languageCz: "Běloruština", currency: "BYN (Br)", euMember: false },
  { name: "Russia", nameCz: "Rusko", code: "ru", region: "Eastern Europe", regionCz: "Východní Evropa", capital: "Moscow", capitalCz: "Moskva", population: "144M", area: "17,098,242 km²", language: "Russian", languageCz: "Ruština", currency: "RUB (₽)", euMember: false },
  { name: "Moldova", nameCz: "Moldavsko", code: "md", region: "Eastern Europe", regionCz: "Východní Evropa", capital: "Chișinău", capitalCz: "Kišiněv", population: "2.6M", area: "33,846 km²", language: "Romanian", languageCz: "Rumunština", currency: "MDL (L)", euMember: false },
  
  // Baltic Countries
  { name: "Lithuania", nameCz: "Litva", code: "lt", region: "Baltic", regionCz: "Pobaltí", capital: "Vilnius", capitalCz: "Vilnius", population: "2.8M", area: "65,300 km²", language: "Lithuanian", languageCz: "Litevština", currency: "EUR (€)", euMember: true },
  { name: "Latvia", nameCz: "Lotyšsko", code: "lv", region: "Baltic", regionCz: "Pobaltí", capital: "Riga", capitalCz: "Riga", population: "1.9M", area: "64,589 km²", language: "Latvian", languageCz: "Lotyština", currency: "EUR (€)", euMember: true },
  { name: "Estonia", nameCz: "Estonsko", code: "ee", region: "Baltic", regionCz: "Pobaltí", capital: "Tallinn", capitalCz: "Tallin", population: "1.3M", area: "45,227 km²", language: "Estonian", languageCz: "Estonština", currency: "EUR (€)", euMember: true },
  
  // Balkans
  { name: "Serbia", nameCz: "Srbsko", code: "rs", region: "Balkans", regionCz: "Balkán", capital: "Belgrade", capitalCz: "Bělehrad", population: "6.6M", area: "88,361 km²", language: "Serbian", languageCz: "Srbština", currency: "RSD (дин.)", euMember: false },
  { name: "Bosnia and Herzegovina", nameCz: "Bosna a Hercegovina", code: "ba", region: "Balkans", regionCz: "Balkán", capital: "Sarajevo", capitalCz: "Sarajevo", population: "3.2M", area: "51,209 km²", language: "Bosnian", languageCz: "Bosenština", currency: "BAM (KM)", euMember: false },
  { name: "Croatia", nameCz: "Chorvatsko", code: "hr", region: "Balkans", regionCz: "Balkán", capital: "Zagreb", capitalCz: "Záhreb", population: "3.9M", area: "56,594 km²", language: "Croatian", languageCz: "Chorvatština", currency: "EUR (€)", euMember: true },
  { name: "Slovenia", nameCz: "Slovensko", code: "si", region: "Balkans", regionCz: "Balkán", capital: "Ljubljana", capitalCz: "Lublana", population: "2.1M", area: "20,273 km²", language: "Slovenian", languageCz: "Slovenština", currency: "EUR (€)", euMember: true },
  { name: "Montenegro", nameCz: "Černá Hora", code: "me", region: "Balkans", regionCz: "Balkán", capital: "Podgorica", capitalCz: "Podgorica", population: "0.6M", area: "13,812 km²", language: "Montenegrin", languageCz: "Černohorština", currency: "EUR (€)", euMember: false },
  { name: "North Macedonia", nameCz: "Severní Makedonie", code: "mk", region: "Balkans", regionCz: "Balkán", capital: "Skopje", capitalCz: "Skopje", population: "2.1M", area: "25,713 km²", language: "Macedonian", languageCz: "Makedonština", currency: "MKD (ден)", euMember: false },
  { name: "Albania", nameCz: "Albánie", code: "al", region: "Balkans", regionCz: "Balkán", capital: "Tirana", capitalCz: "Tirana", population: "2.9M", area: "28,748 km²", language: "Albanian", languageCz: "Albánština", currency: "ALL (L)", euMember: false },
  { name: "Kosovo", nameCz: "Kosovo", code: "xk", region: "Balkans", regionCz: "Balkán", capital: "Pristina", capitalCz: "Priština", population: "1.7M", area: "10,887 km²", language: "Albanian", languageCz: "Albánština", currency: "EUR (€)", euMember: false },
  
  // Caucasus & Turkey
  { name: "Turkey", nameCz: "Turecko", code: "tr", region: "Caucasus & Anatolia", regionCz: "Kavkaz a Anatólie", capital: "Ankara", capitalCz: "Ankara", population: "85.5M", area: "783,562 km²", language: "Turkish", languageCz: "Turečtina", currency: "TRY (₺)", euMember: false },
  { name: "Georgia", nameCz: "Gruzie", code: "ge", region: "Caucasus & Anatolia", regionCz: "Kavkaz a Anatólie", capital: "Tbilisi", capitalCz: "Tbilisi", population: "3.7M", area: "69,700 km²", language: "Georgian", languageCz: "Gruzínština", currency: "GEL (₾)", euMember: false },
  
  // Microstates & Mountain
  { name: "Andorra", nameCz: "Andorra", code: "ad", region: "Microstates", regionCz: "Mikrostáty", capital: "Andorra la Vella", capitalCz: "Andorra la Vella", population: "0.08M", area: "468 km²", language: "Catalan", languageCz: "Katalánština", currency: "EUR (€)", euMember: false },
  { name: "Liechtenstein", nameCz: "Lichtenštejnsko", code: "li", region: "Microstates", regionCz: "Mikrostáty", capital: "Vaduz", capitalCz: "Vaduz", population: "0.04M", area: "160 km²", language: "German", languageCz: "Němčina", currency: "CHF (Fr)", euMember: false },
  { name: "Monaco", nameCz: "Monako", code: "mc", region: "Microstates", regionCz: "Mikrostáty", capital: "Monaco", capitalCz: "Monako", population: "0.04M", area: "2.02 km²", language: "French", languageCz: "Francouzština", currency: "EUR (€)", euMember: false },
  { name: "San Marino", nameCz: "San Marino", code: "sm", region: "Microstates", regionCz: "Mikrostáty", capital: "San Marino", capitalCz: "San Marino", population: "0.035M", area: "61.2 km²", language: "Italian", languageCz: "Italština", currency: "EUR (€)", euMember: false },
  { name: "Vatican City", nameCz: "Vatikán", code: "va", region: "Microstates", regionCz: "Mikrostáty", capital: "Vatican City", capitalCz: "Vatikán", population: "0.001M", area: "0.44 km²", language: "Italian", languageCz: "Italština", currency: "EUR (€)", euMember: false },
];
