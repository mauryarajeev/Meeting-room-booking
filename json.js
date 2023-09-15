
const targetDBName = 'party';
const targetObjectStoreName = 'pt';
const request = indexedDB.open(targetDBName);
request.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction([targetObjectStoreName], 'readwrite');
    const objectStore = transaction.objectStore(targetObjectStoreName);
    const jsonData = [
        {
            "id": 221205002,
            "cn": "Jack",
            "mn1": "6363359828",
            "gst": "",
            "add": "1/1VAJRAHALLI NEXT TO METRO STATION, Near Raguvanahalli Metro Station, Kanakapura Main Road, BANGALORE",
            "ods": [
                "s30560"
            ],
            "mn2": "7483161616",
            "pin": "560062"
        },
        {
            "id": 221206003,
            "cn": "Krishna",
            "mn1": "9339171106",
            "gst": "",
            "add": "Kapur bagan,\nNear sasan Kali Mandir ",
            "ods": [
                "s30475",
                "s305112",
                "s305134",
                "s305136",
                "s305711",
                "s305921",
                "s30680",
                "s306607",
                "s309159",
                "s309456"
            ],
            "mn2": "9593823142",
            "pin": "723101"
        },
        {
            "id": 221206007,
            "cn": "Nishant Singh",
            "mn1": "8766378553",
            "gst": "",
            "add": "A.102 surat vihar, Mubarak pur dabas, Delhi",
            "ods": [
                "s30562"
            ],
            "mn2": "9711957738",
            "pin": "110086"
        },
        {
            "id": 221206009,
            "cn": "SULTHAN AHAMED",
            "mn1": "7337520172",
            "gst": "",
            "add": "23/30, Sai nagar, near vakeel peddiah house,near Police station petrol Bunk, Dharmavaram, Andhra pradesh",
            "ods": [
                "s305141"
            ],
            "mn2": "",
            "pin": "515671"
        },
        {
            "id": 221206011,
            "cn": "My way",
            "mn1": "7000904979",
            "gst": "23ALTPY6053F1ZM",
            "add": "Vaishali Yadav\n8, Sir Hukamchand marg, Gambhir Bhawan\nitwaria bazar, Kaanch mandir k samne \nCITY: INDORE",
            "ods": [
                "s304515",
                "s30544",
                "s307348"
            ],
            "mn2": "7017950885",
            "pin": "452002"
        },
        {
            "id": 221206014,
            "cn": "The aukurban company",
            "mn1": "8506969751",
            "gst": "",
            "add": "",
            "ods": [
                "s305392",
                "s305393",
                "s305395",
                "s305397",
                "s305398",
                "s305476",
                "s305733",
                "s305917",
                "s30653",
                "s306144",
                "s306200",
                "s306315",
                "s306366",
                "s306367",
                "s306482",
                "s306615",
                "s306774",
                "s307128",
                "s307290",
                "s307325",
                "s307392",
                "s307564",
                "s307692",
                "s307737",
                "s307863",
                "s307935",
                "s308109",
                "s308194",
                "s308373",
                "s308520",
                "s308615",
                "s308730",
                "s3081022",
                "s309176",
                "s309538"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 221207005,
            "cn": "Make My Casual",
            "mn1": "8699925252",
            "gst": "03HGBPS7040Q1ZW",
            "add": "(Custom Clothirg & Acessories)\nSco 4, Chaudhary Enclave, Zirakpur, Punjab Mohali",
            "ods": [
                "s30423",
                "s304130",
                "s304232",
                "s304371",
                "s304390",
                "s304494",
                "s304500",
                "s304552",
                "s30516",
                "s305114",
                "s305171",
                "s305222",
                "s305265",
                "s305378",
                "s305455",
                "s305764",
                "s305944",
                "s306186",
                "s306217",
                "s306260",
                "s306493",
                "s306591",
                "s306652",
                "s306769",
                "s306792",
                "s306843",
                "s307122",
                "s307569",
                "s307746",
                "s307834",
                "s30888",
                "s308202",
                "s308283",
                "s308387",
                "s308485",
                "s308539",
                "s308813",
                "s308935",
                "s308968",
                "s3081091",
                "s30944",
                "s309120",
                "s309228",
                "s309399",
                "s309523"
            ],
            "mn2": "8437375306",
            "pin": "140603"
        },
        {
            "id": 221207010,
            "cn": "godown-themen",
            "mn1": "9839356170",
            "gst": "",
            "add": "Custom Clothirg & Acessories)\nSco 4, Chaudhary Enclave, Zirakpur, Punjab Mohali Custom Clothirg & Acessories)\nSco 4, Chaudhary Enclave, Zirakpur, Punjab Mohali",
            "ods": [
                "s304263",
                "s304388",
                "s30589",
                "s30592",
                "s305151",
                "s305937",
                "s305995",
                "s305996",
                "s30619",
                "s30642",
                "s30668",
                "s30694",
                "s30695",
                "s306118",
                "s306717"
            ],
            "mn2": "8527150400",
            "pin": "641607"
        },
        {
            "id": 221207011,
            "cn": "Dashmesh",
            "mn1": "",
            "gst": "06FSNPS6520P1ZU",
            "add": "Msk svs Shshs sus Ssjs. Hssh",
            "ods": [
                "s30431",
                "s304110",
                "s304222",
                "s304353",
                "s304455",
                "s304566",
                "s30569",
                "s305155",
                "s305297",
                "s305366",
                "s305511",
                "s305620",
                "s305710",
                "s305788",
                "s305926",
                "s30652",
                "s306132",
                "s306218",
                "s306328",
                "s306405",
                "s306471",
                "s306565",
                "s306663",
                "s306752",
                "s306807",
                "s3073",
                "s30756",
                "s307199",
                "s307326",
                "s307440",
                "s307538",
                "s307677",
                "s307758",
                "s307873",
                "s30840",
                "s308161",
                "s308419",
                "s308583",
                "s308801",
                "s308950",
                "s30932",
                "s309219",
                "s309519"
            ],
            "mn2": "",
            "pin": "110062"
        },
        {
            "id": 221207017,
            "cn": "Rajeswari Handlooms",
            "mn1": "6304056721",
            "gst": "37JZEPK9918R1Z4",
            "add": "C/o Rajeswari Handlooms\nMain road, velama kothuru Opp phs school, Velama kothuru ,tuni mandal, East Godavari dist, AP, 533401",
            "ods": [
                "s3046",
                "s305880",
                "s306513"
            ],
            "mn2": "7036664018",
            "pin": "533401"
        },
        {
            "id": 221208002,
            "cn": "Printing Wallah",
            "mn1": "8102384724",
            "gst": "",
            "add": "Bhu Hyderabad gate , Susuwahi road varanasi",
            "ods": [
                "s305129"
            ],
            "mn2": "7255871565",
            "pin": "221005"
        },
        {
            "id": 221208004,
            "cn": "Beauty point",
            "mn1": "7379416262",
            "gst": "",
            "add": "Beauty point 37e/10k gaus nagar kareli \nParayagraj up ",
            "ods": [
                "s30561",
                "s308154"
            ],
            "mn2": "",
            "pin": "211016"
        },
        {
            "id": 221208013,
            "cn": "Mbrio India",
            "mn1": "9799928489",
            "gst": "08BBGPN7076P1ZS",
            "add": "Naruka Army Store, Ghari House, Chameli Bagh, Fort Road, Akheypura, Alwar, Rajasthan ",
            "ods": [
                "s30496",
                "s304256",
                "s304516",
                "s304544",
                "s305139",
                "s305239",
                "s305410",
                "s305742",
                "s305827",
                "s305986",
                "s30624",
                "s306126",
                "s306427",
                "s306616",
                "s306831",
                "s307200",
                "s307346",
                "s307642",
                "s307778",
                "s307943",
                "s308118",
                "s308383",
                "s308734",
                "s3081077",
                "s309109",
                "s309187",
                "s309498"
            ],
            "mn2": "8769964899",
            "pin": "301001"
        },
        {
            "id": 221208014,
            "cn": "Disha",
            "mn1": "9630225200",
            "gst": "",
            "add": "101 Kushal, Apartment, Patankar ka Bada, Lashkar GWALIOR, MADHYA PRADESH India Gwalior",
            "ods": [
                "s3045",
                "s30426",
                "s304145",
                "s307445",
                "s308635"
            ],
            "mn2": "8718892983",
            "pin": "474001"
        },
        {
            "id": 221209002,
            "cn": "THE FUNKY BUZZ",
            "mn1": "9432213429",
            "gst": "19AARFT9724D1ZM",
            "add": "52, KUMUD GHOSAL ROAD, ARIADAHA, KOLKATa",
            "ods": [
                "s304456",
                "s304474",
                "s30677",
                "s306343",
                "s306466",
                "s30710",
                "s307796",
                "s309158"
            ],
            "mn2": "",
            "pin": "700057"
        },
        {
            "id": 221209006,
            "cn": "Viraj",
            "mn1": "7017950885",
            "gst": "09BBZPJ0739G1Z6",
            "add": "HIG 14, NEHRU ENCLAVE, \nSHAMSHABAD ROAD",
            "ods": [
                "s30439",
                "s30483",
                "s304268",
                "s304270",
                "s304542",
                "s30559",
                "s305172",
                "s305454",
                "s305630",
                "s305732",
                "s30613",
                "s306176",
                "s306422",
                "s306716",
                "s307213",
                "s307721",
                "s30849",
                "s308440",
                "s308623",
                "s308995",
                "s309191",
                "s309357"
            ],
            "mn2": "",
            "pin": "282001"
        },
        {
            "id": 221209007,
            "cn": "Besesky",
            "mn1": "",
            "gst": "07CPCPG7472K1ZL",
            "add": "",
            "ods": [
                "s308124",
                "s3081000",
                "s3081103",
                "s3081141"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 221209008,
            "cn": "Yashu",
            "mn1": "8244286672",
            "gst": "",
            "add": "GROUND FLOOR,MOURISHKA TOWERS\nSt.AGNES,MALLIKATTA ROAD\nMANGALURU",
            "ods": [
                "s304555"
            ],
            "mn2": "6364825155",
            "pin": "575002"
        },
        {
            "id": 221212008,
            "cn": "Evertight Fasteners",
            "mn1": "9041164829",
            "gst": "03ABNPS7788P1ZG",
            "add": "F-9 focal point extension \nJalandhar Punjab",
            "ods": [
                "s304267",
                "s305137",
                "s305417",
                "s305970",
                "s306373",
                "s306568",
                "s306770",
                "s306796",
                "s306812",
                "s30778",
                "s307152",
                "s307312",
                "s307471",
                "s307815",
                "s30891",
                "s308146",
                "s308106",
                "s3081040",
                "s3081155",
                "s3099"
            ],
            "mn2": "",
            "pin": "144004"
        },
        {
            "id": 221213002,
            "cn": "Karishma Thandani 1",
            "mn1": "9936905574",
            "gst": "09AHJPT8975H1ZD",
            "add": "7 way road, gokhle marg, near sultan ganj police chowki\nLucknow .",
            "ods": [
                "s305314",
                "s306197",
                "s306566",
                "s306720",
                "s30732",
                "s307367",
                "s307684",
                "s30815",
                "s308429",
                "s308841",
                "s308849"
            ],
            "mn2": "9335905920",
            "pin": "226001"
        },
        {
            "id": 221213005,
            "cn": "Heaven Clothing",
            "mn1": "9310571660",
            "gst": "07AORPC7556A1ZY",
            "add": "b4/32d ashok vihar phase 2 delhi, Near kanwarji sweets",
            "ods": [
                "s304236",
                "s307608",
                "s307870",
                "s308227"
            ],
            "mn2": "",
            "pin": "110052"
        },
        {
            "id": 221215002,
            "cn": "The Goofy Attire",
            "mn1": "9325462730",
            "gst": "27CMQPS2746R1ZU",
            "add": "NEAR ADARSHA BALAK MANDIR SCHOOL, GROUND, FLOOR, SAI SIDDHA NAGAR, SR NO 224/1, SUNANDA\nNIVAS, DIGHI ROAD, BHOSARI, SHOP NO 01, Pimpri\nChinchwad, Pune, Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "411039"
        },
        {
            "id": 221215006,
            "cn": "Rihaanso",
            "mn1": "9643921723",
            "gst": "19AAKCR6250Q1ZJ",
            "add": "House No. 755, Sadhan more, Chaitanyapur,\nNew Rangia, Shivmandir, Siliguri",
            "ods": [
                "s30489",
                "s304253",
                "s304480",
                "s304517",
                "s304592",
                "s30554",
                "s305687",
                "s305800",
                "s30681",
                "s306172",
                "s306463",
                "s30798",
                "s307422",
                "s307436",
                "s307934",
                "s30864",
                "s308262",
                "s308491",
                "s308652",
                "s308769"
            ],
            "mn2": "9933073161",
            "pin": "734013"
        },
        {
            "id": 221216004,
            "cn": "Mrinal",
            "mn1": "7049859171",
            "gst": "09AADCO4618A2ZQ",
            "add": "6/122, Vineet Khand 6, Gomtinagar,  Lucknow",
            "ods": [
                "s304120",
                "s304481"
            ],
            "mn2": "",
            "pin": "226010"
        },
        {
            "id": 221218002,
            "cn": "Naruka ",
            "mn1": "9799928489",
            "gst": "08BDQPS4896E1ZQ",
            "add": "Naruka Army Store's, Ghari House, Chameli Bagh, Fort Road, Akheypura, Alwar, Rajasthan",
            "ods": [],
            "mn2": "8769964899",
            "pin": "301001"
        },
        {
            "id": 221224001,
            "cn": "Navya",
            "mn1": "8949771787",
            "gst": "",
            "add": "4-E-6 Talwandi, \nNear Maa Bharti School, Kota \nRajasthan",
            "ods": [
                "s304154",
                "s305811"
            ],
            "mn2": "9509246514",
            "pin": "324005"
        },
        {
            "id": 221224006,
            "cn": "Deranged",
            "mn1": "9006024400",
            "gst": "07EYUPR3580Q1Z3",
            "add": "",
            "ods": [
                "s304133",
                "s304281",
                "s304403",
                "s306294",
                "s309532"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230103001,
            "cn": "RUVI CROSS BORDER PRIVATE LIMITED",
            "mn1": "7665953666",
            "gst": "08AAMCR2292Q1ZI",
            "add": "2ND FLOOR, HOUSE NO. 30, CHIRAG COMPLEX, NR MAHIVRAM \nAPARTMENT, PANRIYO KI MADRI, UDAIPUR, RAJASTHAN",
            "ods": [
                "s30625",
                "s306495",
                "s306823"
            ],
            "mn2": "",
            "pin": "313002"
        },
        {
            "id": 230104002,
            "cn": "Entropy",
            "mn1": "8840556926",
            "gst": "09AAIFE2841F1ZJ",
            "add": "Shalabh Agarwal\nA-35, Sitapur Branch Road, Daliganj, Opposite Kabristan, Lucknow",
            "ods": [
                "s304518",
                "s30517"
            ],
            "mn2": "7387366901",
            "pin": "226020"
        },
        {
            "id": 230109001,
            "cn": "Rajneesh",
            "mn1": "7876858301",
            "gst": "",
            "add": "Vill- Kafta \nPo- Tandi \nTehs- Anni \nDist- kullu , Himachal ",
            "ods": [
                "s304418"
            ],
            "mn2": "8988315022",
            "pin": "172033"
        },
        {
            "id": 230119002,
            "cn": "Shahbaz",
            "mn1": "8092996099",
            "gst": "",
            "add": "Md Shahbaz Ahmad\nBariatu basti near mmk school ranchi jharkhand",
            "ods": [
                "s30559"
            ],
            "mn2": "9036353624",
            "pin": "834009"
        },
        {
            "id": 230121001,
            "cn": "Debjit Das",
            "mn1": "7980180893",
            "gst": "",
            "add": "2E BADAN ROY LANE, BELEGHATA, KOLKATA, Near - Ratna Cabin Bus Stop",
            "ods": [
                "s304203"
            ],
            "mn2": "",
            "pin": "700010"
        },
        {
            "id": 230122002,
            "cn": "Nayan Jyoti",
            "mn1": "7002144769",
            "gst": "",
            "add": "Numaligarh NRL Township Office\nGolaghat\nAssam",
            "ods": [
                "s305359"
            ],
            "mn2": "8011830904",
            "pin": "785699"
        },
        {
            "id": 230125005,
            "cn": "Inspire",
            "mn1": "9547128607",
            "gst": "",
            "add": "Pritam Maiti \nCC12, Street no : 233, Action Area 1 , Newtown, Kolkata,",
            "ods": [
                "s304109"
            ],
            "mn2": "9108674415",
            "pin": "700156"
        },
        {
            "id": 230127002,
            "cn": "J Hind",
            "mn1": "9459944086",
            "gst": "",
            "add": "211 B old jail road\nOpp Anand Avenue.Near PNB. Amritsar",
            "ods": [
                "s304608",
                "s306862",
                "s30868",
                "s309207"
            ],
            "mn2": "",
            "pin": "143001"
        },
        {
            "id": 230201006,
            "cn": "Kreedee",
            "mn1": "9831267088",
            "gst": "19AAXFK2100J1Z4",
            "add": "60/51 Haripada Dutta Lane\nKolkata",
            "ods": [
                "s304179",
                "s304543",
                "s305363",
                "s305373",
                "s309195"
            ],
            "mn2": "",
            "pin": "700033"
        },
        {
            "id": 230204004,
            "cn": "Dheeraj",
            "mn1": "7018314410",
            "gst": "",
            "add": "s.s general store shudarang dakho, reckong peo, dis. kinnaur",
            "ods": [
                "s30467",
                "s304302",
                "s305692",
                "s306597",
                "s308272"
            ],
            "mn2": "",
            "pin": "172107"
        },
        {
            "id": 230204009,
            "cn": "Siddharth",
            "mn1": "9429113151",
            "gst": "",
            "add": "205 B3 Jaypee Klassic wishtown Sector 134  Noida",
            "ods": [
                "s304184"
            ],
            "mn2": "",
            "pin": "201304"
        },
        {
            "id": 230205003,
            "cn": "Shivom",
            "mn1": "8439280324",
            "gst": "",
            "add": "aswal cable network\nJoshiyara uttarkashi\nUttarakhand",
            "ods": [
                "s304365",
                "s304365",
                "s305544"
            ],
            "mn2": "",
            "pin": "249193"
        },
        {
            "id": 230213003,
            "cn": "Abhishekh Rana",
            "mn1": "7009542865",
            "gst": "",
            "add": "Hno 460 sector 26 Panchkula, haryana",
            "ods": [
                "s30458"
            ],
            "mn2": "",
            "pin": "134116"
        },
        {
            "id": 230216006,
            "cn": "Print E Max",
            "mn1": "8009999995",
            "gst": "09ARSPC5549H2ZB",
            "add": "South City Raebareli Road Lucknow, near lucknow public school",
            "ods": [
                "s30469",
                "s304116",
                "s304454",
                "s304567",
                "s305887",
                "s307182",
                "s307343",
                "s307611",
                "s307883",
                "s307936",
                "s309355"
            ],
            "mn2": "",
            "pin": "226025"
        },
        {
            "id": 230217004,
            "cn": "Sunil ",
            "mn1": "8950005092",
            "gst": "",
            "add": "sajjan jewellers, dharamshala road, near punjab electric store\nCity: Fatehabad\nState: Haryana",
            "ods": [
                "s30464"
            ],
            "mn2": "",
            "pin": "125050"
        },
        {
            "id": 230219006,
            "cn": "Invitation",
            "mn1": "8092350153",
            "gst": "",
            "add": "Plot No GA-21 City centre Sector 4 Bokaro steel City Jharkhand",
            "ods": [
                "s304102",
                "s308104"
            ],
            "mn2": "",
            "pin": "827004"
        },
        {
            "id": 230224003,
            "cn": "Tricksy Stich",
            "mn1": "9548592163",
            "gst": "",
            "add": "B-37 BEL colony kotdwara, Uttarakhand ",
            "ods": [
                "s304502",
                "s305105",
                "s305850"
            ],
            "mn2": "",
            "pin": "246149"
        },
        {
            "id": 230228001,
            "cn": "Sonali",
            "mn1": "9922561659",
            "gst": "",
            "add": "Suyog Sagar society A-12 , kawadenagar lane no. 3 pimple gurav pune",
            "ods": [
                "s304411"
            ],
            "mn2": "9822269433",
            "pin": "411061"
        },
        {
            "id": 230301010,
            "cn": "Tushar",
            "mn1": "9591680681",
            "gst": "",
            "add": " 9, SP Mukherjee road, Vinayak Zenith building, Flat 3B, 3rd floor,, Kolkata, West Bengal, near shri krishna sweets",
            "ods": [
                "s304241",
                "s304492"
            ],
            "mn2": "",
            "pin": "700025"
        },
        {
            "id": 230301012,
            "cn": "Dhanush",
            "mn1": "7483927726",
            "gst": "",
            "add": "20, 1st cross vinobhanagar h siddahia road,",
            "ods": [
                "s304443",
                "s30563",
                "s305907",
                "s306635",
                "s307214",
                "s307527",
                "s308249",
                "s308784",
                "s309321"
            ],
            "mn2": "",
            "pin": "560027"
        },
        {
            "id": 230307007,
            "cn": "Vivek",
            "mn1": "8500311123",
            "gst": "",
            "add": "B1 160 Golden Valley Part 2  Amodar waghodia Road Vadodara Gujarat",
            "ods": [
                "s304440",
                "s305547",
                "s305810",
                "s306117",
                "s306359",
                "s307124"
            ],
            "mn2": "7567260464",
            "pin": "391760"
        },
        {
            "id": 230310007,
            "cn": "Naga colors",
            "mn1": "9383312407",
            "gst": "13AAYPZ7808H1ZV",
            "add": "V Shuya Complex opp. to Police Complex gate\nward-2 Chumukedima Dimapur Nagaland",
            "ods": [
                "s30450",
                "s30484",
                "s30497",
                "s304319"
            ],
            "mn2": "",
            "pin": "797112"
        },
        {
            "id": 230310011,
            "cn": "Rahul",
            "mn1": "7075850510",
            "gst": "",
            "add": "13-5-158/77 Karwan l.k nagar near Milan bakery, area Hyderabad",
            "ods": [
                "s30476",
                "s3094"
            ],
            "mn2": "",
            "pin": "500006"
        },
        {
            "id": 230312002,
            "cn": "Savio",
            "mn1": "8310289878",
            "gst": "",
            "add": "Revival Street Socail,Near Airtel office,\nopposite KIM's front gate VidyanagarHubli",
            "ods": [
                "s304538",
                "s306451",
                "s308470"
            ],
            "mn2": "9620188430",
            "pin": "580021"
        },
        {
            "id": 230312003,
            "cn": "Wrapin",
            "mn1": "9148950885",
            "gst": "",
            "add": "No 16, KAVMS sheshadri road gandhi nagar,banglore, 560009",
            "ods": [
                "s304206",
                "s305918",
                "s306618",
                "s308949",
                "s30980",
                "s309507"
            ],
            "mn2": "8183094466",
            "pin": "560009"
        },
        {
            "id": 230317002,
            "cn": "Wear you want",
            "mn1": "8874551604",
            "gst": "09ASUPK2564M1ZW",
            "add": "115/232 maswanpur kanpur\nT shirt bazaar",
            "ods": [
                "s30428",
                "s305107"
            ],
            "mn2": "",
            "pin": "208019"
        },
        {
            "id": 230318004,
            "cn": "Radhika",
            "mn1": "6300475336",
            "gst": "",
            "add": "TO\nSatyanarayana \nGarnet  403\nMyhome jewel \nMadinaguda \nHyderabad",
            "ods": [
                "s304225"
            ],
            "mn2": "",
            "pin": "500049"
        },
        {
            "id": 230320010,
            "cn": "Ranbar",
            "mn1": "8707506520",
            "gst": "",
            "add": "C/116/576 near imambada inter collage Miya Bazar Near Amul parlour Gorakhpur",
            "ods": [
                "s30427"
            ],
            "mn2": "",
            "pin": "273001"
        },
        {
            "id": 230321001,
            "cn": "Prajwesh",
            "mn1": "7977615419",
            "gst": "",
            "add": "307/r2 , golden chs , garodiya nagar ghatkopar east ,mumbai",
            "ods": [
                "s305124",
                "s305357"
            ],
            "mn2": "9320804042",
            "pin": "400077"
        },
        {
            "id": 230321005,
            "cn": "Jyotishman",
            "mn1": "8473928906",
            "gst": "",
            "add": "District - Nagaon\nLandmark - dhakaipatti\nState - Assam",
            "ods": [
                "s30462"
            ],
            "mn2": "7635939210",
            "pin": "782001"
        },
        {
            "id": 230323002,
            "cn": "Mrinalika",
            "mn1": "7007614100",
            "gst": "",
            "add": "901, I BLOCK, Ganga Apartment, Gomtinagar extension, Near DPS School, Lucknow, Uttar Pradesh",
            "ods": [
                "s30481"
            ],
            "mn2": "",
            "pin": "226010"
        },
        {
            "id": 230324003,
            "cn": "Merch Factory",
            "mn1": "7898216607",
            "gst": "23BPGPJ0062R1ZR",
            "add": "Mill Road, Ashok Nagar , \nMadhya Pradesh",
            "ods": [
                "s30417",
                "s304501",
                "s305126",
                "s305241",
                "s305885",
                "s305966",
                "s306443",
                "s3079",
                "s307243",
                "s307664",
                "s308116",
                "s308344",
                "s308374",
                "s308988",
                "s3081054",
                "s309403"
            ],
            "mn2": "",
            "pin": "473331"
        },
        {
            "id": 230401006,
            "cn": "Xudip",
            "mn1": "8721815171",
            "gst": "",
            "add": "Sudip Debnath \nMD Rd, near Hotel Blue Bird, Haibargaon, Nagaon, Assam",
            "ods": [
                "s30471"
            ],
            "mn2": "",
            "pin": "782002"
        },
        {
            "id": 230405001,
            "cn": "Deepak",
            "mn1": "9988025153",
            "gst": "04EDZPD5609G1ZC",
            "add": "House no no -# 176 sector 25D Chandigarh , Landmark -danik  bhaskar colony \nArea Name -  sector 25D\nCity- Chandigarh \nState- punjab",
            "ods": [
                "s305248"
            ],
            "mn2": "",
            "pin": "160014"
        },
        {
            "id": 230406001,
            "cn": "Ayush",
            "mn1": "8149390846",
            "gst": "",
            "add": "Flat no. 601 Datta vihar tower john Augustin road godavari society jail road nashik road nashik\nNear yogiraj mandir",
            "ods": [
                "s305446"
            ],
            "mn2": "9284321865",
            "pin": "422101"
        },
        {
            "id": 230406002,
            "cn": "Deepanshu",
            "mn1": "9929851286",
            "gst": "",
            "add": "Deepanshu Rankawat, Room 320, UG Boys hostel, AIIMS BATHINDA, dabwali road, lal singh nagar, bathinda, punjab",
            "ods": [
                "s304558"
            ],
            "mn2": "",
            "pin": "151001"
        },
        {
            "id": 230406003,
            "cn": "Try My Loan",
            "mn1": "9924215855",
            "gst": "24ELAPK6176E2Z6",
            "add": "Trymyloan, Parth Kothari.\n324, Shiven Square, Pal, Adajan, Surat",
            "ods": [
                "s304355",
                "s304451",
                "s306504"
            ],
            "mn2": "7622912575",
            "pin": "395009"
        },
        {
            "id": 230407001,
            "cn": "High90",
            "mn1": "8826149905",
            "gst": "07AAMFH4892B1Z9",
            "add": "D-978 Shiksha Bharti Road Dwarka sec 7 near Ramphal chowk Delhi",
            "ods": [
                "s3041",
                "s30412",
                "s30433",
                "s304158",
                "s304159",
                "s305349",
                "s305489",
                "s305639",
                "s305753",
                "s306263",
                "s306502",
                "s306620",
                "s306755",
                "s30721",
                "s307189",
                "s307222",
                "s307311",
                "s30812",
                "s308137"
            ],
            "mn2": "",
            "pin": "110075"
        },
        {
            "id": 230407002,
            "cn": "Sale Point",
            "mn1": "",
            "gst": "",
            "add": "Ty",
            "ods": [
                "s3042",
                "s3049",
                "s30416",
                "s30434",
                "s30442",
                "s30447",
                "s30452",
                "s30465",
                "s30470",
                "s30495",
                "s304104",
                "s304105",
                "s304115",
                "s304135",
                "s304157",
                "s304194",
                "s304200",
                "s304209",
                "s304211",
                "s304212",
                "s304217",
                "s304261",
                "s304273",
                "s304300",
                "s304458",
                "s304495",
                "s304503",
                "s304559",
                "s304560",
                "s304586",
                "s304598",
                "s30590",
                "s305140",
                "s305148",
                "s305173",
                "s305184",
                "s305264",
                "s305384",
                "s305388",
                "s305423",
                "s305457",
                "s305613"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230407003,
            "cn": "Sunny",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s3043"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230407004,
            "cn": "NICOLES COLLECTION",
            "mn1": "9064130778",
            "gst": "",
            "add": "Ravi subba \nState west Bengal \nSalua kharagpur \nVillage purana busty ",
            "ods": [
                "s3044",
                "s306438"
            ],
            "mn2": "",
            "pin": "721145"
        },
        {
            "id": 230407005,
            "cn": "Ali Trading",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s3047"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230407006,
            "cn": "Relga Company s.l",
            "mn1": "9344201075",
            "gst": "",
            "add": "CFS DETAILS\nGerman Express Shipping Agency (India) Pvt Ltd\nContainer Freight Station Shed No 1\nKondakarai, Vallur Village, S R Palayam Post\nChennai",
            "ods": [
                "s3048",
                "s308899"
            ],
            "mn2": "",
            "pin": "600120"
        },
        {
            "id": 230407007,
            "cn": "Rabbit Merchandise",
            "mn1": "",
            "gst": "06BZPPM6123H1Z6",
            "add": "29/716 Faridabad , Haryana -121008",
            "ods": [
                "s30410",
                "s30413",
                "s30414",
                "s30491",
                "s305640",
                "s305643",
                "s305680",
                "s305755",
                "s309270",
                "s309396"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230407008,
            "cn": "Flotation India",
            "mn1": "",
            "gst": "07EFTPK1168B1ZD",
            "add": "",
            "ods": [
                "s30411",
                "s30448",
                "s304122",
                "s304128",
                "s304129",
                "s304167",
                "s304196",
                "s304260",
                "s304308",
                "s304343",
                "s304508",
                "s304585",
                "s30512",
                "s305212",
                "s305227",
                "s305234",
                "s305258",
                "s305289",
                "s305328",
                "s305364",
                "s305403",
                "s305499",
                "s305679",
                "s305770",
                "s305805",
                "s305818",
                "s305859",
                "s30617",
                "s306107",
                "s306256",
                "s306546",
                "s306569",
                "s306763",
                "s306863",
                "s30718",
                "s307103",
                "s307219",
                "s307376",
                "s307439",
                "s307545",
                "s307594",
                "s307888",
                "s308212",
                "s308216",
                "s308279",
                "s308808",
                "s309485",
                "s309524",
                "s309537"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230407009,
            "cn": "World of Print",
            "mn1": "",
            "gst": "07CQOPA5104R1ZI",
            "add": "",
            "ods": [
                "s30415",
                "s30435",
                "s304127",
                "s304149",
                "s304153",
                "s304199",
                "s304324",
                "s304326",
                "s304344",
                "s304461",
                "s304463",
                "s304465",
                "s304530",
                "s304599",
                "s30535",
                "s305236",
                "s305420",
                "s305494",
                "s305576",
                "s305899",
                "s305978",
                "s30610",
                "s30638",
                "s306376",
                "s306419",
                "s306454",
                "s306503",
                "s306547",
                "s306593",
                "s306594",
                "s306809",
                "s307680",
                "s307702",
                "s307781",
                "s307963",
                "s307964",
                "s308299",
                "s308433",
                "s308856",
                "s308857",
                "s3081095",
                "s30936",
                "s309193",
                "s309261",
                "s309267"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230407010,
            "cn": "No Name",
            "mn1": "7662997721",
            "gst": "",
            "add": "Nagaon , near ADP college, Building - Kid's Land School, Assam",
            "ods": [
                "s30418"
            ],
            "mn2": "8402038368",
            "pin": "782001"
        },
        {
            "id": 230407011,
            "cn": "Varsha Gulia",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30419"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230407012,
            "cn": "Misro",
            "mn1": "",
            "gst": "07LEKPS7895N1ZY",
            "add": "",
            "ods": [
                "s30420",
                "s30445",
                "s306409",
                "s306457"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230407013,
            "cn": "TheCaseLab",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30421"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230407014,
            "cn": "Print Safari",
            "mn1": "",
            "gst": "07BOZPA8235D1ZR",
            "add": "",
            "ods": [
                "s30422",
                "s30453",
                "s30486",
                "s304117",
                "s304169",
                "s304330",
                "s304332",
                "s304361",
                "s304394",
                "s304445",
                "s304513",
                "s304522",
                "s304531",
                "s30580",
                "s30596",
                "s305301",
                "s305538",
                "s305690",
                "s305693",
                "s305699",
                "s305802",
                "s305838",
                "s305839",
                "s305847",
                "s305931",
                "s306180",
                "s306187",
                "s306188",
                "s306192",
                "s306210",
                "s306386",
                "s306589",
                "s306757"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230407015,
            "cn": "Rishabh",
            "mn1": "7685824902",
            "gst": "",
            "add": "Aman Sharma\n193/2 B.k. moitra Road , near Abhishek marriage hall\nBaranagar, West Bengal",
            "ods": [
                "s30424",
                "s307463"
            ],
            "mn2": "",
            "pin": "700036"
        },
        {
            "id": 230407016,
            "cn": "Owl Prints",
            "mn1": "9599608620",
            "gst": "07AAHFO0957B1ZH",
            "add": "189, Swarn Park, Mundka",
            "ods": [
                "s30425",
                "s304185",
                "s307541",
                "s307818",
                "s308225",
                "s308643",
                "s3081037",
                "s3081059"
            ],
            "mn2": "",
            "pin": "110041"
        },
        {
            "id": 230407017,
            "cn": "PRINT MAFIAS",
            "mn1": "8874551604",
            "gst": "09CLIPR9985A1ZF",
            "add": "115/232 Maswanpur Kanpur uttar pradesh",
            "ods": [
                "s30429"
            ],
            "mn2": "",
            "pin": "208019"
        },
        {
            "id": 230408001,
            "cn": "Marina",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30430"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230408002,
            "cn": "Printkoov",
            "mn1": "",
            "gst": "09CINPR8551E1ZO",
            "add": "",
            "ods": [
                "s30432",
                "s30473",
                "s304114",
                "s304221",
                "s304298",
                "s304393",
                "s304453",
                "s304485",
                "s304533",
                "s30534",
                "s305109",
                "s305127",
                "s305211",
                "s305237",
                "s305249",
                "s305361",
                "s305436",
                "s305512",
                "s305546",
                "s305709",
                "s305769",
                "s305831",
                "s305955",
                "s30685",
                "s306153",
                "s306370",
                "s306474",
                "s306556",
                "s306664",
                "s306751",
                "s306859",
                "s30770",
                "s307166",
                "s307396",
                "s307524",
                "s307729",
                "s307742",
                "s307757",
                "s307904",
                "s308193",
                "s308506",
                "s308620",
                "s3081026",
                "s30917",
                "s309114",
                "s309437"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230408003,
            "cn": "Prashant Pekhale",
            "mn1": "8888020331",
            "gst": "",
            "add": "D 102, Riveryne Nest, Satbhai Nagar, Gurudatta Nagar, Nashik Road, Nashik, Maharashtra",
            "ods": [
                "s30436",
                "s30444"
            ],
            "mn2": "",
            "pin": "422101"
        },
        {
            "id": 230408004,
            "cn": "Mugambofashion",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30437"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230408005,
            "cn": "Bala Ji Printers",
            "mn1": "9877585754",
            "gst": "06AIWPB4081E1ZA",
            "add": "Balaji printers old bus stand sohna",
            "ods": [
                "s30438",
                "s30456",
                "s305326",
                "s305752",
                "s305935",
                "s3063",
                "s306486",
                "s307400",
                "s309235"
            ],
            "mn2": "",
            "pin": "122103"
        },
        {
            "id": 230408006,
            "cn": "Kishan Thakkar",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30440"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230408007,
            "cn": "Vibe Store",
            "mn1": "",
            "gst": "36AASFV5158N1Z6",
            "add": "",
            "ods": [
                "s30441",
                "s304121",
                "s304214",
                "s305316"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230408008,
            "cn": "MERCHIT TECHNOLOGIES PRIVATE LIMITED",
            "mn1": "9810330822",
            "gst": "07AAPCM6949Q1ZA",
            "add": "116/9, Ring Road, Bhikaji Cama Place, New Delhi, Delhi 110066",
            "ods": [
                "s30443",
                "s30454",
                "s304204",
                "s304259",
                "s305279",
                "s305407",
                "s306270",
                "s306350",
                "s306571",
                "s307295",
                "s307670",
                "s307712",
                "s308162",
                "s308660",
                "s308978",
                "s309192"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230408009,
            "cn": "K and T internet",
            "mn1": "",
            "gst": "09CEBPG4974E1ZH",
            "add": "",
            "ods": [
                "s30446",
                "s304272",
                "s305174",
                "s305187",
                "s305466",
                "s305580",
                "s305581",
                "s30620",
                "s306718",
                "s307724",
                "s308994"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230408010,
            "cn": "Aditya",
            "mn1": "8204618272",
            "gst": "",
            "add": "Aditya mansata\n87K park street near park street police station kolkata",
            "ods": [
                "s30449"
            ],
            "mn2": "",
            "pin": "700016"
        },
        {
            "id": 230408011,
            "cn": "Adii",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30451"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230408012,
            "cn": "Bird",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30455",
                "s304216",
                "s30728",
                "s307407",
                "s307886",
                "s30822",
                "s30861",
                "s309117"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230408013,
            "cn": "Kadam",
            "mn1": "8888204693",
            "gst": "",
            "add": "behind lions mma gym, flame university road, kshatriya nagar, bavdhan, pune",
            "ods": [
                "s30457"
            ],
            "mn2": "",
            "pin": "411021"
        },
        {
            "id": 230408014,
            "cn": "Creative Art",
            "mn1": "7009542865",
            "gst": "06AGNPA9404H1ZI",
            "add": "Hno 460 sector 26 Panchkula, haryana",
            "ods": [
                "s30459",
                "s308708"
            ],
            "mn2": "9646472353",
            "pin": "134116"
        },
        {
            "id": 230409001,
            "cn": "Ishant",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30460"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230409002,
            "cn": "Suraj Adivashi",
            "mn1": "9627703451",
            "gst": "",
            "add": "Near Jai Shree Green City Apartment,\nArgora",
            "ods": [
                "s30461",
                "s305548",
                "s305953",
                "s306472",
                "s307160",
                "s308156",
                "s308469",
                "s3081105",
                "s3081140",
                "s309439"
            ],
            "mn2": "",
            "pin": "834001"
        },
        {
            "id": 230409003,
            "cn": "Indra",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30463",
                "s304124"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230409004,
            "cn": "Akshay M Nath",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30466"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230409005,
            "cn": "CHINMAY GRAPHICS & PRINTINGS",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30468"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230410001,
            "cn": "Tee Factor Apparels LLP",
            "mn1": "7207617349",
            "gst": "36AAUFT3345B1Z2",
            "add": "16-2-839/10 khaleel manzil 2nd floor, \nbaquar bagh colony, saidabad ",
            "ods": [
                "s30472",
                "s305758"
            ],
            "mn2": "8019687225",
            "pin": "500059"
        },
        {
            "id": 230410002,
            "cn": "Webong Creations LLP",
            "mn1": "7980180893",
            "gst": "",
            "add": "Debjit Das\n2E BADAN ROY LANE, BELEGHATA, KOLKATA\nNear - Ratna Cabin Bus Stop",
            "ods": [
                "s30474",
                "s304178",
                "s306756",
                "s308910"
            ],
            "mn2": "",
            "pin": "700010"
        },
        {
            "id": 230410003,
            "cn": "Cloudhut",
            "mn1": "",
            "gst": "07AXMPP5757E1Z1",
            "add": "",
            "ods": [
                "s30477",
                "s304383",
                "s304564",
                "s305163",
                "s305220",
                "s305741",
                "s30660",
                "s306209",
                "s306475",
                "s307336",
                "s307763",
                "s308204",
                "s308804",
                "s3081116",
                "s309391"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230410004,
            "cn": "ALLURE HOOK (OPC) PRIVATE LIMITED",
            "mn1": "",
            "gst": "07AAUCA4245J1ZA",
            "add": "",
            "ods": [
                "s30478"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230410005,
            "cn": "FCRDV India pvt LTD",
            "mn1": "",
            "gst": "07AACCF2097D1ZU",
            "add": "",
            "ods": [
                "s30479",
                "s30591",
                "s305200",
                "s306219",
                "s30919"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230410006,
            "cn": "Ryan International",
            "mn1": "7905001432",
            "gst": "09AXCPA7813J1ZI",
            "add": "21 -j ABA COMPOUND NEAR MACCKA MASJID\nJAJMAU, KANPUR",
            "ods": [
                "s30480",
                "s305660"
            ],
            "mn2": "",
            "pin": "208010"
        },
        {
            "id": 230410007,
            "cn": "Dragon Squad ",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30482",
                "s304112"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230410008,
            "cn": "Deepanshu",
            "mn1": "9720000491",
            "gst": "",
            "add": "146 Jagrati Vihar\n sector 8 Meerut",
            "ods": [
                "s30485",
                "s306125",
                "s307549",
                "s30977"
            ],
            "mn2": "9953990320",
            "pin": "250004"
        },
        {
            "id": 230410009,
            "cn": "Rudraksha",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30487",
                "s304227"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230410010,
            "cn": "Srujan",
            "mn1": "9699601934",
            "gst": "",
            "add": "1101B wing Royal rahadki greens,\nPhase 1 Pimpri Chinchwad,Rahatni",
            "ods": [
                "s30488",
                "s306396",
                "s308519"
            ],
            "mn2": "8141512796",
            "pin": "411017"
        },
        {
            "id": 230410011,
            "cn": "Shivani Jain",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30490"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230410012,
            "cn": "Royal Imperial Fabric",
            "mn1": "7276771136",
            "gst": "27AWZPC3063E1ZE",
            "add": "Xrbia Hinjawadi hills, Block no. B3-601, \nMarunji Road, dattawadi",
            "ods": [
                "s30492",
                "s304258",
                "s305568",
                "s308430"
            ],
            "mn2": "",
            "pin": "411057"
        },
        {
            "id": 230410013,
            "cn": "FASTECH FASHIONS PRIVATE LIMITED",
            "mn1": "9777134234",
            "gst": "21AADCF0114C1ZR",
            "add": "Fastech Fashions Pvt Ltd\nHig - 114 , k-5\nKalinga vihar\nOdisha, 752101",
            "ods": [
                "s30493",
                "s304106",
                "s304111",
                "s304147",
                "s306473",
                "s308324"
            ],
            "mn2": "",
            "pin": "752101"
        },
        {
            "id": 230410014,
            "cn": "RAGHI ENTERPRISES",
            "mn1": "",
            "gst": "07IMRPS8557P1ZG",
            "add": "",
            "ods": [
                "s30494",
                "s304257",
                "s304354",
                "s30896"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230410015,
            "cn": "Harsh Mehta",
            "mn1": "",
            "gst": "",
            "add": "Mehta newas, samrat chowk tatma toli, Purnea ,Bihar",
            "ods": [
                "s30498",
                "s304425",
                "s305344"
            ],
            "mn2": "8294297231",
            "pin": "854301"
        },
        {
            "id": 230410016,
            "cn": "Prakash",
            "mn1": "9176292112",
            "gst": "",
            "add": "Prakash Bharathi\n20,balaji nagar second avenue,\nNeelamangalam,\nGuduvanchery,\nChennai",
            "ods": [
                "s30499",
                "s304195"
            ],
            "mn2": "",
            "pin": "603202"
        },
        {
            "id": 230410017,
            "cn": "Pratiksha",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304100"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230410018,
            "cn": "Nayakapda.com",
            "mn1": "7698752012",
            "gst": "24BQMPR2427M1ZE",
            "add": "Wing- E,Shop No-09, Avas Yojna House, \nBalaji Agora City Centre,Nr. Ratri Bazar",
            "ods": [
                "s304101",
                "s304274",
                "s306646",
                "s308906",
                "s309390"
            ],
            "mn2": "8735045268",
            "pin": "390008"
        },
        {
            "id": 230411001,
            "cn": "Parv Jani",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304103",
                "s304151",
                "s304392"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230411002,
            "cn": "Gagandeep Singh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304107"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230411003,
            "cn": "Ashish",
            "mn1": "7742828090",
            "gst": "",
            "add": "shree gulab international\nplot no.55, hardev nagar 2, jairampura road, nindar, Jaipur, Rajasthan",
            "ods": [
                "s304108"
            ],
            "mn2": "7791928090",
            "pin": "302013"
        },
        {
            "id": 230411004,
            "cn": "dutshirt.com",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304113",
                "s304142",
                "s304188",
                "s304223"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230411005,
            "cn": "Swagshirts",
            "mn1": "9644371050",
            "gst": "",
            "add": "J7, gulmohar park, \nnear uslapur railway station.",
            "ods": [
                "s304118",
                "s304189",
                "s304401",
                "s305549",
                "s309282"
            ],
            "mn2": "9644199294",
            "pin": "495001"
        },
        {
            "id": 230411006,
            "cn": "Geever",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304119"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230411007,
            "cn": "TshArt World",
            "mn1": "",
            "gst": "07AARFT2448Q1Z9",
            "add": "",
            "ods": [
                "s304123",
                "s304310",
                "s304366",
                "s304487",
                "s304514",
                "s304551",
                "s305101",
                "s305271",
                "s305400",
                "s305496",
                "s305747",
                "s305948",
                "s306227",
                "s306452",
                "s306631",
                "s306816",
                "s30731",
                "s307411",
                "s307610",
                "s308352",
                "s308669",
                "s309112",
                "s309290"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230411008,
            "cn": "V Fashion",
            "mn1": "",
            "gst": "09FAHPK1039M1ZD",
            "add": "",
            "ods": [
                "s304125",
                "s304276"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230411009,
            "cn": "Harish Kumar",
            "mn1": "7986365526",
            "gst": "",
            "add": "C162 LIC colony mundi kharar \nKharar (mohali) punjab \nNear diamond public school",
            "ods": [
                "s304126"
            ],
            "mn2": "",
            "pin": "140301"
        },
        {
            "id": 230411010,
            "cn": "Rina Christy",
            "mn1": "9947114294",
            "gst": "",
            "add": "Mallappally west P.O.\nPathanamthitta, Kerala\nLandmark : Near YMCA Junction",
            "ods": [
                "s304131"
            ],
            "mn2": "8861199146",
            "pin": "689584"
        },
        {
            "id": 230411011,
            "cn": "Yoobbel",
            "mn1": "8249681293",
            "gst": "21AABCY4324K1ZH",
            "add": "House number-3, Lane Zero, Khandagiri Vihar, Khandagiri",
            "ods": [
                "s304132",
                "s305569",
                "s30716",
                "s307268",
                "s308787"
            ],
            "mn2": "",
            "pin": "751030"
        },
        {
            "id": 230411012,
            "cn": "Imran Ali",
            "mn1": "",
            "gst": "09ABYPI7824B1ZB",
            "add": "",
            "ods": [
                "s304134",
                "s305204"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230411013,
            "cn": "Shikhar",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304136"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230412001,
            "cn": "Ruthvik",
            "mn1": "8885075759",
            "gst": "",
            "add": "Plot no-46, road no -3, broadway venture, shantha biotech road, athvelly ,Medchal court road, Medchal",
            "ods": [
                "s304137",
                "s304247"
            ],
            "mn2": "7013475261",
            "pin": "501401"
        },
        {
            "id": 230412002,
            "cn": "Abhishekh Sahu",
            "mn1": "8005419272",
            "gst": "",
            "add": "13/A purani najhai bharat studio jhansi...",
            "ods": [
                "s304138",
                "s3056"
            ],
            "mn2": "",
            "pin": "284002"
        },
        {
            "id": 230412003,
            "cn": "Lakshay",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304139"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230412004,
            "cn": "Devaansh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304140",
                "s307321"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230412005,
            "cn": "Jacq",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304141",
                "s304183",
                "s30556",
                "s305525",
                "s305689",
                "s306108",
                "s306226"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230412006,
            "cn": "Yash",
            "mn1": "9501942492",
            "gst": "",
            "add": "House no. 114, Mukt enclave residents welfare society, Near bhakra canal, sangrur road, Patiala, Punjab",
            "ods": [
                "s304143"
            ],
            "mn2": "9115120302",
            "pin": "147001"
        },
        {
            "id": 230412007,
            "cn": "Deepankur",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304144"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230412008,
            "cn": "Miaz Lifestyle",
            "mn1": "",
            "gst": "07DHAPM6083H1Z7",
            "add": "",
            "ods": [
                "s304146",
                "s304208",
                "s304362",
                "s304457",
                "s304572",
                "s305225",
                "s305444",
                "s305550",
                "s305772",
                "s30658",
                "s306184",
                "s306554",
                "s306644",
                "s30775",
                "s307369",
                "s307906",
                "s308120",
                "s308581",
                "s308877",
                "s309116"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230412009,
            "cn": "Ray",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304148"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230412010,
            "cn": "Suvidha export",
            "mn1": "",
            "gst": "24AAUPU4813F1ZE",
            "add": "",
            "ods": [
                "s304150"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230412011,
            "cn": "Riya",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304152"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230412012,
            "cn": "Akumtoshi",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304155",
                "s304175"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230412013,
            "cn": "Karan",
            "mn1": "7455063931",
            "gst": "",
            "add": "Raghav Vihar Phase 5, SmithNagar, Premnagar, Dehradun",
            "ods": [
                "s304156",
                "s304168",
                "s304170",
                "s304338",
                "s304341",
                "s304375",
                "s304541",
                "s304610",
                "s305210",
                "s305663",
                "s309453"
            ],
            "mn2": "",
            "pin": "248007"
        },
        {
            "id": 230412014,
            "cn": "Om",
            "mn1": "9584574809",
            "gst": "",
            "add": "Manoj kumar near thapa sports wear kirar colony kampoo Gwalior",
            "ods": [
                "s304160",
                "s304174",
                "s304198"
            ],
            "mn2": "8962825570",
            "pin": "474001"
        },
        {
            "id": 230412015,
            "cn": "Ugen",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304161",
                "s304163",
                "s304488",
                "s305819",
                "s306587"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230412016,
            "cn": "Jai",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304162",
                "s304173"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230412017,
            "cn": "Syed",
            "mn1": "9542174160",
            "gst": "",
            "add": "Vijaynagar Colony\n10/2RT\nNear stanns high school",
            "ods": [
                "s304164",
                "s304172",
                "s305430",
                "s306241"
            ],
            "mn2": "",
            "pin": "500057"
        },
        {
            "id": 230412018,
            "cn": "Parag Trending Fashion",
            "mn1": "8600313825",
            "gst": "",
            "add": "Name- Leela Textile\n At.po-Parner, Taluka-Parner,Dist-Ahmednagar,Maharashtra,India",
            "ods": [
                "s304165",
                "s304171"
            ],
            "mn2": "",
            "pin": "414302"
        },
        {
            "id": 230412019,
            "cn": "Nidhi Flotataion",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304166",
                "s3087"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230412020,
            "cn": "Hemant Singh",
            "mn1": "+447862031265",
            "gst": "",
            "add": "Unit 1 Ground Floor, 6 Gough Rd, Leicester LE5 4AL, United Kingdom\nHemant Singh",
            "ods": [
                "s304176"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230412021,
            "cn": "VARESH",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304177",
                "s30531"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230413001,
            "cn": "Sirlobo",
            "mn1": "",
            "gst": "06ELYPR7093K1ZV",
            "add": "",
            "ods": [
                "s304180",
                "s304400",
                "s305133",
                "s305565",
                "s30669",
                "s306372",
                "s306564",
                "s306584",
                "s306665",
                "s3076",
                "s307562",
                "s308260",
                "s309108"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230413002,
            "cn": "Bechatur",
            "mn1": "7872034165",
            "gst": "",
            "add": "02,bechatur Office,near Kunor Post Offices,kaliyaganj\nNorth Dinajpur, West Bengal, India",
            "ods": [
                "s304181",
                "s304294",
                "s3058",
                "s305399",
                "s305989",
                "s306288",
                "s306660",
                "s306698",
                "s307203",
                "s307457",
                "s307759",
                "s307893",
                "s308293",
                "s308591",
                "s308820",
                "s308830",
                "s308907",
                "s308908",
                "s308914",
                "s3081066",
                "s309186",
                "s309286",
                "s309470"
            ],
            "mn2": "",
            "pin": "733129"
        },
        {
            "id": 230413003,
            "cn": "Epic content & Design LLP",
            "mn1": "",
            "gst": "07AAGFE9289H1ZX",
            "add": "",
            "ods": [
                "s304182",
                "s304205",
                "s305559",
                "s306221",
                "s306667",
                "s30759",
                "s30760",
                "s307177",
                "s307613",
                "s307615",
                "s307761",
                "s307767",
                "s307768",
                "s307769",
                "s307770",
                "s307771",
                "s307941",
                "s308929",
                "s30912",
                "s309144",
                "s309157"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230413004,
            "cn": "Anoop Singh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304186"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230413005,
            "cn": "Tarun Mandi",
            "mn1": "8918133501",
            "gst": "",
            "add": "Purba Pathri, Prembazar, Kharagpur\nP.O - Hijli co operative society \nNear - Sundar boys Club",
            "ods": [
                "s304187",
                "s305867",
                "s306340",
                "s306650",
                "s307342",
                "s307738"
            ],
            "mn2": "7319064219",
            "pin": "721306"
        },
        {
            "id": 230413006,
            "cn": "Shailesh",
            "mn1": "8828315598",
            "gst": "",
            "add": "Add:- r/n 5 Ganesh krupa chawl,devipada,near vitthal mandir,borivali (e),Mumbai",
            "ods": [
                "s304190",
                "s304484"
            ],
            "mn2": "7039376945",
            "pin": "400066"
        },
        {
            "id": 230413007,
            "cn": "GSG Clothing",
            "mn1": "",
            "gst": "09BRUPA9595C1Z7",
            "add": "",
            "ods": [
                "s304191"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230413008,
            "cn": "Aadi",
            "mn1": "7600107497",
            "gst": "",
            "add": "A-53, Dwarka nagar society, Nr Nobelnagar, Nana chiloda , Ahmedabad. ",
            "ods": [
                "s304192"
            ],
            "mn2": "7777997346",
            "pin": "382340"
        },
        {
            "id": 230413009,
            "cn": "Souvik",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304193",
                "s304498"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230413010,
            "cn": "Yash",
            "mn1": "9819616908",
            "gst": "",
            "add": "Yash. P. Ganedikar \n383/384, Rishabh Appartment, 38 floor, Dr Parikh Street, Besides Girgaon Court, Mumbai",
            "ods": [
                "s304197",
                "s305460",
                "s306165"
            ],
            "mn2": "",
            "pin": "400004"
        },
        {
            "id": 230413011,
            "cn": "Aquib",
            "mn1": "9554345213",
            "gst": "",
            "add": "Diladarnagar Fatehpur bazar \nChitarkoni madarsa pr \nGhazipur",
            "ods": [
                "s304201"
            ],
            "mn2": "",
            "pin": "232326"
        },
        {
            "id": 230414001,
            "cn": "MS Singh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304202"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230414002,
            "cn": "Ankur Printing",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304207",
                "s304243",
                "s30526",
                "s305263",
                "s305276",
                "s305310",
                "s305459",
                "s305526",
                "s305527",
                "s305586",
                "s305638",
                "s305992",
                "s30641",
                "s306168",
                "s306410",
                "s306778",
                "s306857",
                "s307248",
                "s308207",
                "s308611",
                "s308779",
                "s308810",
                "s3081012",
                "s3081079",
                "s309181",
                "s309400"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230414003,
            "cn": "The Baalams",
            "mn1": "8955966291",
            "gst": "",
            "add": "THE BAALAMS, Ajay Chowk inside Nagori Gate, Jodhpur (Rajasthan) (Sandeep Singh Khichi )",
            "ods": [
                "s304210"
            ],
            "mn2": "",
            "pin": "342001"
        },
        {
            "id": 230414004,
            "cn": "Banarasiya Textiles",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304213",
                "s304283",
                "s304368",
                "s304509",
                "s30567",
                "s305853",
                "s306815",
                "s30959"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230414005,
            "cn": "Chandan Jena",
            "mn1": "7055202202",
            "gst": "",
            "add": "House number 86, mahadevpuram, Near Shiv mandir, Mandawar road, Bijnor, Uttar Pradesh ",
            "ods": [
                "s304215"
            ],
            "mn2": "7895287442",
            "pin": "246701"
        },
        {
            "id": 230414006,
            "cn": "Manoj",
            "mn1": "",
            "gst": "27AEAPN4641J1ZG",
            "add": "",
            "ods": [
                "s304218",
                "s304342"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230414007,
            "cn": "Abdul",
            "mn1": "9515265344",
            "gst": "",
            "add": "1-6-226/4  Mohannagar Ramnagar, Martinet School Lane Mumtaz manzil 1 Floor Hyderabad",
            "ods": [
                "s304219"
            ],
            "mn2": "",
            "pin": "500020"
        },
        {
            "id": 230414008,
            "cn": "Rachit",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304220"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230415001,
            "cn": "Kirthi",
            "mn1": "9176529825",
            "gst": "",
            "add": "3rd Floor, Gold Sand, Ambalipura - Sarjapur Rd, Doddakannelli, Bengaluru, Karnataka",
            "ods": [
                "s304224",
                "s304251"
            ],
            "mn2": "",
            "pin": "560035"
        },
        {
            "id": 230415002,
            "cn": "Rathod",
            "mn1": "7874922255",
            "gst": "",
            "add": "15/b shaktinagar society, opposite experimental school, ambikaniketan, Parle point, surat\nVidhaan Fabrics Pvt Ltd",
            "ods": [
                "s304226",
                "s304250"
            ],
            "mn2": "",
            "pin": "395007"
        },
        {
            "id": 230415003,
            "cn": "Kushagra",
            "mn1": "9821347461",
            "gst": "",
            "add": "Kushagra Raj\nFlat no. 303, Pratyaksha Apartment.\nDevi Mandap road, Piska more.\nRatu Road, Ranchi\nJharkhand",
            "ods": [
                "s304228"
            ],
            "mn2": "8877887786",
            "pin": "834001"
        },
        {
            "id": 230415004,
            "cn": "Indrajeet Print",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304229",
                "s304535",
                "s305481",
                "s305593",
                "s306244",
                "s306541",
                "s30713",
                "s307560",
                "s307571",
                "s308266",
                "s308757",
                "s30987",
                "s309205"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230415005,
            "cn": "Teeshopper",
            "mn1": "8603407001",
            "gst": "20CKKPR1446K1Z2",
            "add": "Rose Villa Hostel, North Samaj Street,, Tharpakhna, Ranchi G.P.O, Ranchi, State & Code: Jharkhand",
            "ods": [
                "s304230",
                "s30530",
                "s306160",
                "s307412"
            ],
            "mn2": "",
            "pin": "834001"
        },
        {
            "id": 230415006,
            "cn": "BK Enterprise",
            "mn1": "9512489369",
            "gst": "24JMEPK4961D1Z1",
            "add": "Bhavyesh koladiya\n18/A, Dimond nagar, Gopal nagar main road, Joshipura, Junagadh",
            "ods": [
                "s304231",
                "s30538",
                "s30545",
                "s305182",
                "s305442",
                "s305600",
                "s305902",
                "s306178",
                "s306245",
                "s306407",
                "s306408",
                "s306640",
                "s306808",
                "s306850",
                "s307141",
                "s307228",
                "s307409",
                "s307543",
                "s307745"
            ],
            "mn2": "",
            "pin": "362001"
        },
        {
            "id": 230415007,
            "cn": "Khushi",
            "mn1": "9773478134",
            "gst": "",
            "add": "House no - plot no. 1320     swami vivekanand society\nLandmark -nr. GIL colony behind sardar bhavan",
            "ods": [
                "s304233"
            ],
            "mn2": "",
            "pin": "393002"
        },
        {
            "id": 230415008,
            "cn": "Bijay",
            "mn1": "9933885524",
            "gst": "19MXLPS1327N1ZH",
            "add": "Vill - Durganagar, town - Islampur State - West Bengal",
            "ods": [
                "s304234",
                "s304545",
                "s3081032",
                "s3081062"
            ],
            "mn2": "",
            "pin": "733202"
        },
        {
            "id": 230415009,
            "cn": "Ajay",
            "mn1": "9437719186",
            "gst": "",
            "add": "Canteen no.8 (Annoor dental college & hospital)\nOld Route No NH 49, perumattom, puthuppady\nMuvattupuzha, KERALA",
            "ods": [
                "s304235"
            ],
            "mn2": "",
            "pin": "686673"
        },
        {
            "id": 230415010,
            "cn": "Saurabh Katiyar ",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304237"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230415011,
            "cn": "Strong Soul Private Limited",
            "mn1": "",
            "gst": "09ABDCS7859N1ZD",
            "add": "",
            "ods": [
                "s304238",
                "s305262",
                "s305521",
                "s30655",
                "s306257",
                "s306354",
                "s306638",
                "s30733",
                "s30740",
                "s307117",
                "s307387",
                "s307749",
                "s308589",
                "s308596",
                "s3081044",
                "s30934",
                "s309356"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230415012,
            "cn": "Bilal UK",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304239"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230415013,
            "cn": "Indian Colour Labs",
            "mn1": "",
            "gst": "07BUXPK7540K1ZU",
            "add": "",
            "ods": [
                "s304240",
                "s307585",
                "s307593",
                "s308874"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230416001,
            "cn": "Aakash",
            "mn1": "8087157656",
            "gst": "",
            "add": "Sr no 14 Nhawale nagar handewadi road hadapasar pune",
            "ods": [
                "s304242",
                "s305814"
            ],
            "mn2": "",
            "pin": "412308"
        },
        {
            "id": 230416002,
            "cn": "Style.in",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304244"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230416003,
            "cn": "S. B Sports",
            "mn1": "7002573396",
            "gst": "",
            "add": "Shop name- S.B SPORTS \nulubari opps b.borooah college \nGuwahati\nAssam",
            "ods": [
                "s304245"
            ],
            "mn2": "",
            "pin": "781007"
        },
        {
            "id": 230416004,
            "cn": "Dipesh",
            "mn1": "9930758639",
            "gst": "",
            "add": "Yashwant Nagar, Kadam Chawl, Bandra East\nAli Yavar Jung Marg\nLandmark:- teacher's colony bandra East ridhi sidhi building",
            "ods": [
                "s304246"
            ],
            "mn2": "9769399958",
            "pin": "400051"
        },
        {
            "id": 230416005,
            "cn": "Altaf",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304248"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230416006,
            "cn": "Mrityunjay",
            "mn1": "6350304353",
            "gst": "",
            "add": "37, roopsagar colony, sirsi road, kanakpura, jaipur",
            "ods": [
                "s304249",
                "s306246"
            ],
            "mn2": "8233107894",
            "pin": "302012"
        },
        {
            "id": 230416007,
            "cn": "Dipesh Patil",
            "mn1": "7559216969",
            "gst": "",
            "add": "Ananta bhawan,above sanjeevani medical,\nShiwaji Maharaj chowk,kalher.bhiwandi",
            "ods": [
                "s304252",
                "s3081167",
                "s309392"
            ],
            "mn2": "",
            "pin": "421302"
        },
        {
            "id": 230417001,
            "cn": "Krazy Kameez",
            "mn1": "",
            "gst": "06DZRPM4379F1ZS",
            "add": "",
            "ods": [
                "s304254"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230417002,
            "cn": "EUNOIA GLOBAL MARKETING",
            "mn1": "",
            "gst": "06DZRPM4379F1ZS",
            "add": "",
            "ods": [
                "s304255",
                "s3061",
                "s307645",
                "s307821"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230417003,
            "cn": "Rahul Maurya",
            "mn1": "",
            "gst": "07DXZPM8086F1ZI",
            "add": "",
            "ods": [
                "s304266",
                "s305677"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230417004,
            "cn": "Vishakha",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304278"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230417005,
            "cn": "Scoopkart",
            "mn1": "",
            "gst": "07EBQPS9083A1Z4",
            "add": "",
            "ods": [
                "s304280",
                "s304292",
                "s304597",
                "s305563",
                "s305988",
                "s306849",
                "s308316"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230417006,
            "cn": "Fab gabru",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304284",
                "s304396",
                "s305523",
                "s305908",
                "s308900"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230418001,
            "cn": "Arjun",
            "mn1": "9554757468",
            "gst": "",
            "add": "House of ginija, kapoorthala  chauraha, aliganj , Lucknow , uttar pradesh",
            "ods": [
                "s304295",
                "s307687"
            ],
            "mn2": "7860172259",
            "pin": "226024"
        },
        {
            "id": 230418002,
            "cn": "Darkbuck",
            "mn1": "",
            "gst": "09BJOPC3723N1ZU",
            "add": "",
            "ods": [
                "s304296",
                "s305438",
                "s305585",
                "s306281",
                "s30758",
                "s307590",
                "s308261",
                "s308378"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230418003,
            "cn": "Green Bird Traders",
            "mn1": "",
            "gst": "07JCHPK1956D1ZI",
            "add": "",
            "ods": [
                "s304303",
                "s305123",
                "s305274",
                "s305606",
                "s305914",
                "s306234",
                "s306424",
                "s306628",
                "s30749",
                "s307476",
                "s308183",
                "s308551",
                "s308761",
                "s308989",
                "s30969"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230418004,
            "cn": "Kumarbunbun",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304322"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230418005,
            "cn": "Partho Daimary",
            "mn1": "9864536660",
            "gst": "",
            "add": "House no. 04, Narakasur kahilipara, bali ram teron path, Near narakasur high school,\n(E}\nGuwahati, Assam",
            "ods": [
                "s304446",
                "s304466",
                "s305587",
                "s307875",
                "s308459"
            ],
            "mn2": "",
            "pin": "781019"
        },
        {
            "id": 230418006,
            "cn": "Raj Manjhi",
            "mn1": "7980165231",
            "gst": "",
            "add": "11/2 Christopher road\nCity: -kolkata \nState: - west bengal \nMoLand Mark: - TODOSHOP.IN",
            "ods": [
                "s304506",
                "s305445"
            ],
            "mn2": "",
            "pin": "700046"
        },
        {
            "id": 230418007,
            "cn": "Panacea Enterprise",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304309",
                "s305518",
                "s305561",
                "s305615",
                "s305895",
                "s306351",
                "s306619",
                "s308656",
                "s308658",
                "s308979",
                "s308982",
                "s3081068",
                "s309492"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230418008,
            "cn": "Ankit",
            "mn1": "8989716173",
            "gst": "",
            "add": "E8 /98  ishwar nagar \nGulmohar colony \nBhopal \nMadhya Pradesh",
            "ods": [
                "s304311"
            ],
            "mn2": "",
            "pin": "462039"
        },
        {
            "id": 230418009,
            "cn": "Ronit",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304391",
                "s30565"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230418014,
            "cn": "Deepu",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304328",
                "s304584",
                "s308473"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230419004,
            "cn": "Harshit",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30546"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230420001,
            "cn": "The Stoned Baker",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305131"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230420005,
            "cn": "ReliX Apparels and Printing",
            "mn1": "8014410026",
            "gst": "15BFSPL7333B1ZG",
            "add": "Ramhlun South , Near Ramhlun South Baptist Church ",
            "ods": [
                "s304360",
                "s309129"
            ],
            "mn2": "",
            "pin": "796012"
        },
        {
            "id": 230420008,
            "cn": "Bilal Ahmad",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304369",
                "s304404",
                "s30574",
                "s305365",
                "s305588",
                "s305822",
                "s305964",
                "s306346"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230420009,
            "cn": "DigiTech Computer",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304415",
                "s304415",
                "s304486",
                "s304486"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230420011,
            "cn": "Voylla Screens",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304373"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230420012,
            "cn": "Stepway",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304376",
                "s304477"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230421002,
            "cn": "MG TRADERS",
            "mn1": "",
            "gst": "09CZIPM5632D2Z9",
            "add": "",
            "ods": [
                "s304381",
                "s305916",
                "s305936"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230421003,
            "cn": "Kanishk Veer Singh",
            "mn1": "7009275194",
            "gst": "36BKHPN6000M1Z1",
            "add": "flat 202,SriVenkatramana\ncomplex, Durga nagar colon, Raj Bhavan Road,\nSomajiguda, Hyderabad,Hyderabad,",
            "ods": [
                "s304382",
                "s305250",
                "s305435",
                "s305452",
                "s305604",
                "s305705",
                "s305879",
                "s306242",
                "s306291",
                "s306710",
                "s306845",
                "s307144"
            ],
            "mn2": "",
            "pin": "500082"
        },
        {
            "id": 230421005,
            "cn": "Deeksha",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304387",
                "s30571"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230421006,
            "cn": "Pahxstore",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304395"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230422006,
            "cn": "Seas Connection",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304419",
                "s304460"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230422007,
            "cn": "Suchi",
            "mn1": "9417925227",
            "gst": "",
            "add": "Siyaira Solutions \nHouse No 250 sector 19 A Chandigarh \nLandmark: Near sector 19 Dispensary",
            "ods": [
                "s304420",
                "s304439",
                "s304489",
                "s305319",
                "s307674",
                "s308273",
                "s3081039"
            ],
            "mn2": "8553700008",
            "pin": "160019"
        },
        {
            "id": 230422013,
            "cn": "Tsepak",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304429",
                "s305298",
                "s305595",
                "s305726",
                "s306292",
                "s30727",
                "s307105",
                "s308164"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230423001,
            "cn": "Shriyansh",
            "mn1": "7384366931",
            "gst": "",
            "add": "WestBengal Birpara Newline Near mobile tower",
            "ods": [
                "s304434"
            ],
            "mn2": "",
            "pin": "735204"
        },
        {
            "id": 230423004,
            "cn": "Mohd Saif",
            "mn1": "7905581778",
            "gst": "",
            "add": "252/152, Nehru cross, rakabganj, Lucknow",
            "ods": [
                "s304437",
                "s304437"
            ],
            "mn2": "",
            "pin": "226004"
        },
        {
            "id": 230424001,
            "cn": "Koushikd",
            "mn1": "8100408424",
            "gst": "",
            "add": "74/B,Kaibarta Para,Baidyabati, Dist-Hooghly, Post office Name - Baidyabati",
            "ods": [
                "s304449",
                "s30566"
            ],
            "mn2": "",
            "pin": "712222"
        },
        {
            "id": 230424002,
            "cn": "Sanki Monkey",
            "mn1": "",
            "gst": "07DVUPD0654K3Z5",
            "add": "",
            "ods": [
                "s304452",
                "s30576",
                "s305238",
                "s305467",
                "s305589",
                "s305750",
                "s306333",
                "s306338",
                "s306555",
                "s306610",
                "s306871",
                "s307299",
                "s307592",
                "s307852",
                "s308631"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230424004,
            "cn": "MEKANSHI INDIA PRIVATE LIMITED",
            "mn1": "",
            "gst": "06AAQCM0676H1Z6",
            "add": "",
            "ods": [
                "s304467",
                "s306489",
                "s306773",
                "s307699",
                "s307916",
                "s30877",
                "s308743",
                "s309132",
                "s309227"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230424005,
            "cn": "Dibakar",
            "mn1": "8335095898",
            "gst": "",
            "add": "582 Sodepure Brick Field Road Kolkata, Near Dakhinpara Club\nP.O. Haridevpur",
            "ods": [
                "s304468",
                "s305516",
                "s308878"
            ],
            "mn2": "8697094515",
            "pin": "700082"
        },
        {
            "id": 230424006,
            "cn": "Tashtam Events Pvt. Ltd.",
            "mn1": "",
            "gst": "06AAICT5519J1Z2",
            "add": "",
            "ods": [
                "s304470",
                "s30582",
                "s305716",
                "s306262"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230424007,
            "cn": "Om",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304471",
                "s304471",
                "s304471",
                "s304471"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230424008,
            "cn": "Aqib",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304472"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230425003,
            "cn": "Hatke Design",
            "mn1": "",
            "gst": "06ASDPT3495K1Z6",
            "add": "",
            "ods": [
                "s304482",
                "s30521",
                "s305160",
                "s305283",
                "s305379",
                "s305686",
                "s305858",
                "s30697",
                "s306671",
                "s307398",
                "s307478",
                "s307693",
                "s307871",
                "s307955",
                "s308335",
                "s308365",
                "s308380",
                "s308727",
                "s3081016",
                "s309364"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230425004,
            "cn": "Mohan Sai",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304483",
                "s304483"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230425007,
            "cn": "Twentees Apparel",
            "mn1": "",
            "gst": "07AASFT9601L1ZH",
            "add": "",
            "ods": [
                "s304493",
                "s305374",
                "s305431",
                "s305484",
                "s306231",
                "s306548",
                "s307908",
                "s308650",
                "s309410"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230425008,
            "cn": "COMFORT CLUB",
            "mn1": "9935311204",
            "gst": "09EMOPK3534D1ZX",
            "add": "Saurabh katiyar \nAaraji no. 677 plot no. 4 Patel vihar jarauli phase-2 kanpur nagar",
            "ods": [
                "s304496",
                "s305872"
            ],
            "mn2": "9140952677",
            "pin": "208027"
        },
        {
            "id": 230425009,
            "cn": "Sairaj",
            "mn1": "8356977816",
            "gst": "",
            "add": "103 siddhivinayak apt ganesh mandir, mv road Andheri East Maharashtra Mumbai",
            "ods": [
                "s304618",
                "s30598",
                "s306123",
                "s306358",
                "s3081075"
            ],
            "mn2": "9372535025",
            "pin": "400069"
        },
        {
            "id": 230425010,
            "cn": "Arun",
            "mn1": "9844608886",
            "gst": "",
            "add": "Flat 404, SJR Residency , 480, Adarsh Palm Retreat, Bellandur, Bengaluru, Karnataka",
            "ods": [
                "s304499",
                "s305694"
            ],
            "mn2": "9148881933",
            "pin": "560103"
        },
        {
            "id": 230425011,
            "cn": "Parijatha",
            "mn1": "",
            "gst": "24DLHPG7047C1ZD",
            "add": "",
            "ods": [
                "s304504"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230426001,
            "cn": "PARIJATHA FASHION",
            "mn1": "",
            "gst": "24DLHPG7047C1ZD",
            "add": "",
            "ods": [
                "s304507",
                "s307240"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230426003,
            "cn": "Davidson",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304511"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230426006,
            "cn": "Vishal Pawar",
            "mn1": "6204500637",
            "gst": "",
            "add": "Ravi kr Sharma\nAmla Tola Near SBI Bank Katihar Bihar ",
            "ods": [
                "s304520",
                "s305428"
            ],
            "mn2": "",
            "pin": "854105"
        },
        {
            "id": 230426008,
            "cn": "R.M. Collection",
            "mn1": "8209035453",
            "gst": "08FDRPM9818K2ZH",
            "add": "294 , tripolia bazar main road, Rajasthan , jaipur",
            "ods": [
                "s304523",
                "s305299"
            ],
            "mn2": "",
            "pin": "302002"
        },
        {
            "id": 230426010,
            "cn": "Royal Sales",
            "mn1": "",
            "gst": "06GMXPS8332C1ZG",
            "add": "",
            "ods": [
                "s304525",
                "s305181",
                "s305325",
                "s30661",
                "s306585",
                "s306674",
                "s30853",
                "s3081164",
                "s309155"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230426012,
            "cn": "Tenzin",
            "mn1": "9632866805",
            "gst": "",
            "add": "Digitalowl\nHouse no 41,\nOld camp 4th, bylakuppe,\nLandmark - golden temple",
            "ods": [
                "s304527",
                "s308561",
                "s309284"
            ],
            "mn2": "9869355555",
            "pin": "571104"
        },
        {
            "id": 230426013,
            "cn": "NEW NICE LOOK KIDS WEAR",
            "mn1": "9888380121",
            "gst": "03DJMPA7452J1Z6",
            "add": "Main market. St. No. 11\n6th crossing, \n( NICE LOOK KIDS )\nAbohar. Punjab",
            "ods": [
                "s304528",
                "s306715",
                "s307546",
                "s307882",
                "s308488"
            ],
            "mn2": "",
            "pin": "152116"
        },
        {
            "id": 230426015,
            "cn": "Rahul",
            "mn1": "8402816328",
            "gst": "",
            "add": "Assam, Naharkatia near BGM mart\nDist - Dibrugarh",
            "ods": [
                "s304532"
            ],
            "mn2": "9954223727",
            "pin": "786610"
        },
        {
            "id": 230427001,
            "cn": "EPHERIWALA",
            "mn1": "",
            "gst": "19DGTPP6860B1ZT",
            "add": "",
            "ods": [
                "s304536"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230427004,
            "cn": "Encore Fashion",
            "mn1": "8077700123",
            "gst": "09AJCPV4166F1ZY",
            "add": "A-65/1 Vaishali colony, garh road , Meerut city, Merrut, Meerut, Uttar Pradesh",
            "ods": [
                "s304546"
            ],
            "mn2": "",
            "pin": "250003"
        },
        {
            "id": 230427005,
            "cn": "Shri Ambe Saaree Centre",
            "mn1": "9802632119",
            "gst": "09BURPM7501E1ZE",
            "add": "SSB Road, U.P sonauli nepal border",
            "ods": [
                "s304547"
            ],
            "mn2": "8853585588",
            "pin": ""
        },
        {
            "id": 230427006,
            "cn": "TeeCloud",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304548",
                "s306496"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230427008,
            "cn": "Kartik Yadav",
            "mn1": "7988246324",
            "gst": "",
            "add": "kartik Yadav, aadarsh colony, mahendergarh.\nHaryana",
            "ods": [
                "s304550",
                "s304616",
                "s305932"
            ],
            "mn2": "",
            "pin": "123029"
        },
        {
            "id": 230428001,
            "cn": "CRAFT ENVISION",
            "mn1": "8877318890",
            "gst": "10CJLPK7311L3Z7",
            "add": "S/O-BHARAT MAHTO, C/O-ARUN KUMAR, PLOT NO-205,\nPAAL BHAWAN, MEHARPAR, Bihar Sharif, Nalanda, Bihar",
            "ods": [
                "s304562",
                "s307345",
                "s308610"
            ],
            "mn2": "6203307303",
            "pin": "803101"
        },
        {
            "id": 230428002,
            "cn": "SJS Enterprises",
            "mn1": "7008216287",
            "gst": "21CDUPD4583J1Z9",
            "add": "CDA sector-6 , plot D/1054,\nMarket Nagar",
            "ods": [
                "s304563",
                "s304570",
                "s308853"
            ],
            "mn2": "",
            "pin": "753014"
        },
        {
            "id": 230428005,
            "cn": "Potel Srinivas Yadav",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304574"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230428007,
            "cn": "NVZN",
            "mn1": "7985102867",
            "gst": "09AAVFN0690E1ZW",
            "add": "Vijay Shree crescent 2nd floor CP-69, Viraj Khand, Lucknow, Gomti Nagar, 226010",
            "ods": [
                "s305774"
            ],
            "mn2": "",
            "pin": "226010"
        },
        {
            "id": 230428009,
            "cn": "Vipul",
            "mn1": "8329891073",
            "gst": "",
            "add": "Gat no-79,Plot no.4B,near shardashram school,Kolhe Nagar west,Jalgaon, Maharashtra",
            "ods": [
                "s305229",
                "s308134",
                "s309223"
            ],
            "mn2": "7385043245",
            "pin": "425001"
        },
        {
            "id": 230428012,
            "cn": "FAST PRINT",
            "mn1": "8918903316",
            "gst": "20CPFPK7074G1Z1",
            "add": "Pasha Colony, Near Johra Mosque, Khunti, Jharkhand",
            "ods": [],
            "mn2": "8809812486",
            "pin": "835210"
        },
        {
            "id": 230428014,
            "cn": "Raja",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304589"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230429003,
            "cn": "Om Kumar",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304600"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230429005,
            "cn": "Averfaux",
            "mn1": "",
            "gst": "09ACBFA6337R1ZU",
            "add": "",
            "ods": [
                "s304603",
                "s309368"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230429006,
            "cn": "Sisir",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304605"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230429007,
            "cn": "Suraj",
            "mn1": "8286062869",
            "gst": "",
            "add": "Hemant Society, NSS Road, Asalpha Village, Ghatkopar West, Mumbai",
            "ods": [
                "s304606",
                "s30584",
                "s305402",
                "s307123",
                "s309425"
            ],
            "mn2": "",
            "pin": "400084"
        },
        {
            "id": 230430001,
            "cn": "Fashion Bazar",
            "mn1": "7877477488",
            "gst": "08GFJPK6411M1Z0",
            "add": "3/371 Malviya Nagar",
            "ods": [
                "s304609",
                "s305165",
                "s308455"
            ],
            "mn2": "",
            "pin": "302017"
        },
        {
            "id": 230430002,
            "cn": "Treasure Dynasty",
            "mn1": "",
            "gst": "07DOMPA4623C1ZC",
            "add": "",
            "ods": [
                "s304611",
                "s30575",
                "s305419",
                "s305571"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230430003,
            "cn": "Flashonline.in",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304612"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230430004,
            "cn": "Flash Online",
            "mn1": "",
            "gst": "07AAJPH0851M1ZL",
            "add": "",
            "ods": [
                "s304613"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230430006,
            "cn": "Pankhuri",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s304615"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230501004,
            "cn": "Rohan Das",
            "mn1": "9101075655",
            "gst": "18GUWPD4147M1ZT",
            "add": "Raja Ali road shayama pally,\nNear k.v school",
            "ods": [
                "s3055",
                "s307838",
                "s308836"
            ],
            "mn2": "",
            "pin": "786125"
        },
        {
            "id": 230501006,
            "cn": "TCS Venture",
            "mn1": "8409481184",
            "gst": "20GFFPP2085J1ZD",
            "add": "1st Floor Kamal Gange Building Opposite Apex Classes Near Susi Pizza Tongritoli, Harmu, Ranchi, Jharkhand",
            "ods": [
                "s3059",
                "s306417",
                "s306861"
            ],
            "mn2": "",
            "pin": "834002"
        },
        {
            "id": 230501007,
            "cn": "Harsh Raj",
            "mn1": "7257957857",
            "gst": "",
            "add": "Block 33 Flat 33/303\nVbhc vaibhava apartment \nChandapura Anekal Road\nByagadadhenahalli",
            "ods": [
                "s30510"
            ],
            "mn2": "8757374368",
            "pin": "562106"
        },
        {
            "id": 230501008,
            "cn": "Mahaveer Enterprises",
            "mn1": "8077013290",
            "gst": "09CIHPJ7426E1Z6",
            "add": "10/79A GUDHAI MANDI, TAJ GANJ AGRA\n",
            "ods": [
                "s30511",
                "s30588",
                "s305738",
                "s306426",
                "s307865",
                "s308724"
            ],
            "mn2": "",
            "pin": "282001"
        },
        {
            "id": 230501010,
            "cn": "S B Sports",
            "mn1": "",
            "gst": "18BTMPA9584K1ZY",
            "add": "",
            "ods": [
                "s305145"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230501012,
            "cn": "Panaeca",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30518",
                "s306398",
                "s306609",
                "s307205",
                "s307301",
                "s307485",
                "s307533",
                "s307775"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230501015,
            "cn": "Sample",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305149",
                "s306202",
                "s306203",
                "s306268",
                "s306393",
                "s306421",
                "s306432",
                "s306445",
                "s306525",
                "s306732",
                "s306734",
                "s306735",
                "s306737",
                "s306738",
                "s306739",
                "s306740",
                "s306760",
                "s306789",
                "s306835",
                "s306836",
                "s306837",
                "s306838",
                "s306881",
                "s307120",
                "s307126",
                "s307127",
                "s307147",
                "s307161",
                "s307280",
                "s307282",
                "s307386",
                "s307510",
                "s307512",
                "s307513",
                "s307654",
                "s307655",
                "s307792",
                "s307793",
                "s307794",
                "s307969",
                "s307970",
                "s307971",
                "s30874",
                "s308240",
                "s308257",
                "s308276",
                "s308409",
                "s308431",
                "s308750",
                "s308818",
                "s308947",
                "s308993",
                "s3081043",
                "s30999",
                "s309305",
                "s309306",
                "s309467",
                "s309468",
                "s309469"
            ],
            "mn2": "",
            "pin": "282001"
        },
        {
            "id": 230501016,
            "cn": "Aman Hosiery",
            "mn1": "",
            "gst": "07DXVPM2602D1ZG",
            "add": "",
            "ods": [
                "s30527"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230502007,
            "cn": "Mukund",
            "mn1": "9748629571",
            "gst": "",
            "add": "GF 1 Mukund, 6/1/3 QUEENS PARK,\nBehind Birla Mandir",
            "ods": [
                "s305313",
                "s307289"
            ],
            "mn2": "",
            "pin": "700019"
        },
        {
            "id": 230502009,
            "cn": "THE WHOOP MART",
            "mn1": "9867923184",
            "gst": "08AIVPB5397C1ZY",
            "add": "Delivery address - \n\nThe Whoop Mart, \n340/10 , Gali No. 2 ,\nSunder Vilas , Ajmer\nRajasthan",
            "ods": [
                "s30551",
                "s308614"
            ],
            "mn2": "7014651028",
            "pin": "305001"
        },
        {
            "id": 230502014,
            "cn": "Maid",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30558"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230503001,
            "cn": "Ntsenlokhing",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30568"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230503002,
            "cn": "NITVI FASHIONS",
            "mn1": "",
            "gst": "07BJCPJ2694F1Z8",
            "add": "",
            "ods": [
                "s30570",
                "s306677"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230503003,
            "cn": "Snug24 Fashion Private Limited",
            "mn1": "",
            "gst": "09ABICS2343E1ZE",
            "add": "",
            "ods": [
                "s30572",
                "s306551",
                "s307202",
                "s307410",
                "s307598",
                "s30817",
                "s308319",
                "s308622"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230503004,
            "cn": "Kanish",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30573"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230503006,
            "cn": "Zayn Royal",
            "mn1": "6281705931",
            "gst": "",
            "add": "22-2-760/3 Gulshan e Abbas, Opposite to Getwell Clinic, NoorKhan Bazar",
            "ods": [
                "s30579"
            ],
            "mn2": "",
            "pin": "500024"
        },
        {
            "id": 230503007,
            "cn": "Boni",
            "mn1": "9669177439",
            "gst": "",
            "add": "Bhawana patnaik\n Q.no. N.E. 109, C.S.E.B COLONY, kosabadi korba(East)\nChhattisgarh.",
            "ods": [
                "s30581",
                "s305242"
            ],
            "mn2": "",
            "pin": "495677"
        },
        {
            "id": 230503012,
            "cn": "Cal",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30594"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230504002,
            "cn": "Nurul",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305111",
                "s309446"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230504003,
            "cn": "LAVANYA SPORTS WEAR",
            "mn1": "7892565948",
            "gst": "29AYZPL5393A1ZS",
            "add": "NO. 8/3, 4TH MAIN ROAD, PADARAYANAPURA, BANGALORE 560026",
            "ods": [
                "s305272",
                "s305372",
                "s306280"
            ],
            "mn2": "",
            "pin": "560026"
        },
        {
            "id": 230504004,
            "cn": "Kaybee",
            "mn1": "8937948917",
            "gst": "",
            "add": "Strugart \nC/ 0 moti bhawan Vivekananda colony\nNear NCC office\nJakhni bin Pithoragarh",
            "ods": [
                "s305116",
                "s305240",
                "s306323",
                "s30737",
                "s308206",
                "s308707",
                "s308940"
            ],
            "mn2": "7451933016",
            "pin": "262501"
        },
        {
            "id": 230504005,
            "cn": "Nivaan spices pvt ltd",
            "mn1": "8080615019",
            "gst": "27AAHCN0836H1ZG",
            "add": "678/9, Krishna Kunj, Shri Krishna Colony No.2, Kokane Nagar, Kalewadi, Pimpri, Pune",
            "ods": [
                "s305285"
            ],
            "mn2": "",
            "pin": "411017"
        },
        {
            "id": 230505002,
            "cn": "Swaglok",
            "mn1": "",
            "gst": "18AEHFS6206F1Z0",
            "add": "",
            "ods": [
                "s305132",
                "s305256"
            ],
            "mn2": "",
            "pin": "781021"
        },
        {
            "id": 230505005,
            "cn": "Indian Conifer",
            "mn1": "",
            "gst": "09BGLPB6789D1Z2",
            "add": "",
            "ods": [
                "s305146",
                "s30665",
                "s306810",
                "s308384",
                "s309259",
                "s309338"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230505006,
            "cn": "D DADDY CLOTHING",
            "mn1": "9058212112",
            "gst": "",
            "add": "Shop no. 23 , Sec - 12A Satyam Complex, Avas Vikas colony, Opposite of Bhawna Clarks inn, Sikandra Agra",
            "ods": [
                "s305147",
                "s305261",
                "s305529",
                "s305574",
                "s305629",
                "s305793",
                "s305849",
                "s306321",
                "s306562",
                "s306673",
                "s306799",
                "s307641",
                "s308478",
                "s308959"
            ],
            "mn2": "9528739816",
            "pin": "282002"
        },
        {
            "id": 230505007,
            "cn": "WeebToon",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305150"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230506005,
            "cn": "The Fine Print",
            "mn1": "7628830819",
            "gst": "",
            "add": "Chumren Patton\nSB-19, the fine print\nSupermarket Dimapur, Nagaland",
            "ods": [
                "s305157",
                "s306559"
            ],
            "mn2": "",
            "pin": "797112"
        },
        {
            "id": 230506008,
            "cn": "Dei Lusso",
            "mn1": "",
            "gst": "07DBKPK9464C1ZE",
            "add": "",
            "ods": [
                "s305162"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230506014,
            "cn": "R G MUSICS",
            "mn1": "",
            "gst": "06AAMFR2074B1ZF",
            "add": "",
            "ods": [
                "s305183",
                "s305355",
                "s306388",
                "s306464",
                "s306754",
                "s307551",
                "s307678",
                "s307841",
                "s307942",
                "s308271",
                "s308735",
                "s3081033"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230506016,
            "cn": "PASSIONEST",
            "mn1": "9851773505",
            "gst": "",
            "add": "Tamanna Parvin Humaipur eidgah P.O - Abdalpur PS - Madhyamgram Kolkata Humaipur Near Eidgah\nBADU GANGANAGAR, WEST BENGAL",
            "ods": [
                "s305192",
                "s307703"
            ],
            "mn2": "9903007666",
            "pin": "700155"
        },
        {
            "id": 230508002,
            "cn": "Suraj Rajendra",
            "mn1": "8999984575",
            "gst": "",
            "add": "Suraj Rajendrasingh Bhadoria\nJorethang road, HP petrol pump, below seventh sense restaurant, Namchi, South Sikkim,",
            "ods": [
                "s305214",
                "s307291"
            ],
            "mn2": "7385911506",
            "pin": "737126"
        },
        {
            "id": 230508003,
            "cn": "Dkhar",
            "mn1": "7005860251",
            "gst": "",
            "add": "Pynyoowanmi Dkhar\nShadap Cottage\nHouse No. L/A 019, \nLower Area, Nongrim Hills, Shillong \nMEGHALAYA",
            "ods": [
                "s305215",
                "s306440",
                "s306601"
            ],
            "mn2": "",
            "pin": "793003"
        },
        {
            "id": 230508005,
            "cn": "FeelQ Recordings",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305218"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230508006,
            "cn": "Tushar",
            "mn1": "9172426229",
            "gst": "",
            "add": "chintamanji vanjari jetvan society  ,khamla nagpur\n\n\n\n\nContact no. =",
            "ods": [
                "s305219"
            ],
            "mn2": "9545678549",
            "pin": "440025"
        },
        {
            "id": 230508007,
            "cn": "Mansrang",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305221"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230508008,
            "cn": "Indira Vyas",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305223"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230508009,
            "cn": "Saakar",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305228",
                "s306232"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230508010,
            "cn": "Ngodup",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305230",
                "s30693"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230508011,
            "cn": "B unique",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305232"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230509003,
            "cn": "Buddyelements Global",
            "mn1": "",
            "gst": "07BOAPT0884C1Z0",
            "add": "",
            "ods": [
                "s305253",
                "s305971"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230509005,
            "cn": "Ranjan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305259"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230509006,
            "cn": "Shubham",
            "mn1": "9307432487",
            "gst": "",
            "add": "Shubham Somnath Khandeparker \nThal ,shiroda,ponda,Goa \nState:Goa\nCity:ponda\nLandmark: Near kamaxi temple ",
            "ods": [
                "s305260",
                "s305804",
                "s30940"
            ],
            "mn2": "",
            "pin": "403103"
        },
        {
            "id": 230509011,
            "cn": "Madhav",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305284",
                "s305665"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230509012,
            "cn": "kkkkkk",
            "mn1": "",
            "gst": "07BBNPG0866M2Z7",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230509013,
            "cn": "Shiva",
            "mn1": "5",
            "gst": "",
            "add": "H",
            "ods": [
                "s305288",
                "s306520"
            ],
            "mn2": "",
            "pin": "500010"
        },
        {
            "id": 230510004,
            "cn": "AB Traders",
            "mn1": "",
            "gst": "",
            "add": "Thimphu Bhutan",
            "ods": [
                "s305294"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230510007,
            "cn": "Nasir",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305302"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230510008,
            "cn": "Liv Fashion",
            "mn1": "",
            "gst": "07BSUPP4069F1Z5",
            "add": "",
            "ods": [
                "s305303",
                "s305343",
                "s305924",
                "s306411",
                "s306436",
                "s306549"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230510015,
            "cn": "Printgenie Apparels & Products Pvt Ltd",
            "mn1": "8125837407",
            "gst": "36AANCP5221E1ZI",
            "add": "Printgenie Apparels & Products Pvt Ltd\nF No 333 , 3rd Floor , Chandralok Complex\nParadise Circle , Secunderabad \nSecunderabad Telangana\nIndia",
            "ods": [
                "s305317",
                "s306298"
            ],
            "mn2": "",
            "pin": "500009"
        },
        {
            "id": 230511007,
            "cn": "Naveen",
            "mn1": "9003288955",
            "gst": "33BTQPN9105B2ZQ",
            "add": "kutty story kidswear\n101/1 m c road 1st floor\noldwashermenpet\nchennai",
            "ods": [
                "s305330",
                "s307776"
            ],
            "mn2": "",
            "pin": "600021"
        },
        {
            "id": 230511016,
            "cn": "DIRECTOR IISERB",
            "mn1": "",
            "gst": "",
            "add": "Bhauri bhopal, madhyapradesh 462066.",
            "ods": [
                "s305345"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230512002,
            "cn": "Hawk & Vind",
            "mn1": "",
            "gst": "07BVMPP5365H1Z2",
            "add": "",
            "ods": [
                "s305360",
                "s305704"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230512004,
            "cn": "KIARAANSH MARINERS STUDIO PRIVATE LIMITED",
            "mn1": "",
            "gst": "05AAICK4635L1ZA",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230512006,
            "cn": "The Blu Sapphire",
            "mn1": "9900927104",
            "gst": "29ATPPP9426M1ZL",
            "add": "405, Team Heritage, 3363A/1, 13th main, 2nd cross. H.A.L 2nd stage, Indiranagar Bengaluru",
            "ods": [
                "s305377"
            ],
            "mn2": "9900935526",
            "pin": "560008"
        },
        {
            "id": 230512010,
            "cn": "Poonam",
            "mn1": "",
            "gst": "07EUEPP1512C1Z2",
            "add": "",
            "ods": [
                "s305389"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230512013,
            "cn": "The aukurban company",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305396",
                "s306110"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230513012,
            "cn": "Vasanth",
            "mn1": "6305460603",
            "gst": "",
            "add": "Srinivasa enclave\nPlot no.540/8, Phase 6, Forum Mall Circle, Kukatpally, Hyderabad, Telangana",
            "ods": [
                "s305425",
                "s305670",
                "s305717"
            ],
            "mn2": "",
            "pin": "500072"
        },
        {
            "id": 230514003,
            "cn": "Vipin",
            "mn1": "9421375677",
            "gst": "",
            "add": "H.No 93/B Deulwada, Sancordem, Dharbandora Goa,",
            "ods": [
                "s305432",
                "s305486"
            ],
            "mn2": "",
            "pin": "403406"
        },
        {
            "id": 230515001,
            "cn": "Ankush",
            "mn1": "9903204663",
            "gst": "",
            "add": "Ankush Sarkar\n\"Prativalaya\", Kalyan Nagar, Khardah\n24 PGS (N)\nP.O. Via Pansila\nKolkata\nWest Bengal",
            "ods": [],
            "mn2": "",
            "pin": "700112"
        },
        {
            "id": 230515002,
            "cn": "Sudhira",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305439"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230515003,
            "cn": "Air Fighter",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230515004,
            "cn": "Sahil",
            "mn1": "7206734328",
            "gst": "",
            "add": "477-L MODEL TOWN , Yamuna Nagar, Haryana",
            "ods": [
                "s305458",
                "s305657",
                "s30656",
                "s306669"
            ],
            "mn2": "9355998485",
            "pin": "135001"
        },
        {
            "id": 230515005,
            "cn": "Ranti",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230515006,
            "cn": "Kartik",
            "mn1": "8551913836",
            "gst": "",
            "add": "746/47 Guruwar Peth, Breaking Bread Cafe, Bhau Mansaram Naik Apartment, Pune",
            "ods": [],
            "mn2": "9623859181",
            "pin": "411042"
        },
        {
            "id": 230515007,
            "cn": "Vivek Jariwala",
            "mn1": "8780720783",
            "gst": "",
            "add": "2/4404-A, chhapghar street,near old Mahavir hospital, sagrampura Surat  ",
            "ods": [
                "s305464"
            ],
            "mn2": "8200991547",
            "pin": "395002"
        },
        {
            "id": 230515008,
            "cn": "Ayush",
            "mn1": "7407944933",
            "gst": "",
            "add": "Chowdhary Udyog (near - Hindustan Tyre)\n# 45- Sri Rama Krishna\nSarani, Opp. Sri Rama krishan Vivekanand Society, Ward No. 41\nJyoti Nagar, Siliguri\nDist - Darjeeling\nWest Bengal",
            "ods": [
                "s305497"
            ],
            "mn2": "",
            "pin": "734001"
        },
        {
            "id": 230515009,
            "cn": "Anurag",
            "mn1": "9359299898",
            "gst": "",
            "add": "Near Old Bus Stand, Wai Bazar ,Tq Mahur, Dist Nanded State Maharashtra",
            "ods": [
                "s305491"
            ],
            "mn2": "",
            "pin": "431721"
        },
        {
            "id": 230515010,
            "cn": "PHOENIX DESIGNS & PRINTING SOLUTIONS",
            "mn1": "",
            "gst": "07AAKPM7102P1ZB",
            "add": "",
            "ods": [
                "s305470",
                "s305609",
                "s307170",
                "s307795",
                "s308343",
                "s308883",
                "s3081086",
                "s3097"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230516001,
            "cn": "Onkar singh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230516002,
            "cn": "Hopex",
            "mn1": "6200575415",
            "gst": "10PJPPS9498D1Z9",
            "add": "HOPEX, mahavir asthan kuraich ,near kisan madhya vidhyalya SASARAM BIHAR ,",
            "ods": [
                "s305478",
                "s307632"
            ],
            "mn2": "",
            "pin": "821115"
        },
        {
            "id": 230516003,
            "cn": "Sharda industrial",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230516004,
            "cn": "Sai Jadi",
            "mn1": "7989491810",
            "gst": "",
            "add": "House name :- Bommarillu \nFlat No:336.\nArea:- Siddhi Vinayak Nagar,\nHitech City, Madhapur, Hyderabad ",
            "ods": [],
            "mn2": "8143022133",
            "pin": "500081"
        },
        {
            "id": 230516005,
            "cn": "Jimit Mistry",
            "mn1": "8780976745",
            "gst": "",
            "add": "E03 sharnam homes ,visnagar road, Manav ashram crossroad , Mehsana",
            "ods": [],
            "mn2": "",
            "pin": "384001"
        },
        {
            "id": 230516006,
            "cn": "Gulshan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305531"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230516007,
            "cn": "Abhimanyu",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230516008,
            "cn": "Jatin",
            "mn1": "9587797990",
            "gst": "",
            "add": "Jp circle bhankrota jaipur, neer sagar market",
            "ods": [
                "s305487"
            ],
            "mn2": "",
            "pin": "302026"
        },
        {
            "id": 230516009,
            "cn": "Subarna",
            "mn1": "7003822516",
            "gst": "",
            "add": "121/79,Ramani Stores, Malancha welfare society, MG Road, Thakurpukur, Kolkata\n(Near Eden Brookside)",
            "ods": [],
            "mn2": "9004758601",
            "pin": "700104"
        },
        {
            "id": 230516010,
            "cn": "Sanket",
            "mn1": "7992255430",
            "gst": "",
            "add": "sanket kindo\nAddress: New shantipur, bye pass road, near dibadih bridge, dibadih, DORANDA, Ranchi-2",
            "ods": [],
            "mn2": "9570186240",
            "pin": "834002"
        },
        {
            "id": 230516011,
            "cn": "Vamsi",
            "mn1": "7995779677",
            "gst": "",
            "add": "P.Jyothsna\nFlat no: 402\nPuttys Udyana Niketa appartment\nAPGO's Colony\nHafeezpet\nHyderabad Telangana",
            "ods": [],
            "mn2": "9615266666",
            "pin": "500049"
        },
        {
            "id": 230516012,
            "cn": "Jugal",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230516013,
            "cn": "Pawanomics",
            "mn1": "",
            "gst": "06FVVPP6544R1Z7",
            "add": "",
            "ods": [
                "s305506"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230516014,
            "cn": "Sweeti",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230516015,
            "cn": "Mr Lal",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305508"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230516016,
            "cn": "Aquib",
            "mn1": "",
            "gst": "",
            "add": "Jammu and Kashmir",
            "ods": [
                "s305510",
                "s306625",
                "s307804"
            ],
            "mn2": "",
            "pin": "190015"
        },
        {
            "id": 230517001,
            "cn": "Label",
            "mn1": "9414032646",
            "gst": "08CALPG5455Q1ZY",
            "add": "147, mohan nagar Hindaun city (Karauli) Rajasthan",
            "ods": [
                "s305513",
                "s305577",
                "s307813",
                "s309326"
            ],
            "mn2": "",
            "pin": "322230"
        },
        {
            "id": 230517002,
            "cn": "Shubham",
            "mn1": "8668373663",
            "gst": "",
            "add": "Shubham Kukreja\nVilla 32, Springville, VGP Layout, \nKudlu, Banglore",
            "ods": [
                "s306103"
            ],
            "mn2": "",
            "pin": "560068"
        },
        {
            "id": 230517003,
            "cn": "Lable Priti",
            "mn1": "9414032646",
            "gst": "08CALPG5455Q1ZY",
            "add": "Priti gupta\n147, mohan nagar Hindaun city (Karauli) Rajasthan",
            "ods": [],
            "mn2": "",
            "pin": "322230"
        },
        {
            "id": 230517004,
            "cn": "Groneed Automation",
            "mn1": "9931148222",
            "gst": "",
            "add": "C/o : Gulab Kumar yadav\nMaa Durga apartment B block karandih E1\nNear petrol pump \nJamshedpur Jharkhand",
            "ods": [
                "s305519"
            ],
            "mn2": "",
            "pin": "831002"
        },
        {
            "id": 230517005,
            "cn": "Aconovax",
            "mn1": "8340793754",
            "gst": "",
            "add": " Rohit Kumar Rawani \n Barora Near Durga Mandir ,po- Nawagarh, ps- Barora, Dist- Dhanbad \nCity-Dhanbad\nState- Jharkhand",
            "ods": [
                "s305520"
            ],
            "mn2": "7870593221",
            "pin": "828306"
        },
        {
            "id": 230517006,
            "cn": "Priyanka Rangari",
            "mn1": "9595118295",
            "gst": "27CMOPM0488A2ZX",
            "add": "302, Anupama Geet Mala Apartment, Jagrut Nagar, Nagpur, Maharashtra",
            "ods": [
                "s305668"
            ],
            "mn2": "",
            "pin": "440014"
        },
        {
            "id": 230517007,
            "cn": "Phibanseng",
            "mn1": "9774971404",
            "gst": "",
            "add": "Aisha guest house, khliehshnong sohra,\nEast Khasi hills  ",
            "ods": [
                "s305524",
                "s308710",
                "s3081170",
                "s309443"
            ],
            "mn2": "6909365651",
            "pin": "793108"
        },
        {
            "id": 230517008,
            "cn": "KG Printer",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230517009,
            "cn": "Hoodie Haul",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230517010,
            "cn": "Ishmeet Enterpises",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305673"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230517011,
            "cn": "Aastha",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305534",
                "s306389"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230517012,
            "cn": "Mandeep",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305535",
                "s306182",
                "s308522"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230517013,
            "cn": "Vivek Rana",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305536",
                "s306352",
                "s306395",
                "s308232",
                "s309180"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230517014,
            "cn": "Rahul",
            "mn1": "8101528902",
            "gst": "",
            "add": "Sumiran Pradhan\nKaziman Pradhan Road, Methibari, Salbari, Siliguri \nLandmark Behind Union Bank, Salbari",
            "ods": [],
            "mn2": "",
            "pin": "734009"
        },
        {
            "id": 230517015,
            "cn": "Fashion Trends",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305539",
                "s305972",
                "s307504",
                "s30982"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230517016,
            "cn": "Tox-chic city",
            "mn1": "7059408839",
            "gst": "19AATFT0491P1Z5",
            "add": "9, b simla street near bharat gas building Kolkata 700006",
            "ods": [
                "s305540",
                "s306425"
            ],
            "mn2": "",
            "pin": "700006"
        },
        {
            "id": 230517017,
            "cn": "Santosh",
            "mn1": "",
            "gst": "07NXAPS1468A1ZD",
            "add": "",
            "ods": [
                "s305541",
                "s306115",
                "s306145",
                "s306278",
                "s306600"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230517018,
            "cn": "Virendra Singh",
            "mn1": "8849030549",
            "gst": "",
            "add": "C-320 mansarovar society  near shree residency godadara Surat gujarat",
            "ods": [],
            "mn2": "8780253032",
            "pin": "395010"
        },
        {
            "id": 230517019,
            "cn": "Hara Creation",
            "mn1": "9387599990",
            "gst": "24AOJPP6820J1ZP",
            "add": "Gate -3, B/38 parulnagar society, bhuyangdev cross roads, opp shiv shakti chavana mart, ghatlodia",
            "ods": [
                "s305725",
                "s306462",
                "s306666",
                "s306682",
                "s307339",
                "s308666"
            ],
            "mn2": "",
            "pin": "380061"
        },
        {
            "id": 230517020,
            "cn": "Iqbal",
            "mn1": "7000502830",
            "gst": "",
            "add": "Md Iqbal\nBrand sale bus stand baikunthpur Chhattisgarh",
            "ods": [],
            "mn2": "",
            "pin": "497335"
        },
        {
            "id": 230518001,
            "cn": "Joao",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230518002,
            "cn": "Zerro",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230518003,
            "cn": "Happy Goods",
            "mn1": "",
            "gst": "03AFGPH1153N1ZN",
            "add": "H No 304 Bombay Nagar, Khurla Kingra, Wadala Road, Jalandhar  Punjab",
            "ods": [],
            "mn2": "",
            "pin": "144003"
        },
        {
            "id": 230518004,
            "cn": "Unknown",
            "mn1": "8668355173",
            "gst": "",
            "add": "Ayush Dumanwar,\n8C-702, Mahindra Bloomdale, Mihan, Nagpur\nMaharashtra,India",
            "ods": [],
            "mn2": "8421455173",
            "pin": "441108"
        },
        {
            "id": 230518005,
            "cn": "Shreejeet",
            "mn1": "9995273323",
            "gst": "",
            "add": "Sreejith P Neelambaran\n\"Keerthanam\"\nNear Aayur Shoppe\nPuduppariyaram Pazhaya Panjayathu, Palakkad",
            "ods": [],
            "mn2": "9048079765",
            "pin": "678731"
        },
        {
            "id": 230518006,
            "cn": "Moumit",
            "mn1": "2",
            "gst": "",
            "add": "H",
            "ods": [
                "s306399"
            ],
            "mn2": "",
            "pin": "721653"
        },
        {
            "id": 230518007,
            "cn": "Thread Zero Enterprises",
            "mn1": "9343261116",
            "gst": "23CIVPP5708H1ZT",
            "add": "CRUNK THREAD 81/1, WARD NO. 14,\nBEHIND RAJENDRA TALKIES SHAHDOL",
            "ods": [
                "s305558",
                "s305575",
                "s305836",
                "s30611",
                "s308603"
            ],
            "mn2": "7018449744",
            "pin": "484001"
        },
        {
            "id": 230518008,
            "cn": "Arsh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230518009,
            "cn": "Fahida",
            "mn1": "9745430369",
            "gst": "",
            "add": "Claab\n Claab house Munnunirath Azhikod kannur",
            "ods": [],
            "mn2": "",
            "pin": "670009"
        },
        {
            "id": 230518010,
            "cn": "Tuhin",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230518011,
            "cn": "Yogya Fight Club",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230518012,
            "cn": "Arbaz Khan",
            "mn1": "9518852203",
            "gst": "",
            "add": "Delberto Ecom Pvt ltd \nG 214 sector 63 noida",
            "ods": [
                "s308229"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230518013,
            "cn": "Himanshu Ratra",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305572"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230518014,
            "cn": "Rajvalia",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230519001,
            "cn": "Kai",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306173"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230519002,
            "cn": "Rajkumar",
            "mn1": "9024009032",
            "gst": "",
            "add": "C-10 indrapuri, vidhayak nagar, behind IBS Hospital, Lalkothi, Jaipur, Rajasthan",
            "ods": [
                "s305582"
            ],
            "mn2": "",
            "pin": "302015"
        },
        {
            "id": 230519003,
            "cn": "Pratik",
            "mn1": "8866563373",
            "gst": "",
            "add": "A/ 29 galaxy coral , vastral, Ahmedabad",
            "ods": [],
            "mn2": "",
            "pin": "382418"
        },
        {
            "id": 230519004,
            "cn": "Wishtees",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305584"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230519005,
            "cn": "Flying Weapon",
            "mn1": "7903818350",
            "gst": "",
            "add": "Syed Wagar Hassan Hassan Manzil Shia Colony Alamg anj Ghera, Near Sarvodaya Sainik school Pamna Bihar, ",
            "ods": [
                "s305590"
            ],
            "mn2": "",
            "pin": "800007"
        },
        {
            "id": 230519006,
            "cn": "INSTA PRINTS & ADVERTISERS",
            "mn1": "",
            "gst": "06AFTPY8187Q1ZT",
            "add": "",
            "ods": [
                "s306416",
                "s309435"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230519007,
            "cn": "Ayan",
            "mn1": "8399966439",
            "gst": "",
            "add": "H no - 17, minhaz path, sijubari, hatigaon, dispur, Guwahati, Assam",
            "ods": [
                "s305592",
                "s309304"
            ],
            "mn2": "",
            "pin": "781038"
        },
        {
            "id": 230519008,
            "cn": "Ayush",
            "mn1": "8085190552",
            "gst": "",
            "add": "8/6 Pragati Nagar , Nanakheda , Ujjain , Madhya Pradesh,",
            "ods": [],
            "mn2": "",
            "pin": "456010"
        },
        {
            "id": 230519009,
            "cn": "Suranjan",
            "mn1": "9874097623",
            "gst": "",
            "add": "c/o- Subrata Jana, Sudharani Bhaban, Village- Basudevpur, Hazramore, p.o- Khanjanchak, p.s- Durgachak, Dist. - East Midnapur., Hazramore, Haldia., Aateswari Mandir. (Sudharani Bhaban), Haldia, West Bengal",
            "ods": [
                "s305599"
            ],
            "mn2": "7001074402",
            "pin": "721602"
        },
        {
            "id": 230519010,
            "cn": "Mantraksh",
            "mn1": "9129966694",
            "gst": "",
            "add": "313/14 khun khun ji road chowk lucknow \n226003\nShah mantraksh agarwal",
            "ods": [
                "s305601"
            ],
            "mn2": "",
            "pin": "226003"
        },
        {
            "id": 230519011,
            "cn": "Saurav",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305602"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230519012,
            "cn": "M/S The Men",
            "mn1": "",
            "gst": "10JLWPS8644Q1ZR",
            "add": "",
            "ods": [
                "s305603",
                "s305951"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230519013,
            "cn": "Ali Saif Khan",
            "mn1": "9307382889",
            "gst": "",
            "add": "510/193-ka, ground floor, \nSuraj bali marg, New Hyderabad.\nLucknow.",
            "ods": [
                "s306364"
            ],
            "mn2": "",
            "pin": "226007"
        },
        {
            "id": 230519014,
            "cn": "Warehouse India",
            "mn1": "",
            "gst": "19CCZPB6663F1Z1",
            "add": "",
            "ods": [
                "s306157"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230519015,
            "cn": "Sachin Kumar",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230519016,
            "cn": "Shipping and Logistics",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305610"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230519017,
            "cn": "Haryanwe.com",
            "mn1": "9996737394",
            "gst": "06CPKPP3841P1Z7",
            "add": "Haryanwe Clothing,\nGali No 1, Ground Floor,Opp .Sadar Thana, Sukhpura, Rohtak, Rohtak,\nHaryana,",
            "ods": [
                "s305938"
            ],
            "mn2": "7015480465",
            "pin": "124001"
        },
        {
            "id": 230519018,
            "cn": "Ashwin",
            "mn1": "8248916357",
            "gst": "",
            "add": "Ashwin K\nNo. 18/24 thandava murthy st.\nRoyapuram\nLandmark: opp to Amman Kovil \nChenna",
            "ods": [],
            "mn2": "9840734440",
            "pin": "600013"
        },
        {
            "id": 230519019,
            "cn": "Amaan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230519020,
            "cn": "Soloman",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230520001,
            "cn": "Digital Sky",
            "mn1": "8757779609",
            "gst": "",
            "add": "Rambagh Driver Tola Purnea BIHAR, Landmark :- Near Railway Corrsing",
            "ods": [
                "s306441"
            ],
            "mn2": "9523182093",
            "pin": "854301"
        },
        {
            "id": 230520002,
            "cn": "100ping India",
            "mn1": "",
            "gst": "06AQYPC7995A2ZD",
            "add": "",
            "ods": [
                "s308302",
                "s308668"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230520003,
            "cn": "Speediox.in",
            "mn1": "9635341467",
            "gst": "",
            "add": "Aishal Kujur Opeka\n Beside Vyas Godrej Furniture,4/2 Sananda Apartment,Upper Chelidanga, Asansol-713304\nWest Bengal",
            "ods": [
                "s305622"
            ],
            "mn2": "8101921255",
            "pin": ""
        },
        {
            "id": 230520004,
            "cn": "Manav",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230520005,
            "cn": "Godownmy",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305625",
                "s305784",
                "s305797",
                "s305860",
                "s305904",
                "s306150",
                "s306151",
                "s306254",
                "s306804"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230520006,
            "cn": "Mohak",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230520007,
            "cn": "Ravi",
            "mn1": "7529961446",
            "gst": "",
            "add": "A-3, Street-6, Shastri Nagar, Ajabpur Kalan, Dehradun, Uttarakhand",
            "ods": [],
            "mn2": "",
            "pin": "248001"
        },
        {
            "id": 230520008,
            "cn": "Sanchit Jain",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305635",
                "s305792",
                "s306622",
                "s307341",
                "s307666"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230520009,
            "cn": "Pratham",
            "mn1": "9990398668",
            "gst": "",
            "add": "63, type 3, Jal vihar Colony, Lajpat nagar, New Delhi ",
            "ods": [],
            "mn2": "",
            "pin": "110024"
        },
        {
            "id": 230520010,
            "cn": "Akshay",
            "mn1": "7974718054",
            "gst": "",
            "add": "house no 21 E-6, arera colony near kanishk jwellers, bhopal",
            "ods": [
                "s305956",
                "s307315"
            ],
            "mn2": "7869500755",
            "pin": "462016"
        },
        {
            "id": 230520011,
            "cn": "Kalyan",
            "mn1": "7869148339",
            "gst": "",
            "add": "Address:\nKalyan Jyoti Kalita\nF-027, ICVS Hall\nIISER Kolkata, Near AIIMS Kalyani, Mohanpur, West Bengal",
            "ods": [],
            "mn2": "9704681481",
            "pin": "741246"
        },
        {
            "id": 230520012,
            "cn": "Sanjay",
            "mn1": "6383672431",
            "gst": "",
            "add": "11/15 bharathi nagar 8th street thirumullaivoyal chennai",
            "ods": [],
            "mn2": "",
            "pin": "600062"
        },
        {
            "id": 230521001,
            "cn": "Umar",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230521002,
            "cn": "Chirag",
            "mn1": "8780974528",
            "gst": "",
            "add": "6039, tankli faliya, behind jolly enclave,I.h.road,surat City: surat State: Gujarat Landmark: Bombay market Surat_Punagam_D (Gujarat)",
            "ods": [
                "s305674"
            ],
            "mn2": "",
            "pin": "395010"
        },
        {
            "id": 230521003,
            "cn": "Verma",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230521004,
            "cn": "Ayan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305655"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230521005,
            "cn": "Amin",
            "mn1": "9986334862",
            "gst": "",
            "add": "Amin Manjrekar,TF-2,Leo Poojitha Apartments,3rd Main,VV Mohalla,MYSORE",
            "ods": [],
            "mn2": "",
            "pin": "570002"
        },
        {
            "id": 230521006,
            "cn": "Tanmany",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230521007,
            "cn": "Trendophia",
            "mn1": "",
            "gst": "06CQXPA6682B1ZN",
            "add": "",
            "ods": [
                "s305652",
                "s30627",
                "s306287",
                "s306420",
                "s306500",
                "s306753",
                "s30776",
                "s307539",
                "s308196",
                "s3081008"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230521008,
            "cn": "Meg",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230521009,
            "cn": "Reet",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230521010,
            "cn": "Ipsita",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230522001,
            "cn": "Rajni",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230522002,
            "cn": "Ananth",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230522003,
            "cn": "HFD Collections",
            "mn1": "",
            "gst": "09AMZPG2515K1ZK",
            "add": "",
            "ods": [
                "s30683"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230522004,
            "cn": "Robin",
            "mn1": "9779581087",
            "gst": "",
            "add": "House no/Shop no - 520/3 Sita Nagar\nLandmark - Adjoining Cuckoo Studio \nCity- Ludhiana \nState- Punjab ",
            "ods": [],
            "mn2": "",
            "pin": "141001"
        },
        {
            "id": 230522005,
            "cn": "Kartik Suthar",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230522006,
            "cn": "Signature Style",
            "mn1": "7006060116",
            "gst": "",
            "add": "Name: Signature Style\nAddress: Court Road Magam, Budgam, jammu and kashmir.",
            "ods": [
                "s305678",
                "s30714"
            ],
            "mn2": "",
            "pin": "193401"
        },
        {
            "id": 230522007,
            "cn": "Retro Togs",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305682",
                "s308790"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230522008,
            "cn": "Anita",
            "mn1": "6353810421",
            "gst": "",
            "add": "13,14 kevalnagar near krushna kunj 2,\nnear dwarka nagari Bapod Waghodia Road",
            "ods": [
                "s308972"
            ],
            "mn2": "",
            "pin": "390019"
        },
        {
            "id": 230522009,
            "cn": "Danish",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305684"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230522010,
            "cn": "Sayantan",
            "mn1": "2",
            "gst": "",
            "add": "Y",
            "ods": [
                "s305685",
                "s306413"
            ],
            "mn2": "",
            "pin": "700045"
        },
        {
            "id": 230522011,
            "cn": "Mohit Sharma",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305688",
                "s307296",
                "s308125",
                "s309190"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230522012,
            "cn": "Martin Victor",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305695"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230522013,
            "cn": "Arth",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230522014,
            "cn": "Ghani",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230522015,
            "cn": "Sathyan",
            "mn1": "9150176431",
            "gst": "",
            "add": "Sathyan\n59/10g Kuppusamy street, Shevapet, Salem . Tamil nadu",
            "ods": [
                "s30639"
            ],
            "mn2": "",
            "pin": "636002"
        },
        {
            "id": 230523001,
            "cn": "Vikas",
            "mn1": "7982364876",
            "gst": "",
            "add": "A-70, NANHEY PARK, BINDAPUR ROAD UTTAM NAGAR- Delhi",
            "ods": [],
            "mn2": "8368016734",
            "pin": "110059"
        },
        {
            "id": 230523002,
            "cn": "Morganzee",
            "mn1": "9939967886",
            "gst": "",
            "add": "*Delivery Address* \n\nName - Anand Nayak\nCompany - Morganzee\nVivek Nagar, Near Gua Thana\nGua, West Singhbhum, Jharkhand",
            "ods": [
                "s306661"
            ],
            "mn2": "",
            "pin": "833213"
        },
        {
            "id": 230523003,
            "cn": "Uday",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230523004,
            "cn": "Shreyansh",
            "mn1": "7013022896",
            "gst": "",
            "add": "10-2-348, Vidyanagar, Karimnagar, Telangana state",
            "ods": [
                "s305719",
                "s307701",
                "s307950"
            ],
            "mn2": "",
            "pin": "505001"
        },
        {
            "id": 230523005,
            "cn": "Threadly",
            "mn1": "7023545658",
            "gst": "33AASFT9090M1Z9",
            "add": "OTAKU CLUB\nGAUTAM DANGWAL\nVIBHUTI SCHOOL UNIFORMS, CHOWK NO.3 KOTI, ATHOURWALA\nDehradun\nUttarakhand",
            "ods": [
                "s305720",
                "s308126",
                "s3081018"
            ],
            "mn2": "",
            "pin": "248145"
        },
        {
            "id": 230523006,
            "cn": "Tamal",
            "mn1": "7278113787",
            "gst": "",
            "add": "Shop name - Neon\nAdress- 145, S.c.m.road, poddarghat, Baidyabati, Hooghly,",
            "ods": [
                "s306658",
                "s308353"
            ],
            "mn2": "8240457670",
            "pin": "712222"
        },
        {
            "id": 230523007,
            "cn": "Arbaaz",
            "mn1": "7020908712",
            "gst": "",
            "add": "1411/32C ARADI CANDOLIM NORTH GOA",
            "ods": [
                "s306179"
            ],
            "mn2": "",
            "pin": "403515"
        },
        {
            "id": 230523008,
            "cn": "Shade Seven Apparel",
            "mn1": "7222999242",
            "gst": "23DZYPR3064K4ZI",
            "add": "F-1, Rabs Height, Beside sheela talkies compound, South civil lines, Jabalpur ",
            "ods": [
                "s3064",
                "s306384",
                "s308918"
            ],
            "mn2": "",
            "pin": "482002"
        },
        {
            "id": 230523009,
            "cn": "Anmol",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230523010,
            "cn": "Eshan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305728"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230523011,
            "cn": "Aditya",
            "mn1": "9758956019",
            "gst": "",
            "add": "House no. 33\nNew ganga enclave\nMission Road Roorkee\nLandmark Near salar hospital\nRoorkee, dist haridwar uttarakhand",
            "ods": [
                "s305852"
            ],
            "mn2": "9837586600",
            "pin": "247667"
        },
        {
            "id": 230523012,
            "cn": "Deepanjan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230524001,
            "cn": "Sapna",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230524002,
            "cn": "Mohsin",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230524003,
            "cn": "VASTRA CLOTHING",
            "mn1": "",
            "gst": "03MJTPS2771L1Z8",
            "add": "",
            "ods": [
                "s305739",
                "s306300",
                "s306514",
                "s308564"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230524004,
            "cn": "Nirav",
            "mn1": "8140007982",
            "gst": "",
            "add": "Adress:-A-6,nimit bunglows opposite koli samajvadi maroli,umbhrat road. Navsari",
            "ods": [],
            "mn2": "",
            "pin": "396436"
        },
        {
            "id": 230524005,
            "cn": "Akbarali Abbas",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230524006,
            "cn": "Divyansh",
            "mn1": "9001218166",
            "gst": "",
            "add": "Kishore karwani\nViewsonic Fitness\n93/86 \nVijay Path Mansarovar \nJaipur",
            "ods": [],
            "mn2": "",
            "pin": "302020"
        },
        {
            "id": 230524007,
            "cn": "Yash Maheshwari",
            "mn1": "7417149969",
            "gst": "",
            "add": "S356 shivalik nagar \nNear city guest house Haridwar  Uttarakhand",
            "ods": [],
            "mn2": "",
            "pin": "249403"
        },
        {
            "id": 230524008,
            "cn": "Priya Electronics and Electricals",
            "mn1": "9045778331",
            "gst": "09LSPPS9568F1ZF",
            "add": "Building 00\nLodhi market lodhi nagar chauraha\nFatehganj west Bareilly",
            "ods": [
                "s309297"
            ],
            "mn2": "",
            "pin": "243501"
        },
        {
            "id": 230524009,
            "cn": "ZAYAA - THE APPAREL STORE",
            "mn1": "9021965165",
            "gst": "27HWEPM3043J1ZB",
            "add": "Flat no 8 Ganraj sankul appartment near Narottam bhavan Panchvati karanja Nashik\nLandmark Near godavari river",
            "ods": [
                "s306191",
                "s307733",
                "s307734",
                "s307735",
                "s307736",
                "s308181"
            ],
            "mn2": "9309091286",
            "pin": "422003"
        },
        {
            "id": 230524010,
            "cn": "Krishna Handa",
            "mn1": "7889231531",
            "gst": "03ABFPH7184N1ZD",
            "add": "HANDA STORE\nCINEMA ROAD \nBATALA\nPUNJAB",
            "ods": [
                "s305783",
                "s306390"
            ],
            "mn2": "",
            "pin": "143505"
        },
        {
            "id": 230524011,
            "cn": "Punay Singh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305763",
                "s305826"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230524012,
            "cn": "Roshan",
            "mn1": "9660091033",
            "gst": "",
            "add": "Flat No. L-1217, Vardhaman Swapanlok, Jhotwara Jaipur\nLandmark: Nagal Pulia crossing, 200ft",
            "ods": [
                "s306195",
                "s306215"
            ],
            "mn2": "",
            "pin": "302012"
        },
        {
            "id": 230525001,
            "cn": "Hasan Abbas",
            "mn1": "8010661553",
            "gst": "",
            "add": "Flat no 402, zayboon apartment lane no 2\nBetal nagar, near namra masjid kondwa khrud\nPUNE, MAHARASHTRA‬",
            "ods": [],
            "mn2": "",
            "pin": "411048"
        },
        {
            "id": 230525002,
            "cn": "Atul",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230525003,
            "cn": "FLAYA",
            "mn1": "",
            "gst": "09FRSPS7061H1ZW",
            "add": "",
            "ods": [
                "s305773"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230525004,
            "cn": "Aryan",
            "mn1": "9109938840",
            "gst": "",
            "add": "1416 saraswati colony cherital jabalpur ( madhya pradesh )",
            "ods": [],
            "mn2": "9893240340",
            "pin": "482002"
        },
        {
            "id": 230525005,
            "cn": "Brand Outlet",
            "mn1": "7595828185",
            "gst": "19EGFPP8449K1ZI",
            "add": "E9 Canal south road chingrighata basundhara , south 24 paragnas",
            "ods": [
                "s305779"
            ],
            "mn2": "",
            "pin": "700105"
        },
        {
            "id": 230525006,
            "cn": "Gaurav",
            "mn1": "7009699653",
            "gst": "",
            "add": "Anant Gupta\n775, Block 60, THDC COLONY, Dehrakhas, Dehradun",
            "ods": [
                "s305816"
            ],
            "mn2": "",
            "pin": "248001"
        },
        {
            "id": 230525007,
            "cn": "Fashion Bee",
            "mn1": "",
            "gst": "06CFZPM3235B1ZD",
            "add": "",
            "ods": [
                "s305786",
                "s308121"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230525008,
            "cn": "Dhruv",
            "mn1": "8264380367",
            "gst": "",
            "add": "5521/2 modern housing complex manimajra chandigarh",
            "ods": [],
            "mn2": "",
            "pin": "160101"
        },
        {
            "id": 230525009,
            "cn": "Najib",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305795",
                "s307741",
                "s307766"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230525010,
            "cn": "Jerry",
            "mn1": "8838600010",
            "gst": "",
            "add": "GERALD PRAVEEN. R\nNO : 3/25 PALANIAPPA NAGAR 4TH STREET, MADHAVARAM, \nTHAPALPETTI, \nCHENNAI",
            "ods": [],
            "mn2": "9566114594",
            "pin": "600060"
        },
        {
            "id": 230525011,
            "cn": "Suchita",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230526001,
            "cn": "Kishu",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230526002,
            "cn": "Angshuman",
            "mn1": "7002163403",
            "gst": "",
            "add": "adress- Tapan nagar ward no 5 ,near namghar (ujjawala home), Golaghat, Assam",
            "ods": [],
            "mn2": "",
            "pin": "785621"
        },
        {
            "id": 230526003,
            "cn": "Abhishekh",
            "mn1": "6398096375",
            "gst": "",
            "add": "Indian institute of carpet technology chauri road indrameel Bhadohi",
            "ods": [
                "s306691"
            ],
            "mn2": "",
            "pin": "221409"
        },
        {
            "id": 230526004,
            "cn": "Paramnoor Singh",
            "mn1": "9518498085",
            "gst": "",
            "add": "House number 69 \nSalwan road \nDera phulla singh\nAssandh ",
            "ods": [
                "s305815",
                "s307465"
            ],
            "mn2": "7495082989",
            "pin": "132039"
        },
        {
            "id": 230526005,
            "cn": "Krit Kumar",
            "mn1": "",
            "gst": "07GCGPK0062L2ZH",
            "add": "",
            "ods": [
                "s306163",
                "s306676",
                "s307217",
                "s308541",
                "s308965"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230526006,
            "cn": "Ishank",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30657"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230526007,
            "cn": "Westlers",
            "mn1": "9875648084",
            "gst": "",
            "add": "31R rai charan ghosh lane kolkata-\nLandmark Topsia (shifa palace) ",
            "ods": [
                "s306561"
            ],
            "mn2": "8479939229",
            "pin": "700039"
        },
        {
            "id": 230526008,
            "cn": "Kishoo",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230527001,
            "cn": "Fawaz",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306216"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230527002,
            "cn": "Dipak",
            "mn1": "7877477488",
            "gst": "",
            "add": "\n3/371 malviya nagar jaipur Rajasthan",
            "ods": [],
            "mn2": "",
            "pin": "302017"
        },
        {
            "id": 230527003,
            "cn": "Jawad",
            "mn1": "8618237158",
            "gst": "",
            "add": "Jeevanpur Mohalla, Near Khizar Masjid, Channapatna, Ramanagar Dist, Bangalore",
            "ods": [],
            "mn2": "8095986150",
            "pin": "562160"
        },
        {
            "id": 230527004,
            "cn": "Omprasanvi",
            "mn1": "7900052381",
            "gst": "",
            "add": "118 Golfadevi Temple  Near Sai Temple Worli Koliwada  Mumbai",
            "ods": [
                "s306387",
                "s307647",
                "s307952"
            ],
            "mn2": "9967761991",
            "pin": "400030"
        },
        {
            "id": 230527005,
            "cn": "Atharva",
            "mn1": "9353833793",
            "gst": "",
            "add": " Aman Bhosale\nCCB No.32, Bhagyanagar 1st Cross, Belagavi",
            "ods": [
                "s30753"
            ],
            "mn2": "",
            "pin": "590006"
        },
        {
            "id": 230527006,
            "cn": "Mihit",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230527007,
            "cn": "Jagdambh Enterprices",
            "mn1": "",
            "gst": "07NKCPS3922N1ZF",
            "add": "",
            "ods": [
                "s305947",
                "s305927"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230527008,
            "cn": "Hasan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s3066"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230527009,
            "cn": "KARTIK DIGITAL PRINTS",
            "mn1": "",
            "gst": "06AAOFK2229B1ZN",
            "add": "",
            "ods": [
                "s305844",
                "s307209"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230527010,
            "cn": "Ishrat",
            "mn1": "9838078243",
            "gst": "",
            "add": "Shabih haider .Haider brothers  cloth merchant chowk bazar sultanpur u.p ",
            "ods": [
                "s305845"
            ],
            "mn2": "8090836969",
            "pin": "228001"
        },
        {
            "id": 230527011,
            "cn": "BabySugar",
            "mn1": "8452847639",
            "gst": "27AUTPC6087A1ZI",
            "add": "2945K-20,B-Ward,Mali colony,\nNearSubhashNagar",
            "ods": [
                "s305846",
                "s308288",
                "s3081065",
                "s309221"
            ],
            "mn2": "",
            "pin": "416008"
        },
        {
            "id": 230527012,
            "cn": "TUFF CASES",
            "mn1": "",
            "gst": "07BMOPJ9516K1ZG",
            "add": "",
            "ods": [
                "s305848",
                "s306147",
                "s306348",
                "s306470"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230527013,
            "cn": "Apurvi",
            "mn1": "8506845891",
            "gst": "",
            "add": "Sector 9, Plot no.3, Flat no.S1, Vaishali, Ghaziabad, Uttar Pradesh,  IGL CNG pump",
            "ods": [
                "s305854"
            ],
            "mn2": "8800539437",
            "pin": "201010"
        },
        {
            "id": 230527014,
            "cn": "Ayush",
            "mn1": "7874996165",
            "gst": "",
            "add": "Savnani bhavan B/H Sindhi Social Circle Kubernagar Bunglowarea Ahmedabad Gujarat",
            "ods": [
                "s306406"
            ],
            "mn2": "",
            "pin": "382340"
        },
        {
            "id": 230527015,
            "cn": "Imtisashi",
            "mn1": "7005411915",
            "gst": "",
            "add": "Name- Imtisashi\nAddress- H.No 81 Lane 3, Lakeview colony khermahal, Dimapur , Nagaland",
            "ods": [
                "s306779"
            ],
            "mn2": "9615893897",
            "pin": "797112"
        },
        {
            "id": 230527016,
            "cn": "Vivek",
            "mn1": "7462015445",
            "gst": "",
            "add": "iti colony bettiah bihar, \nDol bagh trees",
            "ods": [
                "s306878",
                "s308381",
                "s309171"
            ],
            "mn2": "",
            "pin": "845438"
        },
        {
            "id": 230528001,
            "cn": "Anirban",
            "mn1": "9609452180",
            "gst": "",
            "add": "Work Shop Road, Near Ganesh Mandir\nAndal, West Bengal ",
            "ods": [],
            "mn2": "",
            "pin": "713321"
        },
        {
            "id": 230528002,
            "cn": "Sadham",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230528003,
            "cn": "Sadk apparel",
            "mn1": "9833501325",
            "gst": "",
            "add": "308, 16b, shiv nagar, mhada colony, Poonam Nagar, Andheri East, Mumbai,",
            "ods": [
                "s306379"
            ],
            "mn2": "",
            "pin": "400093"
        },
        {
            "id": 230528004,
            "cn": "Baby",
            "mn1": "9895862739",
            "gst": "",
            "add": "Baby Anthony,Attokaran(H),Vynthala,palayamparambu post,PIN 680741,Trissur district,kerala state",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230528005,
            "cn": "Kalyan",
            "mn1": "",
            "gst": "",
            "add": "Sidharth\n17/5, A-Block,\nMadhu park Ridge Apartments,\nLanger House,\nHyderabad ",
            "ods": [],
            "mn2": "",
            "pin": "500031"
        },
        {
            "id": 230528006,
            "cn": "Shuaib",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230528007,
            "cn": "Shrey",
            "mn1": "7505479612",
            "gst": "",
            "add": "Lookatthatclothing...\nOwner name  Shrey Gautam\nlane 4 opposite rathi house near reliance tower shantinagar bhopa road muzaffarnagar.",
            "ods": [
                "s307830"
            ],
            "mn2": "7417928244",
            "pin": "251001"
        },
        {
            "id": 230529001,
            "cn": "Printkraft",
            "mn1": "",
            "gst": "07AIGPS0029R2ZR",
            "add": "",
            "ods": [
                "s305883",
                "s306478",
                "s306529",
                "s308644",
                "s3081080"
            ],
            "mn2": "",
            "pin": "641607"
        },
        {
            "id": 230529002,
            "cn": "Shashank Bende",
            "mn1": "9985899238",
            "gst": "",
            "add": "Flat No: 205, The Heritage Apartments, DD Colony, Amberpet, Hyderabad",
            "ods": [
                "s305884",
                "s3082"
            ],
            "mn2": "9704367588",
            "pin": "500013"
        },
        {
            "id": 230529003,
            "cn": "Kusum'a Gentleman's Genesis",
            "mn1": "9010969066",
            "gst": "37BOSPC4797P1ZT",
            "add": "Kusuma's Gentleman's Genesis, 4-226, BC colony, beside Adari pharmacy, vepagunta junction, Visakhapatnam",
            "ods": [
                "s305888"
            ],
            "mn2": "",
            "pin": "530047"
        },
        {
            "id": 230529004,
            "cn": "Syed Ali",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230529005,
            "cn": "VN Company",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230529006,
            "cn": "Abani nayak",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230529007,
            "cn": "Amraal",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230529008,
            "cn": "Shweta Singh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305900",
                "s307383"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230529009,
            "cn": "Akshat",
            "mn1": "9752228208",
            "gst": "",
            "add": "Villa no. 25 Banyan tree enclave, khamardih, kachna road, Shankar nagar, Raipur, Chhattisgarh",
            "ods": [],
            "mn2": "",
            "pin": "492007"
        },
        {
            "id": 230529010,
            "cn": "Prayank",
            "mn1": "7838404665",
            "gst": "",
            "add": "2-j-5, gaytri nagar near shiv temple, hiran magri Sec5, udaipur (R.A.J)\nphone no-9257843567",
            "ods": [
                "s305905"
            ],
            "mn2": "8178215221",
            "pin": "313002"
        },
        {
            "id": 230529011,
            "cn": "Mustakeem Ali",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305906"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230529012,
            "cn": "Naina",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305909",
                "s306450"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230529013,
            "cn": "Pratik Soni",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305910",
                "s306687",
                "s308867"
            ],
            "mn2": "",
            "pin": "440015"
        },
        {
            "id": 230529014,
            "cn": "Garv",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306349"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230529015,
            "cn": "Saud",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": "431001"
        },
        {
            "id": 230529016,
            "cn": "Surajan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305965"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230530001,
            "cn": "Ritesh",
            "mn1": "6289376075",
            "gst": "",
            "add": "10B, Mohanpur Deogaon Gambharimunda Khordha odisha ",
            "ods": [],
            "mn2": "",
            "pin": "752035"
        },
        {
            "id": 230530002,
            "cn": "Nyaiphung Enterprise",
            "mn1": "",
            "gst": "07ACYPW2645K1ZN",
            "add": "",
            "ods": [
                "s30629",
                "s306282",
                "s306623",
                "s308305",
                "s308817"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230530003,
            "cn": "Anandhu",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230530004,
            "cn": "Mauritius",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230530005,
            "cn": "Chandan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230530006,
            "cn": "Ashok",
            "mn1": "8555916491",
            "gst": "",
            "add": "State-Andhra Pradesh\nDist-Vishakhapatanam \nLandmark. Ranga catering Sheela nagar venkates colony road no 8 b block",
            "ods": [],
            "mn2": "",
            "pin": "530012"
        },
        {
            "id": 230530007,
            "cn": "Jhanvi Mittal",
            "mn1": "8708076631",
            "gst": "",
            "add": "House No. 1634 , 1st floor , Urban Estate - 2 , Hisar , Haryana",
            "ods": [
                "s306869"
            ],
            "mn2": "",
            "pin": "125001"
        },
        {
            "id": 230530008,
            "cn": "Sohaib",
            "mn1": "7033843609",
            "gst": "",
            "add": "Career point, tower-2, Road no.1, IPIA, Kota, Rajasthan",
            "ods": [],
            "mn2": "",
            "pin": "324005"
        },
        {
            "id": 230530009,
            "cn": "Shuvam",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230530010,
            "cn": "K G Printer",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230530011,
            "cn": "Praveen Raj",
            "mn1": "7542958308",
            "gst": "",
            "add": "Designing Galaxy shop, Near Gyan Sagar school, East Ram Krishna Nagar, Patna, Bihar",
            "ods": [],
            "mn2": "7061413630",
            "pin": "800027"
        },
        {
            "id": 230531001,
            "cn": "Zoel",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230531002,
            "cn": "Dheeraj",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307417"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230531003,
            "cn": "Umair",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230531004,
            "cn": "Chaitanya",
            "mn1": "7350841184",
            "gst": "",
            "add": "Ranjanvan housing society. Plot no 29B. Tv center. Cidco. Aurangabad. Maharashtra.",
            "ods": [],
            "mn2": "8237379082",
            "pin": "431001"
        },
        {
            "id": 230531005,
            "cn": "Ruchi",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230531006,
            "cn": "Deep Ghosh",
            "mn1": "7908048884",
            "gst": "19DBPPG2466D1ZI",
            "add": "4 number ghumti ,near puraton masjid ,Jalpaiguri",
            "ods": [
                "s306243",
                "s306858",
                "s307194",
                "s307198",
                "s307251",
                "s307391",
                "s307686",
                "s307728",
                "s307756",
                "s307925",
                "s30937",
                "s309246",
                "s309312"
            ],
            "mn2": "",
            "pin": "735101"
        },
        {
            "id": 230531007,
            "cn": "Chaitanya",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230531008,
            "cn": "Ishaan Chaawla",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230531009,
            "cn": "Safwan",
            "mn1": "9606439683",
            "gst": "",
            "add": " Address: door number 204, shiv bouge enclave behind namma mobiles city bus stand, Udupi Karnataka",
            "ods": [
                "s307507"
            ],
            "mn2": "",
            "pin": "576101"
        },
        {
            "id": 230531010,
            "cn": "Dhaval",
            "mn1": "8488830605",
            "gst": "",
            "add": "Gokul park C5 Aarti Industry Area Bhavnagar Road Ajidem chowkdi Rajkot",
            "ods": [
                "s305987"
            ],
            "mn2": "",
            "pin": "360003"
        },
        {
            "id": 230531011,
            "cn": "Siddid",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305990"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230531012,
            "cn": "Squareknot Next Techonologies Pvt Ltd",
            "mn1": "",
            "gst": "06AAVCS7920B2Z5",
            "add": "",
            "ods": [
                "s305991",
                "s30636",
                "s306121",
                "s306143",
                "s306353",
                "s306461",
                "s306536",
                "s306599",
                "s306864",
                "s30771",
                "s30795",
                "s307293",
                "s307319",
                "s307375",
                "s307606",
                "s307669",
                "s3081",
                "s30878",
                "s30899",
                "s308205",
                "s308326",
                "s308363",
                "s308794",
                "s308809",
                "s308915",
                "s308977",
                "s3081145",
                "s309161",
                "s309229",
                "s309335",
                "s309340",
                "s309431"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230531013,
            "cn": "Apoorav",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s305993"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230531014,
            "cn": "Arka",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230601001,
            "cn": "AS ENTERPRISES",
            "mn1": "",
            "gst": "07BZAPJ1049L1ZE",
            "add": "",
            "ods": [
                "s30612",
                "s306637",
                "s307364",
                "s308642"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230601002,
            "cn": "Lujo",
            "mn1": "8792152867",
            "gst": "",
            "add": "Sahara guest house chandni chowk road shivijinagar bangalore",
            "ods": [
                "s306259"
            ],
            "mn2": "9353202192",
            "pin": "560051"
        },
        {
            "id": 230601003,
            "cn": "samip kite",
            "mn1": "7558511323",
            "gst": "",
            "add": " c/o Suresh Jibhkate, plot no. 76-C, gadge baba nagar, Ramna Maroti Rd, Nagpur",
            "ods": [],
            "mn2": "",
            "pin": "440024"
        },
        {
            "id": 230601004,
            "cn": "Ayushman Mohanty",
            "mn1": "8144401203",
            "gst": "",
            "add": "Aiims nagar lane 14,patrapada\nBhubaneswar,odisha ",
            "ods": [
                "s30623"
            ],
            "mn2": "8777545610",
            "pin": "751019"
        },
        {
            "id": 230601005,
            "cn": "Gadham Madhu",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230601006,
            "cn": "Kalyan",
            "mn1": "8555950446",
            "gst": "",
            "add": "Plot26,anand nagar colony,chandana hospital,bowenpally,chinna thokkata,Secunderabad ",
            "ods": [
                "s306361",
                "s30752",
                "s308105"
            ],
            "mn2": "9290571702",
            "pin": "500011"
        },
        {
            "id": 230601007,
            "cn": "Ayur",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230602001,
            "cn": "Shanu",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230602002,
            "cn": "Sumeetpal",
            "mn1": "9501125685",
            "gst": "",
            "add": "Near government Girls High School VPO Babehali, Gurdaspur, Punjab",
            "ods": [],
            "mn2": "",
            "pin": "143530"
        },
        {
            "id": 230602003,
            "cn": "Ankit",
            "mn1": "8118803438",
            "gst": "",
            "add": "PLOT NO. 11K, SHREE RAM NAGAR EXT. 100 FEET ROAD, JHOTWARA, JAIPUR. RAJASTHAN",
            "ods": [
                "s30666"
            ],
            "mn2": "",
            "pin": "302012"
        },
        {
            "id": 230602004,
            "cn": "Sayan",
            "mn1": "9163037328",
            "gst": "",
            "add": "Verdant Regency \nGround floor.\n82/1 Ibrahimpur Road, ",
            "ods": [
                "s309148"
            ],
            "mn2": "",
            "pin": "700032"
        },
        {
            "id": 230602005,
            "cn": "Worthanso",
            "mn1": "9366993454",
            "gst": "",
            "add": "Avinash digital solution\nDipali 2A house no 25\nNamghar path II, rukmini nagar, dispur\nGuwahati",
            "ods": [
                "s308165"
            ],
            "mn2": "",
            "pin": "781006"
        },
        {
            "id": 230602006,
            "cn": "Kalpesh",
            "mn1": "9326872688",
            "gst": "",
            "add": "Dhobhi Ghat, Demello Compound, Ashok Nagar, Santacruz East, Mumbai, Maharashtra",
            "ods": [
                "s30672"
            ],
            "mn2": "",
            "pin": "400055"
        },
        {
            "id": 230602007,
            "cn": "Mrinal",
            "mn1": "8356063662",
            "gst": "",
            "add": "Plot no 28 line A Room no 7, near Jabbar hall road no 3, shivaji nagar, govandi",
            "ods": [],
            "mn2": "",
            "pin": "400043"
        },
        {
            "id": 230602008,
            "cn": "Govind",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230602009,
            "cn": "Zen Farooqui",
            "mn1": "7895126609",
            "gst": "",
            "add": "Sarai Sheikh Mehood, Behind city old church, opp. Town hall, Moradabad - (UP) ",
            "ods": [],
            "mn2": "",
            "pin": "244001"
        },
        {
            "id": 230602010,
            "cn": "Parker",
            "mn1": "6209793733",
            "gst": "",
            "add": "Vivek Toppo \n459 Glory House, \nNew area Shukla colony Indra path Hinoo ranchi Jharkhand",
            "ods": [
                "s30676",
                "s307403"
            ],
            "mn2": "",
            "pin": "834002"
        },
        {
            "id": 230602011,
            "cn": "Varun",
            "mn1": "6205317690",
            "gst": "",
            "add": "Sonali footwear kadam kuan thakurbari road near bank of baroda. Patna\nLand mark - beside bank of baroda",
            "ods": [],
            "mn2": "7004420687",
            "pin": "800003"
        },
        {
            "id": 230602012,
            "cn": "Srujan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230603001,
            "cn": "Chaturthi",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30690"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230603002,
            "cn": "Baduh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230603003,
            "cn": "Amit",
            "mn1": "8918074274",
            "gst": "",
            "add": "Supriyo Sarkar\nAndal South Bazaar, Arabinda Nagar, Near Shiv Mandir, Andal, Burdwan",
            "ods": [],
            "mn2": "7001382902",
            "pin": "713321"
        },
        {
            "id": 230603004,
            "cn": "Uttam",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230603005,
            "cn": "Suniashi Industries Private Limited",
            "mn1": "",
            "gst": "07AARCS2928P1ZH",
            "add": "",
            "ods": [
                "s306100"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230603006,
            "cn": "Satyam",
            "mn1": "9776163464",
            "gst": "",
            "add": "Cafe Bae \n84 Old Hazaribag Road,\nLalpur, near Manjusha Complex, Ranchi, Jharkhand",
            "ods": [
                "s30841"
            ],
            "mn2": "",
            "pin": "834001"
        },
        {
            "id": 230603007,
            "cn": "Shree Om School",
            "mn1": "9837300415",
            "gst": "",
            "add": "Shiv Shakti provision Store, Jamanpur, Selaqui, Dehradun",
            "ods": [],
            "mn2": "9761338672",
            "pin": "248011"
        },
        {
            "id": 230603008,
            "cn": "Sanju",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230603009,
            "cn": "Nawaz",
            "mn1": "6289073474",
            "gst": "",
            "add": "West Bengal Kantaberia, uluberia, Howrah . Near kantaberia jumma masjid",
            "ods": [],
            "mn2": "",
            "pin": "711316"
        },
        {
            "id": 230604001,
            "cn": "Vedansh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230604002,
            "cn": "Biki",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230605001,
            "cn": "Avdhesh",
            "mn1": "9529999918",
            "gst": "08BKKPR4390H1ZN",
            "add": "GHANSHYAM TRADERS\nRohit kumawat\nGhanshyam art studio, Fouj mohalla, Nathdwara\nNATHDWARA, RAJASTHAN",
            "ods": [
                "s308421",
                "s308884"
            ],
            "mn2": "",
            "pin": "313301"
        },
        {
            "id": 230605002,
            "cn": "Bidyut",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230605003,
            "cn": "Ak Mixo",
            "mn1": "9871937706",
            "gst": "02FKGPK2332N1Z7",
            "add": "276a shahpur chowart rd\nsamot, chamba\nchamba, Himachal Pradesh",
            "ods": [
                "s306659",
                "s307220",
                "s307602",
                "s309369"
            ],
            "mn2": "",
            "pin": "176207"
        },
        {
            "id": 230605004,
            "cn": "Lukkha.Shop",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230605005,
            "cn": "Kounsal Ali",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306128"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230605006,
            "cn": "Vaishnav",
            "mn1": "8004600282",
            "gst": "",
            "add": "Mahuesugharpur, Durga chowk, Rustampur, Gorakhpur,",
            "ods": [],
            "mn2": "",
            "pin": "273016"
        },
        {
            "id": 230605007,
            "cn": "Apoorav Kaushik",
            "mn1": "",
            "gst": "07DUPPK5267K1ZW",
            "add": "",
            "ods": [
                "s306130"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230605008,
            "cn": "Godwon Benny",
            "mn1": "9645529188",
            "gst": "32CGHPB9033R1Z4",
            "add": "GodwinBenny \nArumakkattukudy (H)\nAngamaly P O, Angamaly, Ernakulam, Kerala\nNear SNDP Junction ",
            "ods": [
                "s306574",
                "s307716"
            ],
            "mn2": "8301032383",
            "pin": "683572"
        },
        {
            "id": 230605009,
            "cn": "White Accounting",
            "mn1": "7300300155",
            "gst": "",
            "add": "Shriram Kumar singh \n23-a, Shree ji Nagar, Rampura road, Mansarovar, jaipur-",
            "ods": [],
            "mn2": "",
            "pin": "302020"
        },
        {
            "id": 230605010,
            "cn": "Jayesh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306136"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230605011,
            "cn": "Ishan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308942"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230605012,
            "cn": "Raiyan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230605013,
            "cn": "HK TRADELINK",
            "mn1": "",
            "gst": "24ANYPB5319G1ZX",
            "add": "",
            "ods": [
                "s306140"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230606001,
            "cn": "Aditya",
            "mn1": "9685505593",
            "gst": "",
            "add": "202-203 line no.2 j.c. mill road , Birla Nagar, Gwalior (M.P)",
            "ods": [
                "s306534"
            ],
            "mn2": "8602770982",
            "pin": "474004"
        },
        {
            "id": 230606002,
            "cn": "Bikram",
            "mn1": "9733135858",
            "gst": "",
            "add": "1/A,Banalata Housing Complex\nHaldia,Township",
            "ods": [],
            "mn2": "9647662622",
            "pin": "721607"
        },
        {
            "id": 230606003,
            "cn": "Salo",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306332"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230606004,
            "cn": "Rohit",
            "mn1": "8119014167",
            "gst": "",
            "add": "Sorokhaibam rohit singh\nSupernova residency sector noida. \n1507 west",
            "ods": [],
            "mn2": "",
            "pin": "201313"
        },
        {
            "id": 230606005,
            "cn": "Pratyush",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230606006,
            "cn": "The Export World",
            "mn1": "",
            "gst": "19GCGPS5859R1Z6",
            "add": "",
            "ods": [
                "s306166"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230606007,
            "cn": "Bharat",
            "mn1": "7509143962",
            "gst": "",
            "add": "271, Annapurna Nagar ,Sync Dance Academy , Nanakeda , Ujjain ( Madhya Pradesh )",
            "ods": [],
            "mn2": "8770075628",
            "pin": "456010"
        },
        {
            "id": 230606008,
            "cn": "Saffron",
            "mn1": "",
            "gst": "09EKSPK0589J1ZB",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230606009,
            "cn": "CHINMAY GRAPHICS & PRINTINGS",
            "mn1": "",
            "gst": "24ABRPN1633J1ZH",
            "add": "",
            "ods": [
                "s306171"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230607001,
            "cn": "Hjk",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230607002,
            "cn": "Shanti Clothing",
            "mn1": "",
            "gst": "09BFAPJ4543P1Z2",
            "add": "",
            "ods": [
                "s306177",
                "s308638"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230607003,
            "cn": "Moin",
            "mn1": "8527150400",
            "gst": "",
            "add": "Gshhshsbshshshs Shsvsus shs Shsus Sjsjs hshsv",
            "ods": [
                "s306356"
            ],
            "mn2": "",
            "pin": "272152"
        },
        {
            "id": 230607004,
            "cn": "Chinmay",
            "mn1": "7605991416",
            "gst": "",
            "add": "VR 75 , unit 6 , ganga nagar , Bhubaneswar , Odisha\nP.o GPO , P.S Capital police station",
            "ods": [],
            "mn2": "",
            "pin": "751001"
        },
        {
            "id": 230607005,
            "cn": "Atish",
            "mn1": "5",
            "gst": "",
            "add": "Y",
            "ods": [
                "s306481",
                "s306783"
            ],
            "mn2": "",
            "pin": "411052"
        },
        {
            "id": 230607006,
            "cn": "Piyush Gautam",
            "mn1": "9024826007",
            "gst": "",
            "add": "Plot No. 3A, Govind vihar behind Mangal vihar, Ridhi Sidhi Sweets, Gopalpura Byepass, jaipur, Rajasthan",
            "ods": [
                "s307416"
            ],
            "mn2": "7357671107",
            "pin": "302018"
        },
        {
            "id": 230607007,
            "cn": "Shivam",
            "mn1": "6205836891",
            "gst": "",
            "add": "157, sarai jullena opp escort heart hospital New Delhi",
            "ods": [],
            "mn2": "",
            "pin": "110025"
        },
        {
            "id": 230607008,
            "cn": "Mohit",
            "mn1": "7620219626",
            "gst": "",
            "add": "Plot No.182, Jai Durga Society No.3, Manish Nagar, Nagpur",
            "ods": [
                "s306780",
                "s307173",
                "s308128",
                "s308540"
            ],
            "mn2": "9075271304",
            "pin": "440015"
        },
        {
            "id": 230607009,
            "cn": "Nehal",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230607010,
            "cn": "Parimala",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230607011,
            "cn": "Himanshu",
            "mn1": "7988292378",
            "gst": "",
            "add": "Pannu Traders\nShiv nagar ,Mil gate Caption school, Mor vali gali  near Mor kiryana store, Hisar , Haryana",
            "ods": [],
            "mn2": "8684999585",
            "pin": "125001"
        },
        {
            "id": 230607012,
            "cn": "Tanuj",
            "mn1": "8886900083",
            "gst": "",
            "add": "A 701, Giridhari Executive Park, peeramcheruvu village, kalimandir, Eidgah Rd, Hyderabad, Telangana",
            "ods": [
                "s30711",
                "s3089"
            ],
            "mn2": "",
            "pin": "500091"
        },
        {
            "id": 230607013,
            "cn": "Dixit",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230608001,
            "cn": "Monika",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230608002,
            "cn": "Srinadh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230608003,
            "cn": "Aadish",
            "mn1": "7889951030",
            "gst": "",
            "add": "LANE HARI SINGH SCHOOL Hazuri bagh talab tillo jammu",
            "ods": [
                "s307244",
                "s307802"
            ],
            "mn2": "",
            "pin": "110062"
        },
        {
            "id": 230608004,
            "cn": "Chetan Donda",
            "mn1": "9904032080",
            "gst": "",
            "add": "81/82,Opera Business hub,Lajamani chowk,Mota varachha \nCity: Surat\nState: Gujarat ",
            "ods": [],
            "mn2": "7600188002",
            "pin": "394101"
        },
        {
            "id": 230608005,
            "cn": "Neha",
            "mn1": "9971010271",
            "gst": "",
            "add": "b 19 ,3rd floor,Suncity ,sector 54 ,Gurgaon",
            "ods": [],
            "mn2": "",
            "pin": "122003"
        },
        {
            "id": 230608006,
            "cn": "ShadyCanvas.com",
            "mn1": "8849298858",
            "gst": "09BOZPS8456L1ZH",
            "add": "Showroom No-4, Vinayak City Square, Opposite Bagga Petrol Pump, Behind Manyavar Showroom, S.P Marg, Civil Lines, Prayagraj",
            "ods": [
                "s306220",
                "s306558"
            ],
            "mn2": "9695888575",
            "pin": "211001"
        },
        {
            "id": 230608007,
            "cn": "Wewe",
            "mn1": "7005845594",
            "gst": "",
            "add": "Wewe krome\nLower chandmari \nKohima \nNagaland ",
            "ods": [
                "s306222",
                "s306662",
                "s307753"
            ],
            "mn2": "7627945291",
            "pin": "797001"
        },
        {
            "id": 230608008,
            "cn": "Pradip Borah",
            "mn1": "9859914694",
            "gst": "",
            "add": "House No 19, Bishnujyoti Path, Byelane 3, Hatigaon, Guwahati",
            "ods": [],
            "mn2": "",
            "pin": "781038"
        },
        {
            "id": 230608009,
            "cn": "Kommotion",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230608010,
            "cn": "FOREVERNESS INDUSTRIES PRIVATE LIMITED",
            "mn1": "",
            "gst": "29AAFCF4759H1Z8",
            "add": "",
            "ods": [
                "s306225",
                "s306284"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230608011,
            "cn": "Sreejeeth",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306229"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230608012,
            "cn": "Leomens",
            "mn1": "",
            "gst": "09DVLPA4932C1ZR",
            "add": "G 300/5 Shaheed nagar Kallan chowk",
            "ods": [
                "s307554",
                "s309288"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230608013,
            "cn": "Rahib Hussain",
            "mn1": "8400921864",
            "gst": "",
            "add": "226, Sarain Unnao Gate inside, near Shia masjid \nJhansi ",
            "ods": [
                "s30742"
            ],
            "mn2": "",
            "pin": "284002"
        },
        {
            "id": 230608014,
            "cn": "Arshdeep",
            "mn1": "7877637949",
            "gst": "",
            "add": "Sanskar pride new navratan bhuwana udaipur rajasthan",
            "ods": [],
            "mn2": "8955960520",
            "pin": "313001"
        },
        {
            "id": 230608015,
            "cn": "Ketu",
            "mn1": "9336695049",
            "gst": "",
            "add": "F120, tshirt wala godown basement, gujjar chowk",
            "ods": [
                "s306237"
            ],
            "mn2": "8527150400",
            "pin": "110062"
        },
        {
            "id": 230608016,
            "cn": "Ruho",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230608017,
            "cn": "Jayanta",
            "mn1": "2",
            "gst": "",
            "add": "U",
            "ods": [
                "s306402"
            ],
            "mn2": "",
            "pin": "711303"
        },
        {
            "id": 230609001,
            "cn": "Vimal Kukreja",
            "mn1": "9826077781",
            "gst": "",
            "add": "Flat No 502 Square 79 Appartment \nNear Gangeshwar Mahadev Temple\nAdajan Surat Gujarat",
            "ods": [
                "s306247"
            ],
            "mn2": "7748958538",
            "pin": "395009"
        },
        {
            "id": 230609002,
            "cn": "Sanjoy",
            "mn1": "8293471448",
            "gst": "",
            "add": "1/16,Tetikhola,Kaliganj More.\nDurgapur\nDist-pachim Bardhaman\nState- west bangal",
            "ods": [
                "s308481",
                "s309329"
            ],
            "mn2": "",
            "pin": "713212"
        },
        {
            "id": 230609003
        },
        {
            "id": 230609004
        },
        {
            "id": 230609005
        },
        {
            "id": 230609006,
            "cn": "Nauratna Ji",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230609007,
            "cn": "Biswajit",
            "mn1": "8327788084",
            "gst": "",
            "add": "Back side of Anganwadi center, Rugudi Shai Naranpura Prayas School road., Kendujhar Odisha",
            "ods": [
                "s307130",
                "s307629"
            ],
            "mn2": "",
            "pin": "758014"
        },
        {
            "id": 230609008,
            "cn": "Rikin",
            "mn1": "7045552309",
            "gst": "",
            "add": "Rikin Patel\n105, Nirman Industrial Estate,\nLink road, Near Modi Hyundai, Malad west, Mumbai",
            "ods": [],
            "mn2": "8828484095",
            "pin": "400064"
        },
        {
            "id": 230609009,
            "cn": "Lucky",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230609010,
            "cn": "Nilesh",
            "mn1": "9773554568",
            "gst": "",
            "add": "H.no. 1, Saraswati Kunj, Suresh Sharma Nagar, (Near Maurya Hospital) Bareilly, Uttar Pradesh",
            "ods": [],
            "mn2": "9899866016",
            "pin": "243006"
        },
        {
            "id": 230609011,
            "cn": "Chhuanga Garment",
            "mn1": "7005155355",
            "gst": "",
            "add": "Israel Market, Dawrpui, Aizawl, Mizoram, Shope no 21",
            "ods": [],
            "mn2": "",
            "pin": "796001"
        },
        {
            "id": 230609012,
            "cn": "Afzal",
            "mn1": "9167221673",
            "gst": "",
            "add": "Army colony F-702 sector -9 Nerul Navi Mumbai (east) Maharashtra",
            "ods": [],
            "mn2": "8291759189",
            "pin": "400706"
        },
        {
            "id": 230609013,
            "cn": "Nidhi",
            "mn1": "9773297918",
            "gst": "",
            "add": "A-401 Shubham residency, near Eva mall, \nManjakpur",
            "ods": [
                "s30842",
                "s308953"
            ],
            "mn2": "7567431482",
            "pin": "390011"
        },
        {
            "id": 230610001,
            "cn": "Armaan",
            "mn1": "9820433212",
            "gst": "",
            "add": "Address: E-204, Sterling Court, MIDC, Andheri East, Mumbai ",
            "ods": [],
            "mn2": "",
            "pin": "400093"
        },
        {
            "id": 230610002,
            "cn": "Izhan",
            "mn1": "7017001599",
            "gst": "",
            "add": "domehla road unchi masjid gher saifuddin khan rampur UP",
            "ods": [],
            "mn2": "",
            "pin": "244901"
        },
        {
            "id": 230610003,
            "cn": "Poonam",
            "mn1": "7900209619",
            "gst": "",
            "add": "11 durga vihar near khilani eye hospital Aurangabad Mathura",
            "ods": [],
            "mn2": "7060758109",
            "pin": "281006"
        },
        {
            "id": 230610004,
            "cn": "Yash",
            "mn1": "7621999058",
            "gst": "",
            "add": "Shyaam kiran park, kothariya main road, opt mahadev temple, kothariya,rajkot",
            "ods": [],
            "mn2": "",
            "pin": "360022"
        },
        {
            "id": 230610005,
            "cn": "Shahul",
            "mn1": "7780420811",
            "gst": "",
            "add": "12-2-709/C/49, Padmanabhan Nagar, Asifnagar, Hyderabad Telangana ",
            "ods": [],
            "mn2": "",
            "pin": "500028"
        },
        {
            "id": 230610006,
            "cn": "Mustafa",
            "mn1": "7022887382",
            "gst": "",
            "add": "20, 6th Cross, Kuvempu Layout, Kothanur, Bengaluru, Karnataka",
            "ods": [],
            "mn2": "",
            "pin": "560077"
        },
        {
            "id": 230610007,
            "cn": "Chrish",
            "mn1": "8310386961",
            "gst": "",
            "add": "#25 Yeraganahalli extension hosa badavane, Near ambedkar bhavan \nMysuru",
            "ods": [],
            "mn2": "",
            "pin": "570011"
        },
        {
            "id": 230610008,
            "cn": "Jaydev",
            "mn1": "7046767271",
            "gst": "",
            "add": "Sai banglows\nBhat village, Sarkhej dholka highway\nAHMEDABAD, GUJARAT\nIndia‬",
            "ods": [],
            "mn2": "",
            "pin": "382210"
        },
        {
            "id": 230610009,
            "cn": "Faisal",
            "mn1": "9169888888",
            "gst": "",
            "add": "h1 4 balda colony nishatganj near post office lucknow",
            "ods": [
                "s306314",
                "s30773"
            ],
            "mn2": "9598470000",
            "pin": "226007"
        },
        {
            "id": 230610010,
            "cn": "Neeraj",
            "mn1": "9958318070",
            "gst": "",
            "add": "Company- Artistic outfit \nAddress- B-44A , street no 5 , Sitapuri part 1 , New Delhi ( near Nehru academy public school )",
            "ods": [],
            "mn2": "7503126203",
            "pin": "110045"
        },
        {
            "id": 230610011,
            "cn": "Ayman",
            "mn1": "",
            "gst": "09EISPA2960K1ZS",
            "add": "",
            "ods": [
                "s306313",
                "s306743",
                "s306766"
            ],
            "mn2": "",
            "pin": "202001"
        },
        {
            "id": 230610012,
            "cn": "Yogesh",
            "mn1": "9925103115",
            "gst": "",
            "add": "Plot no. 122, Pushp Cottage, S. No. 79/1 Meghpar Borichi. Adipur Taluka Anjar Dist Kutch Gujarat",
            "ods": [],
            "mn2": "9638698677",
            "pin": "370205"
        },
        {
            "id": 230610013,
            "cn": "Krish",
            "mn1": "9879200066",
            "gst": "",
            "add": "Elvis , B- 1201 , mantra luxuria , lajamani chowk , mota varachha,surat, Gujrat",
            "ods": [],
            "mn2": "",
            "pin": "394101"
        },
        {
            "id": 230610014,
            "cn": "Chinamy",
            "mn1": "7750045718",
            "gst": "",
            "add": "Behera fashion zone (BFZ)\nGirang chhak, nalconagar \nAngul. Odisha ",
            "ods": [
                "s306309"
            ],
            "mn2": "",
            "pin": "759145"
        },
        {
            "id": 230610015,
            "cn": "HiFi Sports",
            "mn1": "7015410937",
            "gst": "06AAVPB4988P1ZP",
            "add": "318/5 scheme no 5 Gandhi Nagar Jind haryana ",
            "ods": [],
            "mn2": "",
            "pin": "126102"
        },
        {
            "id": 230610016,
            "cn": "Titir",
            "mn1": "9083878800",
            "gst": "",
            "add": "Annapurna Decorators, Dakshin Rari Para, \nNear Indian Bank . PO - TAKI ",
            "ods": [
                "s308805",
                "s309386"
            ],
            "mn2": "8001056825",
            "pin": "743429"
        },
        {
            "id": 230611001,
            "cn": "Dev",
            "mn1": "9129577506",
            "gst": "",
            "add": "Balaji Nagar, Near Union Bank of India, Pure Karwati Road,Rail Coach Factory- Raebareli, Uttarpradesh",
            "ods": [],
            "mn2": "",
            "pin": "229121"
        },
        {
            "id": 230611002,
            "cn": "Anupam",
            "mn1": "9177911626",
            "gst": "",
            "add": "H.No. SN Enclaves, 13/B, Abhyudaya Nagar colony, Bandlaguda Jagir, Hyderabad, Telangana",
            "ods": [
                "s306317"
            ],
            "mn2": "",
            "pin": "500086"
        },
        {
            "id": 230611003,
            "cn": "The Unfolded Store",
            "mn1": "",
            "gst": "07AAUFT1697E1ZM",
            "add": "",
            "ods": [
                "s306318",
                "s307302"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230611004,
            "cn": "Pradnya",
            "mn1": "7738873393",
            "gst": "",
            "add": "7/604 Vihang Shantivan Anantpark near Rutupark Thane west, Maharashtra \nLandmark: Reliance Mart building",
            "ods": [],
            "mn2": "",
            "pin": "400601"
        },
        {
            "id": 230611005,
            "cn": "AJ Arts",
            "mn1": "9832539870",
            "gst": "",
            "add": "Badamtala Chowdhury market burdwan district West Bengal - India.",
            "ods": [],
            "mn2": "8695800831",
            "pin": "713101"
        },
        {
            "id": 230611006,
            "cn": "Mokshaapparels",
            "mn1": "8707859779",
            "gst": "",
            "add": "521ka/58 chappartala, Bara Chandganj, Lucknow, Uttar pardesh",
            "ods": [],
            "mn2": "9453295195",
            "pin": "226006"
        },
        {
            "id": 230611007,
            "cn": "Raghav",
            "mn1": "9999703998",
            "gst": "",
            "add": "Room 201, The hostel yard\n12&13, Royal Street Lane, Raipur Khadar, Sector 126, Noida, Uttar Pradesh",
            "ods": [
                "s306369"
            ],
            "mn2": "",
            "pin": "201313"
        },
        {
            "id": 230611008,
            "cn": "Nitesh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230611009,
            "cn": "Vaibhav",
            "mn1": "8999433274",
            "gst": "",
            "add": "jayshree enterprises , Ram cooler chowk, shukravari Mahal , nagpur",
            "ods": [
                "s306613",
                "s30873",
                "s309318"
            ],
            "mn2": "8329372497",
            "pin": "440012"
        },
        {
            "id": 230612001,
            "cn": "Shashwat",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230612002,
            "cn": "Rahman",
            "mn1": "9539215458",
            "gst": "",
            "add": "Cholayil house kuruka po,edarikode,kottakkal,Malappuram district,kerala,india",
            "ods": [],
            "mn2": "",
            "pin": "676551"
        },
        {
            "id": 230612003,
            "cn": "Subrat",
            "mn1": "8328894189",
            "gst": "",
            "add": "ComicVerse tees print Store\npo - Samal Barrage,Dist- Angul\nLandmark: Near government high school, samal Barrage",
            "ods": [
                "s307831"
            ],
            "mn2": "9090337736",
            "pin": "759037"
        },
        {
            "id": 230612004,
            "cn": "Chanpreet",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230612005,
            "cn": "Kislay",
            "mn1": "8987263735",
            "gst": "",
            "add": "Road no.6,Shastri nagar west,  gaya, bihar",
            "ods": [
                "s306336"
            ],
            "mn2": "9471068377",
            "pin": "823001"
        },
        {
            "id": 230612006,
            "cn": "Rick",
            "mn1": "8777817515",
            "gst": "",
            "add": "147P, BBT Road, Jalkal, Maheshtala, Kolkata",
            "ods": [
                "s306339",
                "s3091"
            ],
            "mn2": "9330592010",
            "pin": "700141"
        },
        {
            "id": 230612007,
            "cn": "Suma",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230612008,
            "cn": "Suma Rao",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230612009,
            "cn": "Ankush",
            "mn1": "9987360832",
            "gst": "",
            "add": "11/229 new nadkarni park bpt colony wadala",
            "ods": [],
            "mn2": "",
            "pin": "400037"
        },
        {
            "id": 230612010,
            "cn": "Jaskirat",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230612011,
            "cn": "Rashmi",
            "mn1": "8600873773",
            "gst": "",
            "add": "307/R2, Golden CHS, Garodiya Nagar, Praja Society, Barrister Nath Pai Nagar, Ghatkopar East, Mumbai",
            "ods": [
                "s306357"
            ],
            "mn2": "",
            "pin": "400077"
        },
        {
            "id": 230612012,
            "cn": "Mohammad Abdul",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230613001,
            "cn": "Indu",
            "mn1": "9992993944",
            "gst": "",
            "add": "104, Nangal sirohi \nNear by kothal mod \nMahendragarh",
            "ods": [],
            "mn2": "9466176874",
            "pin": "123028"
        },
        {
            "id": 230613002,
            "cn": "Blaze",
            "mn1": "",
            "gst": "07BELPA9107A1ZZ",
            "add": "",
            "ods": [
                "s306371"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230613003,
            "cn": "Raj",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230613004,
            "cn": "Bold",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230613005,
            "cn": "Lodger’s Hub",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306382"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230613006,
            "cn": "Kunesh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230613007,
            "cn": "Umesh Joshi",
            "mn1": "9988061040",
            "gst": "",
            "add": "House No. 21 Green Avenue, Hambran Road, Ludhiana, Punjab",
            "ods": [],
            "mn2": "7710766801",
            "pin": "141008"
        },
        {
            "id": 230613008,
            "cn": "Shazar",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230614001,
            "cn": "Binithharidas",
            "mn1": "9444585942",
            "gst": "",
            "add": "HARIDAS BABU\nSREEKALAM,HOUSE \nMULAYANKAVU,POST\nKULUKKALLUR \nPALAKKAD,DISTRICT \nKERALA",
            "ods": [
                "s307340"
            ],
            "mn2": "8939890222",
            "pin": "679337"
        },
        {
            "id": 230614002,
            "cn": "Vijay",
            "mn1": "8384015900",
            "gst": "",
            "add": "B-53, gali no. 5, sewak park, dwarka mor, uttam nagar, new delhi",
            "ods": [],
            "mn2": "",
            "pin": "110059"
        },
        {
            "id": 230614003,
            "cn": "Shree Shyam Creation",
            "mn1": "7015791296",
            "gst": "06EFCPA9550J1ZF",
            "add": "119. Krishan nagar. Jattu chowk. Tehsil camp. Panipat",
            "ods": [
                "s306418",
                "s307363",
                "s307696",
                "s30851",
                "s308145",
                "s308254",
                "s308770",
                "s308981",
                "s30914",
                "s309336"
            ],
            "mn2": "",
            "pin": "132103"
        },
        {
            "id": 230614004,
            "cn": "Theweebzone",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230614005,
            "cn": "Vakeel",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306428"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230614006,
            "cn": "Obeda L Khiangte",
            "mn1": "5",
            "gst": "",
            "add": "Y",
            "ods": [
                "s306429"
            ],
            "mn2": "",
            "pin": "796007"
        },
        {
            "id": 230614007,
            "cn": "Wulo",
            "mn1": "8974622252",
            "gst": "",
            "add": "Sepfuzou Colony, Kohima House no. UEMB40,\nBelow Ebenezer Church",
            "ods": [
                "s306430",
                "s306826",
                "s307561",
                "s308150",
                "s308447",
                "s308463",
                "s308976",
                "s3081023",
                "s309218"
            ],
            "mn2": "",
            "pin": "797001"
        },
        {
            "id": 230614008,
            "cn": "Jacob",
            "mn1": "7005535782",
            "gst": "",
            "add": "Flat No House No  Sai sedan apartment, 4th floor 401\nNear Gyan Jyoti college SILIGURI  West Bengal",
            "ods": [],
            "mn2": "",
            "pin": "734010"
        },
        {
            "id": 230614009,
            "cn": "SDS Tech",
            "mn1": "",
            "gst": "07EZDPK5048C1ZJ",
            "add": "",
            "ods": [
                "s306434"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230614010,
            "cn": "Wear Vibes",
            "mn1": "6353860133",
            "gst": "",
            "add": "5,shree nath ji row house,behind model town,\nin front of shapers education, parvat patia ",
            "ods": [
                "s306437",
                "s306517",
                "s306746",
                "s307607",
                "s308601"
            ],
            "mn2": "7567659835",
            "pin": "395010"
        },
        {
            "id": 230615001,
            "cn": "Kiran",
            "mn1": "8249502260",
            "gst": "",
            "add": "Kiran kumar sahu \nC/o-dr. Kalpana kar\nAt-gopalgoan,post-motiganj \nLandmark-near sabitri school ",
            "ods": [],
            "mn2": "7008634932",
            "pin": "756001"
        },
        {
            "id": 230615002,
            "cn": "Shree",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230615003,
            "cn": "Amir",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230615004,
            "cn": "Yohaan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230615005,
            "cn": "Asiq",
            "mn1": "9842421357",
            "gst": "",
            "add": "Standard Online Services\n139,Sha Complex \nBehind Santhi Pillaiyar Kovil\nTirunelveli Town\nTamilnadu",
            "ods": [],
            "mn2": "",
            "pin": "627006"
        },
        {
            "id": 230615006,
            "cn": "Priyanshu",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230615007,
            "cn": "Jay",
            "mn1": "2",
            "gst": "",
            "add": "Y",
            "ods": [],
            "mn2": "",
            "pin": "421302"
        },
        {
            "id": 230615008,
            "cn": "Mohit Sharma",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306460"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230615009,
            "cn": "God is real",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30994"
            ],
            "mn2": "",
            "pin": "272152"
        },
        {
            "id": 230615010,
            "cn": "Sweatzone",
            "mn1": "3",
            "gst": "",
            "add": "Y",
            "ods": [
                "s306468"
            ],
            "mn2": "",
            "pin": "712136"
        },
        {
            "id": 230615011,
            "cn": "Pawan",
            "mn1": "2",
            "gst": "",
            "add": "H",
            "ods": [
                "s306469"
            ],
            "mn2": "",
            "pin": "400024"
        },
        {
            "id": 230616001,
            "cn": "Vaibhav",
            "mn1": "7678459063",
            "gst": "",
            "add": "C-158, shalimar garden, extension 2, sahibabad, ghaziabad",
            "ods": [],
            "mn2": "",
            "pin": "201005"
        },
        {
            "id": 230616002,
            "cn": "SR Print Solution",
            "mn1": "",
            "gst": "07AHHPT7557M1ZG",
            "add": "",
            "ods": [
                "s306477",
                "s306506"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230616003,
            "cn": "Rajat",
            "mn1": "2",
            "gst": "",
            "add": "Y",
            "ods": [],
            "mn2": "",
            "pin": "121004"
        },
        {
            "id": 230616004,
            "cn": "Farzaam",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230616005,
            "cn": "Nits",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230616006,
            "cn": "Wow Freestyle",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230616007,
            "cn": "Bhartasya Tattvam",
            "mn1": "",
            "gst": "07EHBPS3954M1ZQ",
            "add": "",
            "ods": [
                "s306491",
                "s307188",
                "s307230",
                "s307469",
                "s307640",
                "s308928"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230616008,
            "cn": "Urban Edition",
            "mn1": "7081111176",
            "gst": "09BYSPR2746D1ZX",
            "add": "29 b park road Hazratganj Lucknow near axis bank ",
            "ods": [
                "s307905",
                "s30843",
                "s30881",
                "s308264",
                "s308416",
                "s3081030"
            ],
            "mn2": "",
            "pin": "226001"
        },
        {
            "id": 230616009,
            "cn": "Pushkar",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230616010,
            "cn": "Lyndon",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230617001,
            "cn": "Sriman",
            "mn1": "7205303828",
            "gst": "",
            "add": "Odisha, Bhubaneswar, Khandagiri kolathia pt _109",
            "ods": [
                "s306771",
                "s307237"
            ],
            "mn2": "9337614495",
            "pin": "751019"
        },
        {
            "id": 230617002,
            "cn": "Sishir",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230617003,
            "cn": "Dream",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306542"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230617004,
            "cn": "Omkar",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230617005,
            "cn": "Tvibe",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230617006,
            "cn": "Akaksh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230617007,
            "cn": "Aakash Ganguli",
            "mn1": "8240487125",
            "gst": "",
            "add": "14, Santinagar Road, \nP.O- Bhadrakali\nDist - Hooghly",
            "ods": [],
            "mn2": "",
            "pin": "712232"
        },
        {
            "id": 230617008,
            "cn": "Aakash Ganguli",
            "mn1": "8240487125",
            "gst": "",
            "add": "14, Santinagar Road, \nP.O- Bhadrakali\nDist - Hooghly",
            "ods": [],
            "mn2": "",
            "pin": "712232"
        },
        {
            "id": 230617009,
            "cn": "Avi Patel",
            "mn1": "7600600865",
            "gst": "",
            "add": "203 sai krupa appt\nSilvasa road dungra \nVapi ",
            "ods": [],
            "mn2": "",
            "pin": "396191"
        },
        {
            "id": 230617010,
            "cn": "Adith",
            "mn1": "9946866676",
            "gst": "",
            "add": "Malabar gents hostel, Pukkattupady Edappally Road, Edappally, Near plated restaurant, kochi, kerala",
            "ods": [],
            "mn2": "9947877747",
            "pin": "682024"
        },
        {
            "id": 230617011,
            "cn": "Gaurav",
            "mn1": "6264339381",
            "gst": "",
            "add": "432 sai adharshila near sai mandir awadhpuri bhopal",
            "ods": [],
            "mn2": "7587519502",
            "pin": "462022"
        },
        {
            "id": 230617012,
            "cn": "MB Enterprise",
            "mn1": "",
            "gst": "19DEXPS6982H1Z7",
            "add": "",
            "ods": [
                "s306532",
                "s306533"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230618001,
            "cn": "Shoven",
            "mn1": "8240487125",
            "gst": "",
            "add": "14, Santinagar Road, \nP.O- Bhadrakali\nDist - Hooghly\nLandmark - Sishubhaban School",
            "ods": [
                "s306782"
            ],
            "mn2": "",
            "pin": "712232"
        },
        {
            "id": 230618002,
            "cn": "Shaahbaaz",
            "mn1": "8789984852",
            "gst": "",
            "add": "Shahbaz khan(Farheen Dresses)\nRoad no.7,Baganshahi\nMango\nCity-Jamshedpur\nState-Jharkhand",
            "ods": [],
            "mn2": "8340710787",
            "pin": "831012"
        },
        {
            "id": 230618003,
            "cn": "Sabna",
            "mn1": "9567316005",
            "gst": "",
            "add": "irfanvilla,\n Puthiyakavu,kilimanoor PO",
            "ods": [],
            "mn2": "8547753724",
            "pin": "695601"
        },
        {
            "id": 230618004,
            "cn": "Edify",
            "mn1": "7005535083",
            "gst": "",
            "add": "Adress : Meghalaya, West jaintia hill district, phramer",
            "ods": [],
            "mn2": "",
            "pin": "793150"
        },
        {
            "id": 230619001,
            "cn": "Nova India",
            "mn1": "9157786201",
            "gst": "",
            "add": "chandrika park near tulsikunj, bacchu bhai ka kuwa,Vatva,Ahmedabad ",
            "ods": [
                "s308203"
            ],
            "mn2": "",
            "pin": "382445"
        },
        {
            "id": 230619002,
            "cn": "Jonty",
            "mn1": "9340250044",
            "gst": "",
            "add": "36 Triveni colony main. Near manik bagh road. Indore MP.",
            "ods": [],
            "mn2": "9826539600",
            "pin": "452001"
        },
        {
            "id": 230619003,
            "cn": "Pratya",
            "mn1": "9836910762",
            "gst": "",
            "add": " Balitikuri naskarpara CTI road Howrah,\nNear to vai vai Milan Sangha Club, Howrah ,\nWest Bengal",
            "ods": [],
            "mn2": "",
            "pin": "711113"
        },
        {
            "id": 230619004,
            "cn": "Palash",
            "mn1": "7757807420",
            "gst": "27CGIPT1689N1ZE",
            "add": "Address - 501, Raj homes, Gotal panjri besa road nagpur.\nLandmark - Podar international",
            "ods": [
                "s306552",
                "s308292",
                "s308599"
            ],
            "mn2": "",
            "pin": "440034"
        },
        {
            "id": 230619005,
            "cn": "Deblina",
            "mn1": "6289671086",
            "gst": "",
            "add": "\n16/j/h Jaharlal dutta lane, Ultadanga  muchibazar West Bengal kolkata\nNEAR Pallishree durga puja",
            "ods": [],
            "mn2": "7980948478",
            "pin": "700067"
        },
        {
            "id": 230619006,
            "cn": "Ajinkya",
            "mn1": "8149322127",
            "gst": "",
            "add": "N4/ H 58 , cidco , behind high court Aurangabad Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "431003"
        },
        {
            "id": 230619007,
            "cn": "Debayan",
            "mn1": "9830043453",
            "gst": "",
            "add": "Mr.Amaresh Banerjee\n159 B.K.Paul Avenue\nKolkata\nWest Bengal\nOpposite Pratishtha Community Hall)",
            "ods": [],
            "mn2": "",
            "pin": "700005"
        },
        {
            "id": 230619008,
            "cn": "Karman",
            "mn1": "9340043397",
            "gst": "",
            "add": "157 Empire Estates, Bicholi Mardana, Bypass Road, Indore (MP)",
            "ods": [],
            "mn2": "",
            "pin": "452016"
        },
        {
            "id": 230619009,
            "cn": "Devendra",
            "mn1": "8319957434",
            "gst": "",
            "add": "A6 804 Avalon Rangoli\nKarampur Tapukada\nin front of Suraj School\nAlwar Rajasthan",
            "ods": [
                "s308357"
            ],
            "mn2": "",
            "pin": "301707"
        },
        {
            "id": 230619010,
            "cn": "Vinod",
            "mn1": "9459014872",
            "gst": "",
            "add": "Vinod kumar s/o sh.Ram nath thakur.vill.chichoga.opposite hotel Beas view manali.Distt.kullu .Himachal pradesh.\n",
            "ods": [
                "s306576",
                "s306830"
            ],
            "mn2": "",
            "pin": "175131"
        },
        {
            "id": 230619011,
            "cn": "Abhinandan ghosh",
            "mn1": "7004009973",
            "gst": "",
            "add": "60, Kalinath ghoshal road, Ariadaha, Kolkata, Flat no -2A, Manorama abasan Apartment",
            "ods": [
                "s306577",
                "s307265",
                "s309313"
            ],
            "mn2": "",
            "pin": "700057"
        },
        {
            "id": 230620001,
            "cn": "Jolly",
            "mn1": "7349188882",
            "gst": "",
            "add": "Ground Floor, Plot No 735/899/1440, Bijipur, Tamando, Bhubaneswar, Odisha -\nLandmark - Near Tamando Pharmacy College",
            "ods": [],
            "mn2": "7349188887",
            "pin": "752054"
        },
        {
            "id": 230620002,
            "cn": "Goutham",
            "mn1": "9159626637",
            "gst": "",
            "add": "Sri goutham, p-7 jeyabarath oscarcity oomachikulam madurai, Tamilnadu",
            "ods": [],
            "mn2": "",
            "pin": "625014"
        },
        {
            "id": 230620003,
            "cn": "REN TECHNOLOGIES INDIA LIMITED",
            "mn1": "",
            "gst": "09AACCR3162M1Z3",
            "add": "Plot No.C-56/47, Sector-62, Gautam budh Nagar, Noida, Uttarpradesh",
            "ods": [
                "s306590"
            ],
            "mn2": "",
            "pin": "201307"
        },
        {
            "id": 230620004,
            "cn": "Faizy",
            "mn1": "9836236073",
            "gst": "",
            "add": "4h/9 rifle range road Kolkata. Landmark crest inn hotel\nPost office - circus Avenue.",
            "ods": [],
            "mn2": "",
            "pin": "700017"
        },
        {
            "id": 230620005,
            "cn": "Mega collection",
            "mn1": "9601929948",
            "gst": "",
            "add": "B-268 , Mega collection near Shanteshwar mahadev temple gjb pandesara surat ",
            "ods": [
                "s307378"
            ],
            "mn2": "",
            "pin": "394221"
        },
        {
            "id": 230620006,
            "cn": "Oshin",
            "mn1": "7771000044",
            "gst": "",
            "add": "2425 e sudama nagar, Near footi kothi, Indore ",
            "ods": [],
            "mn2": "",
            "pin": "452009"
        },
        {
            "id": 230620007,
            "cn": "Umesh",
            "mn1": "9158840860",
            "gst": "",
            "add": "Umesh K Gutte\nD902 Sun Fantasy Society, Jambhulwadi Road, Shani Nagar Chowk, Near Datta Nagar Police Chowki, Ambegaon Budruk, Pune",
            "ods": [],
            "mn2": "8454977692",
            "pin": "411046"
        },
        {
            "id": 230620008,
            "cn": "Sheya",
            "mn1": "8910581762",
            "gst": "",
            "add": "7E tangra 2nd lane kolkata",
            "ods": [],
            "mn2": "8910871253",
            "pin": "700046"
        },
        {
            "id": 230621001,
            "cn": "Santi",
            "mn1": "9052857007",
            "gst": "",
            "add": "401 Siri Sadan \nMla and mp colony \nJubliehills \nHyderabad ",
            "ods": [],
            "mn2": "",
            "pin": "500045"
        },
        {
            "id": 230621002,
            "cn": "Inside Institute of Filmmaking",
            "mn1": "6283793626",
            "gst": "06AAIFI7429M1ZW",
            "add": "SCO 92, 2nd floor, sector 21, Panchkula",
            "ods": [
                "s306793",
                "s308962"
            ],
            "mn2": "",
            "pin": "134112"
        },
        {
            "id": 230621003,
            "cn": "Shifa",
            "mn1": "8690287568",
            "gst": "",
            "add": "Address: Diaper house\nShop no 1\nZaheda apartment \nOpp. Nuri Masjid\nTeen batti\nJuhapura\nAhmedabad",
            "ods": [],
            "mn2": "9099141978",
            "pin": "380055"
        },
        {
            "id": 230621004,
            "cn": "Terry Mize",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306614",
                "s307973"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230621005,
            "cn": "Aasiq",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306624"
            ],
            "mn2": "",
            "pin": "627006"
        },
        {
            "id": 230621006,
            "cn": "Nimesh",
            "mn1": "7898540877",
            "gst": "",
            "add": "Address- Lushan ka bagicha, Cantt Road ATM Gali Guna Disst. Guna (M.P.)",
            "ods": [],
            "mn2": "",
            "pin": "473001"
        },
        {
            "id": 230621007,
            "cn": "Skinkraft",
            "mn1": "7972917040",
            "gst": "",
            "add": "MR.SURAJ MENDHE\nF NO.304 SUPHALAM JAGAT HOUSING\nCO SO BYRAMJITOWN, NAGPUR MAHARASTRA",
            "ods": [],
            "mn2": "",
            "pin": "440013"
        },
        {
            "id": 230621008,
            "cn": "Aman Seikh",
            "mn1": "8149329290",
            "gst": "",
            "add": "Admin Block, AIIMS Bibinagar Location: Rangapur village, Bibinagar Mandal ( Near Hyderabad), Yadadri Bhuvanagiri District, Telangana State",
            "ods": [],
            "mn2": "",
            "pin": "508126"
        },
        {
            "id": 230621009,
            "cn": "Sukhvinder",
            "mn1": "9001002235",
            "gst": "",
            "add": "Sukhvindar Singh Randhawa\n22-B, BARKAT NAGAR, JHALARBAORI, CHARBHUJA, RAWATBHATA, RAJASTHAN",
            "ods": [],
            "mn2": "",
            "pin": "323307"
        },
        {
            "id": 230621010,
            "cn": "Sunita",
            "mn1": "9840280032",
            "gst": "",
            "add": "6162 prestige lakeside habitat , gunjur , banglore",
            "ods": [],
            "mn2": "",
            "pin": "560087"
        },
        {
            "id": 230621011,
            "cn": "Irfan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306634",
                "s308558"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230621012,
            "cn": "Kunj",
            "mn1": "9971400532",
            "gst": "",
            "add": "A16 Saraswati Vihar\nPitampura",
            "ods": [],
            "mn2": "",
            "pin": "110034"
        },
        {
            "id": 230622001,
            "cn": "Ketan",
            "mn1": "7038655825",
            "gst": "",
            "add": "Ketan Janardhan Rathod,\nWard No 5, Sudarshan Nagar, Behind Agragami High School, Wardha, Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "442001"
        },
        {
            "id": 230622002,
            "cn": "Mannerless",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306641",
                "s307102",
                "s307204",
                "s307269",
                "s307434",
                "s307480",
                "s307586",
                "s307667",
                "s308113",
                "s308327",
                "s308552",
                "s308587",
                "s308751",
                "s3081113",
                "s309145",
                "s309320",
                "s309503"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230622003,
            "cn": "Daniel Alvares",
            "mn1": "9657396880",
            "gst": "30BRIPA3155L1Z3",
            "add": "Homeland Services\n839/1, Pinto Rosario Park\nBehind Kids Camp Nursery\nAlto Porvorim\nBardez - Goa",
            "ods": [
                "s306642"
            ],
            "mn2": "",
            "pin": "403521"
        },
        {
            "id": 230622004,
            "cn": "Tashi",
            "mn1": "8250432731",
            "gst": "",
            "add": "Tripai Hill, D. M. Moktan road \nOpposite Tharpa Choling monastery \nKalimpong,West Bengal",
            "ods": [],
            "mn2": "",
            "pin": "734301"
        },
        {
            "id": 230622005,
            "cn": "GLIFFEAN",
            "mn1": "9080209376",
            "gst": "",
            "add": "Gliffean FS,\n181/227, Duraisamypuram, senguttuvan street, Rajapalayam -\nVirudhunagar district,Tamilnadu.",
            "ods": [],
            "mn2": "9150328676",
            "pin": "626117"
        },
        {
            "id": 230622006,
            "cn": "Kaif",
            "mn1": "7383422827",
            "gst": "",
            "add": "anand, vidhyadhar, bakrol, vadtal road , near knowledge campus, triveni sangham",
            "ods": [
                "s307145",
                "s3081081",
                "s309406"
            ],
            "mn2": "",
            "pin": "388315"
        },
        {
            "id": 230622007,
            "cn": "Mohan",
            "mn1": "7013671046",
            "gst": "",
            "add": "G mohan sai, \n26/138, \nkummara veedhi , \nvetlapalem\nSamalkota mandal\nEast godavari district\nAndhra pradesh",
            "ods": [],
            "mn2": "",
            "pin": "533434"
        },
        {
            "id": 230622008,
            "cn": "Nirbhay",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306653"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230622009,
            "cn": "Jersueyr",
            "mn1": "8758016005",
            "gst": "",
            "add": "At post kolak, shree raam nagar, main road kolak, near dudhi mata temple, Tal - pardi, dist- valsad, gujarat, India.",
            "ods": [],
            "mn2": "",
            "pin": "396115"
        },
        {
            "id": 230622010,
            "cn": "Arsh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306656"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230622011,
            "cn": "Shraddha",
            "mn1": "7977170684",
            "gst": "",
            "add": "Shraddha \n401, 4th floor, La Opala Building,\nSaint alphonsa church road, Dosti area, near stella petrol pump, Vasai (w)",
            "ods": [],
            "mn2": "8999943632",
            "pin": "401202"
        },
        {
            "id": 230623001,
            "cn": "Vaishali",
            "mn1": "9761099728",
            "gst": "",
            "add": "House no. 73 Vasundhara enclave, jakhan, Rajpur road, Dehradun, Uttarakhand",
            "ods": [
                "s306668"
            ],
            "mn2": "",
            "pin": "248001"
        },
        {
            "id": 230623002,
            "cn": "Eva",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230623003,
            "cn": "Nikhil",
            "mn1": "9021965165",
            "gst": "",
            "add": "Flat no 8 Ganraj sankul appartment near Narottam bhavan Panchvati karanja Nashik\nNear godavari river",
            "ods": [
                "s306675",
                "s307245",
                "s307491",
                "s307609",
                "s307711"
            ],
            "mn2": "9309091286",
            "pin": "422003"
        },
        {
            "id": 230623004,
            "cn": "Sobin",
            "mn1": "7066667200",
            "gst": "",
            "add": "H No 7 Durigwada Navelim Bicholim",
            "ods": [],
            "mn2": "",
            "pin": "403505"
        },
        {
            "id": 230623005,
            "cn": "Nimis Collection",
            "mn1": "9356650470",
            "gst": "",
            "add": "Nimis Collections\nOpp Appollo pharmacy\nMarcela Goa",
            "ods": [
                "s306679"
            ],
            "mn2": "8080247181",
            "pin": "403107"
        },
        {
            "id": 230623006,
            "cn": "Akum",
            "mn1": "9378122593",
            "gst": "",
            "add": "Tongpangkumba Kichu\nH.No 176, NST Colony\nSungkomen ward \nMokokchung Nagaland",
            "ods": [
                "s306681",
                "s307453",
                "s307636",
                "s3081007"
            ],
            "mn2": "",
            "pin": "798601"
        },
        {
            "id": 230623007,
            "cn": "Sanjukta",
            "mn1": "8900030003",
            "gst": "",
            "add": "5 A Greek church row .\nKolkata\nOpposite Women Christian College",
            "ods": [],
            "mn2": "",
            "pin": "700026"
        },
        {
            "id": 230623008,
            "cn": "Crafts for kids",
            "mn1": "9986733954",
            "gst": "",
            "add": "Brindavan apartment, nallagandla, serilingampally, hyderabad, state telengana",
            "ods": [
                "s307176",
                "s309164"
            ],
            "mn2": "",
            "pin": "500019"
        },
        {
            "id": 230623009,
            "cn": "Manek Fashions",
            "mn1": "9829288993",
            "gst": "",
            "add": "Ankur Raghani\nC/O Chandiram Raghani\nPlot.No. 434 Gali No.3 Opposite Roshan Restaurant, Raja park Jaipur Rajasthan ",
            "ods": [],
            "mn2": "7014840255",
            "pin": "302004"
        },
        {
            "id": 230623010,
            "cn": "Print Hub",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230623011,
            "cn": "Gopal",
            "mn1": "7211114442",
            "gst": "",
            "add": "B/53 Keshar bhavani society godadara near maharana pratap chowk godadara surat ",
            "ods": [],
            "mn2": "",
            "pin": "395010"
        },
        {
            "id": 230623012,
            "cn": "Gulzar",
            "mn1": "8879490430",
            "gst": "",
            "add": "Room no 204 , Ganesh society, near koperkhaiane sector 19 talav ,navi mumbai",
            "ods": [],
            "mn2": "",
            "pin": "400709"
        },
        {
            "id": 230623013,
            "cn": "Ashfaq",
            "mn1": "9605139793",
            "gst": "",
            "add": "Arbaha, Near Spinning Mill, Kakkad, Kannur, Kerala",
            "ods": [],
            "mn2": "",
            "pin": "670005"
        },
        {
            "id": 230623014,
            "cn": "Yasin",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230623015,
            "cn": "Deepak",
            "mn1": "9116114897",
            "gst": "",
            "add": "Deepak jangid\n73/199, shipra path, near tagore hospital, mansarovar, Jaipur (Rajasthan)",
            "ods": [
                "s306693"
            ],
            "mn2": "",
            "pin": "302020"
        },
        {
            "id": 230624001,
            "cn": "Tee-riffic",
            "mn1": "8348118370",
            "gst": "",
            "add": "agrati apartment -5D, Ghosh para, Kaikhali, kolkata",
            "ods": [],
            "mn2": "9163822645",
            "pin": "700052"
        },
        {
            "id": 230624002,
            "cn": "Colour Drops Printer",
            "mn1": "9914544237",
            "gst": "",
            "add": "Colour Drops Printer\nc/o- Prince verma\n549, st no-1, old -Madhopuri, \nGow shalla road, \nNear Dr. karam chand sood\nLudhiana\npunjab",
            "ods": [
                "s307576",
                "s308270"
            ],
            "mn2": "",
            "pin": "141008"
        },
        {
            "id": 230624003,
            "cn": "Bagga Fashions",
            "mn1": "",
            "gst": "07BHLPB3439H2ZE",
            "add": "",
            "ods": [
                "s306697"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230624004,
            "cn": "Guruji",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230624005,
            "cn": "Ratna",
            "mn1": "9871186625",
            "gst": "",
            "add": " flat no.C-712\nTulip grand society, pilibhit bypass road near mahanagar Bareilly",
            "ods": [],
            "mn2": "",
            "pin": "243006"
        },
        {
            "id": 230624006,
            "cn": "Alex",
            "mn1": "8652887056",
            "gst": "",
            "add": "Room E-102,R.B complex sec 16 plot 14 kamote Navi Mumbai Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "410209"
        },
        {
            "id": 230624007,
            "cn": "Dhananjay",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230624008,
            "cn": "Shariff",
            "mn1": "8712387490",
            "gst": "",
            "add": "36-92-263/19, srinivas nagar, burma camp, visakhapatnam, andhra pradesh",
            "ods": [],
            "mn2": "9493569786",
            "pin": "530008"
        },
        {
            "id": 230624009,
            "cn": "Rashid",
            "mn1": "8080773010",
            "gst": "",
            "add": "Address: House no. 5750,khanapur road, mandle vasti, vita\nMaharashtra",
            "ods": [],
            "mn2": "",
            "pin": "415311"
        },
        {
            "id": 230624010,
            "cn": "Aniket",
            "mn1": "9284249996",
            "gst": "",
            "add": "kush building flat no. 33 3rd floor, 0pp jain hospital, Charni Road, Girgaon, mumbai",
            "ods": [],
            "mn2": "",
            "pin": "400004"
        },
        {
            "id": 230624011,
            "cn": "Garv",
            "mn1": "7814339497",
            "gst": "",
            "add": "House number 443, street number 4, vikas nagar, near indoor stadium , Pakhowal road , Ludhiana, Punjab l",
            "ods": [],
            "mn2": "",
            "pin": "141108"
        },
        {
            "id": 230624012,
            "cn": "Independent Minds LLP",
            "mn1": "9354514140",
            "gst": "06AAHFI8034P1ZW",
            "add": "Independent Minds LLP\nPALMS, 402/5, , SOUTH CITY-1, GURUGRAM, GURGAON, Gurgaon, Haryana",
            "ods": [
                "s306713"
            ],
            "mn2": "",
            "pin": "122007"
        },
        {
            "id": 230624013,
            "cn": "Garry",
            "mn1": "7888821265",
            "gst": "",
            "add": "27/2 Sanyasi Ashram , Ragho majra , Patiala , Punjab ",
            "ods": [],
            "mn2": "7719740004",
            "pin": "147001"
        },
        {
            "id": 230624014,
            "cn": "Loto",
            "mn1": "6009261438",
            "gst": "",
            "add": "Venuhs Printworks \nJail Colony Near Kerala Church \nParamedical Road \nKohima",
            "ods": [
                "s306719"
            ],
            "mn2": "",
            "pin": "797001"
        },
        {
            "id": 230624015,
            "cn": "Vineeth",
            "mn1": "7306139121",
            "gst": "",
            "add": "A27 West, Trinity Acres and Woods, Sarjapura Signal, Near Columbia Asia Hospital",
            "ods": [],
            "mn2": "8089728774",
            "pin": "560102"
        },
        {
            "id": 230624016,
            "cn": "Uzzi",
            "mn1": "9987069943",
            "gst": "",
            "add": "Room no. 1 Citadel garden Rose colony opposite phoenix Mall lbs Marg kurla west mumbai",
            "ods": [],
            "mn2": "9324598069",
            "pin": "400070"
        },
        {
            "id": 230624017,
            "cn": "Krishna Rawat",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306724",
                "s307479"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230624018,
            "cn": "Mathan",
            "mn1": "9500725678",
            "gst": "",
            "add": "26/14, bridge way colony, 1st street (ext), Lakshmi nagar, east, Coimbatore, Tamil Nadu",
            "ods": [],
            "mn2": "9336695049",
            "pin": "641607"
        },
        {
            "id": 230624019,
            "cn": "Shakal",
            "mn1": "9839356170",
            "gst": "",
            "add": "Moosanagr",
            "ods": [],
            "mn2": "",
            "pin": "209208"
        },
        {
            "id": 230624020,
            "cn": "Harsh",
            "mn1": "9155728635",
            "gst": "",
            "add": "Near,shershah hotel vihar,chandravanshi nagar,sasaram,Bihar ",
            "ods": [],
            "mn2": "",
            "pin": "821115"
        },
        {
            "id": 230625001,
            "cn": "Raashu",
            "mn1": "7889432174",
            "gst": "",
            "add": "Sara Holdings Faisal Fayaz\nNoordin Colony ,khanpora, Baramulla, Near masjid Noor",
            "ods": [
                "s307229",
                "s307822"
            ],
            "mn2": "9596376484",
            "pin": "193101"
        },
        {
            "id": 230625002,
            "cn": "Kabir",
            "mn1": "8130133192",
            "gst": "",
            "add": "House number 2B, 10 Norris Road , Cruz Kay Arr, Gardenia 1, Richmond Town, Bangalore, Karnataka",
            "ods": [],
            "mn2": "",
            "pin": "560025"
        },
        {
            "id": 230625003,
            "cn": "Gaurav",
            "mn1": "8860111891",
            "gst": "",
            "add": "FD-1 first floor, shivaji enclave, Rajouri garden, New Delhi \nLandmark : shivaji college",
            "ods": [],
            "mn2": "",
            "pin": "110027"
        },
        {
            "id": 230625004,
            "cn": "Vivek",
            "mn1": "9882840642",
            "gst": "",
            "add": "Near sports land dhalpur kullu",
            "ods": [
                "s306744",
                "s307263"
            ],
            "mn2": "",
            "pin": "175101"
        },
        {
            "id": 230625005,
            "cn": "Rachna",
            "mn1": "9811149674",
            "gst": "",
            "add": "1/548, Gali Number 6, near Jhilmil & Mansarovar metro station, Friends Colony, Industrial Area, New Delhi, Delhi, India",
            "ods": [],
            "mn2": "",
            "pin": "110095"
        },
        {
            "id": 230626001,
            "cn": "Azad K",
            "mn1": "8088541327",
            "gst": "",
            "add": "Qno b 46, ward no 26, bartunga paraspani, chirimiri, koriya,chhattisgarh",
            "ods": [
                "s306750"
            ],
            "mn2": "",
            "pin": "497449"
        },
        {
            "id": 230626002,
            "cn": "Hajaratali",
            "mn1": "9738656403",
            "gst": "",
            "add": "madarmaddi bhajantri oni\nlandmark near amba bhavani temple dharwad Karnataka",
            "ods": [],
            "mn2": "9738139028",
            "pin": "580001"
        },
        {
            "id": 230626003,
            "cn": "Isaac",
            "mn1": "9612836779",
            "gst": "",
            "add": "Hno 183, ward 5 near Mount Mary college chumukedima nagaland.",
            "ods": [
                "s306761",
                "s307596"
            ],
            "mn2": "7005666408",
            "pin": "797103"
        },
        {
            "id": 230626004,
            "cn": "Puneet",
            "mn1": "9650965076",
            "gst": "",
            "add": "House no 314 gali no 15 tomar colony burari delhi",
            "ods": [],
            "mn2": "",
            "pin": "110084"
        },
        {
            "id": 230626005,
            "cn": "Lucky Prints",
            "mn1": "8412883776",
            "gst": "30DBMPK4582B1ZW",
            "add": "Hno 433/4 Gunwanti Niwas, caribhat carambolim tiswadi goa",
            "ods": [
                "s306764",
                "s309188"
            ],
            "mn2": "7020858167",
            "pin": "403110"
        },
        {
            "id": 230626006,
            "cn": "Priyanka Agarwal",
            "mn1": "",
            "gst": "19AJLPA7882Q1Z9",
            "add": "6, Alipore Ave, Kala Bagan, Alipore, Kolkata, West Bengal 700027",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230626007,
            "cn": "Garv",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306772"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230626008,
            "cn": "Hadi",
            "mn1": "6378996877",
            "gst": "08HBDPK9429J1Z3",
            "add": "149/7, Muslim Mochi Mohalla, Dargah Bazar,\nNear Hotel Sai Darbar",
            "ods": [
                "s307920",
                "s308243",
                "s3081165",
                "s309295"
            ],
            "mn2": "",
            "pin": "305001"
        },
        {
            "id": 230626009,
            "cn": "Urban Street",
            "mn1": "9019791505",
            "gst": "",
            "add": "Kb extension Canara bank road 5th cross 776/3",
            "ods": [],
            "mn2": "",
            "pin": "577002"
        },
        {
            "id": 230627001,
            "cn": "Werain",
            "mn1": "9992290916",
            "gst": "",
            "add": "Viren \n31/32 Shree ram enterprise (SRE) \nSURYA hotel vaali gali \nSirsa\nHaryana",
            "ods": [],
            "mn2": "8222824919",
            "pin": "125055"
        },
        {
            "id": 230627002,
            "cn": "Mausam",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306784"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230627003,
            "cn": "Smartx",
            "mn1": "9726276726",
            "gst": "",
            "add": "Smartx Sublimation\n4,Sanskrut Complex,Pooja Hospital,Near Govindpurajuth Panchayat,Near Amul Parlor Shiv Pan-Parlor, T B Road, Vijapur,Di - Mehsana,State - Gujarat",
            "ods": [],
            "mn2": "",
            "pin": "382870"
        },
        {
            "id": 230627004,
            "cn": "Sen Store",
            "mn1": "",
            "gst": "07BGUPH8322K1ZV",
            "add": "",
            "ods": [
                "s306788"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230627005,
            "cn": "Mayank",
            "mn1": "",
            "gst": "09DIGPG6003N1Z3",
            "add": "",
            "ods": [
                "s306794",
                "s307441",
                "s308223",
                "s308634",
                "s3081126",
                "s309231",
                "s309543"
            ],
            "mn2": "",
            "pin": "201206"
        },
        {
            "id": 230627006,
            "cn": "Mayank Kaushik",
            "mn1": "9958860507",
            "gst": "",
            "add": "Hno. 72 , Gali no.15 , Extn.4 , Near daulat ram public school , \nNangloi,  Delhi",
            "ods": [],
            "mn2": "",
            "pin": "110041"
        },
        {
            "id": 230627007,
            "cn": "Peace",
            "mn1": "9921477357",
            "gst": "",
            "add": "Company name:- Eastwest\nMadhuban society, sonchafa B,305, kolhewadi, Sinhgad road,pune",
            "ods": [],
            "mn2": "9359003937",
            "pin": "411024"
        },
        {
            "id": 230627008,
            "cn": "TRENTASTIC APPARELS",
            "mn1": "9636372427",
            "gst": "08AAUFT6415G1ZQ",
            "add": "Magadh Nagar F46 near doulat Shah baba chomu",
            "ods": [
                "s306798",
                "s307133",
                "s307709"
            ],
            "mn2": "",
            "pin": "303702"
        },
        {
            "id": 230627009,
            "cn": "Phanindra",
            "mn1": "9603225453",
            "gst": "",
            "add": "3-4-67/5/65,Plot 65,Street 6,Sai Bhavani,\nUpparpally,Attapur,VigneshwaraApartm",
            "ods": [
                "s308498"
            ],
            "mn2": "",
            "pin": "500048"
        },
        {
            "id": 230627010,
            "cn": "Shishir",
            "mn1": "9582552266",
            "gst": "",
            "add": "C56/A28, Ground Floor, C Block, Sector 62, Noida, Uttar Pradesh",
            "ods": [],
            "mn2": "",
            "pin": "201309"
        },
        {
            "id": 230628001,
            "cn": "Suman",
            "mn1": "8388034653",
            "gst": "",
            "add": "Gopalmath Banagram plot \nDurgapur\nlandmark- near banerjee durga Mandir",
            "ods": [],
            "mn2": "",
            "pin": "713217"
        },
        {
            "id": 230628002,
            "cn": "Rifaat",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230628003,
            "cn": "Shivam Rawal",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s306814"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230628004,
            "cn": "Teesfees",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": "759001"
        },
        {
            "id": 230628005,
            "cn": "Trupti",
            "mn1": "8347620171",
            "gst": "",
            "add": "811, eight floor ,\nSNS platina, near Someshwara Enclave, Vesu, Surat, Gujarat",
            "ods": [],
            "mn2": "",
            "pin": "395007"
        },
        {
            "id": 230628006,
            "cn": "Sweet Ginger Fashion Private Limited",
            "mn1": "9116114897",
            "gst": "08ABKCS8571Q1Z7",
            "add": "Deepak\n73/199, Shipra Path, Mansarover\nJaipur Rajasthan ",
            "ods": [
                "s306822",
                "s307116",
                "s308286",
                "s308418",
                "s309502"
            ],
            "mn2": "",
            "pin": "302020"
        },
        {
            "id": 230628007,
            "cn": "Dayfimon",
            "mn1": "",
            "gst": "07EUEPP1512C1Z2",
            "add": "",
            "ods": [
                "s306853",
                "s307112",
                "s307650",
                "s307706",
                "s308233"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230628008,
            "cn": "M King Collection",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": "416416"
        },
        {
            "id": 230628009,
            "cn": "Crazy",
            "mn1": "8669583454",
            "gst": "",
            "add": "Indora machine mohalla jaripatka road near hukumchand treders  nagpur",
            "ods": [],
            "mn2": "7743892275",
            "pin": "440014"
        },
        {
            "id": 230629001,
            "cn": "Saumya",
            "mn1": "6386827379",
            "gst": "",
            "add": "House no 2830\nSector 20,B block\nSamuddipur chauraha\nIndra nagar",
            "ods": [
                "s306832"
            ],
            "mn2": "8287069876",
            "pin": "226016"
        },
        {
            "id": 230629002,
            "cn": "Khushboo",
            "mn1": "7506816987",
            "gst": "",
            "add": "Sanket Salaskar \nICICI PRUDENTIAL LIFE INSURANCE COMPANY, \nRani sati marg, beside passport office, Malad east, Mumbai",
            "ods": [],
            "mn2": "8652015187",
            "pin": "400097"
        },
        {
            "id": 230629003,
            "cn": "Hemanshu Jadav",
            "mn1": "7715094526",
            "gst": "",
            "add": "7b/3, chandrakiran, chikuwadi, link road, borivali west, mumbai",
            "ods": [],
            "mn2": "",
            "pin": "400092"
        },
        {
            "id": 230629004,
            "cn": "Nilesh",
            "mn1": "9727449652",
            "gst": "",
            "add": "47, devpushp nagri, kubereshwar marg, dabhoi waghodia ring road, vadodara, Gujarat",
            "ods": [],
            "mn2": "9016237738",
            "pin": "390025"
        },
        {
            "id": 230629005,
            "cn": "Saumya",
            "mn1": "",
            "gst": "09AAHCN2183P1ZT",
            "add": "",
            "ods": [
                "s30741"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230629006,
            "cn": "Amita",
            "mn1": "9933854088",
            "gst": "",
            "add": "Rupak Manna.\nC/o Gangadhar Manna.\nKakdihi, G.p. - Santipur 1\nP.o. - Mecheda,  P.s - Kolaghat.\nDistrict - East Medinipur.\nWest Bengal",
            "ods": [],
            "mn2": "",
            "pin": "721137"
        },
        {
            "id": 230629007,
            "cn": "Nat",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230629008,
            "cn": "Urban Hotspot",
            "mn1": "8638675751",
            "gst": "18EBHPK4832E1ZN",
            "add": "Fatasil ambari, cycle factory road,\nnear fatasil ambari police station",
            "ods": [
                "s306847",
                "s307174",
                "s307604",
                "s309534"
            ],
            "mn2": "",
            "pin": "781025"
        },
        {
            "id": 230629009,
            "cn": "Mahesh",
            "mn1": "9833924411",
            "gst": "",
            "add": "Mahesh Agashe HUF\nA 103, Swaraj Residency, plot no 13, sector 2 ulwe",
            "ods": [],
            "mn2": "9819405221",
            "pin": "410206"
        },
        {
            "id": 230629010,
            "cn": "Mahesh Sharma",
            "mn1": "9895879493",
            "gst": "",
            "add": "Sharmas Avurvedics Pala Road, Ettumanoor P. O Kottavam, Kerala",
            "ods": [],
            "mn2": "8089746448",
            "pin": "686631"
        },
        {
            "id": 230630001,
            "cn": "Dipayan",
            "mn1": "6295876139",
            "gst": "",
            "add": "Dipayan Debnath\nVill-Charswarup ganj, p.o- Gadigachha\nW.B\nNear Jana kalyan Samiti",
            "ods": [],
            "mn2": "7908013858",
            "pin": "741315"
        },
        {
            "id": 230630002,
            "cn": "Shiv",
            "mn1": "8879928328",
            "gst": "",
            "add": "E-301 white field flower valley khadakpada Kalyan West ",
            "ods": [],
            "mn2": "8291721286",
            "pin": "421306"
        },
        {
            "id": 230630003,
            "cn": "Dushyant",
            "mn1": "8955492502",
            "gst": "",
            "add": "25 sanjay nagar b, kalwar road, jhotwara, jaipur . Land mark = behind hotel manohar palace",
            "ods": [],
            "mn2": "",
            "pin": "302012"
        },
        {
            "id": 230630004,
            "cn": "Sumit",
            "mn1": "6003510419",
            "gst": "",
            "add": "Company name-Ferotees clothing\nFull address-Assam hailakandi quarter no 13 circuit house \nState-Assam",
            "ods": [],
            "mn2": "",
            "pin": "788151"
        },
        {
            "id": 230630005,
            "cn": "Abhinav",
            "mn1": "9052857007",
            "gst": "",
            "add": "401 Siri Sadan \nMla and mp colony \nJubliehills \nHyderabad ",
            "ods": [],
            "mn2": "",
            "pin": "500045"
        },
        {
            "id": 230630006,
            "cn": "Ram Narayan",
            "mn1": "8955608027",
            "gst": "",
            "add": "Ram Narayan Godara। Mandir aavas \nVpo chanana dham 4NN\nTehsil Padmpur\nJila shri Ganga nagar , Rajasthan",
            "ods": [],
            "mn2": "",
            "pin": "335041"
        },
        {
            "id": 230630007,
            "cn": "Hash",
            "mn1": "7452998969",
            "gst": "",
            "add": "Near Tyagi Skin Centre, Paniyala Road, Azadnagar, Roorkee Haridwar, Uttarakhand ",
            "ods": [],
            "mn2": "8171684642",
            "pin": "247667"
        },
        {
            "id": 230630008,
            "cn": "Dev",
            "mn1": "9619655706",
            "gst": "",
            "add": "address:\ndebtilok mukherjee\n157F Prince Golam Hossain Shah Road, Jadavpur\nKolkata",
            "ods": [],
            "mn2": "",
            "pin": "700032"
        },
        {
            "id": 230630009,
            "cn": "Arteco",
            "mn1": "9760958091",
            "gst": "09BLJPV0780P2Z4",
            "add": "Anil medical hall,kaachi sadak,Mathura ,Near Masani chauraha",
            "ods": [
                "s306875",
                "s307373",
                "s307918",
                "s3098"
            ],
            "mn2": "",
            "pin": "281001"
        },
        {
            "id": 230630010,
            "cn": "S creation",
            "mn1": "9033021196",
            "gst": "",
            "add": "S Creation\n355b/2\nSector -7A\nGandhinagar Gujarat",
            "ods": [],
            "mn2": "",
            "pin": "382007"
        },
        {
            "id": 230630011,
            "cn": "BHAVANI NX LLP",
            "mn1": "9594424444",
            "gst": "27AAZFB9084A1Z0",
            "add": "120,121,124 Bhavani NX,Dattatray Shopping,\nVasai West Palghar, Parvati talkies",
            "ods": [
                "s306879",
                "s30729",
                "s307181",
                "s307885",
                "s308129",
                "s308359",
                "s308926",
                "s308992",
                "s30968",
                "s30981"
            ],
            "mn2": "8669012683",
            "pin": "401202"
        },
        {
            "id": 230701001,
            "cn": "Abdul",
            "mn1": "8981991657",
            "gst": "",
            "add": "B-413, Sis Safaa Apartments, \nGuduvanchery, Chennai",
            "ods": [],
            "mn2": "",
            "pin": "603202"
        },
        {
            "id": 230701002,
            "cn": "Abhijeet",
            "mn1": "7909614625",
            "gst": "",
            "add": " 21, Pavitra parisar, near signature 360, katara hills barai road, bhopal",
            "ods": [],
            "mn2": "",
            "pin": "462043"
        },
        {
            "id": 230701003,
            "cn": "Hiritik",
            "mn1": "8474942102",
            "gst": "",
            "add": "Muzaffarnagar \nKacchi sadak near by district hospital ",
            "ods": [
                "s307138"
            ],
            "mn2": "",
            "pin": "251001"
        },
        {
            "id": 230701004,
            "cn": "Samuel",
            "mn1": "9061017149",
            "gst": "",
            "add": "Puthupparambil House, Alapra PO, Karikkattoor\nManimala, Kottayam District\nKerala",
            "ods": [],
            "mn2": "7559977254",
            "pin": "686544"
        },
        {
            "id": 230701005,
            "cn": "Shubhangi",
            "mn1": "9560362814",
            "gst": "",
            "add": "1920, street no.3, kailash nagar, Delhi, Near Jain mandir",
            "ods": [],
            "mn2": "",
            "pin": "110031"
        },
        {
            "id": 230701006,
            "cn": "Sanjay",
            "mn1": "8590218003",
            "gst": "",
            "add": "Allalathodi house, kanjirapuzha po, Mundakkunnu, palakkad,Kerala",
            "ods": [],
            "mn2": "",
            "pin": "678591"
        },
        {
            "id": 230701007,
            "cn": "Arpit",
            "mn1": "9950244646",
            "gst": "",
            "add": "Company name- sevenarray\n142b nandpuri colony malviya nagar near 11 sector \nLandmark- opposite sadhana clinic bharu marg ,jaipur",
            "ods": [],
            "mn2": "8003414762",
            "pin": "302017"
        },
        {
            "id": 230701008,
            "cn": "NEW DAY ENTERPRISES",
            "mn1": "",
            "gst": "07AASFN8551H1ZP",
            "add": "",
            "ods": [
                "s30722",
                "s307140",
                "s307528",
                "s30847",
                "s308917",
                "s309445"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230701009,
            "cn": "NEW AMBICA Creation",
            "mn1": "9033168034",
            "gst": "24FDUPS9905N1ZD",
            "add": "13 Laxmi nager soc\nNr-Ashapuri Soc\nBamroli Road Pandesara\nSurat",
            "ods": [
                "s30724"
            ],
            "mn2": "",
            "pin": "394221"
        },
        {
            "id": 230701010,
            "cn": "Arjun Soni",
            "mn1": "7772911447",
            "gst": "",
            "add": "Mosewala Collaction,  jabalpur Madhya Pradesh bada fuhara guru kripa market ( Dilli ka Meena bazar ) ghamandi chowk",
            "ods": [],
            "mn2": "8770535496",
            "pin": "482001"
        },
        {
            "id": 230702001,
            "cn": "Sky Ironman",
            "mn1": "9627836127",
            "gst": "",
            "add": "43,old camp no 5, gulladhala, bylkuppe,\nKUSHALANAGARA",
            "ods": [
                "s308208"
            ],
            "mn2": "",
            "pin": "571104"
        },
        {
            "id": 230702002,
            "cn": "Check",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30736"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230702003,
            "cn": "Sunil",
            "mn1": "7058117329",
            "gst": "",
            "add": " nearby Tulsi tower building ulhasnagar  section 28.",
            "ods": [
                "s307231",
                "s308671"
            ],
            "mn2": "",
            "pin": "421004"
        },
        {
            "id": 230702004,
            "cn": "Rubi",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230702005,
            "cn": "Hitesh",
            "mn1": "9324326811",
            "gst": "",
            "add": "Shop No. 5, Orchid Apartment, Plot No. 145, Sector-44, Seawoods, Navi Mumbai, Landmark- Near S.S. High School",
            "ods": [],
            "mn2": "9082771312",
            "pin": "400706"
        },
        {
            "id": 230702006,
            "cn": "Nandeesh",
            "mn1": "9441543133",
            "gst": "",
            "add": "Plot No. 4, No. 158 2\nMaharudreshwara Nagara, Kempapura main road, Chikkabanavara,\nBangalore.",
            "ods": [],
            "mn2": "8074990808",
            "pin": "560090"
        },
        {
            "id": 230702007,
            "cn": "Sonu",
            "mn1": "8989492999",
            "gst": "",
            "add": "Ward No. 04, Chirawa College ke paas, Chirawa, Jhunjhunun, Chirawa, Rajasthan",
            "ods": [],
            "mn2": "7014295072",
            "pin": "333026"
        },
        {
            "id": 230702008,
            "cn": "Supriya",
            "mn1": "9831608645",
            "gst": "",
            "add": "Madhyamgram Debigarh 2 kolkata North 24\nparganas,",
            "ods": [
                "s30750"
            ],
            "mn2": "",
            "pin": "700129"
        },
        {
            "id": 230702009,
            "cn": "Pallavi",
            "mn1": "8447884453",
            "gst": "",
            "add": "Flat No. 7091,Tower-7,\nATS Triumph\nSector - 104\nGurgaon\nLandmark: Opposite DPS Dwarka Expressway",
            "ods": [],
            "mn2": "7042312626",
            "pin": "122006"
        },
        {
            "id": 230703001,
            "cn": "Skidclub",
            "mn1": "7432008852",
            "gst": "",
            "add": "SkidClub, Barmanpara jaigaon, \nAlipurduar, West Bengal",
            "ods": [
                "s30762",
                "s307355",
                "s308417"
            ],
            "mn2": "8653381660",
            "pin": "736182"
        },
        {
            "id": 230703002,
            "cn": "Nayan Jain",
            "mn1": "9209425125",
            "gst": "",
            "add": "Matru Nivas, Old Bazar Peth, Near Ram Mandir, Neral",
            "ods": [],
            "mn2": "",
            "pin": "410101"
        },
        {
            "id": 230703003,
            "cn": "Joy",
            "mn1": "9980698678",
            "gst": "",
            "add": "Kevin william Martin\n104, Anu Plaza,Ramchandrapura Road,Vidyaranyapura,Bangalore",
            "ods": [
                "s30767"
            ],
            "mn2": "",
            "pin": "560097"
        },
        {
            "id": 230703004,
            "cn": "agly be stud",
            "mn1": "9694358904",
            "gst": "08GFDPP7040P1ZS",
            "add": "Aakash, +91 96943 58904\n\n91a,govind vihar,near shivam children academy,sachivalaya nagar,vatika mod,sitapura,jaipur()",
            "ods": [
                "s30769"
            ],
            "mn2": "8619946403",
            "pin": "302022"
        },
        {
            "id": 230703005,
            "cn": "Khush",
            "mn1": "7497009492",
            "gst": "",
            "add": "house number 348, phase-2,huda sector1, narnaul, harayana ",
            "ods": [],
            "mn2": "",
            "pin": "123001"
        },
        {
            "id": 230703006,
            "cn": "Shaifali",
            "mn1": "9920894623",
            "gst": "",
            "add": "17 101, Sadan sultanabad behram baugh rd, jog West mumbai",
            "ods": [],
            "mn2": "",
            "pin": "400102"
        },
        {
            "id": 230703007,
            "cn": "Ramesh Chaudhary",
            "mn1": "9828443448",
            "gst": "",
            "add": "Shop No. 77 Ganesh Hotel, Opposite Ajmer Line\nJODHPUR",
            "ods": [
                "s30781"
            ],
            "mn2": "",
            "pin": "342003"
        },
        {
            "id": 230703008,
            "cn": "Label By Sharma",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30782"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230703009,
            "cn": "Clothing",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30783"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230703010,
            "cn": "Kamlesh",
            "mn1": "9372268324",
            "gst": "",
            "add": "Near Jai aabe garba mandal,\nShantilal compound,\nKhar east \nMumbai",
            "ods": [],
            "mn2": "8369285993",
            "pin": "400055"
        },
        {
            "id": 230703011,
            "cn": "Nobita And Shizuka",
            "mn1": "6289514374",
            "gst": "19JKZPK3472A1ZL",
            "add": "229/3 Mirpara Road, Bhattanagar,\n Liluah",
            "ods": [
                "s308930",
                "s3081057"
            ],
            "mn2": "7718531468",
            "pin": "711203"
        },
        {
            "id": 230703012,
            "cn": "Psyche",
            "mn1": "9709973451",
            "gst": "",
            "add": "State - bihar\nCity - Bhagalpur \nHome address - Near tiny tots school , ramsar  Geeta Kunj, Tatarpur Road, Kajbeli Chak Bhagalpur",
            "ods": [],
            "mn2": "9852140105",
            "pin": "812004"
        },
        {
            "id": 230703013,
            "cn": "Arnav",
            "mn1": "9910090647",
            "gst": "",
            "add": "Cu 170,pitampura near Du block Gurudwara ",
            "ods": [],
            "mn2": "",
            "pin": "110088"
        },
        {
            "id": 230703014,
            "cn": "Sourav",
            "mn1": "7797006669",
            "gst": "",
            "add": "CO BIREN MALAKAR\nKapileswar , ward no  14 , PO BARAJAGULI ,\nPS Haringhata,\nDis NADIA,\nOpposite kapileswar sishu uddan",
            "ods": [],
            "mn2": "",
            "pin": "741221"
        },
        {
            "id": 230703015,
            "cn": "Monkey",
            "mn1": "9113329985",
            "gst": "",
            "add": "2L 16, Mahatma Gandhi nagar, Kanti factory road, kankarbagh, Patna",
            "ods": [],
            "mn2": "7808956569",
            "pin": "800026"
        },
        {
            "id": 230703016,
            "cn": "Anas",
            "mn1": "7678013992",
            "gst": "",
            "add": "Mankhurd mahada pmg colony \nBuilding no 91 B room no \n407 \nMumbai ",
            "ods": [],
            "mn2": "",
            "pin": "400043"
        },
        {
            "id": 230704001,
            "cn": "Inaaya Enterprises",
            "mn1": "8285801268",
            "gst": "07AXPPA8769A1ZB",
            "add": "C 1/14 A, Basement, Jasola Vihar, Opposite Pocket 11 Gate No -4\nNearest Metro Station Jasola Vihar, Shaheen Bagh",
            "ods": [
                "s308176",
                "s308177",
                "s308528",
                "s309387"
            ],
            "mn2": "9582347121",
            "pin": "110025"
        },
        {
            "id": 230704002,
            "cn": "PC ENTERISES",
            "mn1": "9716731253",
            "gst": "",
            "add": "House no. B-212 street no. 5 Nehru vihar delhi near gaddhe wala school, Near 25 futa road",
            "ods": [],
            "mn2": "",
            "pin": "110094"
        },
        {
            "id": 230704003,
            "cn": "Unknown",
            "mn1": "9950289746",
            "gst": "",
            "add": "magraj suthar \nshop name brand jodhpur , main hudko circle near akhaliya circle,jodhpur",
            "ods": [],
            "mn2": "6378554993",
            "pin": "342001"
        },
        {
            "id": 230704004,
            "cn": "SAVMYA FASHIONS",
            "mn1": "",
            "gst": "09PUKPS0576N1ZD",
            "add": "",
            "ods": [
                "s307110"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230704005,
            "cn": "Uvais",
            "mn1": "8077518168",
            "gst": "09BWEPA5753P1Z2",
            "add": "Near Ratan Petrol Pump, Madina Masjid's Street, Thanabhawan Distt. Shamli (U.P.)",
            "ods": [
                "s307106"
            ],
            "mn2": "",
            "pin": "247777"
        },
        {
            "id": 230704006,
            "cn": "Rohit",
            "mn1": "7974777051",
            "gst": "",
            "add": "B305, omkar meridia, bwing,kurla west, mumbai",
            "ods": [],
            "mn2": "",
            "pin": "400070"
        },
        {
            "id": 230704007,
            "cn": "Akshat",
            "mn1": "9033422350",
            "gst": "",
            "add": "B-402, shankheshwer complex, Op. Shree ram marble, Bharat, Althan road, Surat ",
            "ods": [],
            "mn2": "",
            "pin": "395017"
        },
        {
            "id": 230704008,
            "cn": "Shrinish",
            "mn1": "7420852608",
            "gst": "",
            "add": "A-432 3, Vashi Commercial Plaza, Sector 17, Vashi, Navi Mumbai, Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "400703"
        },
        {
            "id": 230704009,
            "cn": "Krishna",
            "mn1": "7093177909",
            "gst": "",
            "add": "Devadass\nD.no : 4-6-10/3 Gandamalla achamma street, tennerpet,Chittinagar, Vijayawada",
            "ods": [
                "s307115",
                "s307338"
            ],
            "mn2": "7032188628",
            "pin": "520001"
        },
        {
            "id": 230704010,
            "cn": "Tarun",
            "mn1": "9514906730",
            "gst": "",
            "add": "Plot no.3c St Micheal Nagar , Mittanamalli , Avadi, Chennai\nLandmark : Near kv Crpf school avadi",
            "ods": [],
            "mn2": "",
            "pin": "600055"
        },
        {
            "id": 230705001,
            "cn": "Aneesh",
            "mn1": "7558855564",
            "gst": "",
            "add": "Karthika, Pananvila\nPowdikonam, Uliyazhthura P. O Trivadnrum, Kerala,",
            "ods": [
                "s308201"
            ],
            "mn2": "",
            "pin": "695587"
        },
        {
            "id": 230705002,
            "cn": "Tarun",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230705003,
            "cn": "Waseem",
            "mn1": "9602304455",
            "gst": "",
            "add": "The Fiber Fitz\n73, Old Jalupura, behind chhoti masjid, near Chandpole bazaar, Jaipur",
            "ods": [],
            "mn2": "9829060602",
            "pin": "302001"
        },
        {
            "id": 230705004,
            "cn": "Krafterz Print & Media Solution",
            "mn1": "9414187360",
            "gst": "08BMRPM8117Q2Z0",
            "add": "21- A, C- Block, Ashirwad Nagar, Roopsagar Road, Udaipur ( Raj.)",
            "ods": [
                "s307134"
            ],
            "mn2": "",
            "pin": "313001"
        },
        {
            "id": 230705005,
            "cn": "Prashantkumar",
            "mn1": "9910862796",
            "gst": "",
            "add": "Sudama kuni badi khanjarpur bhagalpur, Katahalbari, Khanjarpur, Bhagalpur, Bihar",
            "ods": [],
            "mn2": "9910862796",
            "pin": "812001"
        },
        {
            "id": 230705006,
            "cn": "Sachin",
            "mn1": "8825957341",
            "gst": "",
            "add": "42 23 Shree Flats , Mothilal Street, T.nagar Chennai",
            "ods": [
                "s307806"
            ],
            "mn2": "9176793973",
            "pin": "600017"
        },
        {
            "id": 230705007,
            "cn": "Arnav",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230705008,
            "cn": "Vashu",
            "mn1": "9327383277",
            "gst": "",
            "add": "90,jai bhavani society, near laduba farm, simada gam, surat",
            "ods": [],
            "mn2": "7698434682",
            "pin": "395006"
        },
        {
            "id": 230705009,
            "cn": "Ahmed",
            "mn1": "8340547195",
            "gst": "",
            "add": "MOHD SAGHEER AHMED\n24A, 1ST1ST FLOOR, BRAUNFELD ROW, MOMINPORE KOLKATA",
            "ods": [],
            "mn2": "",
            "pin": "700027"
        },
        {
            "id": 230705010,
            "cn": "Pavan",
            "mn1": "7829843143",
            "gst": "",
            "add": "Anjanadri Nilaya\n1st floor\nGoudar Beedi\nChikkpete\nAt post Tumakuru ",
            "ods": [
                "s307165"
            ],
            "mn2": "",
            "pin": "572101"
        },
        {
            "id": 230705011,
            "cn": "Luqman",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307156"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230705012,
            "cn": "Sandeep Gupta",
            "mn1": "9139349220",
            "gst": "",
            "add": "Geetanagar 3 88 East Part Bamroli Bamroli Surat, Gujarat",
            "ods": [],
            "mn2": "9139349220",
            "pin": "394221"
        },
        {
            "id": 230705013,
            "cn": "Mukul",
            "mn1": "9680270503",
            "gst": "",
            "add": "pacific medical college and hospital bhilo ka bedla udaipur rajasthan",
            "ods": [],
            "mn2": "9649280840",
            "pin": "313011"
        },
        {
            "id": 230705014,
            "cn": "Viswa",
            "mn1": "6381137673",
            "gst": "",
            "add": "37 40 Lal Mohammed cross street chepauk Chennai ",
            "ods": [],
            "mn2": "9952012550",
            "pin": "600005"
        },
        {
            "id": 230706001,
            "cn": "Ajay",
            "mn1": "8005807265",
            "gst": "",
            "add": "13/206\nNehru vihar ,bhilwara (raj.)",
            "ods": [],
            "mn2": "",
            "pin": "311001"
        },
        {
            "id": 230706002,
            "cn": "Insta Print",
            "mn1": "9730047801",
            "gst": "",
            "add": "Shop no G6, Avenue Alpine, Opp Copacabana hotel,\nWakad Hinjwadi Road. Jagtap Dairy, Pune",
            "ods": [],
            "mn2": "",
            "pin": "411027"
        },
        {
            "id": 230706003,
            "cn": "Manager",
            "mn1": "8425021127",
            "gst": "",
            "add": "Rashi Tower 502 Krishna Vatika Marg Nearby Ryan international school And SM fitness gym Goregaon East",
            "ods": [],
            "mn2": "",
            "pin": "400063"
        },
        {
            "id": 230706004,
            "cn": "Ritu",
            "mn1": "8488852681",
            "gst": "",
            "add": "Comfykeeda\nA2 jalashraya bunglows near ganga jamuna society subhanpura Vadodara",
            "ods": [],
            "mn2": "",
            "pin": "390023"
        },
        {
            "id": 230706005,
            "cn": "Anmol Malhotra",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307175"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230706006,
            "cn": "Ganga",
            "mn1": "8093309505",
            "gst": "",
            "add": "Ganga paramesh\nNear mss hall of residence\nNit Rourkela\nRourkela, Odisha",
            "ods": [],
            "mn2": "9110381495",
            "pin": "769008"
        },
        {
            "id": 230706007,
            "cn": "Virendra",
            "mn1": "7972265102",
            "gst": "",
            "add": "Kishor Nagar Near Dr Charpe Clinic\nInfront of Mr Tadas House\nCity :-Amravati \nState:-Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "444606"
        },
        {
            "id": 230706008,
            "cn": "Gurjeevan",
            "mn1": "9696096351",
            "gst": "",
            "add": "D 1 801 Eldico apartment Thana raipurwa",
            "ods": [],
            "mn2": "",
            "pin": "208003"
        },
        {
            "id": 230706009,
            "cn": "Shalini",
            "mn1": "7053343695",
            "gst": "",
            "add": "Address - D-317, DLF Garden City, purseni, raibareli road, Lucknow, Uttar Pradesh",
            "ods": [],
            "mn2": "",
            "pin": "226301"
        },
        {
            "id": 230706010,
            "cn": "Rohit",
            "mn1": "7974777051",
            "gst": "",
            "add": "390A shop no 3, khatiwala tank 3star apartments,",
            "ods": [],
            "mn2": "",
            "pin": "452001"
        },
        {
            "id": 230706011,
            "cn": "T SHIRT VILLE",
            "mn1": "",
            "gst": "24CFLPJ7237N1ZX",
            "add": "",
            "ods": [
                "s307190"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230706012,
            "cn": "Rohit",
            "mn1": "9431220607",
            "gst": "",
            "add": "chondi ,hospital road ward no 7 (barh) patna bihar",
            "ods": [
                "s307191"
            ],
            "mn2": "6201784057",
            "pin": "803213"
        },
        {
            "id": 230706013,
            "cn": "Salo Enio",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307192",
                "s308347"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230706014,
            "cn": "Denash",
            "mn1": "9884952917",
            "gst": "",
            "add": "No-288/6 ,2nd floor\nRaghavan street ,Ayyavoo colony\nAminjikarai \nChennai",
            "ods": [
                "s307193"
            ],
            "mn2": "",
            "pin": "600030"
        },
        {
            "id": 230706015,
            "cn": "Avinash",
            "mn1": "6294014672",
            "gst": "",
            "add": "3rd floor puja apartment, lala lajpat road, sevoke road, siliguri",
            "ods": [
                "s307625"
            ],
            "mn2": "8617071298",
            "pin": "734001"
        },
        {
            "id": 230706016,
            "cn": "Amit",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307197"
            ],
            "mn2": "",
            "pin": "401107"
        },
        {
            "id": 230707001,
            "cn": "Devansh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307201",
                "s307334",
                "s308871"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230707002,
            "cn": "Aarti",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230707003,
            "cn": "Ambika",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": "781019"
        },
        {
            "id": 230707004,
            "cn": "Ethan",
            "mn1": "9033980899",
            "gst": "",
            "add": "“Naklank”\n3-Hanshraj Nagar behind refugee colony Near junction plot \nRajkot",
            "ods": [],
            "mn2": "9978464990",
            "pin": "360001"
        },
        {
            "id": 230707005
        },
        {
            "id": 230707006,
            "cn": "Shivansh",
            "mn1": "9315726500",
            "gst": "",
            "add": "Sachin jain, bfh 120 ground floor, shalimar bagh Delhi",
            "ods": [
                "s307520"
            ],
            "mn2": "",
            "pin": "110088"
        },
        {
            "id": 230707007,
            "cn": "Unknown",
            "mn1": "9987913344",
            "gst": "",
            "add": "Ajonee\nNishant Sachdeva\nDazzle, 5F/40, NIT 5 Faridabad, near mungfali chowk",
            "ods": [],
            "mn2": "7220024024",
            "pin": "121001"
        },
        {
            "id": 230707008,
            "cn": "Snehsis",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307225"
            ],
            "mn2": "",
            "pin": "712617"
        },
        {
            "id": 230707009,
            "cn": "Mauli",
            "mn1": "9999377931",
            "gst": "",
            "add": "Mauli Jain\n43,2nd floor, Shyam enclave, delhi ",
            "ods": [],
            "mn2": "",
            "pin": "110092"
        },
        {
            "id": 230707010,
            "cn": "Kushal",
            "mn1": "7764828258",
            "gst": "",
            "add": "HIMANSHU AGARWAL\nKRISHNA COLLECTION\nMAIN ROAD\nJOGBANI ,Purnia BIHAR",
            "ods": [
                "s307227"
            ],
            "mn2": "",
            "pin": "854328"
        },
        {
            "id": 230707011,
            "cn": "Praveen",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230707012,
            "cn": "Soumy",
            "mn1": "9140332082",
            "gst": "",
            "add": "150 ganga nager, kesa colony, nawabganj Patrakar puram KANPUR, UTTAR PRADESH",
            "ods": [
                "s307233"
            ],
            "mn2": "9839039351",
            "pin": "208002"
        },
        {
            "id": 230707013,
            "cn": "Asiya",
            "mn1": "8019991054",
            "gst": "",
            "add": "H no 10 3 14\nGrace residency\nFlat no 404\nHumayun nagar\nMehdipatnam\nHyderabad\nTelangana",
            "ods": [],
            "mn2": "",
            "pin": "500028"
        },
        {
            "id": 230707014,
            "cn": "Arfan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230707015,
            "cn": "Adarsh",
            "mn1": "7096177038",
            "gst": "",
            "add": "Apna ghar society baman faliya chala vapi Sai Darshan apartment near ganesh building",
            "ods": [
                "s30819"
            ],
            "mn2": "",
            "pin": "396191"
        },
        {
            "id": 230708001,
            "cn": "Ashu",
            "mn1": "9958127432",
            "gst": "",
            "add": "1004, gali no -03\nRavidash colony old\n vijaynagar, Gaziabad \nLandmark - bhardwa TV centre , Gaziabad",
            "ods": [],
            "mn2": "",
            "pin": "201009"
        },
        {
            "id": 230708002,
            "cn": "Shaik",
            "mn1": "7569733024",
            "gst": "",
            "add": "H.no.6-4-15\nPlot no .15\nKohinoor colony\nNeknampur\nRajender Nagar\nOpp khidmathe khalq masjid\nHyderabad ",
            "ods": [
                "s308538"
            ],
            "mn2": "9676795950",
            "pin": "500089"
        },
        {
            "id": 230708003,
            "cn": "Truth and Life",
            "mn1": "9840479098",
            "gst": "33AIQPJ7769K1ZH",
            "add": "18/27 Gandhi Nagar,\nKodambakkam",
            "ods": [
                "s30848",
                "s308852"
            ],
            "mn2": "9952922887",
            "pin": "600024"
        },
        {
            "id": 230708004,
            "cn": "Yashraj",
            "mn1": "9425894679",
            "gst": "",
            "add": "225 panchwati colony, airport road lalghati, bhopal Madhya Pradesh",
            "ods": [
                "s307638"
            ],
            "mn2": "",
            "pin": "462001"
        },
        {
            "id": 230708005,
            "cn": "Mana",
            "mn1": "7001195944",
            "gst": "",
            "add": "hodal Narayanpur rampur \nIandmark.rampur boro kalitala\nCity. sonamukhi \nState.west Bengal",
            "ods": [],
            "mn2": "9733343683",
            "pin": "722207"
        },
        {
            "id": 230708006,
            "cn": "Invang Trade LLP",
            "mn1": "",
            "gst": "16AAJFI8156J1ZY",
            "add": "Plot no. 39, KH No. 33/8, Village Amberhai, Dwarka sector 19, New Delhi,",
            "ods": [
                "s307254"
            ],
            "mn2": "",
            "pin": "110075"
        },
        {
            "id": 230708007,
            "cn": "Prema",
            "mn1": "9343576719",
            "gst": "",
            "add": "MIG 19\nKHB COLONY\nNear madival circle\nBidar\nKarnataka",
            "ods": [],
            "mn2": "",
            "pin": "585401"
        },
        {
            "id": 230708008,
            "cn": "Amudhan",
            "mn1": "8939492620",
            "gst": "",
            "add": "20/1 mambalam high road, lala garden, T.nagar chennai, landmark Near kodambakkam railway station, chennai.",
            "ods": [],
            "mn2": "",
            "pin": "600017"
        },
        {
            "id": 230708009,
            "cn": "Saksham",
            "mn1": "7807705606",
            "gst": "",
            "add": "New colony seribehar, shamshi.\nBhuntar, Himachal Pradesh ",
            "ods": [],
            "mn2": "",
            "pin": "175125"
        },
        {
            "id": 230708010,
            "cn": "Rohit",
            "mn1": "9309798486",
            "gst": "",
            "add": "Rohit Onkar \n2nd Floor, C.S.No. 1683, ‘E’ Ward, Rajarampuri 9th lane, Opp Balaji Colloection, Kolhapur",
            "ods": [],
            "mn2": "7083880563",
            "pin": "416008"
        },
        {
            "id": 230708011,
            "cn": "Jash Agarwal",
            "mn1": "9348482718",
            "gst": "",
            "add": "451/K SHIVPURI CHOWK NOORWALA ROAD, STREET NO. 1,GURUNANAK NAGAR",
            "ods": [],
            "mn2": "9338100948",
            "pin": "141008"
        },
        {
            "id": 230708012,
            "cn": "Dareer Bukhari",
            "mn1": "9797982315",
            "gst": "",
            "add": "Ist lane S.P college Road, Samandar Bagh, Srinagar, Jammu Kashmir",
            "ods": [
                "s307356",
                "s30831"
            ],
            "mn2": "7006033409",
            "pin": "190001"
        },
        {
            "id": 230709001,
            "cn": "Adiba",
            "mn1": "8789290661",
            "gst": "",
            "add": "Zaffar khan \nBazar tad Devi mandap road near bada talab\nKuru, lohardaga\nJharkhand",
            "ods": [],
            "mn2": "",
            "pin": "835213"
        },
        {
            "id": 230709002,
            "cn": "Krittika",
            "mn1": "9124056292",
            "gst": "",
            "add": "Samleipadar Sakhipada\nLandmark: Infront of holycross convent",
            "ods": [
                "s307267",
                "s307522"
            ],
            "mn2": "8917388266",
            "pin": "768001"
        },
        {
            "id": 230709003,
            "cn": "Avani",
            "mn1": "8101721057",
            "gst": "",
            "add": "Little Rangit English School, Goenka Gram, Bijanbari, Darjeeling, West Bengal.",
            "ods": [],
            "mn2": "9775601369",
            "pin": "734201"
        },
        {
            "id": 230709004,
            "cn": "Kesari",
            "mn1": "8929901649",
            "gst": "",
            "add": "02,Kanawani, ahinsha khand 2, indirapuram , ghaziabad",
            "ods": [
                "s307431"
            ],
            "mn2": "",
            "pin": "201012"
        },
        {
            "id": 230709005,
            "cn": "Rahber",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": "273001"
        },
        {
            "id": 230709006,
            "cn": "Vansh",
            "mn1": "9373988120",
            "gst": "",
            "add": "Flat No. 401,4th floor Ramabaug Co Operative Housing Society, pune, Maharashtra",
            "ods": [],
            "mn2": "9767599467",
            "pin": "411030"
        },
        {
            "id": 230709007,
            "cn": "Ayush",
            "mn1": "9069296659",
            "gst": "",
            "add": "C-103,104, New Ashok Nagar ",
            "ods": [],
            "mn2": "9718136060",
            "pin": "110096"
        },
        {
            "id": 230709008,
            "cn": "Bhusuta",
            "mn1": "6284838263",
            "gst": "",
            "add": "Sanguine \nHNo 364 ward no 25 Preet nagar Moga",
            "ods": [
                "s307278"
            ],
            "mn2": "8872400611",
            "pin": "142001"
        },
        {
            "id": 230709009,
            "cn": "Deepak",
            "mn1": "9845863100",
            "gst": "",
            "add": "25, 2nd Cross ,2nd Main Road, Soundarya Layout Siddedahalli, Nagasandra Post, Near Siddeshwara Temple, Bangalore",
            "ods": [],
            "mn2": "9740319027",
            "pin": "560073"
        },
        {
            "id": 230709010,
            "cn": "Vrushali",
            "mn1": "9172802311",
            "gst": "",
            "add": "Padmavati tower flat no 4 amarai ali bhor \nPune maharashtra ",
            "ods": [],
            "mn2": "",
            "pin": "412206"
        },
        {
            "id": 230710001,
            "cn": "Arnab",
            "mn1": "8240949442",
            "gst": "",
            "add": "Arnab Dutta\n A/5 Nivedita Apartment, 30 Chowdhury Para Road, Barasat, North 24 Parganas, West Bengal \nCity: Kolkata",
            "ods": [],
            "mn2": "8282943769",
            "pin": "700124"
        },
        {
            "id": 230710002,
            "cn": "Kritin",
            "mn1": "9024458927",
            "gst": "",
            "add": "D-62 , 1st floor\nmahesh marg, Bapu Nagar, Jaipur, Rajasthan",
            "ods": [],
            "mn2": "7792919891",
            "pin": "302015"
        },
        {
            "id": 230710003,
            "cn": "Bishty",
            "mn1": "8652708319",
            "gst": "",
            "add": "Flat no- 204, Building No- 9A Deep City, usarli khurd, raigad, Maharashtra \nLandmark: Near Gaowdevi Mandir",
            "ods": [],
            "mn2": "9619699032",
            "pin": "410206"
        },
        {
            "id": 230710004,
            "cn": "Harshad",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": "425001"
        },
        {
            "id": 230710005,
            "cn": "Prabhath",
            "mn1": "7028911186",
            "gst": "",
            "add": "Dad Gifts You, \nCharupilavel house, behind kochupally, piravom town, Cochin City, Kerala",
            "ods": [
                "s307306"
            ],
            "mn2": "9172043391",
            "pin": "686664"
        },
        {
            "id": 230710006,
            "cn": "Ritik",
            "mn1": "7377804688",
            "gst": "",
            "add": "Name -- Ritik Barik \nplot no 190 lane 8 soubhagya nagar , baramunda , unit 8 Bhubaneswar\nLandmark-- near world gym ",
            "ods": [],
            "mn2": "9090460468",
            "pin": "751003"
        },
        {
            "id": 230710007,
            "cn": "Srinivas",
            "mn1": "8754339602",
            "gst": "",
            "add": "27/12, Second floor, 21st Nehru colony, Pazhavanthangal, Chennai",
            "ods": [
                "s308927"
            ],
            "mn2": "",
            "pin": "600114"
        },
        {
            "id": 230710008,
            "cn": "Ujaan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307309",
                "s307330"
            ],
            "mn2": "",
            "pin": "700124"
        },
        {
            "id": 230710009,
            "cn": "Avinash",
            "mn1": "8827813898",
            "gst": "",
            "add": " bairam dev ward no.4 , Jagdalpur Chhattisgarh ",
            "ods": [],
            "mn2": "9893835953",
            "pin": "494001"
        },
        {
            "id": 230710010,
            "cn": "Dreamer",
            "mn1": "6295876139",
            "gst": "",
            "add": "Dipayan Debnath\nVill-Charswarup ganj, p.o- Gadigachha\nNear Jana kalyan Samiti",
            "ods": [
                "s307322"
            ],
            "mn2": "7908013858",
            "pin": "741315"
        },
        {
            "id": 230710011,
            "cn": "Sanjay",
            "mn1": "8078604950",
            "gst": "",
            "add": "E 32 Bank CALONY Ambabari, Jaipur\nLandmark - Near ambabari circle",
            "ods": [],
            "mn2": "9521728834",
            "pin": "302039"
        },
        {
            "id": 230710012,
            "cn": "Nikhil",
            "mn1": "7738226795",
            "gst": "",
            "add": "Pestom saagar  retibandar road no 6 ‚Amar mahel chembur nakoda paints traders\nNear pal auto garage",
            "ods": [],
            "mn2": "",
            "pin": "400089"
        },
        {
            "id": 230711001,
            "cn": "Jatin",
            "mn1": "9592179067",
            "gst": "",
            "add": "Hno 21 parkash Nagar jawaddi near Pakhowal road ludhiana punjab",
            "ods": [],
            "mn2": "9779277306",
            "pin": "141013"
        },
        {
            "id": 230711002,
            "cn": "Sneha",
            "mn1": "7764836781",
            "gst": "",
            "add": "SF/Q.no.02, Block - O , Near Kalibari Housing Complex, ghatotand, tisco west bokaro,\nBarughutu, Jharkhand",
            "ods": [],
            "mn2": "",
            "pin": "825314"
        },
        {
            "id": 230711003,
            "cn": "Umanath Haveri",
            "mn1": "8088792576",
            "gst": "",
            "add": "Balaji layout, Mallathalli, 86,8th cross road, bangalore",
            "ods": [],
            "mn2": "",
            "pin": "560056"
        },
        {
            "id": 230711004,
            "cn": "Sandeep",
            "mn1": "8875292594",
            "gst": "",
            "add": "PU/4 Commercial, 50, A.B Road, opposite akash uniforms, behind C21 Mall, Behind C21 Mall, Mega More, Malviya Nagar, Indore, Madhya Pradesh",
            "ods": [],
            "mn2": "",
            "pin": "452010"
        },
        {
            "id": 230711005,
            "cn": "Moovio fashion",
            "mn1": "",
            "gst": "21AAQCM9990E1Z1",
            "add": "",
            "ods": [
                "s307351"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230711006,
            "cn": "Rizwan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307467",
                "s309277"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230711007,
            "cn": "Rajput Enterprises",
            "mn1": "7887889868",
            "gst": "27ASGPR7307F2ZK",
            "add": "Flat no. 4, Amruth Kumbh CHS, Wadavali Section, Near Shivaji nagar police station, Ambernath East, Dist. Thane, Mumbai, Maharashtra",
            "ods": [
                "s307353",
                "s307466"
            ],
            "mn2": "",
            "pin": "421501"
        },
        {
            "id": 230711008,
            "cn": "Mohit",
            "mn1": "7359152718",
            "gst": "",
            "add": "Q-502 Laxmi villa 2 near Haridarshan cross road Nava Naroda Ahmedabad ",
            "ods": [],
            "mn2": "",
            "pin": "380024"
        },
        {
            "id": 230711009,
            "cn": "Jay shah",
            "mn1": "7506307505",
            "gst": "",
            "add": "17, 6th cross, magadi main road, near Bajaj showroom, Kamakshipalya police station, Bangalore ",
            "ods": [],
            "mn2": "",
            "pin": "560079"
        },
        {
            "id": 230711010,
            "cn": "Yash",
            "mn1": "9381456793",
            "gst": "",
            "add": "75 Suncity manjalpur Vadodara",
            "ods": [],
            "mn2": "9963202227",
            "pin": "390011"
        },
        {
            "id": 230711011,
            "cn": "Arpan",
            "mn1": "7002298093",
            "gst": "",
            "add": "Arpan Chettri\nKatiram Mikir Path, House No 17\nJaporigog, Guwahati(Kamrup Metro) Assam\n\nLandmark: Near Bhogali Jalpan",
            "ods": [],
            "mn2": "6913328956",
            "pin": "781005"
        },
        {
            "id": 230712001,
            "cn": "Ajay",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308436"
            ],
            "mn2": "",
            "pin": "132103"
        },
        {
            "id": 230712002,
            "cn": "Paru",
            "mn1": "7356405995",
            "gst": "",
            "add": "Murali sadhanm Earam Chathannoor kollam",
            "ods": [],
            "mn2": "",
            "pin": "691572"
        },
        {
            "id": 230712003,
            "cn": "Rosario",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307366"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230712004,
            "cn": "Prince",
            "mn1": "8791967877",
            "gst": "",
            "add": "Vishnu lok colony jwalapur haridwar",
            "ods": [
                "s309113"
            ],
            "mn2": "",
            "pin": "249407"
        },
        {
            "id": 230712005,
            "cn": "Syed",
            "mn1": "9347960083",
            "gst": "",
            "add": "17-1-93/b/4,RC Nagar, edi bazaar, charminar, Hyderabad",
            "ods": [],
            "mn2": "9133437545",
            "pin": "500023"
        },
        {
            "id": 230712006,
            "cn": "Ajinkya",
            "mn1": "8983117728",
            "gst": "",
            "add": "Ajinkya Ghodeswar, The Greater Kailash Nagar ,Near  new bypass, Amravati, Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "444606"
        },
        {
            "id": 230712007,
            "cn": "Final Stand",
            "mn1": "9740915675",
            "gst": "",
            "add": "508 railway layout 2nd stage 2nd main 3rd cross Ullal road ,bhavaninagar, Bangalore\nLandmark: Vidyaniketan Public School\n",
            "ods": [],
            "mn2": "7349515321",
            "pin": "560056"
        },
        {
            "id": 230712008,
            "cn": "Nawaj",
            "mn1": "8983887663",
            "gst": "",
            "add": "Nawaz Rashid Sayyed\nF No-04;Nazim Appt; Khode Nagar NR Armaan Resl Nashik  (M Corp)\nCity :Nashik",
            "ods": [],
            "mn2": "",
            "pin": "422006"
        },
        {
            "id": 230712009,
            "cn": "Gaurav",
            "mn1": "7249313377",
            "gst": "",
            "add": "Flat no. 7, Sai Apartment, Vitthalwadi, Akurdi, Pune, Maharashtra,",
            "ods": [
                "s307380"
            ],
            "mn2": "",
            "pin": "411035"
        },
        {
            "id": 230712010,
            "cn": "Deekshit",
            "mn1": "9550097912",
            "gst": "",
            "add": "Flat-407,\nAadharana Brindhava apartment,\nNeeruganti street,\nOLD TOWN.\nAnantapur,.",
            "ods": [],
            "mn2": "",
            "pin": "515001"
        },
        {
            "id": 230712011,
            "cn": "BISWAS INDUSTRIES",
            "mn1": "8017818148",
            "gst": "19ARUPB7380H1Z9",
            "add": "36 Naren Sarkar Road,\n Behala Sakherbazar",
            "ods": [
                "s30838",
                "s3081072",
                "s3081128",
                "s309105",
                "s309111",
                "s309285",
                "s309383",
                "s309506"
            ],
            "mn2": "",
            "pin": "700008"
        },
        {
            "id": 230712012,
            "cn": "Wan Production",
            "mn1": "9774100504",
            "gst": "",
            "add": "Wanbah Lyngdoh\nBuilding Name: Sweetday Restaurant \nNONGPOH, Ri-Bhoi district \nMeghalaya",
            "ods": [],
            "mn2": "8014163433",
            "pin": "793102"
        },
        {
            "id": 230712013,
            "cn": "Reyan",
            "mn1": "9321829669",
            "gst": "",
            "add": "Om Shivam bldg 3rd Floor, Room no A-302 Damber Compound, opp Ongc Bldg, near life care hospital sion-bandra link road dharavi mumbai",
            "ods": [
                "s307389"
            ],
            "mn2": "",
            "pin": "400017"
        },
        {
            "id": 230712014,
            "cn": "Aalkaran",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307390"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230712015,
            "cn": "Sharandeep",
            "mn1": "8885123247",
            "gst": "",
            "add": "B.SHARANDEEP\nT.R.T-16-12-47\nLABOUR COLONY\nNARSAMPET ROAD WARANGAL\nTELANGANA STATE",
            "ods": [],
            "mn2": "",
            "pin": "506013"
        },
        {
            "id": 230712016,
            "cn": "Abbas",
            "mn1": "9199695197",
            "gst": "",
            "add": "Abbas Sajjad \n609, Crystal Centre, Raheja Vihar ,Chandivali, Andheri East , mumbai",
            "ods": [],
            "mn2": "",
            "pin": "400072"
        },
        {
            "id": 230713001,
            "cn": "Nanhu",
            "mn1": "9847082454",
            "gst": "",
            "add": "Vishnunandanan e Babu\nEyyanikkattil house\nKallampara\nPanagattukara p.o\nThrissur",
            "ods": [],
            "mn2": "",
            "pin": "680623"
        },
        {
            "id": 230713002,
            "cn": "DA SUSTAINABLE AND SMART ECOSYSTEM PRIVATE",
            "mn1": "",
            "gst": "09AAHCD4076H1ZG",
            "add": "",
            "ods": [
                "s307399"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230713003,
            "cn": "Mufid Mohammad",
            "mn1": "8848511919",
            "gst": "",
            "add": "MAAZ’, kodungoth paramba, near AWH special college,P.O kallai,calicut, kerala,india",
            "ods": [],
            "mn2": "9895357579",
            "pin": "673003"
        },
        {
            "id": 230713004,
            "cn": "Rajesh",
            "mn1": "8890238141",
            "gst": "",
            "add": "\nKsons\nNew link road\nBehind takiya chand shah market, Jodhpur, Rajasthan",
            "ods": [],
            "mn2": "",
            "pin": "342001"
        },
        {
            "id": 230713005,
            "cn": "Avinash",
            "mn1": "9725229055",
            "gst": "",
            "add": "302 sarjan appartment near eme circle, fatehgunj, Vadodara, Gujarat",
            "ods": [],
            "mn2": "",
            "pin": "390002"
        },
        {
            "id": 230713006,
            "cn": "Sanket",
            "mn1": "9137975415",
            "gst": "27BTDPG3225J1ZU",
            "add": "b-25 simple chs, beside chirayu hospital , manpada road Dombivli east",
            "ods": [
                "s307406"
            ],
            "mn2": "",
            "pin": "421201"
        },
        {
            "id": 230713007,
            "cn": "PrabhSimran",
            "mn1": "7319623183",
            "gst": "",
            "add": "Amrit Kaur\n19+19 A road no.2 Ramdas bhatta Bistupur,Jamshedpur jharkhand",
            "ods": [
                "s307413",
                "s307695",
                "s308702"
            ],
            "mn2": "",
            "pin": "831001"
        },
        {
            "id": 230713008,
            "cn": "Yanger",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230713009,
            "cn": "Yogesh",
            "mn1": "9827382085",
            "gst": "",
            "add": "Pehchan garments in Prem nagar gurudwara next to Shankar medical . Madan Mahal Gupteshwar Ward JABALPUR Madhya Pradesh",
            "ods": [],
            "mn2": "6264790979",
            "pin": "482001"
        },
        {
            "id": 230713010,
            "cn": "Ansh",
            "mn1": "8279459816",
            "gst": "",
            "add": "67/7 Shastri Nagar Meerut, up",
            "ods": [],
            "mn2": "",
            "pin": "250004"
        },
        {
            "id": 230713011,
            "cn": "Beni",
            "mn1": "6376213165",
            "gst": "",
            "add": "2Floor, 4159\nAnsal Versalia, Sector 67-A\nGurgaon, Haryana ",
            "ods": [],
            "mn2": "",
            "pin": "122101"
        },
        {
            "id": 230713012,
            "cn": "Swyam",
            "mn1": "7869927798",
            "gst": "",
            "add": "Smjv mahajan wadi sandhurst road near dongri Petrol pump mumbia",
            "ods": [],
            "mn2": "",
            "pin": "400004"
        },
        {
            "id": 230713013,
            "cn": "Arya Garg",
            "mn1": "9997890889",
            "gst": "",
            "add": "House no 2, janakpuri 2, karamyogi, kamla nagar,\nAgra",
            "ods": [
                "s307424"
            ],
            "mn2": "",
            "pin": "282005"
        },
        {
            "id": 230713014,
            "cn": "Prithwi",
            "mn1": "7908669521",
            "gst": "",
            "add": "Amarkanan , Dist - Bankura , Near Durgamandir , road k side pe ,  West Bengal",
            "ods": [],
            "mn2": "",
            "pin": "722133"
        },
        {
            "id": 230713015,
            "cn": "Tiku",
            "mn1": "9131403157",
            "gst": "",
            "add": "Birgaon raipur cg, Behind Gupta sweet, Birgaon main road",
            "ods": [],
            "mn2": "9111577522",
            "pin": "493221"
        },
        {
            "id": 230713016,
            "cn": "Himanshu Rai",
            "mn1": "7067450770",
            "gst": "",
            "add": "14/15 siddhi vinayak suraj nagar,\nsagar tal cauraha",
            "ods": [
                "s308826",
                "s308887"
            ],
            "mn2": "",
            "pin": "474012"
        },
        {
            "id": 230713017,
            "cn": "Rudra",
            "mn1": "7016221454",
            "gst": "",
            "add": "157/11 Pankajnagar society opposite Lord Krishna society, Palanpur jakatnaka road, Surat",
            "ods": [
                "s308898"
            ],
            "mn2": "8780858983",
            "pin": "395009"
        },
        {
            "id": 230713018,
            "cn": "Amol",
            "mn1": "8591878004",
            "gst": "",
            "add": "Plot no 561 room no A1 Shankar society near Charkop deepo,Charkop Kandivali West",
            "ods": [],
            "mn2": "",
            "pin": "400067"
        },
        {
            "id": 230714001,
            "cn": "Hood Dude",
            "mn1": "7695830318",
            "gst": "",
            "add": "hood dude's\nJACK CHRISTO\n12b samirviyas nagar ,thalamuthunagar RC school backside tuticorin Tamil Nadu",
            "ods": [
                "s307432"
            ],
            "mn2": "",
            "pin": "628002"
        },
        {
            "id": 230714002,
            "cn": "Alter Fine",
            "mn1": "7023545658",
            "gst": "",
            "add": "GAUTAM DANGWAL Chowk No. 3, Athoorwala Doiwala, Dehradun Dehradun Uttarakhand",
            "ods": [
                "s307433"
            ],
            "mn2": "",
            "pin": "248145"
        },
        {
            "id": 230714003,
            "cn": "Jaco Lama",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307523"
            ],
            "mn2": "",
            "pin": "734010"
        },
        {
            "id": 230714004,
            "cn": "Arman",
            "mn1": "9315337831",
            "gst": "",
            "add": "lazzyfox\nB-7/74 3rd floor sector-17,Rohini,Delhi",
            "ods": [],
            "mn2": "7042910117",
            "pin": "110089"
        },
        {
            "id": 230714005,
            "cn": "SNP Enterprises",
            "mn1": "8779168708",
            "gst": "27ACQFS0523E1Z6",
            "add": "1st Floor,Tirtha Industrial,Plot13,Sativali Rd,\nWalivPhata,Vasai East,Behind Laxmi Industrial",
            "ods": [
                "s307532",
                "s30825",
                "s308294",
                "s308535",
                "s308562",
                "s3081107"
            ],
            "mn2": "",
            "pin": "401208"
        },
        {
            "id": 230714006,
            "cn": "Sunder",
            "mn1": "8072335267",
            "gst": "",
            "add": "113/53, BB Road 4th Lane, Vyasarpadi, Tamilnadu,Chennai",
            "ods": [],
            "mn2": "8148158448",
            "pin": "600039"
        },
        {
            "id": 230714007,
            "cn": "Debashish",
            "mn1": "7077670849",
            "gst": "",
            "add": "patia kp-4 near koel campus , Odisha Bhubneswar",
            "ods": [],
            "mn2": "7855967578",
            "pin": "751025"
        },
        {
            "id": 230714008,
            "cn": "Happiness Store",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307448",
                "s308115"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230714009,
            "cn": "Gagan",
            "mn1": "8174066469",
            "gst": "",
            "add": "Gagan Kandel\nSakshi Mobile Center, \nMain Road Sonauli,\nMaharajganj (UP East",
            "ods": [],
            "mn2": "",
            "pin": "273164"
        },
        {
            "id": 230714010,
            "cn": "BEHL Enterprises",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230714011,
            "cn": "Dhun",
            "mn1": "9395323274",
            "gst": "",
            "add": "downtown kk handique path,guwahati,assam",
            "ods": [],
            "mn2": "",
            "pin": "781006"
        },
        {
            "id": 230714012,
            "cn": "Ishant",
            "mn1": "9322757315",
            "gst": "",
            "add": "Luis x omerta \nKharbhi chock nagpur beside my chota school ",
            "ods": [],
            "mn2": "8669073451",
            "pin": "440009"
        },
        {
            "id": 230714013,
            "cn": "Afzal",
            "mn1": "9064606810",
            "gst": "",
            "add": "Nimcha Colliery 4no\n 13/105\nRaniganj\npaschim Burdwan",
            "ods": [
                "s307455"
            ],
            "mn2": "8617543498",
            "pin": "713337"
        },
        {
            "id": 230715001,
            "cn": "Lovish",
            "mn1": "9041333375",
            "gst": "",
            "add": "806A,mona aeroview,swastik vihar,zirakpur",
            "ods": [],
            "mn2": "",
            "pin": "140603"
        },
        {
            "id": 230715002,
            "cn": "Sourav",
            "mn1": "7003699825",
            "gst": "",
            "add": "KAPILESWAR , \nward no - 14, Opposite kapileswar sishu uddan, NADIA , police station  HARINGHARA\nPost office - BARAJAGULI",
            "ods": [],
            "mn2": "7797006669",
            "pin": "741221"
        },
        {
            "id": 230715003,
            "cn": "Sparsh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307461"
            ],
            "mn2": "",
            "pin": "226004"
        },
        {
            "id": 230715004,
            "cn": "Ayush",
            "mn1": "9602676104",
            "gst": "",
            "add": "Naruka homes,girdhar marg,malviya nagar sector 5, JAIPUR",
            "ods": [
                "s307462"
            ],
            "mn2": "",
            "pin": "302017"
        },
        {
            "id": 230715005,
            "cn": "Shan Jatin",
            "mn1": "7374955605",
            "gst": "",
            "add": "Shyam choudhary \nJp circle bhankrota jaipur Mukundpura road near ayush hospital ",
            "ods": [],
            "mn2": "7568972168",
            "pin": "302026"
        },
        {
            "id": 230715006,
            "cn": "A Myth",
            "mn1": "9975309669",
            "gst": "",
            "add": "Studio RAW, Town Centre,\nPlot No: 232, Sector-B, \nN-1 , CIDCO, Aurangabad , MH",
            "ods": [
                "s30879"
            ],
            "mn2": "8484033188",
            "pin": "431001"
        },
        {
            "id": 230715007,
            "cn": "Gibin",
            "mn1": "6282578205",
            "gst": "",
            "add": "Gibin Samuel\nKilikalayil House \nPulloopram PO \nVaravoor, Ranny \nPathanamthitta , Kerala",
            "ods": [],
            "mn2": "9744839287",
            "pin": "689674"
        },
        {
            "id": 230715008,
            "cn": "Luminous Luxe",
            "mn1": "7838696929",
            "gst": "",
            "add": "1/7753 east gorakh park shahdra delhi",
            "ods": [
                "s307473",
                "s30855",
                "s308733"
            ],
            "mn2": "",
            "pin": "110032"
        },
        {
            "id": 230715009,
            "cn": "Blackkbird outfit",
            "mn1": "9116114897",
            "gst": "08BWKPJ9755J1ZR",
            "add": "Deepak jangid\n73/199, near tagore hospital, shipra path, mansarovar, Jaipur-302020 (raj.)",
            "ods": [
                "s307477",
                "s308259",
                "s308406",
                "s3081154",
                "s309185",
                "s309212",
                "s309495"
            ],
            "mn2": "",
            "pin": "302020"
        },
        {
            "id": 230715010,
            "cn": "Archana",
            "mn1": "7417091071",
            "gst": "",
            "add": "SP Singh, 107 brij dwarika colony paschimpuri sikandra agra",
            "ods": [],
            "mn2": "",
            "pin": "282007"
        },
        {
            "id": 230715011,
            "cn": "Aniket",
            "mn1": "9064109774",
            "gst": "",
            "add": "R.R Enterprise\nBowbazar West Lane\nMongla Para, Krishnanagar Nadia\nNear City Queen Builders",
            "ods": [],
            "mn2": "8967521903",
            "pin": "741101"
        },
        {
            "id": 230715012,
            "cn": "Shri Radhey",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307486"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230715013,
            "cn": "Rayan",
            "mn1": "9650498991",
            "gst": "",
            "add": "C-38 10th floor DDA HIG flats Pocket 9A Jasola, Delhi",
            "ods": [],
            "mn2": "",
            "pin": "110025"
        },
        {
            "id": 230716001,
            "cn": "Chitwan",
            "mn1": "6307802159",
            "gst": "",
            "add": "128/767, K-block, kidwai nagar , kanpur, UTTAR PRADESH",
            "ods": [],
            "mn2": "8299633080",
            "pin": "208011"
        },
        {
            "id": 230716002,
            "cn": "Riddhi",
            "mn1": "8585924254",
            "gst": "",
            "add": "Plot no 52/2 khodiyar park society, mayur town ship gate, Ranjit Sagar road , jamanagar Gujarat",
            "ods": [],
            "mn2": "7011619344",
            "pin": "361005"
        },
        {
            "id": 230716003,
            "cn": "Shiv",
            "mn1": "8668998451",
            "gst": "",
            "add": "Shubhada dhore\nOm krupa building newr maruti mandir Old sangvi pune Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "411027"
        },
        {
            "id": 230716004,
            "cn": "Shubham Jain",
            "mn1": "9406900025",
            "gst": "",
            "add": "03 the lords, Laxmi parisar, near  urban restaurant, gulmohar, bhopal, M.P.",
            "ods": [],
            "mn2": "8839067253",
            "pin": "462039"
        },
        {
            "id": 230716005,
            "cn": "Sangeeta",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230716006,
            "cn": "Suman Moktan",
            "mn1": "9933380003",
            "gst": "",
            "add": " Yash Shree Residency, Bhagajatin Main Road, Dhup Company, Near Kanchanjanga Club, Pradhannagar, Siliguri,Dist. Darjeeling, West Bengal",
            "ods": [],
            "mn2": "",
            "pin": "734003"
        },
        {
            "id": 230716007,
            "cn": "Jaya",
            "mn1": "9353655148",
            "gst": "",
            "add": "Rohan \nKarnataka ramanagara\nRayaradodhi arch ramanagara",
            "ods": [
                "s307501"
            ],
            "mn2": "8660662066",
            "pin": "562159"
        },
        {
            "id": 230716008,
            "cn": "Movin",
            "mn1": "8668843316",
            "gst": "",
            "add": "Dupyamol bhatpal canacona goa \nLand mark mount view apartment ",
            "ods": [],
            "mn2": "",
            "pin": "403702"
        },
        {
            "id": 230716009,
            "cn": "Mayuresh",
            "mn1": "9049938339",
            "gst": "",
            "add": "Company Name: Hubble Flow\n 302/B, Saterimal Nirankal Ponda Goa \nLandmark: Near Gananath Temple",
            "ods": [],
            "mn2": "9518306084",
            "pin": "403401"
        },
        {
            "id": 230716010,
            "cn": "Pritam",
            "mn1": "8208512097",
            "gst": "",
            "add": "Rx 6/30 Yashashri colony, Jyotirling provision\nAyodhyanagar, Waluj, Aurangabad",
            "ods": [
                "s307515"
            ],
            "mn2": "8007482331",
            "pin": "431136"
        },
        {
            "id": 230716011,
            "cn": "Vedant",
            "mn1": "9810338062",
            "gst": "",
            "add": "3218/31 karol bagh, beadon pura \nNew delhi",
            "ods": [],
            "mn2": "",
            "pin": "110005"
        },
        {
            "id": 230716012,
            "cn": "Aamir",
            "mn1": "8923202536",
            "gst": "",
            "add": "C45, C block,Sector 63\nNoida",
            "ods": [],
            "mn2": "",
            "pin": "201301"
        },
        {
            "id": 230716013,
            "cn": "Asha",
            "mn1": "9515737285",
            "gst": "",
            "add": " G2, DYR SAI TOWERS, Erragadda, behind Gokul theatre, Hyderabad",
            "ods": [],
            "mn2": "",
            "pin": "500018"
        },
        {
            "id": 230716014,
            "cn": "Raj",
            "mn1": "7076359440",
            "gst": "",
            "add": "Vill+po:- Chaspara(Sujapur), police station-Kaliachak,  district- Malda, state- West Bengal",
            "ods": [],
            "mn2": "",
            "pin": "732206"
        },
        {
            "id": 230717001,
            "cn": "Shriyash Enterprises",
            "mn1": "9554210777",
            "gst": "09AGYPG4649K1ZJ",
            "add": "3B, DADA NAGAR CO-OPERATIVE INDUSTRIAL ESTATE, KANPUR U.P INDIA",
            "ods": [],
            "mn2": "",
            "pin": "208022"
        },
        {
            "id": 230717002,
            "cn": "Shovan",
            "mn1": "9874874420",
            "gst": "",
            "add": "48/1 Old Nimta Road, Belghoria, Kolkata.\nFlat- Bina Pani Bhavan\nFloor- 2nd floor, Near Bidhan Jewellers",
            "ods": [
                "s307529",
                "s308778",
                "s309471"
            ],
            "mn2": "",
            "pin": "700056"
        },
        {
            "id": 230717003,
            "cn": "Chakri",
            "mn1": "9494469680",
            "gst": "",
            "add": "Eda Vidya Sekhar\nD.No - 16/6-1,Nalla Krishna veni colony,Tanuku,West Godavari,Andhra Pradesh",
            "ods": [
                "s30837",
                "s308298"
            ],
            "mn2": "9494527211",
            "pin": "534211"
        },
        {
            "id": 230717004,
            "cn": "Genesis",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307599"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230717005,
            "cn": "Shiv Craft",
            "mn1": "9316600090",
            "gst": "",
            "add": "shiv craft udyog vihar bhattian ludhiana, Near dashmesh petrol pump",
            "ods": [],
            "mn2": "",
            "pin": "141008"
        },
        {
            "id": 230717006,
            "cn": "Nikhil Bhagwat",
            "mn1": "7083538955",
            "gst": "",
            "add": "C-1006, Gloria grace apartments , bhugaon road, in front of ambrosia resorts bavdhan, Pranjali Patil Nagar, Bavdhan, Pune, Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "411021"
        },
        {
            "id": 230717007,
            "cn": "Richu",
            "mn1": "9961465555",
            "gst": "",
            "add": " alzaarcade nilambur, Malappuram, kerala",
            "ods": [],
            "mn2": "",
            "pin": "679330"
        },
        {
            "id": 230717008,
            "cn": "Shoaib",
            "mn1": "9598467993",
            "gst": "",
            "add": "B77, (Basement -2),Tej Kumar plaza, Hazratganj, Lucknow\nLandmark -  Near Darul Shafa",
            "ods": [],
            "mn2": "6306069542",
            "pin": "226001"
        },
        {
            "id": 230717009,
            "cn": "Aluminum",
            "mn1": "9862558277",
            "gst": "",
            "add": "Full Address:\nMunguli Sangtam\nHouse no. 17, Lane-5, \nAoyimti village, 2.5 Mile,\nDimapur Nagaland ",
            "ods": [
                "s307550"
            ],
            "mn2": "6909182613",
            "pin": "797115"
        },
        {
            "id": 230717010,
            "cn": "Aditya",
            "mn1": "9922481459",
            "gst": "",
            "add": "Tower No. 11a, Flat No. 2201, Aspire Towers, Amanora Park Town, Hadapsar",
            "ods": [],
            "mn2": "9322609231",
            "pin": "411028"
        },
        {
            "id": 230717011,
            "cn": "FATHIMA",
            "mn1": "9880624193",
            "gst": "",
            "add": "Imdadulla shariff\n7/1 , 1st \ncross ,kaverinagar ,Bengaluru",
            "ods": [],
            "mn2": "",
            "pin": "560032"
        },
        {
            "id": 230717012,
            "cn": "Nandish",
            "mn1": "9023772250",
            "gst": "",
            "add": "122 dayalji park society near lichi farm\nAlthan\nSurat\nGujarat",
            "ods": [],
            "mn2": "",
            "pin": "395017"
        },
        {
            "id": 230718001,
            "cn": "Rahul",
            "mn1": "7706975316",
            "gst": "",
            "add": " Bardhi Bazar ,Shyam vihar colony,Post Purani ,Basti",
            "ods": [],
            "mn2": "",
            "pin": "272002"
        },
        {
            "id": 230718002,
            "cn": "Mohammed Luqman",
            "mn1": "7704170890",
            "gst": "",
            "add": "2637 OLD HAPEVILLE RD SW\nCOLONIAL SQUARE APARTMENTS 13H\nATLANTA, GA 30315-8265\nUnited States",
            "ods": [
                "s307566",
                "s307644"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230718003,
            "cn": "Jai",
            "mn1": "8800567537",
            "gst": "",
            "add": "95/133, Hulimangala Village Near Hulimangala Post office, Jigni Hobli, Anekal Taluk, Bangalore",
            "ods": [],
            "mn2": "",
            "pin": "560105"
        },
        {
            "id": 230718004,
            "cn": "Splish",
            "mn1": "8976396242",
            "gst": "",
            "add": "Models Legacy 3f2 Taleigao \nNear Scoda Showroom\nGoa",
            "ods": [
                "s307570"
            ],
            "mn2": "",
            "pin": "403001"
        },
        {
            "id": 230718005,
            "cn": "Tarun Datta",
            "mn1": "9493936667",
            "gst": "",
            "add": "16-115/4/1,vandanapuri Colony, Road no 2, Beeramguda, Ameenpur mandal, Sangareddy district, Telangana",
            "ods": [],
            "mn2": "",
            "pin": "502032"
        },
        {
            "id": 230718006,
            "cn": "Vivek Rana",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s3081047"
            ],
            "mn2": "",
            "pin": "173001"
        },
        {
            "id": 230718007,
            "cn": "Ahaan",
            "mn1": "7975936542",
            "gst": "",
            "add": "Aswad medical fayazabad kankanagar bangalore",
            "ods": [],
            "mn2": "8496955264",
            "pin": "560078"
        },
        {
            "id": 230718008,
            "cn": "Vijay",
            "mn1": "9884057777",
            "gst": "",
            "add": "Empire Sons \n74, Godown Street\n2nd floor Amex Arcade\nChennai.\nIndia.",
            "ods": [],
            "mn2": "",
            "pin": "600001"
        },
        {
            "id": 230718009,
            "cn": "Wahab",
            "mn1": "8657431313",
            "gst": "",
            "add": "Sr.42 flat 305 milap manzil opp savera park near baitul ulum madrasa , shital petrol pump Kondhwa khurd pune",
            "ods": [],
            "mn2": "",
            "pin": "411048"
        },
        {
            "id": 230718010,
            "cn": "Sonu",
            "mn1": "8383053971",
            "gst": "",
            "add": "TINSUKIA , Rangagora Road Near Ultra Lab - Shashi Complex - Assam . \n3rd floor - Room No - 3B",
            "ods": [
                "s308370"
            ],
            "mn2": "",
            "pin": "786125"
        },
        {
            "id": 230718011,
            "cn": "Sohell",
            "mn1": "6309866355",
            "gst": "",
            "add": "1-5-28 jublie market Kazipet near Jama masjid",
            "ods": [],
            "mn2": "9885134309",
            "pin": "506003"
        },
        {
            "id": 230718012,
            "cn": "Khyentse",
            "mn1": "7838896544",
            "gst": "",
            "add": "Khyentse Wangdi Topgay\n2nd floor Tinkitam building, MM Rasaily Road, Gangtok, East Sikkim",
            "ods": [
                "s307764"
            ],
            "mn2": "",
            "pin": "737101"
        },
        {
            "id": 230719001,
            "cn": "Shubham Dixit",
            "mn1": "8564914509",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230719002,
            "cn": "Sayyid International",
            "mn1": "9360090115",
            "gst": "",
            "add": "Dharmapuri (DT), Pappireddi Patti (TK), Bommidi (VL), B.Thurinjipatti (PO), EB Office Naal Road, Near Old VMP School,No- 1/26",
            "ods": [],
            "mn2": "8668151532",
            "pin": "635301"
        },
        {
            "id": 230719003,
            "cn": "Yash Raj Verma",
            "mn1": "7976317474",
            "gst": "",
            "add": "298,path no.6 vijaybari,sikar road,jaipur",
            "ods": [],
            "mn2": "9660457545",
            "pin": "302039"
        },
        {
            "id": 230719004,
            "cn": "Susant",
            "mn1": "7008583960",
            "gst": "",
            "add": "mig48,laneno3, near shanimandir, HIG Colony, \nNeeladri Vihar, Chandrasekharpur",
            "ods": [],
            "mn2": "7008768837",
            "pin": "751021"
        },
        {
            "id": 230719005,
            "cn": "Karan",
            "mn1": "7060046688",
            "gst": "",
            "add": "Flat no 703 Hari Kunj app next to Bajaj showroom jai bhavani road Nashik road Nashik Maharashtra India ",
            "ods": [],
            "mn2": "",
            "pin": "422101"
        },
        {
            "id": 230719006,
            "cn": "Mohit",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307597"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230719007,
            "cn": "Shaikh",
            "mn1": "8652744876",
            "gst": "",
            "add": "Room1499,Gate no 6,BMC Colony\nMalwani Malad West,opposite Holy Angel School",
            "ods": [
                "s30889"
            ],
            "mn2": "7738854505",
            "pin": "400095"
        },
        {
            "id": 230719008,
            "cn": "Shadab",
            "mn1": "7044539117",
            "gst": "",
            "add": "2nd floor\n95/18/1 KABI SUKANTA SARANI\nLP-62/18\nKolkata ",
            "ods": [],
            "mn2": "",
            "pin": "700085"
        },
        {
            "id": 230719009,
            "cn": "Anurag Tiwari",
            "mn1": "9582861810",
            "gst": "",
            "add": "727/7 govind Puri kalka ji New Delhi",
            "ods": [],
            "mn2": "",
            "pin": "110019"
        },
        {
            "id": 230719010,
            "cn": "Qadir",
            "mn1": "9599230602",
            "gst": "",
            "add": "9 number pilkhana 2nd by lane howrah(West Bengal)",
            "ods": [],
            "mn2": "",
            "pin": "711101"
        },
        {
            "id": 230719011,
            "cn": "Digitalyogi",
            "mn1": "8010918013",
            "gst": "",
            "add": "E-201 MCD Colony Azadpur Delhi Nearby Azadpur metro station ",
            "ods": [],
            "mn2": "8448338013",
            "pin": "110033"
        },
        {
            "id": 230719012,
            "cn": "Karan",
            "mn1": "8088762286",
            "gst": "",
            "add": "Karan Kankani\nSai Mahima residency \nflat no FF4(first floor)\nnear RC hospital \nArea : Rajarajeshwari Nagar \nBanglore ",
            "ods": [
                "s30876"
            ],
            "mn2": "9113629580",
            "pin": "560098"
        },
        {
            "id": 230719013,
            "cn": "Blood Gaming",
            "mn1": "6301186151",
            "gst": "",
            "add": "Srinivas ,\nH. No:3-2-92/2,\nbhongir \nmeena nagar \narea hospital back side\nbhongir,\nTelangana",
            "ods": [
                "s307621"
            ],
            "mn2": "",
            "pin": "508116"
        },
        {
            "id": 230719014,
            "cn": "Sai",
            "mn1": "9398494080",
            "gst": "",
            "add": "49-405/3/2, Padma Nagar phase-2, Chintal, Quthbullapur\nLandmark: Near Ring Road",
            "ods": [],
            "mn2": "6387814264",
            "pin": "500054"
        },
        {
            "id": 230719015,
            "cn": "Avinash",
            "mn1": "8890047619",
            "gst": "",
            "add": "KP HEIGHTS BUILDING\nB WING HOUSE NO.1001\nVIRAT NAGAR ROAD ODHAV\nAHMEDABAD",
            "ods": [],
            "mn2": "9414534287",
            "pin": "382350"
        },
        {
            "id": 230719016,
            "cn": "SWASTIK CORPORATION",
            "mn1": "",
            "gst": "07AJUPJ8232A1Z7",
            "add": "",
            "ods": [
                "s307627"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230719017,
            "cn": "Praveen",
            "mn1": "8522028703",
            "gst": "",
            "add": "Praveen Tumtum,\n04-016/A go colour,\nangadipet ,bedside jockey and Fastrack,\n gadi maisamma temple opposite,\nHyderabad,",
            "ods": [],
            "mn2": "",
            "pin": "500067"
        },
        {
            "id": 230719018,
            "cn": "Suresh Trader",
            "mn1": "9413926446",
            "gst": "",
            "add": "Plot no 2 shankar colony naya khera ambabari jaipur ",
            "ods": [],
            "mn2": "",
            "pin": "302023"
        },
        {
            "id": 230720001,
            "cn": "Travination",
            "mn1": "9317724612",
            "gst": "",
            "add": "House number 2055 SF, Acme floors Mohali sector 111\nLANDMARK- TDI City",
            "ods": [],
            "mn2": "",
            "pin": "140307"
        },
        {
            "id": 230720002,
            "cn": "Krit",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230720003,
            "cn": "Khushali",
            "mn1": "8879084295",
            "gst": "",
            "add": "15/B Laxmi Estate, Varmanagar,\nOld Nagardas Road,\nAndheri (East),\nMumbai\nLandmark - Near Chinnai College",
            "ods": [
                "s309271"
            ],
            "mn2": "9619014171",
            "pin": "400069"
        },
        {
            "id": 230720004,
            "cn": "Pavan",
            "mn1": "9154618819",
            "gst": "",
            "add": "201, Sharanya Nilayam, Opp Neela Residency, Kondapur, Hyderabad, Telangana",
            "ods": [
                "s307635"
            ],
            "mn2": "",
            "pin": "500084"
        },
        {
            "id": 230720005,
            "cn": "Rahul",
            "mn1": "9121705936",
            "gst": "",
            "add": "22-185/8 Rallaguda Road, Rallaguda,\nShamshabad, Hyderabad,T\nRallaguda Road, rallaguda, shamshabad\nmandal",
            "ods": [],
            "mn2": "7032228788",
            "pin": "501218"
        },
        {
            "id": 230720006,
            "cn": "LUNA TEXTILE",
            "mn1": "7902127464",
            "gst": "09GDPPM7750B1Z5",
            "add": "Link road teacher colony saharanapur uttar pradesh ",
            "ods": [
                "s308322"
            ],
            "mn2": "",
            "pin": "247001"
        },
        {
            "id": 230720007,
            "cn": "Master",
            "mn1": "8860844158",
            "gst": "",
            "add": "MASTER CAPS ENTERPRISES (RAIYAN AHMED)\nAddress - T-179, Gali kabristan wali, Model Basti, Rani Jhansi road Delhi\n9811035402",
            "ods": [],
            "mn2": "7982824002",
            "pin": "110006"
        },
        {
            "id": 230720008,
            "cn": "Abhishekh Mishra",
            "mn1": "9104241907",
            "gst": "",
            "add": "56 Shivnagar Society behind Sundar nagar society Bhestan Surat Gujarat",
            "ods": [
                "s307646"
            ],
            "mn2": "8758867691",
            "pin": "395023"
        },
        {
            "id": 230720009,
            "cn": "Chirag",
            "mn1": "9503626764",
            "gst": "",
            "add": "Om shanti palace, flat no 201, sahyadri nagar, near datt mandir, prem nagar tekdi, ulhasnagar",
            "ods": [
                "s307657"
            ],
            "mn2": "9545841413",
            "pin": "421005"
        },
        {
            "id": 230720010,
            "cn": "Semi",
            "mn1": "9995205261",
            "gst": "",
            "add": "kalathingal house mundengara edavanna, po, malapuram, kerala- india",
            "ods": [],
            "mn2": "9946501916",
            "pin": "676541"
        },
        {
            "id": 230720011,
            "cn": "Manoj",
            "mn1": "7022614688",
            "gst": "",
            "add": "Secret dabba \nNear mariyamma temple arekere\n Bangalore \nLand mark. Mariyamma temple (arekere)",
            "ods": [],
            "mn2": "7022064063",
            "pin": "560076"
        },
        {
            "id": 230720012,
            "cn": "Imran Amri",
            "mn1": "8095138351",
            "gst": "",
            "add": "The Professional Courier\nBehind Diagnomed\nNear TVS showroom\nBhatkal\nKarnataka",
            "ods": [],
            "mn2": "",
            "pin": "581320"
        },
        {
            "id": 230720013,
            "cn": "Gaurav Soni",
            "mn1": "7240823619",
            "gst": "",
            "add": "panchayat  Chaitra Gandhi nagar Indore\nLandmark:- Maruti Nandan Hospital ",
            "ods": [],
            "mn2": "7771025171",
            "pin": "453112"
        },
        {
            "id": 230720014,
            "cn": "Vinay",
            "mn1": "7026072529",
            "gst": "",
            "add": "Rego Enterprises\nNo.5, 1st floor, P.C.road, Balepet, Bangalore",
            "ods": [],
            "mn2": "",
            "pin": "560053"
        },
        {
            "id": 230721001,
            "cn": "Parth",
            "mn1": "9834439861",
            "gst": "",
            "add": "555,narayan chembur,infront of narayan peth police station, narayan peth, pune,",
            "ods": [
                "s3081002",
                "s309515"
            ],
            "mn2": "8329146364",
            "pin": "411030"
        },
        {
            "id": 230721002,
            "cn": "Ram",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230721003,
            "cn": "Arjun",
            "mn1": "9346766140",
            "gst": "",
            "add": "Aradhya boys hostel, near railway track,near sreenidhi college\nYamnampet\nHyderabad ",
            "ods": [],
            "mn2": "",
            "pin": "501301"
        },
        {
            "id": 230721004,
            "cn": "Sampel",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s3081013"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230721005,
            "cn": "Nitin",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307675"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230721006,
            "cn": "Ekagra",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230721007,
            "cn": "Fezongsaurav07",
            "mn1": "9932611404",
            "gst": "",
            "add": "Saurav Subba,\nBijanbari,Darjeeling,West Bengal\nNear Tintin Complex ",
            "ods": [
                "s307954",
                "s308659",
                "s309339"
            ],
            "mn2": "",
            "pin": "734201"
        },
        {
            "id": 230721008,
            "cn": "Shubh",
            "mn1": "9952931669",
            "gst": "",
            "add": "50 Hatpukur GIP colony , Muchipara , Ramrajatala ,Howrah , West Bengal , near balak sangha club",
            "ods": [],
            "mn2": "",
            "pin": "711112"
        },
        {
            "id": 230722001,
            "cn": "DS Traders",
            "mn1": "9324383196",
            "gst": "27AAZPG4321M1Z7",
            "add": "Shop B-1, Narmada Ashish Building, Near Royal Garden Restaurant, Patharli Road, Gograsswadi, Dombivali East-",
            "ods": [
                "s307690",
                "s307826"
            ],
            "mn2": "9372618183",
            "pin": "421201"
        },
        {
            "id": 230722002,
            "cn": "Suresh Kumar",
            "mn1": "9597915537",
            "gst": "",
            "add": "No81,100feetRoad,1stfloorBergerpaint\nshowroom,soodamanipuram,Karaikudi",
            "ods": [
                "s308269"
            ],
            "mn2": "9965134959",
            "pin": "630001"
        },
        {
            "id": 230722003,
            "cn": "Arindom",
            "mn1": "6001976723",
            "gst": "",
            "add": " Arindom Gogoi \nAssam sibsager Dorikaper Namtial pather",
            "ods": [],
            "mn2": "",
            "pin": "785640"
        },
        {
            "id": 230722004,
            "cn": "Baaz",
            "mn1": "8340587446",
            "gst": "",
            "add": "New Kalimati Road,Hira Singh Bagan,Plot no -216,Deep Bhawan,Sakchi Jamshedpur,Jharkhand",
            "ods": [],
            "mn2": "",
            "pin": "831001"
        },
        {
            "id": 230722005,
            "cn": "SLN TEX",
            "mn1": "8971845264",
            "gst": "29CERPC3214H1ZI",
            "add": "9, 5th cross, Pipeline service road, Vijaynagar, Bengaluru",
            "ods": [
                "s307828"
            ],
            "mn2": "",
            "pin": "560023"
        },
        {
            "id": 230722006,
            "cn": "Arun",
            "mn1": "9700114484",
            "gst": "",
            "add": "11-4-518/A shanti niketan apartments \nWesley church lane adjacent to tirumala bikes \nChilklguda,",
            "ods": [],
            "mn2": "",
            "pin": "500061"
        },
        {
            "id": 230722007,
            "cn": "Chawla Boutique",
            "mn1": "7974777051",
            "gst": "23ADLPC6103E2Z7",
            "add": "B305, omkar meridia, bwing,kurla west, mumbai",
            "ods": [
                "s307708",
                "s308213",
                "s309334"
            ],
            "mn2": "9322176604",
            "pin": "400070"
        },
        {
            "id": 230722008,
            "cn": "Aditya",
            "mn1": "6291165265",
            "gst": "",
            "add": " Attyre Club\n191/3 R.B.C Road, \nGarifa, Naihati,\nNorth 24 parganas \nWest Bengal",
            "ods": [],
            "mn2": "",
            "pin": "743135"
        },
        {
            "id": 230722009,
            "cn": "Sumit",
            "mn1": "9910609665",
            "gst": "",
            "add": "Plot no 18 second floor gyan khand 3 Indirapuram Ghaziabad, Landmark - Indirapuram Central mosque",
            "ods": [
                "s308297"
            ],
            "mn2": "8882609521",
            "pin": "201010"
        },
        {
            "id": 230722010,
            "cn": "Ajaydeep",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230723001,
            "cn": "Gulam nawaj",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230723002,
            "cn": "Shree Radhey",
            "mn1": "7302459030",
            "gst": "",
            "add": "Vinay Khurana A/33 devpark colony near Ganpati hospital baghpat road meerut city up phone",
            "ods": [
                "s307717",
                "s308943"
            ],
            "mn2": "",
            "pin": "250002"
        },
        {
            "id": 230723003,
            "cn": "Varana",
            "mn1": "9816846309",
            "gst": "",
            "add": "Cimaya resto, 1st Floor, Kavyanjali sweet house, Susuwahi Near Hyderabad Gate, BHU, Varanasi, Uttar, Pradesh",
            "ods": [
                "s307718",
                "s30818"
            ],
            "mn2": "",
            "pin": "221005"
        },
        {
            "id": 230723004,
            "cn": "Archana",
            "mn1": "",
            "gst": "07GKLPS9836R2ZN",
            "add": "",
            "ods": [
                "s307719",
                "s308151",
                "s30983"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230723005,
            "cn": "Unknown",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30846"
            ],
            "mn2": "",
            "pin": "201303"
        },
        {
            "id": 230723006,
            "cn": "The Junkyard",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230723007,
            "cn": "Honey",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230723008,
            "cn": "Yash",
            "mn1": "8826976057",
            "gst": "",
            "add": "K-1029 Sanjay Nagar Sector-23 \nGhaziabad  UttarPradesh",
            "ods": [],
            "mn2": "9717762527",
            "pin": "201002"
        },
        {
            "id": 230723009,
            "cn": "BALCLO",
            "mn1": "7791965454",
            "gst": "",
            "add": "12/64,Choupasni Housing Board,Jodhpur, Rajasthan",
            "ods": [],
            "mn2": "",
            "pin": "342008"
        },
        {
            "id": 230724001,
            "cn": "Karobee Designs",
            "mn1": "",
            "gst": "09APGPB0596K1ZP",
            "add": "",
            "ods": [
                "s307730"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230724002,
            "cn": "Ganta",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230724003,
            "cn": "Krishna",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307824"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230724004,
            "cn": "Shahrukh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230724005,
            "cn": "Kunal",
            "mn1": "9158107061",
            "gst": "",
            "add": "landmark - 210, Dr Ambedkar housing society Yerwada Pune 06 near New RTO office",
            "ods": [
                "s307744"
            ],
            "mn2": "7272989191",
            "pin": "411006"
        },
        {
            "id": 230724006,
            "cn": "Usama",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230724007,
            "cn": "Ekjot",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230724008,
            "cn": "Amit",
            "mn1": "7427080834",
            "gst": "",
            "add": "Pallupla complex , Shuklawas , kotputli (Rajsthan),",
            "ods": [],
            "mn2": "",
            "pin": "303105"
        },
        {
            "id": 230724009,
            "cn": "Saif",
            "mn1": "9945002025",
            "gst": "",
            "add": "13 7th Cross Rose garden Neelasandra\nLandmark: Masjid e Ayesha",
            "ods": [],
            "mn2": "",
            "pin": "560047"
        },
        {
            "id": 230725001,
            "cn": "Alok",
            "mn1": "9589637110",
            "gst": "",
            "add": "Gol bazar Rajnandgaon chattishgrah house number 23 near gol office",
            "ods": [],
            "mn2": "6264244964",
            "pin": "491441"
        },
        {
            "id": 230725002,
            "cn": "Thummak",
            "mn1": "9845102307",
            "gst": "",
            "add": "111 Azven Breathe, Tayakanahalli, Behind Indus International School, Bangalore",
            "ods": [],
            "mn2": "",
            "pin": "562125"
        },
        {
            "id": 230725003,
            "cn": "Vishal Pandey",
            "mn1": "7479970091",
            "gst": "",
            "add": "Back Side Of Redma Kali Mandir Daltonganj, Palamu, Jharkhand",
            "ods": [],
            "mn2": "",
            "pin": "822101"
        },
        {
            "id": 230725004,
            "cn": "DrizzY",
            "mn1": "6009138427",
            "gst": "",
            "add": "Apartment: Good shepherd Hostel . \nLandmark: Duncan Bosti \nState : Nagaland \nCity.  : Dimapur ",
            "ods": [],
            "mn2": "8798675821",
            "pin": "797112"
        },
        {
            "id": 230725005,
            "cn": "Dipti",
            "mn1": "6261703740",
            "gst": "23DPDPS3846K1ZJ",
            "add": "218/2 Adarsh colony,\nBercha road , M.P.E.B ke samne royal chakki ke pass ki gali. Shajapur (M.P)",
            "ods": [
                "s307780"
            ],
            "mn2": "",
            "pin": "465001"
        },
        {
            "id": 230725006,
            "cn": "Het Lathiya",
            "mn1": "9978517163",
            "gst": "",
            "add": "Companyname: 69 threads\n702, mahi residency citylight , opp radhe radhe bunglow, surat, citylight",
            "ods": [],
            "mn2": "9586296987",
            "pin": "395007"
        },
        {
            "id": 230725007,
            "cn": "Shyam Enterprises",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308295"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230725008,
            "cn": "Hemant",
            "mn1": "8826122804",
            "gst": "",
            "add": "Address - RZ 46 A/4 GALI NO. 2, MAIN SAGARPUR, NEW DELHI",
            "ods": [],
            "mn2": "9868812690",
            "pin": "110046"
        },
        {
            "id": 230725009,
            "cn": "Aarif",
            "mn1": "9146968185",
            "gst": "",
            "add": "Shivnagari Colony No.1, Adarsh Nagar,Dighi,Pune",
            "ods": [],
            "mn2": "",
            "pin": "411015"
        },
        {
            "id": 230725010,
            "cn": "Parth",
            "mn1": "8107026690",
            "gst": "",
            "add": "54 shalimar bagh vistar heerapura power house ajmer road jaipur \nLand mark - near jagdamba circle",
            "ods": [
                "s307790"
            ],
            "mn2": "",
            "pin": "302021"
        },
        {
            "id": 230725011,
            "cn": "Dhillon",
            "mn1": "9780004899",
            "gst": "",
            "add": "DAWINDERJEEET SINGH \nNEAR BUS STAND ROAD \nV.P.O Ralla District Mansa Punjab",
            "ods": [
                "s308110"
            ],
            "mn2": "",
            "pin": "151510"
        },
        {
            "id": 230725012,
            "cn": "Akash",
            "mn1": "7038822020",
            "gst": "",
            "add": "Chandeshwari colony Atpadi,\nTal:- Atpadi, Dist Sangli\nState:- Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "415301"
        },
        {
            "id": 230726001,
            "cn": "Prajeesh",
            "mn1": "8590685221",
            "gst": "",
            "add": "Prajeesh p\nThekke muppiramsseril house\nKanichukulangara p. o.\nThiruvizha\nAlappuzha dist",
            "ods": [
                "s308397"
            ],
            "mn2": "",
            "pin": "688524"
        },
        {
            "id": 230726002,
            "cn": "Ravindra",
            "mn1": "9323630531",
            "gst": "",
            "add": "JP North Garden City Atria building,3B- 504,Vinay nagar, Mira Road east, Dist Thane, Mumbai ",
            "ods": [],
            "mn2": "",
            "pin": "401107"
        },
        {
            "id": 230726003,
            "cn": "Nishant Ghadke",
            "mn1": "7715076336",
            "gst": "",
            "add": "\nA-801, Sunshine SRA CHS, Lake Road, Opp. BMC School, Bhandup (W)",
            "ods": [
                "s308290"
            ],
            "mn2": "",
            "pin": "400078"
        },
        {
            "id": 230726004,
            "cn": "Shyju",
            "mn1": "9388998006",
            "gst": "32AADFO6787D1Z8",
            "add": "ONLINE SOUND WORLD\nVennala High School Road\nArackakadavu, \nOpp. Vadakkaneth Church\nVennala.\nKochi",
            "ods": [],
            "mn2": "9349337638",
            "pin": "682028"
        },
        {
            "id": 230726005,
            "cn": "Xsquare",
            "mn1": "8240727689",
            "gst": "",
            "add": "XSQUARE\nAl anwar towers \nEast topsia \nTower-1\nFlat-7A3/4",
            "ods": [],
            "mn2": "9836957625",
            "pin": "700046"
        },
        {
            "id": 230726006,
            "cn": "Rifath",
            "mn1": "8431357317",
            "gst": "",
            "add": "Name:- Fiza \n1233,2nd floor (03) 15th main road b.t.m layout 2nd stage Bangalore ",
            "ods": [],
            "mn2": "",
            "pin": "560076"
        },
        {
            "id": 230726007,
            "cn": "Preet Sumariya",
            "mn1": "7030440652",
            "gst": "",
            "add": "702,K1,MAHAVIR Residency ,Near railway station ,Anjurphata ,Bhiwandi",
            "ods": [
                "s307812"
            ],
            "mn2": "",
            "pin": "421302"
        },
        {
            "id": 230726008,
            "cn": "G&A Enterprise",
            "mn1": "9700114484",
            "gst": "36ATWPS0073J2Z0",
            "add": "11-4-518/A shanti niketan apartments,\nWesley church,tirumala bikes chilklguda",
            "ods": [
                "s307814",
                "s307823",
                "s308136",
                "s308864"
            ],
            "mn2": "",
            "pin": "500061"
        },
        {
            "id": 230726009,
            "cn": "Lokesh",
            "mn1": "9518925326",
            "gst": "",
            "add": "Flat no 201, Rantara Residency, Indrayani Nagar, Sec. no 3, Vaishno Mata marg, Near Sahara sweet corner, Bhosari Pune",
            "ods": [],
            "mn2": "",
            "pin": "411026"
        },
        {
            "id": 230726010,
            "cn": "Dhanalakshmi",
            "mn1": "6369696609",
            "gst": "",
            "add": "B.Mohankumar\nF2, Sri Aparna Flats\nPlot no. 43, 6th cross street\nMax worth nagar phase 2\nKolapakkam\nChennai",
            "ods": [],
            "mn2": "",
            "pin": "600128"
        },
        {
            "id": 230726011,
            "cn": "Muddassir",
            "mn1": "9414476325",
            "gst": "",
            "add": "K1 ,Vishnu colony 2nd ext. Kamla Nehru Nagar, 1st Pulia, Near Kanhya Sweet Corner, Jodhpur, Rajasthan",
            "ods": [],
            "mn2": "",
            "pin": "342008"
        },
        {
            "id": 230726012,
            "cn": "Deepak",
            "mn1": "6362577965",
            "gst": "",
            "add": "Ramachandra Tadas\n56/b,Laxmi Narasimha Nilaya, Devinagar Hubballi -\nLand Mark Kumar Park Last Bus Stop Gandhinagar Hubli",
            "ods": [],
            "mn2": "",
            "pin": "580030"
        },
        {
            "id": 230726013,
            "cn": "Rameez",
            "mn1": "9840912982",
            "gst": "",
            "add": "plot no: 250B\n Lakshmi ammal Street\n ayyavo naidu colony \nAminjikarai \nDoor new no :32\nDoor old no: 1/1",
            "ods": [],
            "mn2": "",
            "pin": "600029"
        },
        {
            "id": 230726014,
            "cn": "Arun",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230727001,
            "cn": "Ayush Baheti",
            "mn1": "9831722792",
            "gst": "",
            "add": "Ultadanga balaji ganges block c 203 near ultadanga railway station Kolkata",
            "ods": [],
            "mn2": "",
            "pin": "700067"
        },
        {
            "id": 230727002,
            "cn": "Ayushi",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230727003,
            "cn": "Agarwal Enterprises",
            "mn1": "6398887336",
            "gst": "09AFKPA2492M1Z4",
            "add": "F-164 kamla Nagar Agra",
            "ods": [],
            "mn2": "",
            "pin": "282005"
        },
        {
            "id": 230727004,
            "cn": "Shoka",
            "mn1": "7972654669",
            "gst": "",
            "add": "plot no 60 dupare layout , swawlambi nagar \n City- Nagpur\nState- Maharashtra\nNear fashion rocks",
            "ods": [],
            "mn2": "8208561080",
            "pin": "440022"
        },
        {
            "id": 230727005,
            "cn": "Atishay Jain",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307843",
                "s309179"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230727006,
            "cn": "Punith Raj",
            "mn1": "6301863798",
            "gst": "",
            "add": "Flat no. 103, sai Darshan apartments,\ngautam nagar, malkajgiri",
            "ods": [
                "s308423",
                "s3081109"
            ],
            "mn2": "",
            "pin": "500047"
        },
        {
            "id": 230727007,
            "cn": "Surajit",
            "mn1": "8617227660",
            "gst": "",
            "add": "PAIK PARA(near by NEW PARADISE CLUB),POST UTTAR RAIPUR,BUDGE BUDGE, KOLKATA WEST BENGAL",
            "ods": [],
            "mn2": "6289895345",
            "pin": "700137"
        },
        {
            "id": 230727008,
            "cn": "Freak Lifestyle",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230727009,
            "cn": "Yash",
            "mn1": "9998893524",
            "gst": "",
            "add": "Rajeshbhai \nWinson Polymer, behind Swastik oil mill, near apmc market yard, Gondal-GUJARAT",
            "ods": [],
            "mn2": "9327224540",
            "pin": "360311"
        },
        {
            "id": 230727010,
            "cn": "Movin",
            "mn1": "8580639392",
            "gst": "",
            "add": "V.P.O  Mangla Chamba Himachal Pradesh\nState - Himachal Pradesh\nCity- Chamba ",
            "ods": [],
            "mn2": "7807428476",
            "pin": "176314"
        },
        {
            "id": 230727011,
            "cn": "Mehta and sons",
            "mn1": "9604642580",
            "gst": "",
            "add": "Mehta and sons\nParesh mehta\nB-1902 ishanya society near shankar maharaj math pune satara road pune",
            "ods": [],
            "mn2": "9325640326",
            "pin": "411043"
        },
        {
            "id": 230727012,
            "cn": "The Scribble art",
            "mn1": "8838968358",
            "gst": "",
            "add": "8,R32 Apartments, Ambattur Estate rd, Near D.A.V boys school, Anna Nagar West extn, Chennai ",
            "ods": [
                "s307855"
            ],
            "mn2": "",
            "pin": "600050"
        },
        {
            "id": 230727013,
            "cn": "Sidd",
            "mn1": "8396863431",
            "gst": "",
            "add": "Kaniska apartment , Near metro parking vali gali and deepak general store  mundka Plot number 443",
            "ods": [],
            "mn2": "",
            "pin": "110041"
        },
        {
            "id": 230727014,
            "cn": "Sodha",
            "mn1": "9983200740",
            "gst": "",
            "add": "M S SODHA GYM \n5th Floor Bhagwati Complex Station Road Barmer, Rajasthan \nMAHENDRA SINGH",
            "ods": [],
            "mn2": "",
            "pin": "344001"
        },
        {
            "id": 230727015,
            "cn": "Zafir",
            "mn1": "9793147784",
            "gst": "",
            "add": "courier address:\n\nWE HANDICRAFTS\n7/910 Vikas Nagar\nLucknow \nUP",
            "ods": [],
            "mn2": "",
            "pin": "226022"
        },
        {
            "id": 230727016,
            "cn": "DEE BLUEBIRD EX",
            "mn1": "9829973200",
            "gst": "08ABGPU0854P1ZY",
            "add": "Saifan bedla road,near tir baba majar,\nmatashwari nagar",
            "ods": [
                "s307966"
            ],
            "mn2": "",
            "pin": "313001"
        },
        {
            "id": 230727017,
            "cn": "Vipin",
            "mn1": "7711000776",
            "gst": "",
            "add": "106, Sharma Verma Colony, Near New G.M.T School, Churpur Road, , Ludhiana",
            "ods": [],
            "mn2": "",
            "pin": "141001"
        },
        {
            "id": 230727018,
            "cn": "Ajit",
            "mn1": "7528989930",
            "gst": "",
            "add": "Ajit Babu,\n125, F2, Velumani Apartments,\nAsan College road,\nBharathi street,\nPallikaranai,\nChennai ",
            "ods": [
                "s307864"
            ],
            "mn2": "",
            "pin": "600100"
        },
        {
            "id": 230728001,
            "cn": "Som",
            "mn1": "6360101635",
            "gst": "",
            "add": "127,  gurudwara nagra jhansi Uttar Pradesh",
            "ods": [],
            "mn2": "",
            "pin": "284003"
        },
        {
            "id": 230728002,
            "cn": "YuBingo Creation Private Limited",
            "mn1": "",
            "gst": "09AAACY8148A1ZB",
            "add": "",
            "ods": [
                "s307879"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230728003,
            "cn": "Pavan",
            "mn1": "7715923238",
            "gst": "",
            "add": "8-9-29, Mahalakshmi temple street, Vinchipeta, Onetown, Vijayawada, Andhra Pradesh",
            "ods": [],
            "mn2": "",
            "pin": "520001"
        },
        {
            "id": 230728004,
            "cn": "Raadhika",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307881"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230728005,
            "cn": "Lohit",
            "mn1": "6909105657",
            "gst": "",
            "add": "Kg3/59 2nd floor vikaspuri near kerala schooL",
            "ods": [],
            "mn2": "",
            "pin": "110018"
        },
        {
            "id": 230728006,
            "cn": "Abhishek",
            "mn1": "8389891007",
            "gst": "",
            "add": "234 ,  Shravanthi Paramount, Nyanappana Halli, Hulimavu, Bengaluru, Karnataka ",
            "ods": [],
            "mn2": "9511822197",
            "pin": "560076"
        },
        {
            "id": 230728007,
            "cn": "Reynold",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": "500047"
        },
        {
            "id": 230728008,
            "cn": "DENTROID X",
            "mn1": "8805540814",
            "gst": "27DAQPS3114E1ZL",
            "add": "karad, karve naka goleshwar road opp,\nSiddharth mangal karyalaya",
            "ods": [
                "s308386",
                "s309258"
            ],
            "mn2": "",
            "pin": "415110"
        },
        {
            "id": 230728009,
            "cn": "Sinha",
            "mn1": "8080699562",
            "gst": "",
            "add": "purple cup\nc2-203, akshar elementa, tathawade,next to podar wakad",
            "ods": [],
            "mn2": "7774005059",
            "pin": "411033"
        },
        {
            "id": 230728010,
            "cn": "Rahul",
            "mn1": "9121705936",
            "gst": "",
            "add": "H.no:18-39/2, Shivajinagar, Husnabad, Siddipet Dist, Telangana",
            "ods": [],
            "mn2": "",
            "pin": "505467"
        },
        {
            "id": 230728011,
            "cn": "Anoop",
            "mn1": "8848051710",
            "gst": "",
            "add": "Mukaluvila Thazhethill Ambalathinnirapu P.O Pandithitta",
            "ods": [],
            "mn2": "9495037038",
            "pin": "691508"
        },
        {
            "id": 230729001,
            "cn": "Pardhu",
            "mn1": "7730810447",
            "gst": "",
            "add": "Room no 506\nLA Hometel pg,\nLandmark Near Gowtham model school,\n Kphb 5th phase,\nHyderabad,\nTelangana,.",
            "ods": [],
            "mn2": "",
            "pin": "500072"
        },
        {
            "id": 230729002,
            "cn": "Pankaj",
            "mn1": "7986962074",
            "gst": "",
            "add": "House no 713 \nSector 9\nPanchkula, haryana ",
            "ods": [],
            "mn2": "9888030752",
            "pin": "134109"
        },
        {
            "id": 230729003,
            "cn": "Sanjay Kakkar",
            "mn1": "8287835861",
            "gst": "",
            "add": "Tower-D2,1202 Supertech Eco Village 2, GH-01, Sector-16B Greater Noida West, Uttar Pradesh, Greater Noida",
            "ods": [],
            "mn2": "",
            "pin": "201308"
        },
        {
            "id": 230729004,
            "cn": "Sanki Wear",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230729005,
            "cn": "Charzan",
            "mn1": "7889504310",
            "gst": "",
            "add": "raja mohallah, inside khathidarwaza, rainawari, srinagar, Jammu kashmir",
            "ods": [],
            "mn2": "9797202214",
            "pin": "190003"
        },
        {
            "id": 230729006,
            "cn": "Shakir",
            "mn1": "9634412589",
            "gst": "",
            "add": "B-16, MIG, MDDA Colony, Chander Road, Dalanwala, Dehradun, Uttarakhand",
            "ods": [],
            "mn2": "",
            "pin": "248001"
        },
        {
            "id": 230729007,
            "cn": "Irshad",
            "mn1": "9419081172",
            "gst": "",
            "add": "Bits and Bytes, Shireen Ali Complex, Iqbal Market Sopore",
            "ods": [
                "s307912"
            ],
            "mn2": "",
            "pin": "193201"
        },
        {
            "id": 230729008,
            "cn": "Raj",
            "mn1": "8308037129",
            "gst": "",
            "add": "Rupchand nagar, washim road, AKOLA, MAHARASHTRA",
            "ods": [],
            "mn2": "",
            "pin": "444002"
        },
        {
            "id": 230729009,
            "cn": "Adhesh",
            "mn1": "9148275836",
            "gst": "",
            "add": "295/5, \nNear Royal Meridian Layout,  D.C halli Road,  Begur, \nBengaluru",
            "ods": [
                "s308933"
            ],
            "mn2": "7483085287",
            "pin": "560068"
        },
        {
            "id": 230729010,
            "cn": "Jasjit",
            "mn1": "9100789303",
            "gst": "",
            "add": "Jasjit Singh, Room no. F-211\nBoys hostel, ICFAI LAW SCHOOL, IBS Hyderabad, Shankarapalli road, Telangana, India.",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230729011,
            "cn": "Swarndeep",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230729012,
            "cn": "Imtiyaaz",
            "mn1": "9033521073",
            "gst": "",
            "add": "Near sahara hospital Afsana market vapi, Gujrat ",
            "ods": [],
            "mn2": "",
            "pin": "396191"
        },
        {
            "id": 230729013,
            "cn": "Shashank",
            "mn1": "7795780331",
            "gst": "",
            "add": "flat number 310, sashank anutham apartments , 2nd main 7th cross road, sir mv layout , thindlu , Bangalore \nLandmark - near Nataraj gas station",
            "ods": [],
            "mn2": "7022794332",
            "pin": "560097"
        },
        {
            "id": 230730001,
            "cn": "Yash",
            "mn1": "9352026843",
            "gst": "",
            "add": "1/23 kala kua, housing board,\nNear curewell laboratory\nAlwar , Rajasthan",
            "ods": [],
            "mn2": "",
            "pin": "301001"
        },
        {
            "id": 230730002,
            "cn": "Amit Yadav",
            "mn1": "8000779300",
            "gst": "",
            "add": "Jagdish Prasad Yadav \nShuklawas (kotputli ) , Jaipur",
            "ods": [],
            "mn2": "",
            "pin": "303105"
        },
        {
            "id": 230730003,
            "cn": "Haradhan",
            "mn1": "9636815610",
            "gst": "",
            "add": "Near Alok School, Govardhan Vihar, KANKROLI, Distt. Rajsamand",
            "ods": [],
            "mn2": "9636148319",
            "pin": "313324"
        },
        {
            "id": 230730004,
            "cn": "Eden",
            "mn1": "7005236671",
            "gst": "",
            "add": "Store no. 4\nRemum complex, Mowb 2, Behind Account General office, PO/PS- Itanagar,\nDist- Papum pare \nCity-Itanagar\nState Arunachal Pradesh",
            "ods": [],
            "mn2": "9402904993",
            "pin": "791111"
        },
        {
            "id": 230730005,
            "cn": "Fawadhussain",
            "mn1": "9959548550",
            "gst": "",
            "add": "Address: Faraz Manzil, Beside Syeds Plaza, Janaki Nagar, Tolichowki, Hyderabad ",
            "ods": [],
            "mn2": "9121545847",
            "pin": "500008"
        },
        {
            "id": 230731001,
            "cn": "Ishannn",
            "mn1": "8446691795",
            "gst": "",
            "add": "Mohan Nagar Sadguru prestige flat no 3 near mango tree dhankawadi pune",
            "ods": [],
            "mn2": "",
            "pin": "411043"
        },
        {
            "id": 230731002,
            "cn": "Dilip",
            "mn1": "6353729060",
            "gst": "",
            "add": "G-104 satva prime opp attlantis villas behind sitaram super market channi canal road channi vadodara",
            "ods": [],
            "mn2": "",
            "pin": "390024"
        },
        {
            "id": 230731003,
            "cn": "Atharva",
            "mn1": "9541156682",
            "gst": "",
            "add": "House number 913\nLane 6d\nSuryavanshi nagar\nJammu",
            "ods": [
                "s308364"
            ],
            "mn2": "",
            "pin": "181205"
        },
        {
            "id": 230731004,
            "cn": "Ravi",
            "mn1": "9643932360",
            "gst": "",
            "add": "Rz A 60 GALI NO 1 JAI VIHAR NAJAFGARH NEW DELHI",
            "ods": [
                "s307944"
            ],
            "mn2": "9868557764",
            "pin": "110043"
        },
        {
            "id": 230731005,
            "cn": "Stanny",
            "mn1": "9901299284",
            "gst": "",
            "add": "180, Jesus Nivas, 1st E cross, TC palya main road, Anandapura, KR puram, Bangalore",
            "ods": [
                "s308234"
            ],
            "mn2": "",
            "pin": "560036"
        },
        {
            "id": 230731006,
            "cn": "Tajinder",
            "mn1": "9855046662",
            "gst": "",
            "add": "SCO 24-25, Cafenea Foods, Upper Ground Floor, PPR Mall, Mithapur Road, Jalandhar, Punjab",
            "ods": [],
            "mn2": "",
            "pin": "144001"
        },
        {
            "id": 230731007,
            "cn": "Arpit Chawla",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s307953"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230731008,
            "cn": "RAWAT ENTERPRISES",
            "mn1": "",
            "gst": "07ABCFR4035P1ZV",
            "add": "",
            "ods": [
                "s307956"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230731009,
            "cn": "Mustafa",
            "mn1": "8491050684",
            "gst": "",
            "add": " Dangerpora, mallabagh  \nNear ingenious school",
            "ods": [],
            "mn2": "",
            "pin": "190006"
        },
        {
            "id": 230731010,
            "cn": "B Gutsy",
            "mn1": "",
            "gst": "06AFMPJ5100R1Z6",
            "add": "",
            "ods": [
                "s307959",
                "s308602"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230731011,
            "cn": "Adnan",
            "mn1": "9784082457",
            "gst": "",
            "add": "Near Chouhan Classes, Shopping Center,\nPratap Nagar Road",
            "ods": [
                "s307961",
                "s308695"
            ],
            "mn2": "8824476752",
            "pin": "342001"
        },
        {
            "id": 230731012,
            "cn": "Baria",
            "mn1": "9723635372",
            "gst": "",
            "add": "JAIMINSINH BARIA\n45/1 Amrapali society-3 Baroda Road Halol-\nPANCHMAHAL\nGujarat",
            "ods": [],
            "mn2": "",
            "pin": "389350"
        },
        {
            "id": 230731013,
            "cn": "Akash",
            "mn1": "9727470757",
            "gst": "",
            "add": "10-pusti duplex,\nNear param and the dove,\nBil-canal road,\nBil, Vadodara",
            "ods": [],
            "mn2": "9773042005",
            "pin": "391410"
        },
        {
            "id": 230731014,
            "cn": "Bizzare Prints",
            "mn1": "7972476096",
            "gst": "",
            "add": "Bhupen kshatri\nH.no 23 chicolna bogmalo vasco da gama  goa",
            "ods": [
                "s307972"
            ],
            "mn2": "8485841405",
            "pin": "403806"
        },
        {
            "id": 230731015,
            "cn": "Deva",
            "mn1": "6238762304",
            "gst": "",
            "add": "house No. b21 \namritha residency , kodungallur\nlokamaleswaram \nchandapura",
            "ods": [],
            "mn2": "",
            "pin": "680664"
        },
        {
            "id": 230801001,
            "cn": "Navil",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230801002,
            "cn": "Printsflix",
            "mn1": "",
            "gst": "07ABDFP7591B1Z6",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230801003,
            "cn": "Soumen",
            "mn1": "9064214691",
            "gst": "",
            "add": "\nChandrakona Road\nLandmark- Near Sarada palace.\nVill-durllabhganj, Post- Satbankura, Dist- Paschim Medinipur, state- West Bengal,",
            "ods": [],
            "mn2": "",
            "pin": "721253"
        },
        {
            "id": 230801004,
            "cn": "Shahalam",
            "mn1": "9808669522",
            "gst": "",
            "add": "1104, Street no 1 laddhawala muzaffarnagar Uttar Pradesh",
            "ods": [],
            "mn2": "9520333007",
            "pin": "251002"
        },
        {
            "id": 230801005,
            "cn": "GLIFFEAN FS",
            "mn1": "9150328676",
            "gst": "33DCLPG9890J1ZZ",
            "add": "Gopikrishnan V\n181/227, Duraisamypuram,\nSenguttuvan street,\nRajapalayam ",
            "ods": [
                "s3088"
            ],
            "mn2": "",
            "pin": "626117"
        },
        {
            "id": 230801006,
            "cn": "Shubhangi",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230801007,
            "cn": "Piku",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230801008,
            "cn": "Atanu Biswas",
            "mn1": "8420205661",
            "gst": "",
            "add": "Barrackpore, Talpukur Bazaar , K.N.Mukherjee , Pushpa Nanda Apt ( Flat No 10 ) \nKolkata, West Bengal",
            "ods": [],
            "mn2": "",
            "pin": "700123"
        },
        {
            "id": 230801009,
            "cn": "JMS Multi Brand Trader",
            "mn1": "9717781382",
            "gst": "05BXKPS4787C1Z3",
            "add": "Jms Multi Brand Trader \nMaukhani Chauraha near by Vivekanand Hospital Haldwani Uttrakhand",
            "ods": [
                "s30824"
            ],
            "mn2": "",
            "pin": "263139"
        },
        {
            "id": 230801010,
            "cn": "Arthav",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30826"
            ],
            "mn2": "",
            "pin": "390008"
        },
        {
            "id": 230801011,
            "cn": "Sherin",
            "mn1": "9901299141",
            "gst": "",
            "add": "Sherin Akshatha, Amma, 1st parallel Road, Gandhi nagar, shivamogga",
            "ods": [],
            "mn2": "8951411944",
            "pin": "577201"
        },
        {
            "id": 230801012,
            "cn": "Nadeem",
            "mn1": "9655277308",
            "gst": "",
            "add": "129a, uv swaminadhan street chithalapakkam,\n chennai",
            "ods": [
                "s308517",
                "s309107"
            ],
            "mn2": "",
            "pin": "600064"
        },
        {
            "id": 230801013,
            "cn": "Dopesoul store private limited",
            "mn1": "9121705936",
            "gst": "36AAKCD1902B1Z7",
            "add": "CYRIL RAHUL\n22-185/8 Rallaguda Road, shamshabad mandal",
            "ods": [
                "s30829",
                "s30897"
            ],
            "mn2": "",
            "pin": "501218"
        },
        {
            "id": 230801014,
            "cn": "DRJ",
            "mn1": "8080338844",
            "gst": "",
            "add": "1902/Kent Gardens, Factory Lane,  Borivali West, Mumbai",
            "ods": [],
            "mn2": "",
            "pin": "400092"
        },
        {
            "id": 230802001,
            "cn": "Pemtse",
            "mn1": "9591632228",
            "gst": "",
            "add": "Pemtse Tibetan colony mundgod camp no 3 shop no 17 yellow building opposite RC, Office Karnataka",
            "ods": [],
            "mn2": "",
            "pin": "581411"
        },
        {
            "id": 230802002,
            "cn": "DIGI GRAPHICS",
            "mn1": "",
            "gst": "06FPMPS9325Q1ZQ",
            "add": "",
            "ods": [
                "s30833"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230802003,
            "cn": "Bharatpreet Singh",
            "mn1": "8872766901",
            "gst": "",
            "add": "C-358, Urban Estate, Phase 1, Jamalpur, Ludhiana",
            "ods": [],
            "mn2": "",
            "pin": "141010"
        },
        {
            "id": 230802004,
            "cn": "Mudang",
            "mn1": "9774388263",
            "gst": "",
            "add": "Mudang Pampi\nOfficer Colony,\nChanglang\nDistrict-Changlang\nArunachal Pradesh",
            "ods": [],
            "mn2": "",
            "pin": "792120"
        },
        {
            "id": 230802005,
            "cn": "Vish",
            "mn1": "8839611225",
            "gst": "",
            "add": "sanjay nagar, ward no.8, near durga mandir, Mandideep, Bhopal, Madhya Pradesh.",
            "ods": [],
            "mn2": "",
            "pin": "462046"
        },
        {
            "id": 230802006,
            "cn": "Hiritik",
            "mn1": "9642198922",
            "gst": "",
            "add": "18-58 mes colony Venkatapuram Alwal Secunderabad",
            "ods": [],
            "mn2": "9966099141",
            "pin": "500010"
        },
        {
            "id": 230802007,
            "cn": "Pramod",
            "mn1": "9082313214",
            "gst": "",
            "add": "Pramod Kumar Singh \nB/503, Savita Enclave CHS \nPoonam Sager Complex\n(Opposite Deep Jyoti School)\nMira Road E, Thane \nMumbai",
            "ods": [],
            "mn2": "",
            "pin": "401107"
        },
        {
            "id": 230802008,
            "cn": "Dhrubjyoti",
            "mn1": "8486558323",
            "gst": "",
            "add": "H.No: 2, Harendra Ch. Baruah path, Janorpar, Lankeswar Tinali.  Near Lankeswar primary school",
            "ods": [
                "s30852"
            ],
            "mn2": "",
            "pin": "781014"
        },
        {
            "id": 230802009,
            "cn": "Farhaana",
            "mn1": "8838608590",
            "gst": "",
            "add": "Hafeez\nNo.1183/2, 207, Khan Saheb Street,\nTirupattur\nTamil Nadu ",
            "ods": [],
            "mn2": "7904355918",
            "pin": "635601"
        },
        {
            "id": 230802010,
            "cn": "Kailash",
            "mn1": "9284490206",
            "gst": "",
            "add": "66/20, Heera Path, Mansarovar, jaipur",
            "ods": [
                "s30858"
            ],
            "mn2": "",
            "pin": "302020"
        },
        {
            "id": 230802011,
            "cn": "Mumshad",
            "mn1": "8982780170",
            "gst": "",
            "add": "Near of sai mangalam marriage house Nowgong\nDistrict Chhatarpur\nWard no 11\nHouse number 29\nMP",
            "ods": [],
            "mn2": "",
            "pin": "471201"
        },
        {
            "id": 230802012,
            "cn": "Daljit",
            "mn1": "8092237808",
            "gst": "",
            "add": "H. No. 430, near wireless office, Khutadih, Sonari, Jamshedpur, Jharkhand",
            "ods": [],
            "mn2": "",
            "pin": "831011"
        },
        {
            "id": 230802013,
            "cn": "Koushik",
            "mn1": "6290295621",
            "gst": "",
            "add": "AE-609, A.E. Block sector 1, Bidhannagar, Kolkata",
            "ods": [],
            "mn2": "",
            "pin": "700064"
        },
        {
            "id": 230803001,
            "cn": "Stoney",
            "mn1": "6360072283",
            "gst": "",
            "add": "26, 1st cross manjunatha nagar, magadi road, Bangalore Karnataka, landmark: Wendy's chicken or dental clinic",
            "ods": [],
            "mn2": "9743006981",
            "pin": "560023"
        },
        {
            "id": 230803002,
            "cn": "Onkar",
            "mn1": "9856561717",
            "gst": "",
            "add": "Om vilaa no 1 opp. Utsav lawns , wakhan road , karad",
            "ods": [],
            "mn2": "9260605959",
            "pin": "415110"
        },
        {
            "id": 230803003,
            "cn": "Sidak",
            "mn1": "9811041757",
            "gst": "",
            "add": "Sidak Singh \n61/13a first floor ramjas road karol bagh \nNew delhi ",
            "ods": [],
            "mn2": "7986889229",
            "pin": "110005"
        },
        {
            "id": 230803004,
            "cn": "Siddharth",
            "mn1": "9799145237",
            "gst": "",
            "add": "14,shiv nagar colony , near manglam marriage garden\ncity -kekri\ndistrict -Ajmer",
            "ods": [],
            "mn2": "",
            "pin": "305404"
        },
        {
            "id": 230803005,
            "cn": "Aziz",
            "mn1": "9883067138",
            "gst": "",
            "add": "5/h/28, bhuikailash road,\nKhiddirpore,\nKolkata\nWest bengal ",
            "ods": [],
            "mn2": "",
            "pin": "700023"
        },
        {
            "id": 230803006,
            "cn": "Asif",
            "mn1": "9820168944",
            "gst": "",
            "add": "B 601,Police Federation Bldg No.3\nNear Kala Vidyalay\nMalwani Malad (west) \nMumbai",
            "ods": [],
            "mn2": "",
            "pin": "400095"
        },
        {
            "id": 230803007,
            "cn": "Kafil",
            "mn1": "9373017879",
            "gst": "",
            "add": "Flat no. F12, Yasho Shanti Sankul, Beside Amrut siddhi hall, Kalamba Road, Kolhapur",
            "ods": [
                "s30890"
            ],
            "mn2": "7378400707",
            "pin": "416007"
        },
        {
            "id": 230803008,
            "cn": "M/S HENLEYS STREETWAER LABEL",
            "mn1": "",
            "gst": "09ESFPR1883B1ZJ",
            "add": "",
            "ods": [
                "s30892",
                "s309130"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230803009,
            "cn": "Yaskay",
            "mn1": "9666988688",
            "gst": "",
            "add": "Flat No 302, Sri Swamy Arcade, Bapuji Nagar X Roads, Old Bowenpally, Secunderabad.\nLandmark Indian Oil Petrol Pump,",
            "ods": [],
            "mn2": "9966600360",
            "pin": "500011"
        },
        {
            "id": 230803010,
            "cn": "Warda",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230803011,
            "cn": "Yaman",
            "mn1": "6260433899",
            "gst": "",
            "add": "House no-315 street-17\nArya nagar kohka sirsa road near durga mandir",
            "ods": [
                "s308865"
            ],
            "mn2": "",
            "pin": "490023"
        },
        {
            "id": 230803012,
            "cn": "BUYNOX",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230804001,
            "cn": "Vidya",
            "mn1": "9567858881",
            "gst": "",
            "add": "Korath house, near kinfra textile park, edupukkulam po palakkad, kerala.",
            "ods": [
                "s308998"
            ],
            "mn2": "",
            "pin": "678556"
        },
        {
            "id": 230804002,
            "cn": "Vishal",
            "mn1": "8882889660",
            "gst": "",
            "add": "H.No 1137 B, Near Dada Bhaiya Mandir, Pana Begwan, Bawana, Delhi",
            "ods": [],
            "mn2": "8860510084",
            "pin": "110039"
        },
        {
            "id": 230804003,
            "cn": "Mohit Panwar",
            "mn1": "7042536906",
            "gst": "",
            "add": "210A/1 Shahpurjat New Delhi",
            "ods": [],
            "mn2": "",
            "pin": "110049"
        },
        {
            "id": 230804004,
            "cn": "Vasu",
            "mn1": "9327383277",
            "gst": "",
            "add": "90,jai bhavani society, near laduba farm, simada gam, surat",
            "ods": [
                "s308133"
            ],
            "mn2": "7698434682",
            "pin": "395006"
        },
        {
            "id": 230804005,
            "cn": "Teerex",
            "mn1": "9907669754",
            "gst": "",
            "add": "P25, Tagore Garden, Brahmapur PO,\nGaria. Kolkata, West Bengal South\n24 Parganas,",
            "ods": [
                "s308135"
            ],
            "mn2": "",
            "pin": "700084"
        },
        {
            "id": 230804006,
            "cn": "Creator",
            "mn1": "8898126288",
            "gst": "",
            "add": "Room No 47, Ashtavinayak Rahivashi Seva Sangh, New Agripada, Santacruz East. Mumbai \nLandmark - Near Mitesh Medical ",
            "ods": [
                "s308139"
            ],
            "mn2": "",
            "pin": "400055"
        },
        {
            "id": 230804007,
            "cn": "Rana Bag",
            "mn1": "9674765539",
            "gst": "",
            "add": "Khurigachi Main Road, Dakshin Para, Bhadreswar, Hooghly",
            "ods": [
                "s308338"
            ],
            "mn2": "",
            "pin": "712124"
        },
        {
            "id": 230804008,
            "cn": "Aryan",
            "mn1": "9810034103",
            "gst": "",
            "add": "A-15, Commercial , New Delhi",
            "ods": [],
            "mn2": "",
            "pin": "110012"
        },
        {
            "id": 230804009,
            "cn": "Fuquan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230804010,
            "cn": "Ritik",
            "mn1": "6291205784",
            "gst": "",
            "add": "24/3 MM FEEDER ROAD,ARIADAHA,KOLKATA,mousumi club",
            "ods": [
                "s308144"
            ],
            "mn2": "8910121582",
            "pin": "700057"
        },
        {
            "id": 230804011,
            "cn": "Shivang",
            "mn1": "8954511923",
            "gst": "",
            "add": "Tilwari,bhauwala, dehradun",
            "ods": [],
            "mn2": "",
            "pin": "248007"
        },
        {
            "id": 230804012,
            "cn": "Sankalp",
            "mn1": "7385475508",
            "gst": "",
            "add": "Plot no 139 sabina co housing society gorewada, nagpur ",
            "ods": [],
            "mn2": "",
            "pin": "440013"
        },
        {
            "id": 230804013,
            "cn": "Mazi",
            "mn1": "6901739135",
            "gst": "",
            "add": "Guwahati,Assam\nLocation:Near Assam downtown University.",
            "ods": [
                "s308544"
            ],
            "mn2": "8910802012",
            "pin": "781026"
        },
        {
            "id": 230804014,
            "cn": "Shams",
            "mn1": "9353757197",
            "gst": "",
            "add": "20, 4th Cross Rd, Patel Muniyappa Layout, Vishwanatha Naganahalli, Kanaka Nagar, Bengaluru, Karnataka",
            "ods": [
                "s308235",
                "s309363"
            ],
            "mn2": "",
            "pin": "560032"
        },
        {
            "id": 230805001,
            "cn": "Ekansh",
            "mn1": "6377893363",
            "gst": "",
            "add": "Bennett University , greater noida",
            "ods": [],
            "mn2": "6376768850",
            "pin": "201310"
        },
        {
            "id": 230805002,
            "cn": "Abhishekh Pathak",
            "mn1": "7665655188",
            "gst": "",
            "add": "A-81 Kendriya vihar sector 56 gurgaon, haryana.",
            "ods": [],
            "mn2": "7728919045",
            "pin": "122011"
        },
        {
            "id": 230805003,
            "cn": "Tanish",
            "mn1": "8868021494",
            "gst": "",
            "add": "House no. 1\nArea. Kasganj\nWard no. 18\nDistrict. Kasganj\nZilla. Kasganj\nState. Utter pradesh",
            "ods": [],
            "mn2": "",
            "pin": "207123"
        },
        {
            "id": 230805004,
            "cn": "Sumit",
            "mn1": "9033664195",
            "gst": "",
            "add": "D-603, Vishwanath Sarathya, Shela, Ahmedabad,",
            "ods": [],
            "mn2": "",
            "pin": "380058"
        },
        {
            "id": 230805005,
            "cn": "Dhruv",
            "mn1": "7405075523",
            "gst": "",
            "add": "F-21 Nandan van-3 \nBileshwar Mahadev Road\nNr Deewan Pani Puri\nJodhpur \nSatellite \nAhmedabad",
            "ods": [],
            "mn2": "",
            "pin": "380015"
        },
        {
            "id": 230805006,
            "cn": "Aditi",
            "mn1": "9814148394",
            "gst": "",
            "add": "House no 402/5 Guru Nanak Pura west Jalandhar\nLandmark- Funland Public school",
            "ods": [],
            "mn2": "9878190681",
            "pin": "144001"
        },
        {
            "id": 230805007,
            "cn": "Vaibhav",
            "mn1": "8401618882",
            "gst": "",
            "add": "31 Dattatray nagar near trikkam nagar nilgiri udhna surat",
            "ods": [],
            "mn2": "",
            "pin": "394210"
        },
        {
            "id": 230805008,
            "cn": "LEWON",
            "mn1": "8109110443",
            "gst": "23APXPD6068F1ZO",
            "add": "S52 Malwa county, bypass road, indore\n              ",
            "ods": [
                "s308169"
            ],
            "mn2": "7898252916",
            "pin": "453771"
        },
        {
            "id": 230805009,
            "cn": "Afif",
            "mn1": "9021111255",
            "gst": "",
            "add": "SAUD BIN AFIF\nALTAMASH COLONY CENTRAL NAKA ROAD BEHIND SAHARA HOSPITAL AURANGABAD Maharashtra\nLandmark: waiz cafe ",
            "ods": [],
            "mn2": "7028102429",
            "pin": "431001"
        },
        {
            "id": 230805010,
            "cn": "Xhubham Malviya",
            "mn1": "9111438086",
            "gst": "",
            "add": "X FASHION near  janta optical mg road, Barwani\nState : MADHYA PRADESH",
            "ods": [],
            "mn2": "",
            "pin": "451551"
        },
        {
            "id": 230805011,
            "cn": "Ashab",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308173"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230805012,
            "cn": "Raju Chanian",
            "mn1": "8728065753",
            "gst": "",
            "add": "S/O Gurdayal Singh, Tehsil Nakodar, Chanian, Chanian, Jalandhar, Punjab",
            "ods": [
                "s308175"
            ],
            "mn2": "",
            "pin": "144033"
        },
        {
            "id": 230805013,
            "cn": "Nickspace",
            "mn1": "9969419465",
            "gst": "27CDIPP2010E1ZY",
            "add": "Survey No 213,HissaNo3,CTS No 2316,\nOmji Compound,Rathodi Village,Malad (W)",
            "ods": [
                "s308515"
            ],
            "mn2": "",
            "pin": "400095"
        },
        {
            "id": 230805014,
            "cn": "Rakshan",
            "mn1": "7207814546",
            "gst": "",
            "add": "12-11-435/A/1 warasiguda Secunderabad",
            "ods": [],
            "mn2": "8328251782",
            "pin": "500061"
        },
        {
            "id": 230805015,
            "cn": "Nirmal",
            "mn1": "9165176481",
            "gst": "",
            "add": "Shreyas Jain\n71 , R. N. T. Marg Chawni, Near Laxminarayan Dudhwala, Opp hotel Girdhar, Indore (M.P.)",
            "ods": [],
            "mn2": "",
            "pin": "452001"
        },
        {
            "id": 230805016,
            "cn": "Akshat",
            "mn1": "8980236044",
            "gst": "",
            "add": "B-13 Shakti bunglows , behind petrofolis bus stand, undera , gorwa , vadodara, Gujarat",
            "ods": [],
            "mn2": "",
            "pin": "390003"
        },
        {
            "id": 230805017,
            "cn": "Sudha",
            "mn1": "9640184410",
            "gst": "",
            "add": "HNO10-147/1,Ground floor, Gayatri Homes gayatri nagar,\nLandmark: Near Post Box\nHYDERABAD, TELANGANA‬",
            "ods": [],
            "mn2": "",
            "pin": "500079"
        },
        {
            "id": 230805018,
            "cn": "Roshan",
            "mn1": "7413824989",
            "gst": "",
            "add": "London Moxie\n51, ramnagar colony\nRoad Number-02\nMurlipura Scheme\nJaipur ",
            "ods": [],
            "mn2": "",
            "pin": "302039"
        },
        {
            "id": 230805019,
            "cn": "Nahid",
            "mn1": "8197462880",
            "gst": "",
            "add": "House no. 7\n3rd B Cross Rd, Appajappa Layout, Shampura, Kaval Bairasandra, Bengaluru, Karnataka",
            "ods": [],
            "mn2": "",
            "pin": "560032"
        },
        {
            "id": 230805020,
            "cn": "Satinder",
            "mn1": "7814961144",
            "gst": "",
            "add": "Government Quarters no.2, Maya Tower, Hargobind Nagar, ( Phagwara ) \nPunjab",
            "ods": [],
            "mn2": "",
            "pin": "144401"
        },
        {
            "id": 230806001,
            "cn": "Colorflu",
            "mn1": "6360892735",
            "gst": "",
            "add": "No-23/1, 4th cross, 1st Main Road, \nMaruthi Nagar, Madiwala, \nBangalore",
            "ods": [],
            "mn2": "",
            "pin": "560068"
        },
        {
            "id": 230807001,
            "cn": "Farooqui",
            "mn1": "9370282071",
            "gst": "",
            "add": "Asra nagar road, near RR.Medical Nanded, Maharashtra",
            "ods": [
                "s308192"
            ],
            "mn2": "7447717867",
            "pin": "431605"
        },
        {
            "id": 230807002,
            "cn": "Vikas Saini",
            "mn1": "9318431969",
            "gst": "",
            "add": "1210 B Tower 7th Avenue Gaur City 1 Greater Noida West",
            "ods": [],
            "mn2": "9971039232",
            "pin": "201309"
        },
        {
            "id": 230807003,
            "cn": "Shiva",
            "mn1": "6302434574",
            "gst": "",
            "add": "Shiva Sai Krishna Flat 102 , sri sai residency 2, railway employees colony ,Bolarum turkapally Landmark-near ark homes.",
            "ods": [],
            "mn2": "8686717547",
            "pin": "500010"
        },
        {
            "id": 230807004,
            "cn": "Prajyot",
            "mn1": "8149939825",
            "gst": "",
            "add": "plot no. 31 , sumitra nagar,  behind nayara petrol pump , Tukum ,  Chandrapur  Maharashtra ",
            "ods": [],
            "mn2": "",
            "pin": "442401"
        },
        {
            "id": 230807005,
            "cn": "Box of science",
            "mn1": "8999287775",
            "gst": "27ARSPG4272B1ZS",
            "add": "81/4, Near Unitech Automation, Dangat Industrial,\nEstate, NDA road Shivane",
            "ods": [
                "s308901"
            ],
            "mn2": "",
            "pin": "411023"
        },
        {
            "id": 230807006,
            "cn": "Inked Soul",
            "mn1": "7003507665",
            "gst": "",
            "add": "Inked souls poushali sarkar\nAshoknagar gollbajar\nNorth 24 pargana\nWest Bengal ",
            "ods": [],
            "mn2": "8918238316",
            "pin": "743222"
        },
        {
            "id": 230807007,
            "cn": "ILLEGUN",
            "mn1": "8872766901",
            "gst": "",
            "add": "C-358, Urban Estate, Phase 1, Jamalpur, Ludhiana",
            "ods": [
                "s308218"
            ],
            "mn2": "",
            "pin": "141010"
        },
        {
            "id": 230807008,
            "cn": "Harish",
            "mn1": "9304374913",
            "gst": "",
            "add": "9-9-39/9,near chinna polamamba temple,sivajipalem\nVisakhapatnam, Andhrapradesh",
            "ods": [],
            "mn2": "",
            "pin": "530017"
        },
        {
            "id": 230807009,
            "cn": "Trident Sales Corporation",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230807010,
            "cn": "Aryan",
            "mn1": "9340067010",
            "gst": "",
            "add": "House number - 141 \nLand mark - Near bamleshwari temple\nContractor Colony Supela Bhilai , Chhattisgarh",
            "ods": [
                "s308222"
            ],
            "mn2": "9907496868",
            "pin": "490023"
        },
        {
            "id": 230807011,
            "cn": "Gaurav",
            "mn1": "9876090611",
            "gst": "",
            "add": "Ok..please send us the sample at -\n 402, sapphire 2, Somdatt Landmark, Kharar Landran road, sector 116, Mohali, Punjab\n",
            "ods": [
                "s308457"
            ],
            "mn2": "",
            "pin": "140307"
        },
        {
            "id": 230807012,
            "cn": "The Hanger",
            "mn1": "7428262169",
            "gst": "",
            "add": "B-5/348 second floor sec 3 rohini new delhi ",
            "ods": [],
            "mn2": "",
            "pin": "110086"
        },
        {
            "id": 230807013,
            "cn": "Anishify Enterprises",
            "mn1": "9801761409",
            "gst": "27LVSPS1650Q1ZA",
            "add": "84/1/1/C,1st/2nd floor,Guru nanak nagar,\nward no L,LBS Marg,ghatkoper",
            "ods": [
                "s308450",
                "s3081064",
                "s30997",
                "s309444"
            ],
            "mn2": "",
            "pin": "400086"
        },
        {
            "id": 230807014,
            "cn": "Aditya",
            "mn1": "9465525702",
            "gst": "",
            "add": "Hostel B Thapar University Patiala",
            "ods": [],
            "mn2": "9815854752",
            "pin": "147004"
        },
        {
            "id": 230807015,
            "cn": "Zakir",
            "mn1": "7780866812",
            "gst": "",
            "add": "Knitmart\nZakir Zahoor\nMehman mohalla Lal-chowk Anantnag Kashmir",
            "ods": [],
            "mn2": "9596182080",
            "pin": "192101"
        },
        {
            "id": 230807016,
            "cn": "Adityan",
            "mn1": "9023002066",
            "gst": "",
            "add": "16th Krishnadham row house Opp pushpam complex beside Bharat gas Isanpur vatva Ahmedabad",
            "ods": [],
            "mn2": "",
            "pin": "382443"
        },
        {
            "id": 230807017,
            "cn": "Rinkesh",
            "mn1": "6354044185",
            "gst": "",
            "add": "B-5, Prerna Row House Near Raj Corner Tp-10 Main road Pal",
            "ods": [],
            "mn2": "",
            "pin": "395009"
        },
        {
            "id": 230807018,
            "cn": "Abhi",
            "mn1": "9946028531",
            "gst": "",
            "add": "Thenur(po) parli palakkad Kerala",
            "ods": [],
            "mn2": "6238283438",
            "pin": "678612"
        },
        {
            "id": 230807019,
            "cn": "Shreyash",
            "mn1": "7975137465",
            "gst": "",
            "add": "Gents Main Hostel, NET Hostels, NMAMIT, Nitte, Karkala, Nitte",
            "ods": [],
            "mn2": "",
            "pin": "574110"
        },
        {
            "id": 230807020,
            "cn": "Samiksha",
            "mn1": "9557293262",
            "gst": "",
            "add": "Nautiyal niwas , kandoli  near vedanta store rajpur road dehradun",
            "ods": [],
            "mn2": "9557900510",
            "pin": "248001"
        },
        {
            "id": 230807021,
            "cn": "Saju",
            "mn1": "7028911186",
            "gst": "",
            "add": "Dad Gifts You, \nPrabhath Saju,\nCharupilavel house, behind kochupally, piravom town, Cochin City",
            "ods": [
                "s308247"
            ],
            "mn2": "9172043391",
            "pin": "686664"
        },
        {
            "id": 230807022,
            "cn": "Abdul Rashid",
            "mn1": "7980146027",
            "gst": "",
            "add": "Rady Digital\n28,MADAR TALA LANE, 4TH FLOOR, PILKHANA, HOWRAH",
            "ods": [],
            "mn2": "8961440408",
            "pin": "711101"
        },
        {
            "id": 230807023,
            "cn": "OOZEME",
            "mn1": "9511804208",
            "gst": "30AAIFO5164F1ZI",
            "add": "189/2, shantadurga temple, santan, goavellha",
            "ods": [
                "s308358",
                "s308606"
            ],
            "mn2": "7385177108",
            "pin": "403108"
        },
        {
            "id": 230807024,
            "cn": "Kashina",
            "mn1": "9366876850",
            "gst": "",
            "add": "Chongkham , Kherem\nArunachal Pradesh ",
            "ods": [],
            "mn2": "",
            "pin": "792102"
        },
        {
            "id": 230807025,
            "cn": "Jayant",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308256",
                "s308838"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230808001,
            "cn": "Bhalla",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308263"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230808002,
            "cn": "Moulik Clothing",
            "mn1": "8349846406",
            "gst": "23CRTPM1544D1ZU",
            "add": "Shop - 21, Pavitra Parisar, Near Signature 360, Katara Hills, Bhopal, Madhya Pradesh",
            "ods": [
                "s308267"
            ],
            "mn2": "",
            "pin": "462043"
        },
        {
            "id": 230808003,
            "cn": "Tamalika",
            "mn1": "9903210860",
            "gst": "",
            "add": "20 shahid mahal dp nagar belgharia kolkata",
            "ods": [],
            "mn2": "8961421203",
            "pin": "700056"
        },
        {
            "id": 230808004,
            "cn": "Arjun",
            "mn1": "9346766140",
            "gst": "",
            "add": "Aradhya boys hostel, near railway track,\nnear sreenidhi college,Yamnampet",
            "ods": [
                "s308425",
                "s308439"
            ],
            "mn2": "",
            "pin": "501301"
        },
        {
            "id": 230808005,
            "cn": "Shubham",
            "mn1": "8450902670",
            "gst": "",
            "add": " Western Local\nlandmark - bldg no 42, room no 601,Bwing Subhashnagar, Near sai baba temple chembur east",
            "ods": [
                "s308284"
            ],
            "mn2": "7506498298",
            "pin": "400071"
        },
        {
            "id": 230808006,
            "cn": "Mudasir",
            "mn1": "7276409899",
            "gst": "",
            "add": "Shaikh Mudassir Nadeem\nFlat no 3, First Building left Hand side, Lane next to Aurangabad Times Newspaper Office, Aurangabad Times Colony, Aurangabad, Maharashtra",
            "ods": [
                "s308287"
            ],
            "mn2": "",
            "pin": "431001"
        },
        {
            "id": 230808007,
            "cn": "Live Fit",
            "mn1": "9113501254",
            "gst": "",
            "add": "Flat No.1104,11th floor,tower no 20Ambrosia D ,\nOmax residency phase 2, Arjunganj, Gomti Nagar extension",
            "ods": [],
            "mn2": "",
            "pin": "226002"
        },
        {
            "id": 230808008,
            "cn": "THE JUNTO.IN",
            "mn1": "9991033323",
            "gst": "06IVVPS6195A1ZT",
            "add": "Inder villa \nH.no 5174 , \nMohalla Topchiwara \nRewari , Haryana",
            "ods": [
                "s308301"
            ],
            "mn2": "",
            "pin": "123401"
        },
        {
            "id": 230808009,
            "cn": "BLACK PEARL BOUTIQUE",
            "mn1": "9998631488",
            "gst": "24AIHPV5498C1ZW",
            "add": "Ug,28,29,30GoldenParkApartment, OppositePrimeArcade, AanandMahalRoad Adajan",
            "ods": [
                "s308333",
                "s309314"
            ],
            "mn2": "",
            "pin": "395009"
        },
        {
            "id": 230808010,
            "cn": "Sandeep",
            "mn1": "9344210552",
            "gst": "",
            "add": "KU GARMENTS\n268, Sri natrajan gining factory  compound .\navinashi road \nNear RK residency, Banglow stop.\nTirupur",
            "ods": [],
            "mn2": "",
            "pin": "641602"
        },
        {
            "id": 230808011,
            "cn": "Realfayaz",
            "mn1": "9777174442",
            "gst": "",
            "add": "Tata gluco plant, Near Nergundi Railway Station, Manguli, Cuttack, odisha\nCuttack",
            "ods": [],
            "mn2": "",
            "pin": "754025"
        },
        {
            "id": 230808012,
            "cn": "Palash",
            "mn1": "8777301861",
            "gst": "",
            "add": "palash mondal \nVill- Doardanga  \nChakdaha , Nadia ,West Bengal",
            "ods": [],
            "mn2": "8777306107",
            "pin": "741222"
        },
        {
            "id": 230809001,
            "cn": "Indu",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308310"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230809002,
            "cn": "Harsh",
            "mn1": "8000104546",
            "gst": "",
            "add": "M-74,block no.407,new gujrat housing board,sanala road, morbi(gujrat)",
            "ods": [
                "s30989",
                "s309527"
            ],
            "mn2": "",
            "pin": "363641"
        },
        {
            "id": 230809003,
            "cn": "Ravi Patel",
            "mn1": "7359491957",
            "gst": "",
            "add": "Office no. 413, 4th Floor,Golden Square,Besides DMart, Mota Varachha, Surat, Gujarat",
            "ods": [],
            "mn2": "8160164721",
            "pin": "394105"
        },
        {
            "id": 230809004,
            "cn": "Prince Raghav",
            "mn1": "8882316661",
            "gst": "",
            "add": "Fashion 4 you near Shaurya farm house sec 73 noida up",
            "ods": [],
            "mn2": "",
            "pin": "201307"
        },
        {
            "id": 230809005,
            "cn": "Colorhawks",
            "mn1": "8791425321",
            "gst": "09AAQFC1023P1Z4",
            "add": "Basement-Shop No.35,  Jagat Plaza-2, Jagat Farm, Gamma-1",
            "ods": [],
            "mn2": "9354841310",
            "pin": "201310"
        },
        {
            "id": 230809006,
            "cn": "Thunder",
            "mn1": "8149299102",
            "gst": "",
            "add": "Mangalmurti Digital, Near City Police Station, \nShaniwar Peth Karad",
            "ods": [
                "s30961"
            ],
            "mn2": "8390406255",
            "pin": "415110"
        },
        {
            "id": 230809007,
            "cn": "Inaxia",
            "mn1": "9319289478",
            "gst": "",
            "add": "F-3, Ph-7, Dronanchal Housing Society, sector-1, vasundhara, ghaziabad",
            "ods": [],
            "mn2": "",
            "pin": "201012"
        },
        {
            "id": 230809008,
            "cn": "Kabeer",
            "mn1": "9582901419",
            "gst": "",
            "add": "181-pocket-c mayur vihar ph-2, Above ambika general store",
            "ods": [],
            "mn2": "",
            "pin": "110091"
        },
        {
            "id": 230809009,
            "cn": "Duata Kawlni",
            "mn1": "8974220636",
            "gst": "",
            "add": "Near Punjab Bank ATM,\nTuikhuah Veng",
            "ods": [
                "s308325"
            ],
            "mn2": "9862906923",
            "pin": "796181"
        },
        {
            "id": 230809010,
            "cn": "Harshal",
            "mn1": "8390763852",
            "gst": "",
            "add": "2nd floor,audumber building, behind rajaram society, prabhat colony, mahad, raigad",
            "ods": [
                "s308328"
            ],
            "mn2": "8007311796",
            "pin": "402301"
        },
        {
            "id": 230809011,
            "cn": "Sandeep",
            "mn1": "7001798671",
            "gst": "",
            "add": "Srirampur , Gopinagar, Hooghly, ",
            "ods": [],
            "mn2": "",
            "pin": "712402"
        },
        {
            "id": 230809012,
            "cn": "Shahejad",
            "mn1": "9824271144",
            "gst": "24ACRPC7953K3Z3",
            "add": "T-SHIRT FACTORY \n162, 1st Floor, Sarvodaya commercial center, Nr. G.P.O., \nSalapose Road, Reliefe Road, Ahmedabad",
            "ods": [],
            "mn2": "",
            "pin": "380001"
        },
        {
            "id": 230809013,
            "cn": "Anurag",
            "mn1": "7439068591",
            "gst": "",
            "add": "Af-301, Diamond Villa, Talbagan, Kestopur, Kolkata",
            "ods": [],
            "mn2": "",
            "pin": "700101"
        },
        {
            "id": 230809014,
            "cn": "Neha",
            "mn1": "7838904483",
            "gst": "",
            "add": "H.No. 238, Vill Majri Kalan, Teh-Neemrana, Dist. Alwar, Rajasthan",
            "ods": [],
            "mn2": "",
            "pin": "301703"
        },
        {
            "id": 230810001,
            "cn": "High Humans",
            "mn1": "9078333680",
            "gst": "",
            "add": "Sidharth Ray \nLakshaya Enterprises\n867, Garage Chhak, Old Town, Bhubaneswar, Odisha",
            "ods": [
                "s308336"
            ],
            "mn2": "7008584992",
            "pin": "751002"
        },
        {
            "id": 230810002,
            "cn": "SHIVANSH ENTERPRISES",
            "mn1": "",
            "gst": "27AEZFS4361R1ZQ",
            "add": "",
            "ods": [
                "s308372"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230810003,
            "cn": "Ratan",
            "mn1": "9410576331",
            "gst": "",
            "add": "H.no. 982 Avas vikas colony veerbhardea road Rishikesh",
            "ods": [
                "s308339"
            ],
            "mn2": "",
            "pin": "249201"
        },
        {
            "id": 230810004,
            "cn": "Manpreet",
            "mn1": "9416626127",
            "gst": "",
            "add": "Surjeet singh\n82B dhani balwant singh, ranjeetpurtheri, tehsil nakora, rania. Sirsa, haryana",
            "ods": [
                "s308848"
            ],
            "mn2": "",
            "pin": "125076"
        },
        {
            "id": 230810005,
            "cn": "Prabhubhakti Private Limited",
            "mn1": "",
            "gst": "06AAMCP1361L1Z6",
            "add": "Plot no 5, Ground Floor, Street E 4.1, Vatika, Sector 82, Gurgaon",
            "ods": [
                "s308341"
            ],
            "mn2": "",
            "pin": "122004"
        },
        {
            "id": 230810006,
            "cn": "Faris",
            "mn1": "9207422073",
            "gst": "",
            "add": "thuluvan house cherukulamba chattipparamba\nLANDMARK:ikthss school, malappuram",
            "ods": [],
            "mn2": "8606132091",
            "pin": "676507"
        },
        {
            "id": 230810007,
            "cn": "Mounika",
            "mn1": "9380065803",
            "gst": "",
            "add": "202, msr vistaa apartment, chandra layout,  marathahalli",
            "ods": [],
            "mn2": "",
            "pin": "560037"
        },
        {
            "id": 230810008,
            "cn": "Saurabh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": "247001"
        },
        {
            "id": 230810009,
            "cn": "Vikash",
            "mn1": "6352870086",
            "gst": "",
            "add": "A - 708 , pramukh garden near park City , kilvani naka , silvassa",
            "ods": [],
            "mn2": "8866786054",
            "pin": "396230"
        },
        {
            "id": 230810010
        },
        {
            "id": 230810011,
            "cn": "Rahul Halder",
            "mn1": "7044691679",
            "gst": "",
            "add": "P44C Dr Sarat Banerjee Road , Near We are Brothers Club",
            "ods": [],
            "mn2": "9903522038",
            "pin": "700029"
        },
        {
            "id": 230810012,
            "cn": "DEZAINa",
            "mn1": "7290998858",
            "gst": "",
            "add": "B-80(1304), SK Aggarwal Jewellers, New Ashok Nagar DELHI",
            "ods": [],
            "mn2": "9897244071",
            "pin": "110096"
        },
        {
            "id": 230811001,
            "cn": "Gaurav",
            "mn1": "7044563299",
            "gst": "",
            "add": "A 304 Shukan Residency, vesu surat near Nandanvan Surat ",
            "ods": [],
            "mn2": "",
            "pin": "395007"
        },
        {
            "id": 230811002,
            "cn": "Wannabe",
            "mn1": "9071804453",
            "gst": "29AAOFB4388A1ZA",
            "add": "BrandMeUp Creative c/o Chandan R K \n198, 1st Cross Shirdi Sai Nagar, R K Hegdenagar, Narayanapura, Bengaluru, Karnataka",
            "ods": [],
            "mn2": "",
            "pin": "560077"
        },
        {
            "id": 230811003,
            "cn": "Gagan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230811004,
            "cn": "Shadab",
            "mn1": "9370666029",
            "gst": "",
            "add": "Flat no 4 ,jay ganesh society,mukund nagar , bhanvaj road ,khopoli, tal-khalapur",
            "ods": [
                "s30910"
            ],
            "mn2": "",
            "pin": "410203"
        },
        {
            "id": 230811005,
            "cn": "Vishwas Gupta",
            "mn1": "9319312982",
            "gst": "",
            "add": "Maheshwari Estate Takiya Chowk Burari Mode",
            "ods": [],
            "mn2": "",
            "pin": "110084"
        },
        {
            "id": 230811006,
            "cn": "Jay Rawal",
            "mn1": "7228852444",
            "gst": "",
            "add": "K-1 Swastik flat shahpur bahai center opp Ganesh temple , Ahmedabad",
            "ods": [],
            "mn2": "",
            "pin": "380001"
        },
        {
            "id": 230811007,
            "cn": "Kashi Print",
            "mn1": "9120000439",
            "gst": "",
            "add": "ANURAG KUMAR YADAV \nH no B43, Vishwakarma nagar extension,Near ideal new star English school, susuwahi, varanasi,uttar pradesh",
            "ods": [],
            "mn2": "",
            "pin": "221011"
        },
        {
            "id": 230811008,
            "cn": "Bijal",
            "mn1": "7878989857",
            "gst": "",
            "add": "C-43, Goyal Complex, Nr. Sandesh Press, Lad Society Road, Vastrapur, Bodakdev, Ahmedabad -.",
            "ods": [],
            "mn2": "9924249857",
            "pin": "380054"
        },
        {
            "id": 230811009,
            "cn": "Li sangtam",
            "mn1": "6009088069",
            "gst": "",
            "add": "Naal apartment \nLb22\nLawjinrew Nongthymmai \nShillong\nMeghalaya",
            "ods": [],
            "mn2": "",
            "pin": "793014"
        },
        {
            "id": 230811010,
            "cn": "Amjad",
            "mn1": "7003296002",
            "gst": "",
            "add": "Ideal Heights Apartment\n302 APC Road\nSealdah, Kolkata\nBlock C flat 3 E",
            "ods": [],
            "mn2": "8697741531",
            "pin": "700009"
        },
        {
            "id": 230811011,
            "cn": "Syndicate",
            "mn1": "9089218703",
            "gst": "",
            "add": "vb-25\nLocality : Vaivakawn\nLandmark : Uite veng, Salvation biakin bul",
            "ods": [
                "s308402"
            ],
            "mn2": "",
            "pin": "796009"
        },
        {
            "id": 230811012,
            "cn": "Gaurav",
            "mn1": "9928445173",
            "gst": "",
            "add": "59 A panchawati colony miyabaza wali gali sagner thana tonk road, ",
            "ods": [],
            "mn2": "",
            "pin": "302029"
        },
        {
            "id": 230811013,
            "cn": "Aman",
            "mn1": "7632033758",
            "gst": "",
            "add": "Anupurna General Store, Sindur, Hazaribag, Jharkhand",
            "ods": [],
            "mn2": "7320066743",
            "pin": "825301"
        },
        {
            "id": 230812001,
            "cn": "Pranali",
            "mn1": "8698122881",
            "gst": "",
            "add": "Flat no C 3,Ganesh Vishwa Phase 3,Bhintade Nagar,Near Ashwariya banquet hall,Ambegaon Budruk,Pune",
            "ods": [
                "s308415",
                "s309504"
            ],
            "mn2": "9561777211",
            "pin": "411046"
        },
        {
            "id": 230812002,
            "cn": "Vansh",
            "mn1": "9106973138",
            "gst": "",
            "add": "DIMPLE SELECTION,Near mittal tiers narol circle,sarkhej road ",
            "ods": [],
            "mn2": "8511668971",
            "pin": "380050"
        },
        {
            "id": 230812003,
            "cn": "Nidhi",
            "mn1": "9265809080",
            "gst": "",
            "add": "Flat : “Dwarkesh sky life” 401 ,wing A ,4th floor\nNear khodiyar temple \nArea: Bhomeshwar \nJamnagar road",
            "ods": [],
            "mn2": "9408519203",
            "pin": "360006"
        },
        {
            "id": 230812004,
            "cn": "Raju",
            "mn1": "7004120708",
            "gst": "",
            "add": "c/o book land near nirmala college parastoli doranda ranchi",
            "ods": [],
            "mn2": "",
            "pin": "834002"
        },
        {
            "id": 230812005,
            "cn": "Sunil",
            "mn1": "9869176116",
            "gst": "",
            "add": "44, Satya Bhavan, Opp. 4th Pasta Lane, S.B. Singh Road, Colaba, Mumbai",
            "ods": [],
            "mn2": "",
            "pin": "400005"
        },
        {
            "id": 230812006,
            "cn": "Jamaluddin",
            "mn1": "9380935393",
            "gst": "",
            "add": "L&T construction. Gate no. 08  janpath road. Near India gate, opp. National archive \nNew Delhi ",
            "ods": [],
            "mn2": "",
            "pin": "110001"
        },
        {
            "id": 230812007,
            "cn": "Suresh",
            "mn1": "9900441418",
            "gst": "",
            "add": "HNS Fuel station \n42, 6th cross, Bhuvaneshwarinagar, Kempapura Hebbal, \nBanglore, Karnataka",
            "ods": [],
            "mn2": "",
            "pin": "560024"
        },
        {
            "id": 230812008,
            "cn": "Abuzaid",
            "mn1": "6206855923",
            "gst": "",
            "add": "108, Shri Ambika Niwas,\nB Wing, Plot no. 40, Sector 42, Seawoods West Navi Mumbai, Opposite Seawoods Nexus Mall",
            "ods": [],
            "mn2": "",
            "pin": "400706"
        },
        {
            "id": 230812009,
            "cn": "Yunika",
            "mn1": "9582901419",
            "gst": "",
            "add": "181-pocket-c mayur vihar ph-2 , Above ambika general store",
            "ods": [
                "s308437"
            ],
            "mn2": "9999896272",
            "pin": "110091"
        },
        {
            "id": 230812010,
            "cn": "Shubhra",
            "mn1": "8240422853",
            "gst": "",
            "add": "Opp. 76a, Stanza Living, 2nd cross, Naidu Layout, Shantipura, Electronic City Phase II,",
            "ods": [],
            "mn2": "",
            "pin": "560100"
        },
        {
            "id": 230812011,
            "cn": "Deekshitapogiri",
            "mn1": "9391288392",
            "gst": "",
            "add": "203,RD enclave, banjaara hills Road no. 4,Hyderabad",
            "ods": [],
            "mn2": "",
            "pin": "500034"
        },
        {
            "id": 230812012,
            "cn": "Sachin Jakhar",
            "mn1": "8510048200",
            "gst": "",
            "add": "JaKhar Saab Fashion Point goyla Daisy dwarka Main Road qutub vihar Phase NEAR foam Cars washing\nNEar dwarka sec 19 oPG School",
            "ods": [],
            "mn2": "8510048200",
            "pin": "110071"
        },
        {
            "id": 230813001,
            "cn": "Rifnas",
            "mn1": "9746009752",
            "gst": "",
            "add": "nellikathukuzhi house, h.m.t colony po kalamassery \nLandmark : near palachuvadu big tree",
            "ods": [],
            "mn2": "9946917594",
            "pin": "683503"
        },
        {
            "id": 230813002,
            "cn": "Hitesh",
            "mn1": "8805467837",
            "gst": "",
            "add": "848, Sadashiv Peth, Jondhale Chowk,  pune maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "411030"
        },
        {
            "id": 230813003,
            "cn": "Utkarsh",
            "mn1": "8209285015",
            "gst": "",
            "add": "94 krishna colony naya khera ambabri vidhydharnagar jaipur, Opposite to girdhar park",
            "ods": [],
            "mn2": "8003463657",
            "pin": "302039"
        },
        {
            "id": 230813004,
            "cn": "Sid",
            "mn1": "7778887880",
            "gst": "",
            "add": "39, Nizamuddin Nagar 2, Green park 4, Valsad",
            "ods": [],
            "mn2": "",
            "pin": "396001"
        },
        {
            "id": 230813005,
            "cn": "Aryavardhan",
            "mn1": "9797757332",
            "gst": "",
            "add": "Old satwari near people's academy school jammu cantt",
            "ods": [],
            "mn2": "",
            "pin": "180003"
        },
        {
            "id": 230813006,
            "cn": "Shobhit",
            "mn1": "7903961779",
            "gst": "",
            "add": "Eurature Fashion private limited \nDiwan Mohalla Ramjanki chauraha, Patna City , Bihar",
            "ods": [],
            "mn2": "9113721657",
            "pin": "800008"
        },
        {
            "id": 230813007,
            "cn": "Zurawar",
            "mn1": "8009908910",
            "gst": "",
            "add": "43B, B Block Rd, Old DLF Colony, Sector 14,\nGurugram, Haryana",
            "ods": [],
            "mn2": "",
            "pin": "122001"
        },
        {
            "id": 230813008,
            "cn": "Vikhyat",
            "mn1": "9810530914",
            "gst": "",
            "add": "PRERNA APPARTMENTS (OPPOSITE MOTHER DAIRY) GANDHI NAGAR NEAR OPPULENT MALL GHAZIABAD",
            "ods": [
                "s308456"
            ],
            "mn2": "",
            "pin": "201001"
        },
        {
            "id": 230813009,
            "cn": "Raunak",
            "mn1": "9718408771",
            "gst": "",
            "add": "D-1/20 Model Town 2 New Delhi near gurudwara backside",
            "ods": [],
            "mn2": "",
            "pin": "110009"
        },
        {
            "id": 230813010,
            "cn": "DRAKEN",
            "mn1": "9875538574",
            "gst": "",
            "add": "7/b Bijoy nagar, national park, shimultala,Naihati, 24 pgs north...West Bengal ...near LITON GYM ",
            "ods": [],
            "mn2": "",
            "pin": "743165"
        },
        {
            "id": 230813011,
            "cn": "Ocean Craft",
            "mn1": "8898862510",
            "gst": "27AAIFO0484A1ZI",
            "add": "76 F A 1st floor kamgarnagar S G barve M A Kurla east, Mumbai, ",
            "ods": [
                "s308462"
            ],
            "mn2": "8369091411",
            "pin": "400024"
        },
        {
            "id": 230814001,
            "cn": "Vini",
            "mn1": "9654117573",
            "gst": "",
            "add": "(M/S EKFASHION1) \n228, NIRMAN APARTMENTS, MAYUR VIHAR PHASE-1 EXTENSION, OPPOSITE SAMACHAR APARTMENTS",
            "ods": [],
            "mn2": "9990508315",
            "pin": "110091"
        },
        {
            "id": 230814002,
            "cn": "Kaustubh",
            "mn1": "7972557895",
            "gst": "",
            "add": "302, Jayshree blossom, Krishn Vihar, Isasani, Nagpur,",
            "ods": [],
            "mn2": "9028381440",
            "pin": "440016"
        },
        {
            "id": 230814003,
            "cn": "Niks",
            "mn1": "9370711234",
            "gst": "",
            "add": "Plot no 142,Near Buddha Vihar, Smruti Nagar near Parivartan Chauk\nNagpur, Maharashtra\n",
            "ods": [],
            "mn2": "9049670918",
            "pin": "441111"
        },
        {
            "id": 230814004,
            "cn": "Samir Ansari",
            "mn1": "7091632149",
            "gst": "",
            "add": "Pakur Buss Stand, Ali Ganj",
            "ods": [
                "s309307"
            ],
            "mn2": "",
            "pin": "816107"
        },
        {
            "id": 230814005,
            "cn": "Deepak",
            "mn1": "8882651788",
            "gst": "",
            "add": "Vill - Chunabhatta\nPO - Chandani Banbasa\nDist. - Champawat ",
            "ods": [],
            "mn2": "",
            "pin": "262310"
        },
        {
            "id": 230814006,
            "cn": "Praful",
            "mn1": "8140400176",
            "gst": "",
            "add": "Mavajipura, behind Ujala circle, sarkhej, Ahmedabad, Gujarat",
            "ods": [],
            "mn2": "8347695079",
            "pin": "382210"
        },
        {
            "id": 230814007,
            "cn": "Titirsha",
            "mn1": "8879979406",
            "gst": "",
            "add": "R201, Hostel 5,\nIIM Sambalpur Permanent Campus,\nBasantpur, Near Gosala, \nTahsil - Burla,  \nDist - Sambalpur (Odisha)",
            "ods": [],
            "mn2": "",
            "pin": "768025"
        },
        {
            "id": 230814008,
            "cn": "Himanshu",
            "mn1": "9557304972",
            "gst": "",
            "add": "212 chukkuwala, omkar road, \nKumar chowk",
            "ods": [
                "s308482"
            ],
            "mn2": "7351149551",
            "pin": "248001"
        },
        {
            "id": 230814009,
            "cn": "Sonu",
            "mn1": "6267112254",
            "gst": "",
            "add": "Qno 9/c, street-N.A.V, zone 2, balaji nagar, khursipar, zone 2, sector 11, bhilai",
            "ods": [],
            "mn2": "7240987072",
            "pin": "490011"
        },
        {
            "id": 230814010,
            "cn": "Urbanshot",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230814011,
            "cn": "Deepak",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s309461"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230814012,
            "cn": "Nilraj",
            "mn1": "9373533564",
            "gst": "",
            "add": "Flat no. 650 B wing, Ganesh Galaxy, Dattanagar Aambegaon bhudruk, district pune ,state maharastra ",
            "ods": [],
            "mn2": "8554917558",
            "pin": "411046"
        },
        {
            "id": 230815001,
            "cn": "Subby",
            "mn1": "9830270713",
            "gst": "",
            "add": "Shubham singh37 diamond harbour road,flat no 801 diamond tower apartment , near majerhat bridge kolkata",
            "ods": [],
            "mn2": "9073399629",
            "pin": "700027"
        },
        {
            "id": 230815002,
            "cn": "G star",
            "mn1": "9972231881",
            "gst": "",
            "add": "Kirankumar MV\nRF road near Venugopal swomy temple Malur\nKolar district",
            "ods": [],
            "mn2": "",
            "pin": "563130"
        },
        {
            "id": 230815003,
            "cn": "Akhil",
            "mn1": "9897447693",
            "gst": "09ETAPM3744L1ZA",
            "add": "35 D/3 rampur garden, BAREILLY",
            "ods": [
                "s308502",
                "s309230",
                "s309232"
            ],
            "mn2": "",
            "pin": "243001"
        },
        {
            "id": 230815004,
            "cn": "Ron",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230815005,
            "cn": "Priya",
            "mn1": "8826224149",
            "gst": "",
            "add": "D -1704\nSunrise greens apartment Jaipuriya Indirapuram \nGhaziabad",
            "ods": [
                "s309508"
            ],
            "mn2": "",
            "pin": "201014"
        },
        {
            "id": 230815006,
            "cn": "Abel",
            "mn1": "9900253436",
            "gst": "",
            "add": "S3-005, silverwood regency, kasavanahali, Sarjapur road, opposite play arena, Bangalore",
            "ods": [],
            "mn2": "9739658222",
            "pin": "560035"
        },
        {
            "id": 230815007,
            "cn": "David",
            "mn1": "8240874234",
            "gst": "",
            "add": "Bargachia uco bank building,\nOffice- ofstamp.com",
            "ods": [
                "s308997"
            ],
            "mn2": "",
            "pin": "711404"
        },
        {
            "id": 230815008,
            "cn": "Harish Kumar",
            "mn1": "6238241981",
            "gst": "",
            "add": "House name : sharfana manzil\nAddress : near KSEB office, ozhinavalappu road, padanakkad, kanhangad",
            "ods": [],
            "mn2": "",
            "pin": "671314"
        },
        {
            "id": 230815009,
            "cn": "Ullash",
            "mn1": "9647354496",
            "gst": "",
            "add": "3rd Building near Mio Amore and Banalta Restaurant.\nShivmandir\nSiliguri, Darjeeling",
            "ods": [],
            "mn2": "8910666733",
            "pin": "734013"
        },
        {
            "id": 230815010,
            "cn": "Rushikesh",
            "mn1": "7030412826",
            "gst": "",
            "add": "Flat no. 302- Laxmi Narayan complex, near morya hospital, chinchwad gaon bus stop, chinchwad-, Pune",
            "ods": [],
            "mn2": "9527518534",
            "pin": "411033"
        },
        {
            "id": 230815011,
            "cn": "Fathishameerk",
            "mn1": "9995025052",
            "gst": "",
            "add": "Abdul Azeez, madeena manzil, valiyavalapu, posoat, manjeshwar, kasargod ,kerala",
            "ods": [],
            "mn2": "9746918565",
            "pin": "671323"
        },
        {
            "id": 230815012,
            "cn": "Sujit",
            "mn1": "7001145615",
            "gst": "",
            "add": "kolkata Ruby, jai prakash automobiles garage,\n(near urbana complex), entertainment studio",
            "ods": [
                "s308516"
            ],
            "mn2": "",
            "pin": "700150"
        },
        {
            "id": 230816001,
            "cn": "B Gutsy",
            "mn1": "",
            "gst": "06AFMPJ5100R1Z6",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230816002,
            "cn": "Lucifer",
            "mn1": "9152116462",
            "gst": "",
            "add": "Neel Sankul, BLdg-1, Room-101, Sector -11 Kalamboli, Navi mumbai.",
            "ods": [],
            "mn2": "",
            "pin": "410218"
        },
        {
            "id": 230816003,
            "cn": "Abhishekh Das",
            "mn1": "7894008684",
            "gst": "",
            "add": "PULSE PHARMACEUTICALS\nPlot No. 18/1, Sector-III, HUDA Techno Enclave, HITEC city",
            "ods": [],
            "mn2": "7894008684",
            "pin": "500081"
        },
        {
            "id": 230816004,
            "cn": "Dhaval",
            "mn1": "9106961736",
            "gst": "",
            "add": "336 Raghuvir scarlet Near DMD LP SAROLI- surat",
            "ods": [],
            "mn2": "",
            "pin": "395010"
        },
        {
            "id": 230816005,
            "cn": "Mohit",
            "mn1": "7011673529",
            "gst": "",
            "add": "A-768, Shastri Nagar, Delhi",
            "ods": [],
            "mn2": "",
            "pin": "110052"
        },
        {
            "id": 230816006,
            "cn": "MODERN DARJEE",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308531",
                "s308925"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230816007,
            "cn": "Ishwar",
            "mn1": "8353909796",
            "gst": "",
            "add": "268/46/70\nTakiya Chand Alishah Aishbagh, Lucknow\nNear Khajuha Dhobighat",
            "ods": [],
            "mn2": "",
            "pin": "226004"
        },
        {
            "id": 230816008,
            "cn": "Lokesh",
            "mn1": "7507610551",
            "gst": "",
            "add": "plot no 50, near kalode college, omkar nagar, nagpur",
            "ods": [],
            "mn2": "8446982739",
            "pin": "440027"
        },
        {
            "id": 230816009,
            "cn": "Yogesh Malviya",
            "mn1": "9782597746",
            "gst": "",
            "add": "H-104 , SECTOR 14 UDAIPUR RAJASTHAN\nKALA JI ROAD",
            "ods": [
                "s308542"
            ],
            "mn2": "9772397469",
            "pin": "313001"
        },
        {
            "id": 230816010,
            "cn": "SOUND STITCH",
            "mn1": "9903631592",
            "gst": "19AEZFS7952Q1ZE",
            "add": "Mainak Nandy, 2nd floor , 480 Brook Court, next to seva jyotsna, hussenpur main road, Anandapur. Kolkata. West Bengal",
            "ods": [
                "s308851"
            ],
            "mn2": "7439873957",
            "pin": "700107"
        },
        {
            "id": 230816011,
            "cn": "Ashish",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308549"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230816012,
            "cn": "Tanmay",
            "mn1": "7703893425",
            "gst": "",
            "add": "WZ-152, DASGHARA VILLAGE, PANDITO KA MOHALLA, NEW DELHI , NEAR AKHARA",
            "ods": [],
            "mn2": "",
            "pin": "110012"
        },
        {
            "id": 230816013,
            "cn": "Gajlaxmi tex fab",
            "mn1": "6291166372",
            "gst": "24AILPM3481C1ZE",
            "add": "Shop no. G 22 , Vesu Main Road",
            "ods": [
                "s308553"
            ],
            "mn2": "",
            "pin": "395007"
        },
        {
            "id": 230816014,
            "cn": "Samson",
            "mn1": "8848245739",
            "gst": "",
            "add": "Sam Paul\n2E,Skyline Orchid\nKanjikuzhy\nKottayam\nKerala ",
            "ods": [],
            "mn2": "",
            "pin": "686004"
        },
        {
            "id": 230816015,
            "cn": "Pratik",
            "mn1": "9762661115",
            "gst": "",
            "add": "Plot no. 28, Padma Housing socy, Opp. SSC Board, Kolhapur, Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "416004"
        },
        {
            "id": 230816016,
            "cn": "Syed",
            "mn1": "8801044236",
            "gst": "",
            "add": "Nawab sahab kunta, Hyderabad\n19-4-279/39\nBeside,Iqra mission High school",
            "ods": [],
            "mn2": "",
            "pin": "500053"
        },
        {
            "id": 230816017,
            "cn": "Akshay",
            "mn1": "8806914885",
            "gst": "",
            "add": "Lano no 1, Durga Krupa, Christian Colony, Khadan, Akola, Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "444004"
        },
        {
            "id": 230816018,
            "cn": "Sonia",
            "mn1": "8240463669",
            "gst": "",
            "add": "64/1A Bose pukur road Kolkata land mark -punjab national bank",
            "ods": [],
            "mn2": "",
            "pin": "700042"
        },
        {
            "id": 230816019,
            "cn": "Rohail",
            "mn1": "9773516559",
            "gst": "",
            "add": "Supariwala building ,3rd floor r.no 34, 28th tandel street, opp Abdul rehman shah baba dargah ,mumbai",
            "ods": [],
            "mn2": "",
            "pin": "400009"
        },
        {
            "id": 230816020,
            "cn": "Macaw",
            "mn1": "6290015431",
            "gst": "",
            "add": "Macaw, Flat 1B, Nandankanan Apts,  Old Jessore road, Doltala\nLamdmark: Kabiguru 2no Sarani",
            "ods": [],
            "mn2": "",
            "pin": "700132"
        },
        {
            "id": 230816021,
            "cn": "Abhishekh",
            "mn1": "9582821800",
            "gst": "",
            "add": "House no - D 45a, 2nd floor , edunburg city, sector-91, Faridabad",
            "ods": [],
            "mn2": "",
            "pin": "121013"
        },
        {
            "id": 230816022,
            "cn": "Divya",
            "mn1": "7092869823",
            "gst": "",
            "add": "New no 30, old no 48, Mettu street, Villivakkam, Chennai",
            "ods": [],
            "mn2": "8248168539",
            "pin": "600049"
        },
        {
            "id": 230816023,
            "cn": "Buy Heart",
            "mn1": "9851773505",
            "gst": "",
            "add": "Tamanna Parvin \nHumaipur eidgah\nP.O - Abdalpur \nPS - Madhyamgram",
            "ods": [
                "s308570"
            ],
            "mn2": "",
            "pin": "700155"
        },
        {
            "id": 230816024,
            "cn": "Sanjay Gupta",
            "mn1": "9838003845",
            "gst": "",
            "add": "Nasail sweets, andar wali dukan, Moosanagar Kanpur dehat",
            "ods": [],
            "mn2": "",
            "pin": "209208"
        },
        {
            "id": 230817001,
            "cn": "Raju Kumar",
            "mn1": "7369966619",
            "gst": "",
            "add": "prestige tranquility tower 11, 11143, Budigere road,Bommanahalli",
            "ods": [],
            "mn2": "",
            "pin": "560049"
        },
        {
            "id": 230817002,
            "cn": "Vp",
            "mn1": "9586204303",
            "gst": "",
            "add": "B/2 Jay Somnath Flat\nBhoomi Campus,\nMal Gowdaun Road,\nUrban Bank Road,\nMehsana, Gujarat",
            "ods": [],
            "mn2": "9925204643",
            "pin": "384002"
        },
        {
            "id": 230817003,
            "cn": "Sachin",
            "mn1": "9019826766",
            "gst": "",
            "add": "Panakanahalli, Mandya",
            "ods": [],
            "mn2": "8310473063",
            "pin": "571403"
        },
        {
            "id": 230817004,
            "cn": "Shubham",
            "mn1": "7503243969",
            "gst": "",
            "add": "(Deszayner’s Studio)\nH No 33, Block no 1 , Street 6, Paharwa Colony, Chhawla",
            "ods": [],
            "mn2": "9716700117",
            "pin": "110071"
        },
        {
            "id": 230817005,
            "cn": "Rickson",
            "mn1": "9539070052",
            "gst": "",
            "add": "Rickson Mathew\n134, Kaipurathu House\nNear Poyyakunnam Bus Stop\nPoyyakunnam\nKizhakkambalam\nErnakulam Kerala",
            "ods": [],
            "mn2": "",
            "pin": "683562"
        },
        {
            "id": 230817006,
            "cn": "JS ENTERPRISES",
            "mn1": "",
            "gst": "07BWLPG9633B1ZJ",
            "add": "",
            "ods": [
                "s308584"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230817007,
            "cn": "Dev",
            "mn1": "9315257828",
            "gst": "",
            "add": "RD Print Zone \nD-46c, Shyam Vihar Ph-1, Road No.6 ,Near Mata Mandir ,Dindarpur village, Najafgarh ,New Delhi",
            "ods": [],
            "mn2": "8076511458",
            "pin": "110043"
        },
        {
            "id": 230817008,
            "cn": "Brahampal",
            "mn1": "7827594706",
            "gst": "",
            "add": "A-6, Gautam Buddha Nagar Noida Sector 16, Uttar Pradesh",
            "ods": [],
            "mn2": "7834874982",
            "pin": "201301"
        },
        {
            "id": 230817009,
            "cn": "Devan",
            "mn1": "9699480800",
            "gst": "",
            "add": "501/wing 4, rajkamal bayside chs, sector 15, cbd belapur, navi mumbai",
            "ods": [],
            "mn2": "",
            "pin": "400614"
        },
        {
            "id": 230817010,
            "cn": "Saloni",
            "mn1": "9923175958",
            "gst": "",
            "add": "At postage savalde-taluka Shirpur,dist-dhule,Maharashtra ",
            "ods": [],
            "mn2": "",
            "pin": "425405"
        },
        {
            "id": 230817011,
            "cn": "Preeti",
            "mn1": "9967649175",
            "gst": "",
            "add": " RH 11 Arinda chs plot 12/12A Sector 10 vashi Navi Mumbai ",
            "ods": [
                "s309166"
            ],
            "mn2": "",
            "pin": "400703"
        },
        {
            "id": 230817012,
            "cn": "Waen Enterprices",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308607"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230817013,
            "cn": "Karan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308685",
                "s3081097"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230817014,
            "cn": "Himanshu",
            "mn1": "7600173242",
            "gst": "",
            "add": "F-204 Devnandan Park,New India colony,\nbehind kelvnidham, Nikol",
            "ods": [
                "s309128"
            ],
            "mn2": "",
            "pin": "382350"
        },
        {
            "id": 230817015,
            "cn": "Anjali Garment",
            "mn1": "9140966856",
            "gst": "",
            "add": "KATKA\nKACHHAWA\nMIRZAPUR LAND\nMARK BABUSARAI",
            "ods": [],
            "mn2": "9935636660",
            "pin": "231501"
        },
        {
            "id": 230817016,
            "cn": "Sanjay Tharad",
            "mn1": "9726489074",
            "gst": "",
            "add": "Parul University, P O Limda, Tal Waghodia\nTagore Bhavan-c, Parul University\nVAGHODIA, GUJARAT",
            "ods": [],
            "mn2": "8511396131",
            "pin": "391760"
        },
        {
            "id": 230818001,
            "cn": "Sajid",
            "mn1": "9661030872",
            "gst": "",
            "add": "choti kalyani road near popular medicine front of kesari medicine Saket collection \nState:- Bihar\nCity:- Muzaffarpur",
            "ods": [],
            "mn2": "",
            "pin": "842001"
        },
        {
            "id": 230818002,
            "cn": "Shruti Ventures",
            "mn1": "9309599158",
            "gst": "27ASIPB4309H2ZY",
            "add": "B3-1103, Eves Garden,Opposite Orbis School,\nKeshav Nagar, Mundhwa",
            "ods": [
                "s308621"
            ],
            "mn2": "9594449988",
            "pin": "411036"
        },
        {
            "id": 230818003,
            "cn": "Soum",
            "mn1": "8583993081",
            "gst": "",
            "add": "Bc 194, salt lake ,sec 1, kolkata",
            "ods": [],
            "mn2": "",
            "pin": "700064"
        },
        {
            "id": 230818004,
            "cn": "Sanjay",
            "mn1": "9793169208",
            "gst": "",
            "add": "s/o Gajadhar Yadav gegaraon, maharajganj , Bhadohi (u p )",
            "ods": [],
            "mn2": "",
            "pin": "221314"
        },
        {
            "id": 230818005,
            "cn": "Prinscope",
            "mn1": "7798107017",
            "gst": "30DSKPM1717F1Z2",
            "add": "H.no-70,Quitla, Aldona, \nBardez-Goa North Goa",
            "ods": [
                "s308627"
            ],
            "mn2": "",
            "pin": "403508"
        },
        {
            "id": 230818006,
            "cn": "Rikhil",
            "mn1": "8437416665",
            "gst": "",
            "add": "B-24/326, Atterian Mohalla, Inside Kapuri Gate, Batala, Punjab ",
            "ods": [],
            "mn2": "7009485636",
            "pin": "143505"
        },
        {
            "id": 230818007,
            "cn": "Dharma",
            "mn1": "9618847258",
            "gst": "",
            "add": "Plot no.15, Gouri Shankar Colony, Road no:11, Opp to Parimala Banjara Apts \nBanjaraHills, Hyderabad",
            "ods": [],
            "mn2": "",
            "pin": "500034"
        },
        {
            "id": 230818008,
            "cn": "Sunil Kumar",
            "mn1": "8809208225",
            "gst": "",
            "add": "Singhpur Haraiya, Raxaul, Bihar",
            "ods": [
                "s308630"
            ],
            "mn2": "",
            "pin": "845305"
        },
        {
            "id": 230818009,
            "cn": "Waiz",
            "mn1": "6363999677",
            "gst": "",
            "add": "666, Shop No. 1, Bannimantap,\nS.S. Nagar, B-Layout, Mysore",
            "ods": [
                "s308633",
                "s309134"
            ],
            "mn2": "",
            "pin": "570007"
        },
        {
            "id": 230818010,
            "cn": "Hemant",
            "mn1": "8788314879",
            "gst": "",
            "add": "192, binaki mehandibagh road behind bohara colony kinkhede lay out nagpur",
            "ods": [],
            "mn2": "",
            "pin": "440017"
        },
        {
            "id": 230818011,
            "cn": "Rohit Mandal",
            "mn1": "7999002737",
            "gst": "",
            "add": "Infinite Design Lab\n405, 5th Floor, Cosmo Business Park, Sirol Road , Gwalior, M.P",
            "ods": [],
            "mn2": "",
            "pin": "474001"
        },
        {
            "id": 230818012,
            "cn": "Himanshu",
            "mn1": "7351149551",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230818013,
            "cn": "Tabixh",
            "mn1": "9906801585",
            "gst": "",
            "add": "Nowgam byepass srinagar jammu and kashmir",
            "ods": [],
            "mn2": "9906454210",
            "pin": "190015"
        },
        {
            "id": 230818014,
            "cn": "Printd",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230819001,
            "cn": "Arpit",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230819002,
            "cn": "Chavan Shah",
            "mn1": "7984936320",
            "gst": "",
            "add": "A402 aashirwad homes apcha nagar near saligram heights althan surat",
            "ods": [],
            "mn2": "",
            "pin": "395017"
        },
        {
            "id": 230819003,
            "cn": "Shree Gulab International",
            "mn1": "7742828090",
            "gst": "08JSWPK7597F1ZJ",
            "add": "plot no.55,hardev nagar 2,\njairampura road nindar",
            "ods": [
                "s308663"
            ],
            "mn2": "",
            "pin": "302013"
        },
        {
            "id": 230819004,
            "cn": "Gails",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230819005,
            "cn": "Denim Feels",
            "mn1": "7875656668",
            "gst": "",
            "add": "House no/Shop no - 5-19 -67 \nLandmark - Near Basera Hostel\nArea Name - Sabzi Mandi Khokadpura\nCity- Aurangabad \nState- Maharashtra ",
            "ods": [],
            "mn2": "",
            "pin": "431001"
        },
        {
            "id": 230819006,
            "cn": "Reshmi",
            "mn1": "8638292629",
            "gst": "",
            "add": "W Reshmi Singha\nDepartment of Ecology and Environmental Science\nAssam University, Silchar",
            "ods": [],
            "mn2": "",
            "pin": "788011"
        },
        {
            "id": 230819007,
            "cn": "Naman",
            "mn1": "9779077114",
            "gst": "",
            "add": "6/20, 6th East Cross Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu",
            "ods": [
                "s309174"
            ],
            "mn2": "",
            "pin": "632006"
        },
        {
            "id": 230819008,
            "cn": "Rudra",
            "mn1": "8376853062",
            "gst": "",
            "add": "A-115 First Floor, fateh nagar, New Delhi near Dashmesh hospital",
            "ods": [
                "s30964"
            ],
            "mn2": "",
            "pin": "110018"
        },
        {
            "id": 230819009,
            "cn": "Movin",
            "mn1": "7807428476",
            "gst": "",
            "add": "waliya general store near railway station NAGROTA Kangra Himachal Pradesh",
            "ods": [],
            "mn2": "",
            "pin": "176047"
        },
        {
            "id": 230819010,
            "cn": "Jaz",
            "mn1": "9100848304",
            "gst": "",
            "add": "Flat no.301, 8-3-684/2,\nstar apartments,\nNavodaya colony ,\nyousufguda,\nHYDERABAD",
            "ods": [],
            "mn2": "9032448304",
            "pin": "500045"
        },
        {
            "id": 230819011,
            "cn": "Shaik",
            "mn1": "9591338589",
            "gst": "",
            "add": "Bill to name : Shaik Abu Sufyan\nAddress: 48 5th cross, 5th floor, Williams town, Pottery town, ",
            "ods": [],
            "mn2": "9740657729",
            "pin": "560046"
        },
        {
            "id": 230819012,
            "cn": "Siddhart",
            "mn1": "9693758040",
            "gst": "",
            "add": "2/9 Banyan road shipra suncity gate no. 5 indirapuram ghaziabad.",
            "ods": [],
            "mn2": "",
            "pin": "201014"
        },
        {
            "id": 230819013,
            "cn": "REDDDEER",
            "mn1": "",
            "gst": "06MURPS4063E1Z0",
            "add": "",
            "ods": [
                "s3081166"
            ],
            "mn2": "",
            "pin": "121002"
        },
        {
            "id": 230819014,
            "cn": "Khemaang",
            "mn1": "9810502350",
            "gst": "",
            "add": "Ennoble fashion Private limited\nA145, Wazirpur industrial area New Delhi ",
            "ods": [],
            "mn2": "",
            "pin": "110052"
        },
        {
            "id": 230819015,
            "cn": "Sachin Sharma",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308686"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230819016,
            "cn": "Sourabh",
            "mn1": "8802936361",
            "gst": "",
            "add": "15/7 ground floor, moti nagar new delhi , new girls government school.",
            "ods": [],
            "mn2": "",
            "pin": "110015"
        },
        {
            "id": 230819017,
            "cn": "Abdul Raheem",
            "mn1": "8050133397",
            "gst": "",
            "add": "A M Complex, Indavara Post Uppali, Chikkmagalure",
            "ods": [],
            "mn2": "",
            "pin": "577101"
        },
        {
            "id": 230819018,
            "cn": "Anubhav",
            "mn1": "7891374503",
            "gst": "",
            "add": "Address \nHouse number 605-606\nSector 12-l Hanumangarh junction \nHanumangarh",
            "ods": [],
            "mn2": "",
            "pin": "335512"
        },
        {
            "id": 230819019,
            "cn": "Ayush",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230819020,
            "cn": "Nishit Ketan",
            "mn1": "9326160089",
            "gst": "",
            "add": "Flat no: 001 \nBuilding: c-57 sector 5 kavita CHS\nShanti nagar MIRA ROAD E\nTHANE",
            "ods": [],
            "mn2": "",
            "pin": "401107"
        },
        {
            "id": 230819021,
            "cn": "Bikram Keshari",
            "mn1": "8917671056",
            "gst": "",
            "add": "Bikram Jena plot no-1735 Baikunthapuri backside of panjab diesel \nPo Mancheswar Bhubaneswar",
            "ods": [
                "s308693"
            ],
            "mn2": "",
            "pin": "751017"
        },
        {
            "id": 230819022,
            "cn": "Adarsh Raj",
            "mn1": "7992447926",
            "gst": "",
            "add": "Srivastava villa 235,Ozone Kns Oasis, Kuthanganahalli village,Anekal taluk,Sarjapura Hobli, Bengaluru, Karnataka",
            "ods": [],
            "mn2": "",
            "pin": "562125"
        },
        {
            "id": 230819023,
            "cn": "Jinsy",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308698"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230819024,
            "cn": "Daksh",
            "mn1": "7906606349",
            "gst": "",
            "add": "12 Mansinghwala, DBS College road \nDehradun\nUttarakhand",
            "ods": [],
            "mn2": "9634890545",
            "pin": "248001"
        },
        {
            "id": 230819025,
            "cn": "Muskan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230819026,
            "cn": "Kasim",
            "mn1": "8306048950",
            "gst": "",
            "add": "Aadil Khan s/o Mohd Shahid \n Mohalla Nagouri Silawtan near Kabutron Ka Chowk.\nCity - Jodhpur",
            "ods": [],
            "mn2": "",
            "pin": "342001"
        },
        {
            "id": 230820001,
            "cn": "Harshil",
            "mn1": "8979577049",
            "gst": "",
            "add": "bhandari misthan ,ghokley marg jhanda chowk ,kotdwara ,pauri garhwal ,uttrakhand",
            "ods": [],
            "mn2": "7078012862",
            "pin": "246149"
        },
        {
            "id": 230820002,
            "cn": "Aamir",
            "mn1": "9549311580",
            "gst": "",
            "add": "Khushi colony, Kishangarh, Land mark- near cj academy",
            "ods": [
                "s309346"
            ],
            "mn2": "",
            "pin": "305801"
        },
        {
            "id": 230820003,
            "cn": "Aryan",
            "mn1": "9641401873",
            "gst": "",
            "add": "City - malbazar\nStreet - caltex more\nApartment - Agarwal & sons",
            "ods": [],
            "mn2": "",
            "pin": "735221"
        },
        {
            "id": 230820004,
            "cn": "Turple",
            "mn1": "9445427587",
            "gst": "",
            "add": "Door No3 Anandha bhairavi apts, Poonthottam 1st street Palavanthangal Chennai ",
            "ods": [],
            "mn2": "",
            "pin": "600061"
        },
        {
            "id": 230820005,
            "cn": "SniderShop",
            "mn1": "7505594866",
            "gst": "",
            "add": "379, B-Block, Church Rd, Sector 18, Indira Nagar, Lucknow, Uttar Pradesh",
            "ods": [],
            "mn2": "8482864447",
            "pin": "226016"
        },
        {
            "id": 230820006,
            "cn": "Vishal",
            "mn1": "9820952716",
            "gst": "",
            "add": "207, annex tower, B- wing, Gm nagar, near narangi bypass road, virar east  (mumbai)",
            "ods": [],
            "mn2": "",
            "pin": "401305"
        },
        {
            "id": 230820007,
            "cn": "Amritesh",
            "mn1": "7376610778",
            "gst": "",
            "add": "Ganga Vihar Colony, Lanka, Varanasi, Uttarpradesh",
            "ods": [],
            "mn2": "",
            "pin": "221005"
        },
        {
            "id": 230820008,
            "cn": "Gurveer",
            "mn1": "8442999946",
            "gst": "",
            "add": "Steam 1203 siddha eden lake villa,\nBonhoogly , dunlop \nCity:- Kolkata ",
            "ods": [
                "s308718"
            ],
            "mn2": "",
            "pin": "700108"
        },
        {
            "id": 230820009,
            "cn": "Arita",
            "mn1": "8910419090",
            "gst": "",
            "add": "Indian breakfild, Birlapur, Uttar Raipur",
            "ods": [
                "s308719"
            ],
            "mn2": "7908449421",
            "pin": "743318"
        },
        {
            "id": 230820010,
            "cn": "Pragati",
            "mn1": "9022037896",
            "gst": "",
            "add": "E-305 vastu viva society,  near Aromatic Wind, kala khadak road, bhumkar chowk ,Wakad,Pune",
            "ods": [],
            "mn2": "9527372455",
            "pin": "411057"
        },
        {
            "id": 230820011,
            "cn": "Kishan",
            "mn1": "9741194337",
            "gst": "",
            "add": "Kanakanady,falnir, vaslane, opposite brindhavan fast Food.\nHouse: Hiland manor flat.\nFloor: 4th floor \nRoom number:44",
            "ods": [
                "s308721"
            ],
            "mn2": "9845969066",
            "pin": "575002"
        },
        {
            "id": 230820012,
            "cn": "Ankit",
            "mn1": "7053333305",
            "gst": "",
            "add": "RR-34 parthivi province,sarona ,raipur Chhattisgarh",
            "ods": [],
            "mn2": "",
            "pin": "492010"
        },
        {
            "id": 230820013,
            "cn": "Ahmed",
            "mn1": "9908961504",
            "gst": "",
            "add": "ahmedmirza styling lounge \n3-2-475 vanka ss heights chappal bazaar kachiguda Hyderabad \nLandmark : near st mira high school ",
            "ods": [],
            "mn2": "",
            "pin": "500027"
        },
        {
            "id": 230821001,
            "cn": "Arkadeep",
            "mn1": "6290884287",
            "gst": "",
            "add": "B-2/8 Labony Estate Salt Lake, Sector-1, Kolkata West Bengal",
            "ods": [],
            "mn2": "",
            "pin": "700064"
        },
        {
            "id": 230821002,
            "cn": "Babu",
            "mn1": "9394831412",
            "gst": "",
            "add": " Malati drug distributors ..public school road ,surjya sen lane , house no.18",
            "ods": [],
            "mn2": "",
            "pin": "788005"
        },
        {
            "id": 230821003,
            "cn": "Fayaz",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230821004,
            "cn": "L",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230821005,
            "cn": "Lokesh",
            "mn1": "8867674003",
            "gst": "",
            "add": "Flat no 003, Sumukha Vriddhi apartment, Sy no 130/1, Dodakammanhalli main road, Kammanhalli, Bengaluru South.\nLandmark - opposite Amoda apartments",
            "ods": [],
            "mn2": "8197643205",
            "pin": "560083"
        },
        {
            "id": 230821006,
            "cn": "Om",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230821007,
            "cn": "Shub",
            "mn1": "8840611571",
            "gst": "",
            "add": "Full Address: E-520 sector M1 aashiyana colony Lucknow",
            "ods": [
                "s308741"
            ],
            "mn2": "9793433382",
            "pin": "226012"
        },
        {
            "id": 230821008,
            "cn": "Usthetic",
            "mn1": "9599560560",
            "gst": "",
            "add": "plot no 8&9 ms block ranaji enclave near bhagirathi properties Najafgarh new delhi",
            "ods": [],
            "mn2": "",
            "pin": "110043"
        },
        {
            "id": 230821009,
            "cn": "Sushant",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308744"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230821010,
            "cn": "Prabhat",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308748",
                "s308786",
                "s309222"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230821011,
            "cn": "Nikkhhil",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230821012,
            "cn": "Sayish",
            "mn1": "9207232035",
            "gst": "",
            "add": "Ar - Rayan , 12 Muri , Pinakkal , Thattamala , P.O. , Kollam",
            "ods": [],
            "mn2": "9526102535",
            "pin": "691020"
        },
        {
            "id": 230821013,
            "cn": "Gantavya",
            "mn1": "7339810662",
            "gst": "",
            "add": " House No.1 Sainik Colony Baran Road \nLandmark- Behind Sainik Petrol Pump",
            "ods": [],
            "mn2": "",
            "pin": "324001"
        },
        {
            "id": 230821014,
            "cn": "Ghost",
            "mn1": "7001698669",
            "gst": "",
            "add": "Suvo Ghosh, vill - parmadan, po - naldugari, ps - bagdah, dist - n24pgs",
            "ods": [],
            "mn2": "",
            "pin": "743297"
        },
        {
            "id": 230821015,
            "cn": "Arun",
            "mn1": "9746689891",
            "gst": "",
            "add": "Arunnivas, Kottankulangara, Chavara, Kollam, Kerala",
            "ods": [],
            "mn2": "9995724201",
            "pin": "691583"
        },
        {
            "id": 230821016,
            "cn": "Vyomesh",
            "mn1": "7985747554",
            "gst": "",
            "add": "2/24, Virat khand, Gomti Nagar, Lucknow",
            "ods": [],
            "mn2": "",
            "pin": "226010"
        },
        {
            "id": 230821017,
            "cn": "Rohit",
            "mn1": "9811766855",
            "gst": "",
            "add": "L size all 4 colours \n\nRohit gupta\nBlock KU house no 123\nSecond floor\nPitampura\nDelhi",
            "ods": [],
            "mn2": "",
            "pin": "110034"
        },
        {
            "id": 230821018,
            "cn": "Rupesh",
            "mn1": "8416083299",
            "gst": "",
            "add": "Kumar Boys Hostel, Gottigere , Bangalore ",
            "ods": [],
            "mn2": "",
            "pin": "560083"
        },
        {
            "id": 230821019,
            "cn": "Sujal",
            "mn1": "9353721044",
            "gst": "",
            "add": "9th cross, Magadi Main Rd, jain vivanta sky, binnipet, Opp to Indian oil petrol bunk",
            "ods": [],
            "mn2": "",
            "pin": "560023"
        },
        {
            "id": 230822001,
            "cn": "Photography",
            "mn1": "8606369784",
            "gst": "",
            "add": "Jomon kf\nKoduvalappil house\nJra- 203\nJanatha stop Manjummel\nErnakulam",
            "ods": [
                "s30962"
            ],
            "mn2": "",
            "pin": "683501"
        },
        {
            "id": 230822002,
            "cn": "Somendr",
            "mn1": "6395421775",
            "gst": "",
            "add": "A-31 natwar nagar dhouli piyau mathura",
            "ods": [],
            "mn2": "",
            "pin": "281001"
        },
        {
            "id": 230822003,
            "cn": "Sajal",
            "mn1": "9993634029",
            "gst": "",
            "add": "MIG 1 A39 nyas colony hoshangabad MP",
            "ods": [],
            "mn2": "",
            "pin": "461001"
        },
        {
            "id": 230822004,
            "cn": "Saree",
            "mn1": "8500777758",
            "gst": "",
            "add": "Syed Saddam \nHno s2/111 \nSap camp \nKurnool",
            "ods": [],
            "mn2": "9494609403",
            "pin": "518003"
        },
        {
            "id": 230822005,
            "cn": "Hi-Tech Fashions",
            "mn1": "7702786542",
            "gst": "",
            "add": "Sk Apartments, Flat no 203 2 floor,\nSalala Nagar, Madannapet colony ",
            "ods": [
                "s308795"
            ],
            "mn2": "8125974915",
            "pin": "500059"
        },
        {
            "id": 230822006,
            "cn": "Gayatri",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230822007,
            "cn": "I KING PRIVATE LIMITED",
            "mn1": "",
            "gst": "07AAGCI3530G1ZT",
            "add": "",
            "ods": [
                "s308799"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230822008,
            "cn": "Shalini",
            "mn1": "9711371212",
            "gst": "",
            "add": "Silky kaur\n444, 2,nd floor Mukherjee nagar Delhi",
            "ods": [],
            "mn2": "",
            "pin": "110009"
        },
        {
            "id": 230822009,
            "cn": "Rajshree",
            "mn1": "7753053808",
            "gst": "",
            "add": "464/776 Sultanpur Bhawa, Khuldabad, Prayagraj U.P\nNear Holyday bakery \n\n",
            "ods": [],
            "mn2": "7071244275",
            "pin": "211003"
        },
        {
            "id": 230822010,
            "cn": "Graphic Impression",
            "mn1": "",
            "gst": "09CMCPM8150R1ZA",
            "add": "",
            "ods": [
                "s308803"
            ],
            "mn2": "",
            "pin": "211011"
        },
        {
            "id": 230822011,
            "cn": "Mbacheats",
            "mn1": "9701517049",
            "gst": "36DEEPM5056P1ZW",
            "add": "286, Subash Chandra Bose Nagar,\nHafeezpet, Hyderabad",
            "ods": [
                "s309541"
            ],
            "mn2": "7013824982",
            "pin": "500049"
        },
        {
            "id": 230822012,
            "cn": "Bisam",
            "mn1": "8921469488",
            "gst": "",
            "add": "Kottakkavayal ,Aarambram,padanilam(PO)673571,kunnamangalam ,kozhikode,Kerala",
            "ods": [],
            "mn2": "",
            "pin": "673571"
        },
        {
            "id": 230822013,
            "cn": "Anjali Kumari",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230822014,
            "cn": "Poojan",
            "mn1": "7041108320",
            "gst": "",
            "add": "18, new Kalptaru society, opposite Memnagar Fire Station Lane, navrangpura, Ahmedabad, Gujarat",
            "ods": [],
            "mn2": "",
            "pin": "380014"
        },
        {
            "id": 230822015,
            "cn": "Funky",
            "mn1": "7977470370",
            "gst": "",
            "add": "Gate No. 5, Shop No. 1190, Abdul Hamid Road, Near Savera Heights, Malwani, Malad (W), Mumbai",
            "ods": [],
            "mn2": "",
            "pin": "400095"
        },
        {
            "id": 230822016,
            "cn": "F2F Gym",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308823"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230822017,
            "cn": "Adhiroham",
            "mn1": "",
            "gst": "05BEMPK6349R1ZN",
            "add": "Tapovan, Rishikesh ",
            "ods": [
                "s308825"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230822018,
            "cn": "Kpatel",
            "mn1": "8320191216",
            "gst": "",
            "add": "Piyush chauhan\nB-13, Mafia, Himalaya mall , Bhavnagar",
            "ods": [],
            "mn2": "",
            "pin": "364001"
        },
        {
            "id": 230822019,
            "cn": "Aniket",
            "mn1": "8371070497",
            "gst": "",
            "add": "RABINDRA SARANI ROAD NEAR HARDIK HOSPITAL IN BANKURA",
            "ods": [
                "s308828"
            ],
            "mn2": "7908187959",
            "pin": "722101"
        },
        {
            "id": 230822020,
            "cn": "Sahil",
            "mn1": "9518590500",
            "gst": "",
            "add": "landmark : on plot no 3, bk no 1666, behind Canara bank , near Singh sabha darbar, Ulhasnagar",
            "ods": [],
            "mn2": "9890936333",
            "pin": "421004"
        },
        {
            "id": 230823001,
            "cn": "Kamaludin",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230823002,
            "cn": "Immortals",
            "mn1": "8239015264",
            "gst": "",
            "add": "14 , shiv nagar colony , Kekri ,ajmer , rajasthan",
            "ods": [],
            "mn2": "",
            "pin": "305404"
        },
        {
            "id": 230823003,
            "cn": "Mullick",
            "mn1": "7685016463",
            "gst": "",
            "add": "Name. MINHAJUL MULLICK \nVill - Mullick Bagan, P.O- Gabberia, P.S- Panchla - Dist - Howrah Landmark - Gabberia Jr BASIC SCHOOL ",
            "ods": [],
            "mn2": "7044916601",
            "pin": "711322"
        },
        {
            "id": 230823004,
            "cn": "Rupali",
            "mn1": "9303116857",
            "gst": "",
            "add": "Shop no 4 Olive Apartments Near Bercha Sweets Rohit Nagar Bawadiyan kalan",
            "ods": [
                "s309142"
            ],
            "mn2": "7553570065",
            "pin": "462039"
        },
        {
            "id": 230823005,
            "cn": "Harsh",
            "mn1": "8295238092",
            "gst": "",
            "add": "Ward no 7\nNear singh hospital\nShakti Nagar ratia\nBack side of girl school\nCity- Ratia , Fatehabad, Haryana ",
            "ods": [],
            "mn2": "",
            "pin": "125051"
        },
        {
            "id": 230823006,
            "cn": "Hussain",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308837"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230823007,
            "cn": "Himanshu",
            "mn1": "9765600312",
            "gst": "",
            "add": "Radhakrushna nagari waghapur Yavatmal Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "445001"
        },
        {
            "id": 230823008,
            "cn": "Raj",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308840"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230823009,
            "cn": "DK SONS",
            "mn1": "9904982894",
            "gst": "24ABUPR1434L1Z7",
            "add": "2182 DK Sons,\nNew Textile Market,\nSahara darwaja,\nSurat",
            "ods": [
                "s308842"
            ],
            "mn2": "",
            "pin": "395002"
        },
        {
            "id": 230823010,
            "cn": "Kapalin",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308846"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230823011,
            "cn": "Ajoy",
            "mn1": "9564609779",
            "gst": "",
            "add": " stimarghat tamluk purba medinipur West Bengal ",
            "ods": [],
            "mn2": "7365007778",
            "pin": "721636"
        },
        {
            "id": 230823012,
            "cn": "Shivam",
            "mn1": "8801866507",
            "gst": "",
            "add": "Near area hospital Moholla gunj Gol conda fort Hyderabad Telangana",
            "ods": [],
            "mn2": "8074614185",
            "pin": "500008"
        },
        {
            "id": 230823013,
            "cn": "Soumya",
            "mn1": "6290323261",
            "gst": "",
            "add": "22/181 Raja manindra road Kolkata\nLand mark  nearby Belgachia post office, Shiv kali loknath Mandir ",
            "ods": [],
            "mn2": "8777545487",
            "pin": "700037"
        },
        {
            "id": 230823014,
            "cn": "Paul",
            "mn1": "8288074342",
            "gst": "",
            "add": "VPO. Rail Majra, District: Shaheed Bhagat Singh Nagar ( Nawanshahr)\nLandmark: Near Church Street, Narinder Vegitable Shop",
            "ods": [],
            "mn2": "9878704342",
            "pin": "144533"
        },
        {
            "id": 230823015,
            "cn": "Young",
            "mn1": "8160809478",
            "gst": "",
            "add": "Shreeji super store, Netaji Bazar, Near Gandhi machinery, Dahod,Gujarat ",
            "ods": [],
            "mn2": "",
            "pin": "389151"
        },
        {
            "id": 230823016,
            "cn": "Agu",
            "mn1": "6909020710",
            "gst": "",
            "add": "RAJEN DRESSES, Thangal bazar, alu gali, Imphal",
            "ods": [
                "s308860",
                "s3081098",
                "s309163"
            ],
            "mn2": "",
            "pin": "795001"
        },
        {
            "id": 230823017,
            "cn": "Arvind",
            "mn1": "8094111180",
            "gst": "",
            "add": "59 brij mandal colony, kalwar road jhotwara jaipur Rajasthan",
            "ods": [],
            "mn2": "",
            "pin": "302012"
        },
        {
            "id": 230824001,
            "cn": "Bhumika",
            "mn1": "9068099029",
            "gst": "",
            "add": "Iksha clothing\n77/40, Barh devariya, Mansarovar ,near deepsmiriti auditorium, Jaipur",
            "ods": [],
            "mn2": "9433192901",
            "pin": "302020"
        },
        {
            "id": 230824002,
            "cn": "Ranu",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": "700012"
        },
        {
            "id": 230824003,
            "cn": "Yadnes",
            "mn1": "9561543296",
            "gst": "",
            "add": " near cg kulkarni hospital junnar tal junnar dis  junnar",
            "ods": [],
            "mn2": "9881779529",
            "pin": "410502"
        },
        {
            "id": 230824004,
            "cn": "Hirak",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s308875"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230824005,
            "cn": "Amresh",
            "mn1": "8983311444",
            "gst": "",
            "add": "Flat No. 2, C wing , 1st Floor,\nBldg Name -\"Ike No Midori\" ,\nDr.Homi Bhabha Road, Bavdhan\n, Pune  , Maharashtra.",
            "ods": [],
            "mn2": "8007742277",
            "pin": "411021"
        },
        {
            "id": 230824006,
            "cn": "Amith",
            "mn1": "8867196470",
            "gst": "",
            "add": "2166/A, 6th cross, K block, \nKuvempunagara, Near ashokapuram police station, Mysuru, Karnataka",
            "ods": [],
            "mn2": "6361013312",
            "pin": "570023"
        },
        {
            "id": 230824007,
            "cn": "SINAN.KV",
            "mn1": "7025918062",
            "gst": "",
            "add": "\nMOONNUPERIYA\n(PO ) MUNDALUR\nKERALA \n(DIST ) kannur",
            "ods": [],
            "mn2": "7907436907",
            "pin": "670622"
        },
        {
            "id": 230824008,
            "cn": "Nair",
            "mn1": "8103963620",
            "gst": "",
            "add": "14 b Veena nagar behind abhinandan nagar main road, Sukhliya, Indore,M P",
            "ods": [],
            "mn2": "",
            "pin": "452010"
        },
        {
            "id": 230824009,
            "cn": "WEAR GO",
            "mn1": "9892326581",
            "gst": "27ELBPK2612G1ZF",
            "add": "ShopNo.1,Noori House,13/17,\nKumbharwadi,CrossLane,Chakla Street",
            "ods": [
                "s3081078"
            ],
            "mn2": "9004146631",
            "pin": "400003"
        },
        {
            "id": 230824010,
            "cn": "Rahul Rai",
            "mn1": "6283889878",
            "gst": "",
            "add": "Language Academy Jalandhar India Best PTE Coaching Classes and Training Institute, Green Park, Bedi Paradise Building, 172, Garha Rd, Opp. Hotel Residency, Jawahar Nagar",
            "ods": [],
            "mn2": "",
            "pin": "144623"
        },
        {
            "id": 230824011,
            "cn": "Adarsh",
            "mn1": "9429122461",
            "gst": "",
            "add": "Adarsh Jobanputra\nEcomadarsh\n16-Lakshmi Chambers\nLati plot main road\nMorbi, Gujarat",
            "ods": [],
            "mn2": "",
            "pin": "363641"
        },
        {
            "id": 230825001,
            "cn": "Raj Singh",
            "mn1": "7974860176",
            "gst": "",
            "add": " mahuli main chock, post- Sulsuli, \nWadrafnager, Chhattisgarh, India",
            "ods": [],
            "mn2": "9301403176",
            "pin": "497225"
        },
        {
            "id": 230825002,
            "cn": "Biswamitra",
            "mn1": "7005199785",
            "gst": "",
            "add": "N Biswamitra Singh\nKhajiri Mamang Leikai,\nPO Nambol\nImphal West, Manipur",
            "ods": [],
            "mn2": "9862447810",
            "pin": "795140"
        },
        {
            "id": 230825003,
            "cn": "Karan",
            "mn1": "7698752012",
            "gst": "",
            "add": "Wing- E,Shop No-09, Avas Yojna House,\nBalaji Agora City Centre,Nr. Ratri Bazar",
            "ods": [],
            "mn2": "8735045268",
            "pin": "390008"
        },
        {
            "id": 230825004,
            "cn": "CLAE",
            "mn1": "9833296240",
            "gst": "27AWQPN0413J1ZD",
            "add": "Office No.14 Andheri Industrial Estate, \nOff New link road, Veera Desai Rd",
            "ods": [
                "s3081093",
                "s30995"
            ],
            "mn2": "",
            "pin": "400053"
        },
        {
            "id": 230825005,
            "cn": "LAMEN",
            "mn1": "9163099532",
            "gst": "",
            "add": "Jibrail \n58c, Dr sudhir Basu road Kolkata\nLandmark - near Laxmi mandir, Biscuit Galli",
            "ods": [],
            "mn2": "",
            "pin": "700023"
        },
        {
            "id": 230825006,
            "cn": "Bhavya",
            "mn1": "9871001951",
            "gst": "",
            "add": "Bhavya dora \n9/92 subhash nagar \nNear 9 block petrol pump",
            "ods": [
                "s308921"
            ],
            "mn2": "8459009962",
            "pin": "110027"
        },
        {
            "id": 230825007,
            "cn": "Lawraman",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": "797115"
        },
        {
            "id": 230825008,
            "cn": "WEARFUL ENTERPRISES",
            "mn1": "",
            "gst": "07AAEFW5298G1ZQ",
            "add": "",
            "ods": [
                "s308931",
                "s3081085",
                "s309115",
                "s309255"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230825009,
            "cn": "optika digital",
            "mn1": "7001554106",
            "gst": "19APCPH8454A1Z2",
            "add": "Raichak, singhal gonj, \nsarisha.",
            "ods": [
                "s3081070"
            ],
            "mn2": "",
            "pin": "743368"
        },
        {
            "id": 230825010,
            "cn": "Nishant",
            "mn1": "9024217715",
            "gst": "",
            "add": " 23 panch batti colony ,ratanada ,Jodhpur, Rajasthan ",
            "ods": [],
            "mn2": "",
            "pin": "342001"
        },
        {
            "id": 230825011,
            "cn": "Junaid",
            "mn1": "7006555642",
            "gst": "",
            "add": "Nowgund bypass qazigund Anantnag  Kashmir",
            "ods": [],
            "mn2": "",
            "pin": "192221"
        },
        {
            "id": 230825012,
            "cn": "Sonu",
            "mn1": "8383053971",
            "gst": "",
            "add": "Rz-276/b, street 9, sadh nagar, palam colony, N.D",
            "ods": [],
            "mn2": "",
            "pin": "110045"
        },
        {
            "id": 230825013,
            "cn": "Rahul",
            "mn1": "8555971257",
            "gst": "",
            "add": "flat 207,bajarang Nivas appartment,Maruti nagar colony ,road no 5,Beeramguda, Sangareddy ",
            "ods": [],
            "mn2": "7396071513",
            "pin": "502032"
        },
        {
            "id": 230826001,
            "cn": "Robin",
            "mn1": "7430921001",
            "gst": "",
            "add": "Mavrica Graphics \nShop No. 13 \nSupermarket Shopping complex \nGangtok Sikkim  ",
            "ods": [],
            "mn2": "",
            "pin": "737101"
        },
        {
            "id": 230826002,
            "cn": "Shamshad",
            "mn1": "7838844936",
            "gst": "",
            "add": "655/A/795, Beniganj, Bahadurpur\nLucknow,UP\nLandMark- Near Nirmala Convent College.",
            "ods": [],
            "mn2": "9076960367",
            "pin": "226022"
        },
        {
            "id": 230826003,
            "cn": "Rishika",
            "mn1": "8171621431",
            "gst": "",
            "add": "RISHIKA \nVijay pg madiwala btm layout ",
            "ods": [],
            "mn2": "",
            "pin": "560068"
        },
        {
            "id": 230826004,
            "cn": "Print it",
            "mn1": "7767075995",
            "gst": "",
            "add": "Print It Nice\n4, Gifteria, Tirupati Complex, Opposite Lodha Market, Mosampull, Malegaon",
            "ods": [],
            "mn2": "",
            "pin": "423203"
        },
        {
            "id": 230826005,
            "cn": "RAPPERSSHOP",
            "mn1": "8107437603",
            "gst": "08AEVPL8151Q1ZE",
            "add": " 4/78 vidhyadhar nagar sector 4 near parshuram garden, jaipur,",
            "ods": [
                "s3081067"
            ],
            "mn2": "",
            "pin": "302039"
        },
        {
            "id": 230826006,
            "cn": "Bhargava",
            "mn1": "9393942434",
            "gst": "",
            "add": "K bhargavachary \nVill/mdl/post: dilawarpur\nDist:Nirmal",
            "ods": [],
            "mn2": "",
            "pin": "504306"
        },
        {
            "id": 230826007,
            "cn": "Progyan",
            "mn1": "7099025496",
            "gst": "",
            "add": "H/NO-03, PRAGATI PATH, KALI MANDIR ROAD, INTERNATIONAL SCHOOL,Mulberry Silkhub 1st floor NALAPARA, GUWAHATI-40, Sawkuchi, Kamrup Metro, Sawkuchi,",
            "ods": [],
            "mn2": "9864141541",
            "pin": "781040"
        },
        {
            "id": 230826008,
            "cn": "Lukkman",
            "mn1": "9895695664",
            "gst": "",
            "add": "KERALA , MALAPPURAM , VENGARA, CHERUR (PO), MUTHUVIKUND",
            "ods": [],
            "mn2": "9847953734",
            "pin": "676304"
        },
        {
            "id": 230826009,
            "cn": "Vicy",
            "mn1": "9892006441",
            "gst": "",
            "add": "Shiv Krupa Utkarsha seva mandal Maratha colony room no 12 near nandadip store Santacruz East Mumbai",
            "ods": [],
            "mn2": "9892842414",
            "pin": "400055"
        },
        {
            "id": 230826010,
            "cn": "URRBANSHOT",
            "mn1": "9953330553",
            "gst": "",
            "add": "3487 Raja park Rani Bagh New Delhi near punjabi zaika\nJasvinder Singh",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230826011,
            "cn": "Abubakar",
            "mn1": "9326782177",
            "gst": "",
            "add": "Saishakti, 23/B/611 Lallu Bhai Campound, Hiranandani Building Gavandi Mumbai",
            "ods": [],
            "mn2": "",
            "pin": "400043"
        },
        {
            "id": 230826012,
            "cn": "Prince",
            "mn1": "6353678864",
            "gst": "",
            "add": " 148, SHRIJINAGAR 1, NEAR RAM MANDIR, GODADRA, SURAT",
            "ods": [],
            "mn2": "9725358894",
            "pin": "395010"
        },
        {
            "id": 230826013,
            "cn": "Mihir",
            "mn1": "7710956703",
            "gst": "",
            "add": "B/603 om sai smruti CHS\nkandarpada near ganpati visarjan talaoo\n dahisar west\nmumbai",
            "ods": [],
            "mn2": "",
            "pin": "400068"
        },
        {
            "id": 230826014,
            "cn": "Nithinsagar",
            "mn1": "9746748458",
            "gst": "",
            "add": "Sree Nilayam , Valavil Cheleri, Cheleri (PO) ,Kannur, Kerala",
            "ods": [],
            "mn2": "9061377891",
            "pin": "670604"
        },
        {
            "id": 230826015,
            "cn": "Wahid",
            "mn1": "9582691838",
            "gst": "",
            "add": "Easy Way\n174, Palhallan Raipora\nTehsil Pattan\nDistrict Baramulla\nJammu and Kashmir",
            "ods": [
                "s30984"
            ],
            "mn2": "",
            "pin": "193121"
        },
        {
            "id": 230827001,
            "cn": "Vinod",
            "mn1": "8591569393",
            "gst": "",
            "add": "Maharashtra Navi Mumbai juinagar sector 23 near Hari om bapu mandir Siddhi tower B wing 101",
            "ods": [],
            "mn2": "8355825090",
            "pin": "400706"
        },
        {
            "id": 230827002,
            "cn": "Pradip",
            "mn1": "8169648686",
            "gst": "",
            "add": "C/1,26 Sainath CHS.\nBehind Atria Mall,\nDr. A. B. Road, Worli Mumbai",
            "ods": [],
            "mn2": "",
            "pin": "400018"
        },
        {
            "id": 230827003,
            "cn": "Sran",
            "mn1": "9818860003",
            "gst": "",
            "add": "Rani kaur \n579, sector 10d\nChandigarh\n",
            "ods": [],
            "mn2": "",
            "pin": "160011"
        },
        {
            "id": 230827004,
            "cn": "Mrigansh",
            "mn1": "9461582846",
            "gst": "",
            "add": "Chandra Prakash Gupta\nGovind Nagar Madarpur Road, Infront of Saraswati Vidya Niketan School.\nBharatpur Rajasthan",
            "ods": [],
            "mn2": "9414877782",
            "pin": "321001"
        },
        {
            "id": 230828001,
            "cn": "Rayyan",
            "mn1": "7081180635",
            "gst": "",
            "add": "Kurmi tola, near by maa arya hotel opposite flyover piller no.45 guru govind Singh marg lalkua Lucknow Uttar Pradesh ",
            "ods": [],
            "mn2": "6394599026",
            "pin": "226018"
        },
        {
            "id": 230828002,
            "cn": "Javid",
            "mn1": "9042892316",
            "gst": "",
            "add": "1ST FLOOR, NO 12, KRISHNAN STREET, KODUNGAIYUR,\nChennai, Tamil Nadu,",
            "ods": [],
            "mn2": "",
            "pin": "600118"
        },
        {
            "id": 230828003,
            "cn": "Gargi",
            "mn1": "9733666463",
            "gst": "",
            "add": "Amrita Mukherjee\nNarayan Enclave,4th Floor, Flat no-F01\nEast Apcar Garden \nAsansol ",
            "ods": [
                "s3081027"
            ],
            "mn2": "",
            "pin": "713304"
        },
        {
            "id": 230828004,
            "cn": "Abhishekh",
            "mn1": "8876701534",
            "gst": "",
            "add": "STUBBORNS        \nNALIA POOL MONOSHA BARI, DIBRUGARH,ASSAM",
            "ods": [],
            "mn2": "",
            "pin": "786001"
        },
        {
            "id": 230828005,
            "cn": "Ratan",
            "mn1": "7278035593",
            "gst": "",
            "add": "Debesh Panja\nAndul Purbapara, Andul-Mouri,Howrah\nLandmark -NEAR Jayjayanti marriage hall",
            "ods": [],
            "mn2": "8100832088",
            "pin": "711302"
        },
        {
            "id": 230828006,
            "cn": "Santu",
            "mn1": "8946047472",
            "gst": "",
            "add": "Santu sarkar\nVillage-Baikuntha sarak\nPost office- Saktinager\nLandmarks- Sanimondir",
            "ods": [],
            "mn2": "8972221926",
            "pin": "741102"
        },
        {
            "id": 230828007,
            "cn": "Atharva",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s3081035"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230828008,
            "cn": "Yogesh Sehgal",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s3081046"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230828009,
            "cn": "Dinesh",
            "mn1": "7989202509",
            "gst": "",
            "add": "House no,3-6/1 padmavathi nilayam, opposite PNR enclave, behind Mahathi School\nArea Name - purushottapuram",
            "ods": [],
            "mn2": "",
            "pin": "530051"
        },
        {
            "id": 230828010,
            "cn": "Zaid Hussain",
            "mn1": "8542034956",
            "gst": "",
            "add": "Uttar Pradesh, gorakhpur, basantpur, chabban baniya kirana Store ke pass",
            "ods": [
                "s3081041"
            ],
            "mn2": "",
            "pin": "273001"
        },
        {
            "id": 230828011,
            "cn": "Sb sports",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s3081042"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230828012,
            "cn": "Anas",
            "mn1": "9700250815",
            "gst": "",
            "add": "Anas&co \n17-1-376/A/31/4 khalander nagar Santosh Nagar Hyderabad",
            "ods": [],
            "mn2": "8885649585",
            "pin": "500059"
        },
        {
            "id": 230828013,
            "cn": "Suriya",
            "mn1": "9344751662",
            "gst": "",
            "add": "17A police quarters road KK Nagar Ganapathy Coimbatore  ",
            "ods": [],
            "mn2": "9487711147",
            "pin": "641006"
        },
        {
            "id": 230828014,
            "cn": "Abdul",
            "mn1": "6301325411",
            "gst": "",
            "add": "Flat No.201 ,  Cocoville, VH3W+H62, Balaji gardens layout, Gottigere",
            "ods": [],
            "mn2": "",
            "pin": "560076"
        },
        {
            "id": 230828015,
            "cn": "Tem",
            "mn1": "7085419848",
            "gst": "",
            "add": "House number 588, near shepherd bible college, Aoyimti, Dimapur",
            "ods": [],
            "mn2": "",
            "pin": "797112"
        },
        {
            "id": 230829001,
            "cn": "Abhijit Das",
            "mn1": "9854059967",
            "gst": "",
            "add": "Allen Solly, Bora service GS ROAD, Near Bora service Station, Guwahati ",
            "ods": [
                "s3081069"
            ],
            "mn2": "9854019967",
            "pin": "781007"
        },
        {
            "id": 230829002,
            "cn": "Abhishekh Roshan",
            "mn1": "6361197461",
            "gst": "",
            "add": "Srivastava villa 235,Ozone Kns Oasis,\nKuthanganahalli,Anekal taluk,Sarjapura Hobli",
            "ods": [
                "s309516"
            ],
            "mn2": "9480828001",
            "pin": "562125"
        },
        {
            "id": 230829003,
            "cn": "Prachi",
            "mn1": "9731268400",
            "gst": "",
            "add": "04602, Shriram chirping woods, 12th Main road, Shubh enclave, Harlur Main road",
            "ods": [],
            "mn2": "",
            "pin": "560102"
        },
        {
            "id": 230829004,
            "cn": "Vivek",
            "mn1": "9867071596",
            "gst": "",
            "add": "301, Siema CHS, Plot no 48, Sector 21, Kharghar",
            "ods": [],
            "mn2": "",
            "pin": "410210"
        },
        {
            "id": 230829005,
            "cn": "Juzar",
            "mn1": "8104839903",
            "gst": "",
            "add": "p/5,302, indraprastha, sheetal nagar, noopor palace, Mira road East Thane",
            "ods": [],
            "mn2": "",
            "pin": "401107"
        },
        {
            "id": 230829006,
            "cn": "Vijay",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230829007,
            "cn": "Pranjal",
            "mn1": "9411411492",
            "gst": "",
            "add": "Shri Paras trading company G.T. Road Near Eidgah Khatauli",
            "ods": [],
            "mn2": "",
            "pin": "251201"
        },
        {
            "id": 230829008,
            "cn": "Bamrah Printing",
            "mn1": "7988668317",
            "gst": "",
            "add": "451/K SHIVPURI CHOWK NOORWALA ROAD, STREET NO. 1,GURUNANAK NAGAR",
            "ods": [],
            "mn2": "9569177748",
            "pin": "141008"
        },
        {
            "id": 230829009,
            "cn": "Nikita",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230829010,
            "cn": "Rakul",
            "mn1": "9944676178",
            "gst": "",
            "add": "3/41, Main road, Vaduvur, Needamangalam, Thiruvarur",
            "ods": [],
            "mn2": "",
            "pin": "614019"
        },
        {
            "id": 230829011,
            "cn": "Namdev",
            "mn1": "8549080114",
            "gst": "",
            "add": "10 Near Kulkarni House \nMrytunjaya Vihar, shakti colony \nPost- Vijay Nagar\nHubli \nLand mark - jk school",
            "ods": [],
            "mn2": "7349659387",
            "pin": "580032"
        },
        {
            "id": 230830001,
            "cn": "Murtaza",
            "mn1": "9028783776",
            "gst": "",
            "add": "Burhani manzil, Habib nagar no.1, walgaon road, Amravati (Maharashtra)",
            "ods": [],
            "mn2": "",
            "pin": "444601"
        },
        {
            "id": 230830002,
            "cn": "Marzi",
            "mn1": "8875667038",
            "gst": "",
            "add": "Devender Singh\nWard no.12, Rawla mandi, Teh- Gharsana,\nSri Ganganagar, Rajasthan",
            "ods": [
                "s309104"
            ],
            "mn2": "",
            "pin": "335707"
        },
        {
            "id": 230830003,
            "cn": "Mandar",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s3081117"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230830004,
            "cn": "Preetham",
            "mn1": "9606414203",
            "gst": "",
            "add": "Nexa Varun motors, Nagavara Village, Kasaba\nHobli, Bangalore Division, Karnataka",
            "ods": [],
            "mn2": "9620822556",
            "pin": "560075"
        },
        {
            "id": 230830005,
            "cn": "Pushpendra",
            "mn1": "8982266558",
            "gst": "",
            "add": "102-B, Shivdham Colony, Khandwa Road, Indore, Madhya Pradesh\n",
            "ods": [],
            "mn2": "9713890408",
            "pin": "452020"
        },
        {
            "id": 230830006,
            "cn": "Subir",
            "mn1": "9886845392",
            "gst": "",
            "add": "739 Kedar Ghosh Road,Dakshin Para,P.O: Garulia,24 Parganas(North)",
            "ods": [
                "s3081124"
            ],
            "mn2": "",
            "pin": "743133"
        },
        {
            "id": 230830007,
            "cn": "Aakansha",
            "mn1": "7666777948",
            "gst": "",
            "add": "2001, A wing , Raheja serenity, \nnear Raheja Universal, Kandivali East",
            "ods": [
                "s3081125"
            ],
            "mn2": "",
            "pin": "400101"
        },
        {
            "id": 230831001,
            "cn": "Vee",
            "mn1": "7466948253",
            "gst": "",
            "add": "vikash tomar \nAirforce Station Avadi,Chennai \nDc 1 gate ",
            "ods": [],
            "mn2": "",
            "pin": "600055"
        },
        {
            "id": 230831002,
            "cn": "Waiz",
            "mn1": "8090285669",
            "gst": "",
            "add": "Flat no.19, 4th floor, park Avenue apartment, behind m block, gurudwara road, nishatganj, Lucknow, Uttar Pradesh",
            "ods": [],
            "mn2": "9076775967",
            "pin": "226006"
        },
        {
            "id": 230831003,
            "cn": "Funprint",
            "mn1": "9344925600",
            "gst": "",
            "add": "No 324, 6th Street, C.kalyanapuram, Vyasarpadi, Chennai",
            "ods": [],
            "mn2": "",
            "pin": "600039"
        },
        {
            "id": 230831004,
            "cn": "Kabir",
            "mn1": "8572844263",
            "gst": "",
            "add": "3719/2 near kali bari road",
            "ods": [],
            "mn2": "",
            "pin": "133001"
        },
        {
            "id": 230831005,
            "cn": "ONEUP PRINTS",
            "mn1": "7977819256",
            "gst": "27AWTPA4075C1ZK",
            "add": "Shop No. 4, Chikle Apartment, Ambedkar Nagar, Mumbra",
            "ods": [
                "s309154"
            ],
            "mn2": "9833214361",
            "pin": "400612"
        },
        {
            "id": 230831006,
            "cn": "MS ENTERPISES",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s3081138"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230831007,
            "cn": "Yug",
            "mn1": "8007880404",
            "gst": "",
            "add": "Flat no-5, Dnyanraj Apartment, Bharti Nagar-1, Near Puja Park, Kothrud Depot",
            "ods": [],
            "mn2": "7028615738",
            "pin": "411038"
        },
        {
            "id": 230831008,
            "cn": "Nishit",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230831009,
            "cn": "Aniket",
            "mn1": "9766666772",
            "gst": "",
            "add": "Mohan Nagar, Near Canal\nUmarkhed ",
            "ods": [],
            "mn2": "",
            "pin": "445206"
        },
        {
            "id": 230831010,
            "cn": "D-MAHA BROADBAND PRIVATE LIMITED",
            "mn1": "9326160089",
            "gst": "27AAICD9374P1ZP",
            "add": "Flat no 1,Building: c-57 sector 5,\nkavita CHS Shanti nagar MIRA ROAD E",
            "ods": [
                "s3081146"
            ],
            "mn2": "",
            "pin": "401107"
        },
        {
            "id": 230831011,
            "cn": "Ashu",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s3081148"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230831012,
            "cn": "Sid",
            "mn1": "8928112387",
            "gst": "",
            "add": "D-1, Plot No. 21, Swapnashilp Society, Savarkar Nagar, Thane West",
            "ods": [
                "s3081149"
            ],
            "mn2": "7738041439",
            "pin": "400606"
        },
        {
            "id": 230831013,
            "cn": "Ak enterprises",
            "mn1": "",
            "gst": "07BUVPG8245B1ZF",
            "add": "",
            "ods": [
                "s3081153",
                "s309153",
                "s309342"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230831014,
            "cn": "Karan Mali",
            "mn1": "9920638985",
            "gst": "",
            "add": "Ms enterprises, Shop no. 10, Atul Apartment, Malad East",
            "ods": [],
            "mn2": "",
            "pin": "400097"
        },
        {
            "id": 230831015,
            "cn": "Shish",
            "mn1": "8177930192",
            "gst": "",
            "add": "Laskare bag near kidwai ground choti masjid nagpur",
            "ods": [
                "s309203"
            ],
            "mn2": "",
            "pin": "440017"
        },
        {
            "id": 230831016,
            "cn": "Sakthivel",
            "mn1": "6382309990",
            "gst": "",
            "add": "Sakthivel S\n85/B-36, Rajaram Nagar",
            "ods": [],
            "mn2": "",
            "pin": "636007"
        },
        {
            "id": 230831017,
            "cn": "Atik",
            "mn1": "8780216895",
            "gst": "",
            "add": "hansapore, Nishal fadiya,",
            "ods": [],
            "mn2": "",
            "pin": "396445"
        },
        {
            "id": 230831018,
            "cn": "Swarup",
            "mn1": "8016188140",
            "gst": "",
            "add": "S/O. Shambhu Chandra Pramanik\nVillage: Mirjachak \nP.O.: Bedrabad\nP.S.: Baishnabnagar\nDistrict.: Malda",
            "ods": [],
            "mn2": "9002188104",
            "pin": "732210"
        },
        {
            "id": 230901001,
            "cn": "1 REP",
            "mn1": "9663535179",
            "gst": "29BMXPH2128A1Z2",
            "add": "No 455, 5 th cross , Rama temple down , annasandrapalya, HAL POST ",
            "ods": [
                "s309424"
            ],
            "mn2": "",
            "pin": "560017"
        },
        {
            "id": 230901002,
            "cn": "Rajesh Kumar Verma",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30921"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230901003,
            "cn": "Rishabh",
            "mn1": "7359916184",
            "gst": "",
            "add": "36 shyamsundar society, Shakari jin road, Himatnagar, Sabarkantha, Gujarat.",
            "ods": [],
            "mn2": "9316138486",
            "pin": "383001"
        },
        {
            "id": 230901004,
            "cn": "Bhagyaboti",
            "mn1": "6002245429",
            "gst": "",
            "add": "Shankardev railway colony, Near Shankardev colony Namghar ",
            "ods": [
                "s30924"
            ],
            "mn2": "8011815054",
            "pin": "786001"
        },
        {
            "id": 230901005,
            "cn": "Prabin",
            "mn1": "9907011519",
            "gst": "",
            "add": "Ravangla (Bazar)",
            "ods": [
                "s30925"
            ],
            "mn2": "",
            "pin": "737139"
        },
        {
            "id": 230901006,
            "cn": "Ravindra pawar",
            "mn1": "9604557709",
            "gst": "",
            "add": "Royaltasta, 3rd floor aishwaryam ONE MALL Kalbhor Nagar akurdi Pune\nLandmark Near 51 feet Maruti murti Kalbhor nagar",
            "ods": [],
            "mn2": "9763661741",
            "pin": "411019"
        },
        {
            "id": 230901007,
            "cn": "Zoogaaduofficial",
            "mn1": "8668704681",
            "gst": "",
            "add": "C/0 durgesh girdkar opposite to chandak Medica datta nagpur chandrapur Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "442401"
        },
        {
            "id": 230901008,
            "cn": "Mohan",
            "mn1": "6369736058",
            "gst": "",
            "add": "No3, 3rd cross street, 3 rd main street, Pachaiyappan garden, moolachathiram, Land mark - merryland sports turf",
            "ods": [],
            "mn2": "9444367425",
            "pin": "600051"
        },
        {
            "id": 230901009,
            "cn": "Rajat",
            "mn1": "9807813225",
            "gst": "09DZPPG7682R1Z1",
            "add": "House no. 338 KATRA ABDUL GANI FATEHPUR UP",
            "ods": [
                "s30935",
                "s309169"
            ],
            "mn2": "",
            "pin": "212601"
        },
        {
            "id": 230901010,
            "cn": "Shivam",
            "mn1": "9625289043",
            "gst": "",
            "add": "SF 182 , Shastri nagar, Ghaziabad ",
            "ods": [],
            "mn2": "",
            "pin": "201002"
        },
        {
            "id": 230901011,
            "cn": "Sahil",
            "mn1": "7776829302",
            "gst": "",
            "add": "1429, Bhatta, RAMTEK, At post mansar",
            "ods": [],
            "mn2": "",
            "pin": "441106"
        },
        {
            "id": 230901012,
            "cn": "Arayan",
            "mn1": "9653220651",
            "gst": "",
            "add": "Salabari, Opposite of Greewood Hotel \nCity: Siliguri",
            "ods": [],
            "mn2": "",
            "pin": "734009"
        },
        {
            "id": 230902001,
            "cn": "Sudipta",
            "mn1": "8100534613",
            "gst": "",
            "add": "Barrackpore, barasat road, white colour building, opposite of palki lodge,\nLandmark - Sewli State bank of india\nState - West Bengal ",
            "ods": [],
            "mn2": "9163742875",
            "pin": "700121"
        },
        {
            "id": 230902002,
            "cn": "Vishan",
            "mn1": "9712922889",
            "gst": "",
            "add": "RICHIE RICH MEN'S WEAR\nShop No: 3, Gagandeep Apartment,Chandni Chowk, Near Children park, Navsari, Gujarat",
            "ods": [],
            "mn2": "",
            "pin": "396445"
        },
        {
            "id": 230902003,
            "cn": "Unique Outfit",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30950"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230902004,
            "cn": "Gursimran",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s30952"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230902005,
            "cn": "Shibu",
            "mn1": "9113017482",
            "gst": "",
            "add": "No 14 krishnappa layout opp Banaswadi railway station lingarajapuram Bangalore",
            "ods": [],
            "mn2": "8553932324",
            "pin": "560084"
        },
        {
            "id": 230902006,
            "cn": "Vaneet",
            "mn1": "9478750883",
            "gst": "",
            "add": "Mouse no 189/3\nMari Nagar\nHoshiarpur\nHoshiarpur Punjab",
            "ods": [],
            "mn2": "",
            "pin": "146001"
        },
        {
            "id": 230902007,
            "cn": "Shreeji",
            "mn1": "9512206807",
            "gst": "",
            "add": "SHOP-77 ,2FL , GRUHAM ICON , \nOPP LAKE GARDEN, AMROLI KOSAD ROAD,\nGUJARAT",
            "ods": [],
            "mn2": "6352627465",
            "pin": "394107"
        },
        {
            "id": 230902008,
            "cn": "Shubham Enterpises",
            "mn1": "9004721368",
            "gst": "",
            "add": "B/06 babaji apt , datta mandir , virar road , nallasopara east\nPalghar, Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "401209"
        },
        {
            "id": 230902009,
            "cn": "Shashank",
            "mn1": "7355563139",
            "gst": "",
            "add": " 8/72, Sector- 8, Indira nagar, Lucknow",
            "ods": [],
            "mn2": "",
            "pin": "226016"
        },
        {
            "id": 230902010,
            "cn": "PHOTOGRAPHY WEDVO",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230902011,
            "cn": "Atif",
            "mn1": "7007229317",
            "gst": "",
            "add": "89B Ahmad Nagar Chaksa Hussain,\nNear Noori Masjid, Gorakhnath",
            "ods": [
                "s30963"
            ],
            "mn2": "",
            "pin": "273001"
        },
        {
            "id": 230902012,
            "cn": "Ranbir",
            "mn1": "7829775094",
            "gst": "",
            "add": "118,4C,  Second Floor ,Ombr Layout, Banasawadi\nAbove Canara Bank 2nd floor ",
            "ods": [],
            "mn2": "",
            "pin": "560043"
        },
        {
            "id": 230903001,
            "cn": "Sohan",
            "mn1": "8975795995",
            "gst": "",
            "add": "Room no. 4 Building no. A8 Dwarkesh nagar Saravali Boisar Taluka and  Dist- Palghar Maharashtra",
            "ods": [],
            "mn2": "",
            "pin": "401501"
        },
        {
            "id": 230903002,
            "cn": "Vardan",
            "mn1": "8279814678",
            "gst": "",
            "add": "SR-73, DLF Phase 3, Sector 24, Gurugram, Haryana",
            "ods": [],
            "mn2": "6397528975",
            "pin": "122002"
        },
        {
            "id": 230903003,
            "cn": "Sundar",
            "mn1": "8860100200",
            "gst": "",
            "add": "Moto jeans Shop no.G 22\nSushant shopping arcade sushant lok 1 gurugram haryan",
            "ods": [],
            "mn2": "",
            "pin": "122001"
        },
        {
            "id": 230903004,
            "cn": "College Fashion",
            "mn1": "8799075434",
            "gst": "",
            "add": "c/9 exotica bangloz akshardham township n.g school behind visnagar ring road Mehsana-1 \nCity- mehsana",
            "ods": [
                "s30986"
            ],
            "mn2": "",
            "pin": "384001"
        },
        {
            "id": 230903005,
            "cn": "Tushar",
            "mn1": "9630375857",
            "gst": "",
            "add": "H.no. 337 halalpur, Near City walk mall, Bhopal,m",
            "ods": [],
            "mn2": "",
            "pin": "462030"
        },
        {
            "id": 230903006,
            "cn": "Shaishab",
            "mn1": "7601897369",
            "gst": "",
            "add": "Arobindo park lane no.4 (mess), Ratanti Kali mandir",
            "ods": [],
            "mn2": "",
            "pin": "732101"
        },
        {
            "id": 230903007,
            "cn": "Clodro industries",
            "mn1": "8480274360",
            "gst": "21AKXPP4281D1ZZ",
            "add": "Plot 828 shree vihar malipada Sum Hospital, bhuwneshwar ",
            "ods": [
                "s309242"
            ],
            "mn2": "",
            "pin": "751003"
        },
        {
            "id": 230903008,
            "cn": "Purushotam",
            "mn1": "8210",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": "828106"
        },
        {
            "id": 230904001,
            "cn": "Harsh Sanghavi",
            "mn1": "8805669525",
            "gst": "",
            "add": "Flt 6,bld 5,Suparshwanath E soc. marketyard road,\nnear kamal nursing home,bank of maharashtra",
            "ods": [
                "s309417"
            ],
            "mn2": "",
            "pin": "411037"
        },
        {
            "id": 230904002,
            "cn": "Senthil",
            "mn1": "9600297913",
            "gst": "",
            "add": "Shipping: TEEZTOTALLER,\nNO:1920, LIG1, MMDA, 3rd Main Road, Mathur, Chennai (Opp Indian Bank)",
            "ods": [
                "s309254"
            ],
            "mn2": "7305662424",
            "pin": "600068"
        },
        {
            "id": 230904003,
            "cn": "Swathi",
            "mn1": "7200611648",
            "gst": "",
            "add": "Fashion4All Pvt Ltd\nDoor No 8 plot no 46 Om Sakthi Nagar 6th Street valasaravakkam\nChennai\nNear Narayana school",
            "ods": [],
            "mn2": "7550237987",
            "pin": "600087"
        },
        {
            "id": 230904004,
            "cn": "Subtl",
            "mn1": "6900180243",
            "gst": "",
            "add": "Khalid Mahmud \nKabarsthan Road, Jorhat \nCity : Jorhat \nWard no. 5 \nLandmark : Near Jama maszid",
            "ods": [],
            "mn2": "9707251535",
            "pin": "785001"
        },
        {
            "id": 230904005,
            "cn": "Ruchika",
            "mn1": "7738731396",
            "gst": "",
            "add": "Omkar building SRA, B-2, floor :-14/1406 , Malad East , Shantaram talav, near express highway",
            "ods": [],
            "mn2": "",
            "pin": "400097"
        },
        {
            "id": 230904006,
            "cn": "RPV CLOTH",
            "mn1": "8981871944",
            "gst": "19ABAFR9155Q1ZB",
            "add": "BB-31,Sukantapally,kestopur,\nsuchona Apartment phase2",
            "ods": [
                "s309123"
            ],
            "mn2": "7980103274",
            "pin": "700102"
        },
        {
            "id": 230904007,
            "cn": "Chinamy",
            "mn1": "9607970530",
            "gst": "",
            "add": "Plot No. J3A, Lane no.3, Mahavir Nagar near Vikas Milk federation Jalgaon Maharashtra India",
            "ods": [],
            "mn2": "7666599972",
            "pin": "425001"
        },
        {
            "id": 230904008,
            "cn": "Shetal",
            "mn1": "7208800200",
            "gst": "",
            "add": "Chirag Gift World\nShop no 1, Manas building,bhor lane, Kalyan west",
            "ods": [],
            "mn2": "9819129678",
            "pin": "421301"
        },
        {
            "id": 230904009,
            "cn": "Yogesh",
            "mn1": "7817083122",
            "gst": "",
            "add": "C11 jaswant sugar mill colony",
            "ods": [],
            "mn2": "",
            "pin": "250002"
        },
        {
            "id": 230904010,
            "cn": "Srajan creation",
            "mn1": "8982305530",
            "gst": "",
            "add": "Umesh Choudhary, I - 9 Krishna Nagar, near grain mandi, station road Neemuch (M.P",
            "ods": [],
            "mn2": "8982305530",
            "pin": "458441"
        },
        {
            "id": 230904011,
            "cn": "Nebula Fashion PVT LTD",
            "mn1": "9889556905",
            "gst": "",
            "add": "Sachin Singh\n555,CHAK BABURA, ALIMABAD, ADA COLONY NAINI, PRAYAGRAJ",
            "ods": [
                "s309131"
            ],
            "mn2": "6394859586",
            "pin": "211008"
        },
        {
            "id": 230904012,
            "cn": "Devesh",
            "mn1": "7982010879",
            "gst": "",
            "add": "f-2173rampark ext Loni ghaziabad",
            "ods": [],
            "mn2": "",
            "pin": "201102"
        },
        {
            "id": 230904013,
            "cn": "Shivam",
            "mn1": "8077733465",
            "gst": "09GZCPS7405E1Z5",
            "add": "6/32 Khandari jail road agra,\nLandmark - near by ram Krishna school",
            "ods": [
                "s309135"
            ],
            "mn2": "",
            "pin": "282002"
        },
        {
            "id": 230904014,
            "cn": "DIGITAL ENTERTAINMENT NETWORK",
            "mn1": "",
            "gst": "01AOQPM1524D1ZF",
            "add": "",
            "ods": [
                "s309138"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230904015,
            "cn": "Jaydipsinh",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230904016,
            "cn": "PARISVI ENTERPRISE",
            "mn1": "9586717388",
            "gst": "24CTZPR3181B1ZC",
            "add": "30,vasudev nagar society,ved road,near madhuram plazza, katargam, Surat",
            "ods": [
                "s309140"
            ],
            "mn2": "",
            "pin": "395004"
        },
        {
            "id": 230905001,
            "cn": "Pranav",
            "mn1": "8360442344",
            "gst": "",
            "add": "1037 RB estate Loharka Road Amritsar",
            "ods": [],
            "mn2": "",
            "pin": "143001"
        },
        {
            "id": 230905002,
            "cn": "Bhavin",
            "mn1": "9737821600",
            "gst": "",
            "add": "Shop no 105 - V7 Mens wear / Ganesh icon, Nr. Shravan Chowkdi , Link Road , Bharuch",
            "ods": [
                "s309366"
            ],
            "mn2": "8758700870",
            "pin": "392001"
        },
        {
            "id": 230905003,
            "cn": "Krishna collection",
            "mn1": "8233077554",
            "gst": "",
            "add": "Shop No A-16 Diggi Bazar Ajmer",
            "ods": [
                "s309149"
            ],
            "mn2": "",
            "pin": "305001"
        },
        {
            "id": 230905004,
            "cn": "Tarik",
            "mn1": "9178445438",
            "gst": "",
            "add": "Odisha, District - Jajpur, post - Binjharpur ",
            "ods": [],
            "mn2": "",
            "pin": "755004"
        },
        {
            "id": 230905005,
            "cn": "Abhishekh",
            "mn1": "9471160093",
            "gst": "",
            "add": "Just for u mart, lal ganj road bagmali, hajipur, vashali, Bihar\nNear st. Paul high school",
            "ods": [
                "s309156"
            ],
            "mn2": "9708126244",
            "pin": "844101"
        },
        {
            "id": 230905006,
            "cn": "Pappu",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": "523167"
        },
        {
            "id": 230905007,
            "cn": "MANFRED ENTERPRISES",
            "mn1": "9123077602",
            "gst": "19DSRPA6446N1ZY",
            "add": "Dankuni, Hooghly, DCC \nNAITY ROAD, Ward no 4",
            "ods": [],
            "mn2": "",
            "pin": "712310"
        },
        {
            "id": 230905008,
            "cn": "Akki",
            "mn1": "8787501332",
            "gst": "",
            "add": "Falt no. 303 sadguru apartment. \nRiksha Stand Chandrapada, Near Chandika Mata Mandir Kamini Store, Naigaon East, Juchandra, Palghar",
            "ods": [],
            "mn2": "",
            "pin": "401208"
        },
        {
            "id": 230905009,
            "cn": "Roshith",
            "mn1": "8848917576",
            "gst": "",
            "add": "Sumodya ,asramam ward avalukkunhu p .o alappuzha ",
            "ods": [],
            "mn2": "",
            "pin": "688006"
        },
        {
            "id": 230905010,
            "cn": "Passion",
            "mn1": "6376631917",
            "gst": "",
            "add": "Jivan Rekha hospital ke piche pankha road, churu",
            "ods": [],
            "mn2": "",
            "pin": "331001"
        },
        {
            "id": 230906001,
            "cn": "Dhruv",
            "mn1": "8160007453",
            "gst": "",
            "add": "D-602 Casa elite, near charodi bus stand, charodi Lake, SG highway,Ahmedabad",
            "ods": [
                "s309177"
            ],
            "mn2": "9428186880",
            "pin": "382481"
        },
        {
            "id": 230906002,
            "cn": "Harsh Kumar",
            "mn1": "8397021705",
            "gst": "",
            "add": "3719/2 Near Kali Bari Mandir\nAmbala Cantt\n",
            "ods": [
                "s309178"
            ],
            "mn2": "8572844263",
            "pin": "133001"
        },
        {
            "id": 230906003,
            "cn": "Poorva",
            "mn1": "9096537609",
            "gst": "",
            "add": "Plot no 91 tathastu\nRadha Krishna park\nNear jogeshwari school\nWagholi keshnand road\nWagholi",
            "ods": [],
            "mn2": "9029288839",
            "pin": "412207"
        },
        {
            "id": 230906004,
            "cn": "Prajat",
            "mn1": "9145481465",
            "gst": "",
            "add": "h.no 1153 bamon wadda siolim bardez north goa (near bank of india)",
            "ods": [],
            "mn2": "9923880332",
            "pin": "403517"
        },
        {
            "id": 230906005,
            "cn": "Paramveer",
            "mn1": "9136202718",
            "gst": "",
            "add": "Shakuntala shrishti B-502 near chhatrapati shivaji maharaj chowk lodha heaven Dombivli (e)",
            "ods": [],
            "mn2": "",
            "pin": "421204"
        },
        {
            "id": 230906006,
            "cn": "Aditya",
            "mn1": "8198091634",
            "gst": "",
            "add": "House no 1634 ,top floor \nSector 22B,  Chandigarh ",
            "ods": [],
            "mn2": "",
            "pin": "160022"
        },
        {
            "id": 230906007,
            "cn": "Brahmadathan",
            "mn1": "7012495954",
            "gst": "",
            "add": "Pathiyari house P.O Karalam\nThrissur district ",
            "ods": [],
            "mn2": "",
            "pin": "680711"
        },
        {
            "id": 230906008,
            "cn": "Wasim Ahmed",
            "mn1": "9738726005",
            "gst": "",
            "add": "1D, Phase1, Block2, Magnolia Prestige, SRCM Road, Rajarhat",
            "ods": [
                "s309200"
            ],
            "mn2": "",
            "pin": "700135"
        },
        {
            "id": 230906009,
            "cn": "Aman",
            "mn1": "9109018784",
            "gst": "",
            "add": "IIT jodhpur G5 hostel 331Room no  NH 62,\nSurpura Bypass Rd, Karwar, Jheepasani ",
            "ods": [],
            "mn2": "",
            "pin": "342037"
        },
        {
            "id": 230906010,
            "cn": "Vyshnav",
            "mn1": "7994705442",
            "gst": "",
            "add": "Beanbunc\nCholakkal house Chulliyott Koodathumpara Pantheerankavu Calicut",
            "ods": [],
            "mn2": "7558007448",
            "pin": "673014"
        },
        {
            "id": 230906011,
            "cn": "Rishabh",
            "mn1": "9354983529",
            "gst": "",
            "add": "E335,gali no 75 , Mahavir enclave part 3, Landmark :Bhaskaracharya College,Dwarka sec -2",
            "ods": [],
            "mn2": "",
            "pin": "110059"
        },
        {
            "id": 230906012,
            "cn": "Parth",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230906013,
            "cn": "Naman Jain",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230906014,
            "cn": "Aryan",
            "mn1": "9953192710",
            "gst": "",
            "add": "48 (2nd floor) Anand Nagar near inderlok metro station",
            "ods": [],
            "mn2": "",
            "pin": "110035"
        },
        {
            "id": 230906015,
            "cn": "Raaz",
            "mn1": "7992212560",
            "gst": "",
            "add": "Bodhgaya, Mocharim \nDistrict - Gaya\nState_Bihar",
            "ods": [],
            "mn2": "",
            "pin": "824231"
        },
        {
            "id": 230906016,
            "cn": "Shivraj",
            "mn1": "9552638464",
            "gst": "",
            "add": "‘Shivraj’ niwas ,near bank of Maharashtra,\ndehu ,Tal - Haveli ,",
            "ods": [
                "s309214"
            ],
            "mn2": "",
            "pin": "412109"
        },
        {
            "id": 230906017,
            "cn": "Nishant",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230906018,
            "cn": "SAFA ONLINE SHOPPING",
            "mn1": "8638273567",
            "gst": "18AICPL8978N1ZA",
            "add": "state -assam \ndistric- cachar\ncity -silchar ",
            "ods": [
                "s309216"
            ],
            "mn2": "",
            "pin": "788013"
        },
        {
            "id": 230907001,
            "cn": "Gurveer",
            "mn1": "8968911336",
            "gst": "",
            "add": "bhagwan chowk , janta nagar,street no-31,house no-1380",
            "ods": [],
            "mn2": "",
            "pin": "141003"
        },
        {
            "id": 230907002,
            "cn": "Shan",
            "mn1": "8989180804",
            "gst": "",
            "add": "Sanskar Bhawan, Near Cinecity, Rajakhedi, Makronia, Sagar",
            "ods": [],
            "mn2": "9039433715",
            "pin": "470004"
        },
        {
            "id": 230907003,
            "cn": "Kripa",
            "mn1": "8744031741",
            "gst": "",
            "add": "Vasundhara ghaziabad sector 3/147 near onyx plaza",
            "ods": [],
            "mn2": "",
            "pin": "201012"
        },
        {
            "id": 230907004,
            "cn": "Street u",
            "mn1": "",
            "gst": "07LSRPS7411P1ZI",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230907005,
            "cn": "Saad",
            "mn1": "9874650987",
            "gst": "",
            "add": "7/3A Avinash chowdhury Lane, near Noorani masjid, west Bengal",
            "ods": [
                "s309505"
            ],
            "mn2": "8274859209",
            "pin": "700046"
        },
        {
            "id": 230907006,
            "cn": "Niket",
            "mn1": "8850233146",
            "gst": "",
            "add": "1/b 1701 dheeraj dreams complex lbs marg Bhandup West  near pawar public school",
            "ods": [],
            "mn2": "",
            "pin": "400078"
        },
        {
            "id": 230907007,
            "cn": "Kishan",
            "mn1": "7973581939",
            "gst": "",
            "add": "Punjab ludhiana Area hussain pura   , Green city",
            "ods": [],
            "mn2": "",
            "pin": "141008"
        },
        {
            "id": 230907008,
            "cn": "Easy win",
            "mn1": "9072033496",
            "gst": "",
            "add": "Lukumanulhakeem\nElikkad house kakkad po kakkavayal Engapuzha Kozhikode, Kerala",
            "ods": [],
            "mn2": "",
            "pin": "673586"
        },
        {
            "id": 230907009,
            "cn": "Varun",
            "mn1": "9028494425",
            "gst": "",
            "add": "Flat no AS 3 ,second floor ,block A, vasudev residency Vasudev nagar, near bridge opp of sai service, bicholim- Goa",
            "ods": [],
            "mn2": "9823920202",
            "pin": "403529"
        },
        {
            "id": 230907010,
            "cn": "Dinesh",
            "mn1": "6380742674",
            "gst": "",
            "add": "HOUSE NO - 995/C , BHOOTBAGAN, KANCHRAPARA\n24 PARGANA ( NORTH) ",
            "ods": [],
            "mn2": "",
            "pin": "743145"
        },
        {
            "id": 230907011,
            "cn": "Moti Organic",
            "mn1": "9004939103",
            "gst": "",
            "add": "Kiran patil\nAmber ellance, khardi pada, shil diva road post dawale",
            "ods": [],
            "mn2": "",
            "pin": "400612"
        },
        {
            "id": 230908001,
            "cn": "Dropout",
            "mn1": "8133927774",
            "gst": "",
            "add": "Naharkatia near police station,.\nDistrict - Dibrugarh, \nAssam",
            "ods": [
                "s309251",
                "s309345"
            ],
            "mn2": "",
            "pin": "786610"
        },
        {
            "id": 230908002,
            "cn": "Anshu",
            "mn1": "8209265742",
            "gst": "",
            "add": "Near Eye Hospital barmani mata mandir Ratangarh Churu",
            "ods": [],
            "mn2": "",
            "pin": "331022"
        },
        {
            "id": 230908003,
            "cn": "Lohit",
            "mn1": "9966533660",
            "gst": "",
            "add": "Plot no 401 \nHouse no 45\nHydernager cbcid colony dharmareddy phase 2\nKukatpally ",
            "ods": [],
            "mn2": "",
            "pin": "500085"
        },
        {
            "id": 230908004,
            "cn": "GREEN EGGS",
            "mn1": "",
            "gst": "07DESPS9748A1ZT",
            "add": "",
            "ods": [
                "s309264"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230908005,
            "cn": "Mamta Saluja",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s309266"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230908006,
            "cn": "Ajay Kumar",
            "mn1": "8356823313",
            "gst": "",
            "add": "Haji bapu road, Near Alfala School, Malad East.",
            "ods": [],
            "mn2": "",
            "pin": "400097"
        },
        {
            "id": 230908007,
            "cn": "Jewella",
            "mn1": "7028510029",
            "gst": "",
            "add": "Laxuman Nagar, thergaon, Near vithhal mandir laxuman Nagar",
            "ods": [],
            "mn2": "7517768205",
            "pin": "411033"
        },
        {
            "id": 230908008,
            "cn": "John",
            "mn1": "8731882290",
            "gst": "",
            "add": "Uk 27 The Fern hotel Ayodhya Nagar, Sadashiv Nagar, Belagavi",
            "ods": [],
            "mn2": "9402003961",
            "pin": "590019"
        },
        {
            "id": 230908009,
            "cn": "Madhan Francis",
            "mn1": "6281175553",
            "gst": "",
            "add": "Chandrampalem, Madhurawada, visakhapatnam near bajaj showroom\n",
            "ods": [
                "s309275"
            ],
            "mn2": "",
            "pin": "530041"
        },
        {
            "id": 230909001,
            "cn": "Chibi",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230909002,
            "cn": "Piyush Dhar",
            "mn1": "9685813467",
            "gst": "",
            "add": "C-10/2 RRCAT Colony Indore",
            "ods": [
                "s309500"
            ],
            "mn2": "",
            "pin": "452013"
        },
        {
            "id": 230909003,
            "cn": "Dev",
            "mn1": "9727624353",
            "gst": "",
            "add": "06, shyam vihar Upvan parpada rode, Palanpur",
            "ods": [],
            "mn2": "9574805741",
            "pin": "385001"
        },
        {
            "id": 230909004,
            "cn": "Aniket",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s309296"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230909005,
            "cn": "CWH Solutions",
            "mn1": "9353735861",
            "gst": "09AARFC3418P1ZS",
            "add": "94, Ghair Saifuddin Domehla Road,\nRampur,",
            "ods": [
                "s309482"
            ],
            "mn2": "7078073838",
            "pin": "244901"
        },
        {
            "id": 230909006,
            "cn": "Deepika saini",
            "mn1": "9992658862",
            "gst": "",
            "add": "Dhurina ventures\nDDS, 113B, Sector 15A, Hisar, Haryana",
            "ods": [],
            "mn2": "",
            "pin": "125001"
        },
        {
            "id": 230909007,
            "cn": "Nik",
            "mn1": "9662370314",
            "gst": "",
            "add": "78, shivam vibhag, pinkcity banglaws\nModhera road, mahesana\nGujarat",
            "ods": [],
            "mn2": "8849049893",
            "pin": "384002"
        },
        {
            "id": 230910001,
            "cn": "Rohan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s309308"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230910002,
            "cn": "Shivam",
            "mn1": "7697874759",
            "gst": "",
            "add": "House no.999 Aryapuri hogi babu lane near TV tower Ratu road Ranchi Jharkhand",
            "ods": [],
            "mn2": "",
            "pin": "834001"
        },
        {
            "id": 230910003,
            "cn": "Sooraj",
            "mn1": "7506632466",
            "gst": "",
            "add": "ROOM NO.6 SUHAGAM SINGH CHAWL SUBHASH NAGAR VAKOLA PIPE LINE  GAONDEVI POLICE CHOWKI SANTACRUZ EAST, Gaondevi police chowki",
            "ods": [],
            "mn2": " 77092 93343‬",
            "pin": "400055"
        },
        {
            "id": 230910004,
            "cn": "Aditya",
            "mn1": "9958660416",
            "gst": "",
            "add": "28B/2 Jia Sarai, Hauz Khas",
            "ods": [],
            "mn2": "",
            "pin": "110016"
        },
        {
            "id": 230910005,
            "cn": "Ankita",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230911001,
            "cn": "Anish",
            "mn1": "9928355041",
            "gst": "",
            "add": "Kharatvas, Taranagar, churu, Rajasthan ",
            "ods": [],
            "mn2": "",
            "pin": "331304"
        },
        {
            "id": 230911002,
            "cn": "Chetan",
            "mn1": "9741021258",
            "gst": "",
            "add": "151 Gattakamdhanahalli, next to venugopal temple\nKgf",
            "ods": [],
            "mn2": "",
            "pin": "563121"
        },
        {
            "id": 230911003,
            "cn": "Rinto",
            "mn1": "9567833907",
            "gst": "32CEMPR2482F1ZD",
            "add": "K.P. 4/293, 4/294, THOPPILPARAMBIL BUILDING, Janatha Road, Changanattu Temple,  Panangad, Kochi, Ernakulam, Kerala",
            "ods": [],
            "mn2": "",
            "pin": "682506"
        },
        {
            "id": 230911004,
            "cn": "Thanveer",
            "mn1": "9353682529",
            "gst": "",
            "add": "Mrs.Tanveer Ahmed\nDivya Residency \nNo 17/18, 2nd Floor,\nFlat No 106, Krishnappa Garden, Jayanagar,\nBangalore",
            "ods": [],
            "mn2": "9108558083",
            "pin": "560041"
        },
        {
            "id": 230911005,
            "cn": "Gautam",
            "mn1": "8777560905",
            "gst": "",
            "add": "C/O Gautam Banerjee, 5/1/1B, Dr. R.K.M. Sarani, Manikanchan Apartments, Flat- 4EE, beside Junior South Point school",
            "ods": [],
            "mn2": "",
            "pin": "700019"
        },
        {
            "id": 230911006,
            "cn": "Chirag",
            "mn1": "8238002535",
            "gst": "",
            "add": "Flat no : B203 , Gurukrupa Corner Society, Satinath Nagar, Old Mundhwa Road,Pune",
            "ods": [],
            "mn2": "9313100462",
            "pin": "411014"
        },
        {
            "id": 230911007,
            "cn": "Samar",
            "mn1": "8418988603",
            "gst": "",
            "add": "Harsh ent. Prises , duddhi , sonebhadra( up )",
            "ods": [],
            "mn2": "8521443438",
            "pin": "231208"
        },
        {
            "id": 230911008,
            "cn": "Asadullah",
            "mn1": "8637495349",
            "gst": "",
            "add": "Tulkat Amman koil Street,kaspa, Vellore,\nIndia",
            "ods": [],
            "mn2": "",
            "pin": "632001"
        },
        {
            "id": 230911009,
            "cn": "Kashish",
            "mn1": "8898630028",
            "gst": "",
            "add": "Shop No.8, Rizvi Chawi, Behind Link Apt,\nBehind Rock Star, Old Khar",
            "ods": [],
            "mn2": "",
            "pin": "400052"
        },
        {
            "id": 230911010,
            "cn": "SHRESHTH FURNITURE AND INTERIORS",
            "mn1": "",
            "gst": "09BDIPT2002D2ZU",
            "add": "",
            "ods": [
                "s309347"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230911011,
            "cn": "Prabhat Kumar",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s309348"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230911012,
            "cn": "Akshay",
            "mn1": "7796285105",
            "gst": "",
            "add": "Rupchand nagar, washim road, AKOLA (), MAHARASHTRA",
            "ods": [],
            "mn2": "",
            "pin": "444002"
        },
        {
            "id": 230911013,
            "cn": "Dishu",
            "mn1": "9905599643",
            "gst": "",
            "add": "RAMSONS plywood \nWard no 35\nKhoradah \nNear Dr. D Tiwary \nNear Shanti kothi\nBompass town \nDeoghar ",
            "ods": [],
            "mn2": "",
            "pin": "814112"
        },
        {
            "id": 230911014,
            "cn": "Yyyyyy",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230911015,
            "cn": "Avani",
            "mn1": "6362645592",
            "gst": "",
            "add": "2-122d, Gopalpura 4th cross, santhekatte, \nPuttur village, near colonel house",
            "ods": [
                "s309359"
            ],
            "mn2": "9945731221",
            "pin": "576105"
        },
        {
            "id": 230911016,
            "cn": "Ismail",
            "mn1": "9892807860",
            "gst": "",
            "add": "B-803, Orange Heights Phase 2, near Yashwant gaurav, nalasopara west, palghar",
            "ods": [],
            "mn2": "7208466369",
            "pin": "401203"
        },
        {
            "id": 230911017,
            "cn": "Uuuu",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230911018,
            "cn": "Eklavya",
            "mn1": "7249297802",
            "gst": "",
            "add": "Yashwant avenue \n1402/ 1403 , b wing .\nYk nagar Virar West",
            "ods": [],
            "mn2": "",
            "pin": "401303"
        },
        {
            "id": 230911019,
            "cn": "Kartik",
            "mn1": "8746082315",
            "gst": "",
            "add": "Home/office : Shiva book stall \nbuilding : Marakumbi complex street :somvar pet\nCity: BAILHONGAL() \ndist : belagavi ",
            "ods": [],
            "mn2": "9164939215",
            "pin": "591102"
        },
        {
            "id": 230911020,
            "cn": "Kishan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230912001,
            "cn": "Ashley",
            "mn1": "9080429859",
            "gst": "",
            "add": "1C, SHANTINIKETAN WESTCLIFF,\nDURGA NAGAR MAIN ROAD, \nTAMBARAM SANATORIUM,\nCHENNAI ",
            "ods": [],
            "mn2": "",
            "pin": "600047"
        },
        {
            "id": 230912002,
            "cn": "Gowtham",
            "mn1": "7397035007",
            "gst": "",
            "add": "Gowtham.s\nLIG 40 Anna nagar cuddalore ",
            "ods": [],
            "mn2": "9442449713",
            "pin": "607001"
        },
        {
            "id": 230912003,
            "cn": "STUBBORNS",
            "mn1": "8876701534",
            "gst": "18AEZFS8904C1ZF",
            "add": "NALIA POOL MONOSHA BARI, DIBRUGARH,\nASSAM",
            "ods": [
                "s309381"
            ],
            "mn2": "",
            "pin": "786001"
        },
        {
            "id": 230912004
        },
        {
            "id": 230912005,
            "cn": "Nikhil",
            "mn1": "8238488395",
            "gst": "",
            "add": "40/315 G. H. B SARVODAYA NAGAR KHOKRA AHMEDABAD NR. LOTUS TEMPLE",
            "ods": [],
            "mn2": "",
            "pin": "380026"
        },
        {
            "id": 230912006,
            "cn": "PEACOMIX",
            "mn1": "8369863577",
            "gst": "",
            "add": "1104, sukh Shanti, VidyaNidhi marg, opposite kafi azmi park. Jvpd scheme, juhu",
            "ods": [],
            "mn2": "",
            "pin": "400049"
        },
        {
            "id": 230912007,
            "cn": "D&M Clothing",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s309388"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230912008,
            "cn": "Pavan",
            "mn1": "9398917611",
            "gst": "",
            "add": "H.no 2-129/1\nGajularamaram road,Shapur Nagar, jeedimetla.\nLandmark: near Krishna hardware,\nCity: Hyd",
            "ods": [],
            "mn2": "",
            "pin": "500055"
        },
        {
            "id": 230912009,
            "cn": "Avos",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230912010,
            "cn": "Faraz",
            "mn1": "8090100322",
            "gst": "",
            "add": "Gulshan nagar , khursheed anwar hospital, shamli  ",
            "ods": [],
            "mn2": "",
            "pin": "247776"
        },
        {
            "id": 230912011,
            "cn": "Akhil",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230912012,
            "cn": "Psycho",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230912013,
            "cn": "Aditya",
            "mn1": "9990282326",
            "gst": "",
            "add": "Flat no.35, 1st floor, PTS , Police Training School\nMalviyanagar ",
            "ods": [],
            "mn2": "8809930642",
            "pin": "110017"
        },
        {
            "id": 230912014,
            "cn": "Sajan",
            "mn1": "9810196688",
            "gst": "",
            "add": "Kind of April\nUnits number\n48-49-51-57-58-61\nparas trade centre\nGwal pahari\nGurgaon",
            "ods": [],
            "mn2": "",
            "pin": "122002"
        },
        {
            "id": 230912015,
            "cn": "Ashu",
            "mn1": "8223023185",
            "gst": "",
            "add": "5th Flor 405, cosmo business park, Sirol Tiraha, New City Center, Gwalior, Madhya Pradesh",
            "ods": [],
            "mn2": "",
            "pin": "475001"
        },
        {
            "id": 230912016,
            "cn": "Sameena",
            "mn1": "9945102622",
            "gst": "",
            "add": "Sulaiman s/o Ismail t.r.nagar neyar anganwadi madikeri  codagu Karnataka ",
            "ods": [],
            "mn2": "",
            "pin": "571201"
        },
        {
            "id": 230912017,
            "cn": "JOGIDA fashion",
            "mn1": "8200582931",
            "gst": "",
            "add": "C/102, swarg residency,kholwad rode ,kamrej , surat",
            "ods": [],
            "mn2": "9913393036",
            "pin": "394185"
        },
        {
            "id": 230912018,
            "cn": "Prem",
            "mn1": "9834195338",
            "gst": "",
            "add": "Ahuja nagar gali no 4 plot no 609 jaripatka nagpur",
            "ods": [],
            "mn2": "",
            "pin": "440014"
        },
        {
            "id": 230912019,
            "cn": "Abhishekh",
            "mn1": "8840917869",
            "gst": "",
            "add": "Karol Bagh siddhipura east park road shop number 10833",
            "ods": [],
            "mn2": "",
            "pin": "110005"
        },
        {
            "id": 230912020,
            "cn": "Khader",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230912021,
            "cn": "Akshay",
            "mn1": "8871999834",
            "gst": "",
            "add": "Ekta colony Akbar ward seoni. (MP)",
            "ods": [],
            "mn2": "8269952659",
            "pin": "480661"
        },
        {
            "id": 230912022,
            "cn": "Yash",
            "mn1": "9045088051",
            "gst": "",
            "add": "671 E/ 3 dakra,sanjay vihar,garhi cantt ,dehra dun,uttarakhand",
            "ods": [],
            "mn2": "",
            "pin": "248003"
        },
        {
            "id": 230913001,
            "cn": "Remtluanga",
            "mn1": "9366200959",
            "gst": "",
            "add": "MIZORAM, AIZAWL, CHANMARI WEST JOJO RESTAURANT BUL",
            "ods": [
                "s309429"
            ],
            "mn2": "9233967543",
            "pin": "796009"
        },
        {
            "id": 230913002,
            "cn": "Umar",
            "mn1": "9340772485",
            "gst": "",
            "add": "MASJID MARG GOGAWA\nLandmark:UMAR KIRANA STORE",
            "ods": [],
            "mn2": "7748815313",
            "pin": "451335"
        },
        {
            "id": 230913003,
            "cn": "Ufufufdud",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230913004,
            "cn": "Lenin",
            "mn1": "9742602890",
            "gst": "",
            "add": "14, 13/10, Chingamakha Yanglem Leikai, \nSingjamei, Imphal West, Manipur-\nLandmark: Nameirakpa Traders",
            "ods": [
                "s309442"
            ],
            "mn2": "7005312772",
            "pin": "795001"
        },
        {
            "id": 230913005,
            "cn": "Taaha",
            "mn1": "9962620844",
            "gst": "",
            "add": "13th Block 3c Jain Sundabans Nolumbure mogappair chennai",
            "ods": [],
            "mn2": "",
            "pin": "600083"
        },
        {
            "id": 230913006,
            "cn": "Mohini",
            "mn1": "8979920195",
            "gst": "",
            "add": "31 house no Rajeev enclave near all saints school shamshabad road agra",
            "ods": [],
            "mn2": "8449038132",
            "pin": "282001"
        },
        {
            "id": 230913007,
            "cn": "Kai",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230913008,
            "cn": "Krishan",
            "mn1": "8726064343",
            "gst": "",
            "add": "House no .186, Nayapura,omshiv nagar, Lal ghati, BHOPAL",
            "ods": [],
            "mn2": "7905647096",
            "pin": "462030"
        },
        {
            "id": 230913009,
            "cn": "Sanathansda",
            "mn1": "8757574887",
            "gst": "",
            "add": " Lane no-8, Near Indian Post Office, Adelhatu, Morabadi",
            "ods": [],
            "mn2": "",
            "pin": "834008"
        },
        {
            "id": 230913010,
            "cn": "Jay Girdhar",
            "mn1": "8369699565",
            "gst": "",
            "add": "ganesh Kripa colony,durga nagar 12,13, thankkar pada ,kalyan west",
            "ods": [],
            "mn2": "",
            "pin": "421301"
        },
        {
            "id": 230914001,
            "cn": "Navdeep",
            "mn1": "7087487298",
            "gst": "",
            "add": "Vill.Bhagran,P.O.Bhagran,Teh.Mukerian,Distt.Hoshiarpur Punjab",
            "ods": [],
            "mn2": "",
            "pin": "144205"
        },
        {
            "id": 230914002,
            "cn": "Subodh",
            "mn1": "9326809418",
            "gst": "",
            "add": "Haji bapu road, Atul apartment, Shop no 10, Malad E, opp dhanlaxmi jewelrs",
            "ods": [],
            "mn2": "",
            "pin": "400097"
        },
        {
            "id": 230914003,
            "cn": "Waseem",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230914004,
            "cn": "Pradeep",
            "mn1": "9952489960",
            "gst": "",
            "add": "S.Pradeep Kumar, 5/704-354, street 50, KCC Nagar, Bagalur Road, Hosur",
            "ods": [],
            "mn2": "",
            "pin": "635109"
        },
        {
            "id": 230914005,
            "cn": "Vishnu",
            "mn1": "7907707411",
            "gst": "",
            "add": "Kettinakath house, thavakkara, kannur, Kerala",
            "ods": [
                "s309484"
            ],
            "mn2": "",
            "pin": "670001"
        },
        {
            "id": 230914006,
            "cn": "Manish",
            "mn1": "8345964818",
            "gst": "",
            "add": "95 kavi sukanto sarani, kundu bagan kolkata",
            "ods": [],
            "mn2": "",
            "pin": "700085"
        },
        {
            "id": 230914007,
            "cn": "Kundan",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230914008,
            "cn": "Mani",
            "mn1": "8015196011",
            "gst": "",
            "add": "No.4/11/2, Manikandan 3rd street,\nOldwashermenpet,\nChennai",
            "ods": [],
            "mn2": "",
            "pin": "600021"
        },
        {
            "id": 230914009,
            "cn": "Shahzad",
            "mn1": "9633177683",
            "gst": "",
            "add": "Shahzad sha madakkal\nPo.udumunthala\nDistrict kasarkod\nTown trikaripur",
            "ods": [],
            "mn2": "9645998802",
            "pin": "671311"
        },
        {
            "id": 230914010,
            "cn": "Rohit",
            "mn1": "6202993181",
            "gst": "",
            "add": "Ankit Kumar Lal \nFlat no: 202, 2nd floor, Behind behera hotel and family restaurant, Badaraghunathpur, Bhubaneswar,Odisha",
            "ods": [
                "s309491"
            ],
            "mn2": "8862842929",
            "pin": "752054"
        },
        {
            "id": 230914011,
            "cn": "Chirag",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s309493"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230914012,
            "cn": "Sandiyar",
            "mn1": "6379815364",
            "gst": "",
            "add": "My adress 105,lingundram village, nellorepet, gudiyattam, vellore, Tamilnadu",
            "ods": [],
            "mn2": "",
            "pin": "632602"
        },
        {
            "id": 230914013,
            "cn": "Varun",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [
                "s309501"
            ],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230914014,
            "cn": "Mitesh",
            "mn1": "9054673608",
            "gst": "",
            "add": "408 poddar arcade main varacha road surat  gujarat",
            "ods": [],
            "mn2": "",
            "pin": "395006"
        },
        {
            "id": 230914015,
            "cn": "Professor",
            "mn1": "8494075380",
            "gst": "",
            "add": "fatehpora chowk khawajabagh baramulla Jammu and Kashmir",
            "ods": [],
            "mn2": "6005395707",
            "pin": "193101"
        },
        {
            "id": 230914016,
            "cn": "Asif",
            "mn1": "7061707164",
            "gst": "",
            "add": "mandai kalan near urdu high school hazaribagh Jharkhand",
            "ods": [],
            "mn2": "",
            "pin": "825319"
        },
        {
            "id": 230914017,
            "cn": "Mani",
            "mn1": "8825144461",
            "gst": "",
            "add": "motihari, District - East Champaran,state - Bihar\nLandmark - Chamra Godam, Raghunathpur ",
            "ods": [],
            "mn2": "9110107050",
            "pin": "845401"
        },
        {
            "id": 230914018,
            "cn": "Pasro",
            "mn1": "9860859048",
            "gst": "",
            "add": "Rehma Enterprises\nShop no 2 anukul apartment Bansai curchorem goa",
            "ods": [],
            "mn2": "",
            "pin": "403706"
        },
        {
            "id": 230915001,
            "cn": "Karan",
            "mn1": "7410580545",
            "gst": "",
            "add": "Dhore nagar line no 1 old sangvi pune near jain temple ",
            "ods": [],
            "mn2": "9373490820",
            "pin": "411027"
        },
        {
            "id": 230915002,
            "cn": "Rahul",
            "mn1": "8806443109",
            "gst": "",
            "add": "Romeokilo Graphics\nKukde Traders, Bhilgaon, Kamptee Road, Nagpur, Maharashtra",
            "ods": [],
            "mn2": "9370688879",
            "pin": "440026"
        },
        {
            "id": 230915003,
            "cn": "Yash Sonawat",
            "mn1": "9341648012",
            "gst": "",
            "add": "Sumit Handloom, Manik chand road, Forbesganj",
            "ods": [],
            "mn2": "",
            "pin": "854318"
        },
        {
            "id": 230915004,
            "cn": "Aditya",
            "mn1": "9975831572",
            "gst": "",
            "add": "Shahenshah Chowk, Ashirwad Nagar, nagpur \nLandmark-Landmark Touch Stone Convet",
            "ods": [
                "s309528"
            ],
            "mn2": "",
            "pin": "440024"
        },
        {
            "id": 230915005,
            "cn": "Kashyap",
            "mn1": "7096200791",
            "gst": "",
            "add": " 9,haridhar park row house near honeypark road , adajan, surat Gujarat",
            "ods": [],
            "mn2": "",
            "pin": "395009"
        },
        {
            "id": 230915006,
            "cn": "The nerds lair",
            "mn1": "7013824982",
            "gst": "36DEEPM5056P1ZW",
            "add": "3, block 4, flat no. 304, Rajapushpa Silicon Ridge Apartments, Laxmi Nagar Colony Road,",
            "ods": [
                "s309542"
            ],
            "mn2": "",
            "pin": "500048"
        },
        {
            "id": 230915007,
            "cn": "Shivam",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230915008,
            "cn": "Sahil",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230915009,
            "cn": "Shristi",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230915010,
            "cn": "Umashankar",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        },
        {
            "id": 230915011,
            "cn": "Sourav",
            "mn1": "",
            "gst": "",
            "add": "",
            "ods": [],
            "mn2": "",
            "pin": ""
        }
    ]

    jsonData.forEach(data => {
        const addRequest = objectStore.add(data);
        addRequest.onsuccess = function () {
            console.log('Data added successfully.');
        };
        addRequest.onerror = function () {
            console.error('Error adding data:', addRequest.error);
        };
    });
};

