// https://en.wikipedia.org/wiki/List_of_FIPS_country_codes

const countryCodes = {
      "Aruba": "AA",
      "Antigua and Barbuda": "AC",
      "United Arab Emirates": "AE",
      "Afghanistan": "AF",
      "Algeria": "AG",
      "Azerbaijan": "AJ",
      "Albania": "AL",
      "Armenia": "AM",
      "Andorra": "AN",
      "Angola": "AO",
      "American Samoa": "AQ",
      "Argentina": "AR",
      "Australia": "AS",
      // "Ashmore and Cartier Islands": "AT",
      "Austria": "AU",
      "Anguilla": "AV",
      // "Akrotiri": "AX",
      // "Antarctica": "AY",
      "Bahrain": "BA",
      "Barbados": "BB",
      "Botswana": "BC",
      "Bermuda": "BD",
      "Belgium": "BE",
      "Bahamas, The": "BF",
      "Bangladesh": "BG",
      "Belize": "BH",
      "Bosnia and Herzegovina": "BK",
      "Bolivia": "BL",
      "Burma": "BM",
      "Benin": "BN",
      "Belarus": "BO",
      "Solomon Islands": "BP",
      // "Navassa Island": "BQ",
      "Brazil": "BR",
      // "Bassas da India": "BS",
      "Bhutan": "BT",
      "Bulgaria": "BU",
      // "Bouvet Island": "BV",
      "Brunei": "BX",
      "Burundi": "BY",
      "Canada": "CA",
      "Cambodia": "CB",
      "Chad": "CD",
      "Sri Lanka": "CE",
      "Congo (Brazzaville)": "CF",
      "Congo (Kinshasa)": "CG",
      "China": "CH",
      "Chile": "CI",
      "Cayman Islands": "CJ",
      "Cocos (Keeling) Islands": "CK",
      "Cameroon": "CM",
      "Comoros": "CN",
      "Colombia": "CO",
      "Northern Mariana Islands": "CQ",
      // "Coral Sea Islands": "CR",
      "Costa Rica": "CS",
      "Central African Republic": "CT",
      "Cuba": "CU",
      "Cape Verde": "CV",
      "Cook Islands": "CW",
      "Cyprus": "CY",
      "Denmark": "DA",
      "Djibouti": "DJ",
      "Dominica": "DO",
      // "Jarvis Island": "DQ",
      "Dominican Republic": "DR",
      // "Dhekelia": "DX",
      "Ecuador": "EC",
      "Egypt": "EG",
      "Ireland": "EI",
      "Equatorial Guinea": "EK",
      "Estonia": "EN",
      "Eritrea": "ER",
      "El Salvador": "ES",
      "Ethiopia": "ET",
      // "Europa Island": "EU",
      "Czechia": "EZ",
      "French Guiana": "FG",
      "Finland": "FI",
      "Fiji": "FJ",
      "Falkland Islands (Islas Malvinas)": "FK",
      "Micronesia, Federated States of": "FM",
      "Faroe Islands": "FO",
      "French Polynesia": "FP",
      // "Baker Island": "FQ",
      "France": "FR",
      // "French Southern and Antarctic Lands": "FS",
      "Gambia, The": "GA",
      // "Gabon": "GB",
      "Georgia": "GG",
      "Ghana": "GH",
      "Gibraltar": "GI",
      "Grenada": "GJ",
      // "Guernsey": "GK",
      "Greenland": "GL",
      "Germany": "GM",
      // "Glorioso Islands": "GO",
      // "Guadeloupe": "GP",
      "Guam": "GQ",
      "Greece": "GR",
      "Guatemala": "GT",
      "Guinea": "GV",
      "Guyana": "GY",
      // "Gaza Strip": "GZ",
      "Haiti": "HA",
      "Hong Kong": "HK",
      // "Heard Island and McDonald Islands": "HM",
      "Honduras": "HO",
      // "Howland Island": "HQ",
      "Croatia": "HR",
      "Hungary": "HU",
      "Iceland": "IC",
      "Indonesia": "ID",
      // "Isle of Man": "IM",
      "India": "IN",
      // "British Indian Ocean Territory": "IO",
      // "Clipperton Island": "IP",
      "Iran": "IR",
      "Israel": "IS",
      "Italy": "IT",
      "Côte d'Ivoire": "IV",
      "Iraq": "IZ",
      "Japan": "JA",
      "Jersey": "JE",
      "Jamaica": "JM",
      // "Jan Mayen": "JN",
      "Jordan": "JO",
      // "Johnston Atoll": "JQ",
      // "Juan de Nova Island": "JU",
      "Kenya": "KE",
      "Kyrgyzstan": "KG",
      "Korea, North": "KN",
      // "Kingman Reef": "KQ",
      "Kiribati": "KR",
      "Korea, South": "KS",
      "Christmas Island": "KT",
      "Kuwait": "KU",
      "Kosovo": "KV",
      "Kazakhstan": "KZ",
      "Laos": "LA",
      "Lebanon": "LE",
      "Latvia": "LG",
      "Lithuania": "LH",
      "Liberia": "LI",
      "Slovakia": "LO",
      // "Palmyra Atoll": "LQ",
      "Liechtenstein": "LS",
      "Lesotho": "LT",
      "Luxembourg": "LU",
      "Libya": "LY",
      "Madagascar": "MA",
      // "Martinique": "MB",
      "Macau": "MC",
      "Moldova": "MD",
      // "Mayotte": "MF",
      "Mongolia": "MG",
      // "Montserrat": "MH",
      "Malawi": "MI",
      "Montenegro": "MJ",
      "North Macedonia": "MK",
      "Mali": "ML",
      "Monaco": "MN",
      "Morocco": "MO",
      "Mauritius": "MP",
      // "Midway Islands": "MQ",
      "Mauritania": "MR",
      "Malta": "MT",
      "Oman": "MU",
      "Maldives": "MV",
      "Mexico": "MX",
      "Malaysia": "MY",
      "Mozambique": "MZ",
      "New Caledonia": "NC",
      // "Niue": "NE",
      "Norfolk Island": "NF",
      "Niger": "NG",
      "Vanuatu": "NH",
      "Nigeria": "NI",
      "Netherlands": "NL",
      "Sint Maarten": "NN",
      "Norway": "NO",
      "Nepal": "NP",
      // "Nauru": "NR",
    //   "Suriname": "NS",
      // "Netherlands Antilles": "NT",
      "Nicaragua": "NU",
      "New Zealand": "NZ",
      "South Sudan": "OD",
      "Paraguay": "PA",
      // "Pitcairn Islands": "PC",
      "Peru": "PE",
      // "Paracel Islands": "PF",
      // "Spratly Islands": "PG",
      // "Etorofu, Habomai, Kunashiri, and Shikotan Islands": "PJ",
      "Pakistan": "PK",
      "Poland": "PL",
      "Panama": "PM",
      "Portugal": "PO",
      "Papua New Guinea": "PP",
      "Palau": "PS",
      // "Guinea-Bissau": "PU",
      "Qatar": "QA",
      // "Réunion": "RE",
      "Serbia": "RI",
      // "Marshall Islands": "RM",
      // "Saint Martin": "RN",
      "Romania": "RO",
      "Philippines": "RP",
      "Puerto Rico": "RQ",
      "Russia": "RS",
      "Rwanda": "RW",
      "Saudi Arabia": "SA",
      // "Saint Pierre and Miquelon": "SB",
      // "Saint Kitts and Nevis": "SC",
      "Seychelles": "SE",
      "South Africa": "SF",
      "Senegal": "SG",
      // "Saint Helena, Ascension, and Tristan da Cunha": "SH",
      "Slovenia": "SI",
      "Sierra Leone": "SL",
      "San Marino": "SM",
      "Singapore": "SN",
      "Somalia": "SO",
      "Spain": "SP",
      "Suriname": "SR",
      // "Saint Lucia": "ST",
      "Sudan": "SU",
      // "Svalbard": "SV",
      "Sweden": "SW",
      // "South Georgia and South Sandwich Islands": "SX",
      "Syria": "SY",
      "Switzerland": "SZ",
      // "Saint Barthelemy": "TB",
      "Trinidad and Tobago": "TD",
      // "Tromelin Island": "TE",
      "Thailand": "TH",
      "Tajikistan": "TI",
      // "Turks and Caicos Islands": "TK",
      // "Tokelau": "TL",
      "Tonga": "TN",
      // "Togo": "TO",
      // "Sao Tome and Principe": "TP",
      "Tunisia": "TS",
      "Timor-Leste": "TT",
      "Türkiye": "TU",
      "Tuvalu": "TV",
      "Taiwan": "TW",
      "Turkmenistan": "TX",
      "Tanzania": "TZ",
      // "Curaçao": "UC",
      "Uganda": "UG",
      "United Kingdom": "UK",
      "Ukraine": "UP",
      "United States": "US",
      "Burkina Faso": "UV",
      "Uruguay": "UY",
      "Uzbekistan": "UZ",
      "Saint Vincent and the Grenadines": "VC",
      "Venezuela": "VE",
      "British Virgin Islands": "VI",
      "Vietnam": "VM",
      "United States Virgin Islands": "VQ",
      "Vatican City": "VT",
      "Namibia": "WA",
      "West Bank": "WE",
      // "Wallis and Futuna": "WF",
      "Western Sahara": "WI",
      // "Wake Island": "WQ",
      "Samoa": "WS",
      "Eswatini": "WZ",
      "Yemen": "YM",
      "Zambia": "ZA",
      "Zimbabwe": "ZI"
    };  

export default countryCodes;
