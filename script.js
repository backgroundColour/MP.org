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

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function generateRandomAddress() {
        const street = getRandomElement(streetNames);
        const houseNumber = Math.floor(Math.random() * 150) + 1; // Hausnummer zwischen 1 und 150
        const city = getRandomElement(cityNames);
        const postalCode = getRandomElement(postalCodes);

        return `${street} ${houseNumber}, ${postalCode} ${city}`;
    }
    
    //document.getElementById("parteiAdresse").innerText = generateRandomAddress();
    document.getElementById("imprint").innerHTML = "<p>© 2025 Michi Partei | Kontakt: info@michipartei.de | " + generateRandomAddress() + "</p>";    

    // Funktion zur Generierung eines zufälligen zukünftigen Datums
    function getRandomFutureDate() {
        const today = new Date();
        // Zufällige Anzahl von Tagen in der Zukunft (zwischen 7 und 60 Tagen)
        const randomDays = Math.floor(Math.random() * 53) + 7;
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + randomDays);
        
        // Formatierung des Datums im deutschen Format
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return futureDate.toLocaleDateString('de-DE', options);
    }

    // Zufälliges Datum anzeigen
    document.getElementById('next-meeting-date').textContent = getRandomFutureDate();

    let quoteElement = document.getElementById('quote');
    
    function showQuote() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.textContent = randomQuote + " - M. Fitzner";
        quoteElement.style.display = 'block';
        
        // Pop-in Animation    
        quoteElement.style.animation = 'popIn 0.5s ease-out forwards';
        
        // Nach 5 Sekunden Pop-out-Animation starten
        setTimeout(() => {
            quoteElement.style.animation = 'popOut 0.5s ease-in forwards';
            
            // Warte, bis die Pop-out-Animation abgeschlossen ist, bevor das Zitat ausgeblendet wird
            setTimeout(() => {
                quoteElement.style.display = 'none';
            }, 500); // Warte 0.5s (die Dauer der Pop-out-Animation)
        }, 5000); // Zitat nach 5 Sekunden ausblenden
        
        // Alle 10 Sekunden ein neues Zitat anzeigen
        setTimeout(showQuote, 10000); // Nächste Zitat in 10 Sekunden anzeigen
    }
    
    // Zitat beim Laden der Seite anzeigen
    window.onload = function() {
        showQuote();
    };

    document.addEventListener('DOMContentLoaded', function () {
        const popoverTriggers = document.querySelectorAll('[popovertarget]');
        popoverTriggers.forEach(trigger => {
            const targetId = trigger.getAttribute('popovertarget');
            const target = document.getElementById(targetId);
            if (target) {
                trigger.addEventListener('click', function () {
                    target.toggleAttribute('open');
                });
            }
        });
        setTotalDonationAmount();
    });

    function setTotalDonationAmount() {
        const totalDonationElement = document.getElementById("total-donation-amount");
        totalDonationElement.innerText = getRandomTotalDonationAmount();
    }

    function getRandomTotalDonationAmount() {
        const mean = 1600000; // Average donation amount
        const stdDev = 400000; // Standard deviation
        const randomGaussian = () => {
            let u = 0, v = 0;
            while (u === 0) u = Math.random(); // Avoid 0
            while (v === 0) v = Math.random(); // Avoid 0
            return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        };
        const donation = mean + stdDev * randomGaussian();
        return Math.max(200000, Math.min(3000000, donation)).toFixed(2) + " €";
    }

    function getRandomDonationAmount() {
        return (Math.random() * 100000).toFixed(2) + " €";
    }

    function updateTotalDonationAmount(amount) {
        const totalDonationElement = document.getElementById("total-donation-amount");
        totalDonationElement.innerText = (parseFloat(totalDonationElement.innerText.replace(" €", "").replace(",", ".")) + amount).toFixed(2).replace(".", ",") + " €";
    }

    function animateDonationChange() {
        const donationElement = document.getElementById("donation-amount");
        const namenElement= document.getElementById("SpenderName");
        const randomName = namen[Math.floor(Math.random() * namen.length)];
        const totalDonationElement = document.getElementById("total-donation-amount");
        namenElement.textContent = randomName;
        namenElement.style.display = 'block';
        
        // Fade out animation
        donationElement.classList.add('fade-out');
        namenElement.classList.add('fade-out');
        totalDonationElement.classList.add('fade-out');
        
        setTimeout(() => {
            // Change the amount while invisible
            let randomDonationAmount = getRandomDonationAmount();
            updateTotalDonationAmount(parseFloat(randomDonationAmount.replace(" €", "").replace(",", ".")));
            donationElement.textContent = randomDonationAmount;
            namenElement.textContent = randomName;
            
            totalDonationElement.classList.remove('fade-out');
            totalDonationElement.classList.add('fade-in', 'pulse');

            // Fade in animation with pulse effect
            donationElement.classList.remove('fade-out');
            donationElement.classList.add('fade-in', 'pulse');

            namenElement.classList.remove('fade-out');
            namenElement.classList.add('fade-in', 'pulse');

            const image = document.getElementById('OSIBILD');
            let rotation = 0;
            
            function rotateImage() {
                rotation += 8; // Rotation speed (degrees per frame)
                if (rotation >= 360) {
                    rotation = 0;
                    image.style.transform = `rotate(${rotation}deg)`;
                    return;
                }
                image.style.transform = `rotate(${rotation}deg)`;
                requestAnimationFrame(rotateImage);
            }
            
            // Start the rotation
            rotateImage();
            
            // Remove animation classes after they complete
            setTimeout(() => {
                donationElement.classList.remove('fade-in', 'pulse');
                namenElement.classList.remove('fade-in', 'pulse');
                totalDonationElement.classList.remove('fade-in', 'pulse');
            }, 500);
            
        }, 300); // Match this with the CSS transition time
    }

    function updateDonationAmount() {
        animateDonationChange();
        
        // Set random refresh time between 1 to 5 seconds
        const randomRefreshTime = Math.floor(Math.random() * 1000) + 9000;
        setTimeout(updateDonationAmount, randomRefreshTime);
    }

    // Initialize with first value
    document.getElementById("donation-amount").textContent = getRandomDonationAmount();
    
    // Start the update cycle after initial delay
    setTimeout(updateDonationAmount, Math.floor(Math.random() * 4000) + 1000);
    function getNextKaffeetagTimestamp() {
        const now = new Date();
        const nextKaffeetag = new Date();
        nextKaffeetag.setDate(now.getDate() + ((3 - now.getDay() + 7) % 7)); // Next Wednesday
        nextKaffeetag.setHours(9, 40, 0, 0); // 9:40 AM
        if (nextKaffeetag <= now) {
            nextKaffeetag.setDate(nextKaffeetag.getDate() + 7);
        }
        return Math.floor(nextKaffeetag.getTime() / 1000); // Convert to UNIX timestamp
    }

    document.addEventListener('DOMContentLoaded', () => {
        const nextKaffeetagTimestamp = getNextKaffeetagTimestamp();

        // Initialize FlipDown
        new FlipDown(nextKaffeetagTimestamp)
            .start()
            .ifEnded(() => {
                console.log('Kaffeetag has started!');
            });
    });