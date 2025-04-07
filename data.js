const streetNames = [
    "Hauptstraße", "Bahnhofstraße", "Kirchweg", "Dorfplatz", "Am Waldrand", 
    "Goethestraße", "Schillerweg", "Lindenallee", "Bergstraße", "Mühlenweg",
    "Sonnenallee", "Rosenweg", "Eichenweg", "Bachgasse", "Ahornstraße"
    ];
    
    const cityNames = [
    "Berlin", "München", "Hamburg", "Köln", "Frankfurt", 
    "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig",
    "Bremen", "Dresden", "Hannover", "Nürnberg", "Bonn"
    ];

    const postalCodes = [
    "10115", "80331", "20095", "50667", "60311",
    "70173", "40213", "44135", "45127", "04109",
    "28195", "01067", "30159", "90402", "53111"
    ];

    const quotes = [
        '"Mein früherer Ausbilder hat gesagt du handelst mit Zitronen wenn du sowas machst" - M. Fitzner',
        '"Sergej ich schmeiß dich gleich raus."',
        '"Warum seit ihr eigentlich so viel am Klicken, wenn ihr mit der Packet Tracer Übung fertig seid?"',
        'Hat jemand von euch schon mal Windows 11 installiert?',
        '"Das ist die Maschiene, der bekommt die Arbeit direkt, 100%. Mr. packet Tracer" ',
        '"Hello again!"',
        '"Danilo!!"',
        '"Die sind für meine flüchtlinge!" ',
        '"NEIIIIIIIIIN!!!!!!!!!!!!!"',
        '"ja Fitzner hier guten tag" ',
        '"Alles tip toppi.. wow"',
        '"Ich würde es mit ihm klären oder halt einfach gehen."',
        '"Danae! zu den Löwen mit dir!"',
        '"Fangen wir mit einem Protokoll aus der Mottenkiste an"',
        '"Bei den slowenen geht es meist, die aus estland haben nie bock"',
        '"Es ist ein guter tag schwul zu sein"',
        '"Jogging buchse"',
        '"Habt ihr das theaterstück zu hitler gesehen?"',
        '"Deswegen hats nicht mit der Nachprüfung geklappt."',
        '"Schau zu das du einen dolmetscher hast wenn es hart auf hart kommt"',
        '"Moin Vanille"',
        '"So machne wa erstma Päuschen"',
        '"Alles tipi topi"',
        '"Sergej kennt sich aus mit partnern und dating apps"',
        '"Aber wenn der Sergej heiß ist, wie Frittenfett..."',
        '"Ja natürlichhh" x2 ',
        '"Klopf klopf moin!"',
        '"Danylo musst du in den latz knallen weil er immer russich oder englisch sprechen möchte"',
        '"Ich geh mal klären wo ihr gleich unterricht habt." - M. Fitzner\n"Mathe" - Dominik',
        '"Ja ich habe Albträume von euch"',
        '"Mit dieser Rechenmethode rechnet man nicht mit Kommazahlen. Also, ich gucke niemanden an, aber... (schaut Leevan intensiv an)"',
        '"Wir sind ja jetzt seriös geworden, wir haben hier neben an eine Kaffeemaschiene, ihr könnt euch da gerne Kaffe kochen, da sollten auch noch 4 Tassen sein."',
        '"Was ist das für eine unfassbar dämliche Frage" - Danae zu Matz\n "Richtig Danae, gibt ihm" - FIT \n"Wehrt euch!" - FIT',
    ];

    const namen = [
        'Den OSI-Mann', 'Jorchan', 'Trojonatan', 'Jonas', 'Konstantin',
        'Jonatin', 'Philip','Micha','Mirco jabs','Marco jäbs ','Merco jubs',
        'Morco jobs','Märko jebs','Wirco Labs','Warco Läbs','Werco Lubs',
        'Worco Lobs','Wärko Lebs ','Malte','Micro Jabs','Mats dankwärze',
        'Matsimal','Max','Mr Packet Tracer','Michi','Gritzner',
        'Fritzner','Tiefkühl Fitzner','Genosse Fillip','Genosse Malte',
        'Genosse Niels','Genosse Kovatschow','Genosse Jorchan','Niels',
        'T.R.','Timo Richard','Danee','Dänae',
        'Danane','Danae Talsperre','Danea','Danö',
        'Valeria','Dana Air','Dna','Yankee Delta',
        'Y.D.','Matsim','Maksim','Masim',
        'Massim','Macsim','Flaufs','Flo ',
        'Nadine "ChatGPT" Kabisch','ChatGPT','KI','Sehrgay',
        'Cergéy', 'Mottenkugel', 'Lindenkugel', 'C.BOOM', 'Air Compressor',
        'KFC', 'Cave Johnson', 'Lyndon Johnson', 'Dr. John Fitzgerald Kennedy Jr. Sr. ',
        'Dr. Alice Weidel', 'Elonia Musk', 'Donald Trumpina', 'RFK Jr.', 'Sabine Hoffmann', 'HOF',
        'Jens', 'Jens Vermaeten', 'F.I.T.', 'CSV Converter', 'Jirco Mabs', 'Nick Todesblick',
        'Z. Immerling', 'Happy Fitzner', 'Schwanzkopf.de', 'Herr der Netzwerkprotokolle', 
        'Buff Fitzner', 'Pan Pawet', 'Bill Clinton', 'Shit in Shit out', 'IDKSterling', 'Friedrich Merz',
        'Christian Lindner', 'Boris Pistorius', 'Armin Laschet', 'Armin Pistorius', 'Boris Laschet',
        'Lambo Zuchini', 'BIG BELLY BACON BOYS (BBBB)', 'Jack Black', 'JD Vance', 'Kamilla Harris',
        'Freaky Michi', 'Aperture Science Emergency Intelligence Incinerator'
    ];