const streetNames = [
    "Hauptstraße", "Bahnhofstraße", "Kirchweg", "Dorfplatz", "Am Waldrand", 
    "Goethestraße", "Schillerweg", "Lindenallee", "Bergstraße", "Mühlenweg",
    "Sonnenallee", "Rosenweg", "Eichenweg", "Bachgasse", "Ahornstraße", 'Altschauerberg 8'
    ];
    
const cityNames = [
    "Berlin", "München", "Hamburg", "Köln", "Frankfurt", 
    "Stuttgart", "Düsseldorf", "Dortmund", "Essen", "Leipzig", 'Wipperfürth',
    "Bremen", "Dresden", "Hannover", "Nürnberg", "Bonn", 'Altschauerberg'
];

const postalCodes = [
    "10115", "80331", "20095", "50667", "60311",
    "70173", "40213", "44135", "45127", "04109", '51688',
    "28195", "01067", "30159", "90402", "53111", '91448'
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
        '"Serrgeejjj"',
        '"Ey Mann, diese Scheiße. Teams ist das schlechteste Produkt, das von Microsoft erstellt wurde."',
        '"Er spielt Schach ich werd närrisch"',
        '"Kollege Fitzner hat mir gesagt..." - C. Böhmer',
        '"Ach leck mich doch am arsch"',
        '"Öh .. ja.. oöh... ja."',
        '"Mika, wo guckst du denn hin?"',
        '"Ne, die Arbeiten. Sind die bei dir nicht so leise?"',
        '"Mach ma kein stress Fitzner"',
        '„Nick, Todesblick“',
        '"Nein ich hab mein password nicht vergessen"',
        '"Nein ich hab mein password nicht vergessen"',
        '"Hört doch auf gesundheit zu sagen"',
        '"Was bei gimp sensationell ist das man exportieren kann"',
        '"Leevan du musst 5 ziegen opfern"',
        '"Sergej du hast jetzt toilettenverbot, für die ersten drei Viertelstunden"',
        '"Schreib jetzt nicht "ich bin ein nazi" leevan"',
        '"Yusuf sag mal eine zahl zwischen 253 und 255"',
        '"Wir haben heute Dienstag"',
        '"Dominik steht auf Lange kabel"',
        '"Der mika der mags eckig"',
        '"Das geniale an Visio ist, das man speichern kann"',
        '"So machnwa pause"',
        '"Ich muss da jetzt kein gamer maschienchen hinstellen"',
        '"Jani, du musst doch noch präsentieren."',
        '"Achso"',
        '"Ruhig Brauner"',
        '"Nimmst du jeztzt die Maus weg? Sergej, dich wird der Blitz treffen. Weißt du warum die Räume hier so aussehen, weil leute wie du hier rum verkabeln. Du bist garnicht autorisiert dazu!"',
        '"Der richtig heiße Scheiß ist Dynamisches VLAN"',
        '"Der nimmt den kürzesten Pfad, wobei dieser nicht immer der kürzeste Pfad sein muss."',
        '"Habt ihr irgendwelche Fragen, wenn ja meldet euch einfach"',
        '"Ahhhhhhhhhh ... Help"',
        '"Snaiffer"',
        '"Habt hier? [Klasse schweitg] Meine Güte..."',
        '"Die Slowenischen Mädchen sind sehr hübsch und die Jungs sind noch hübscher."',
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
        'KFC', 'Cave Johnson', 'Lyndon Johnson', 'Dr. John Fitzgerald Kennedy Jr. Sr.',
        'Dr. Alice Weidel', 'Elonia Musk', 'Donald Trumpina', 'RFK Jr.', 'Sabine Hoffmann', 'HOF',
        'Jens', 'Jens Vermaeten', 'F.I.T.', 'CSV Converter', 'Jirco Mabs', 'Nick Todesblick',
        'Z. Immerling', 'Happy Fitzner', 'Schwanzkopf.de', 'Herr der Netzwerkprotokolle', 
        'Buff Fitzner', 'Pan Pawet', 'Bill Clinton', 'Shit in Shit out', 'IDKSterling', 'Friedrich Merz',
        'Christian Lindner', 'Boris Pistorius', 'Armin Laschet', 'Armin Pistorius', 'Boris Laschet',
        'Lambo Zuchini', 'BIG BELLY BACON BOYS (BBBB)', 'Jack Black', 'JD Vance', 'Kamilla Harris',
        'Freaky Michi', 'Aperture Science Emergency Intelligence Incinerator'
];
// Map Initialization
const majorCitiesGermany = [
    { name: "Berlin", lat: 52.52, lng: 13.405 },
    { name: "Hamburg", lat: 53.5511, lng: 9.9937 },
    { name: "Munich", lat: 48.1351, lng: 11.582 },
    { name: "Cologne", lat: 50.9375, lng: 6.9603 },
    { name: "Frankfurt", lat: 50.1109, lng: 8.6821 },
    { name: "Stuttgart", lat: 48.7758, lng: 9.1829 },
    { name: "Düsseldorf", lat: 51.2277, lng: 6.7735 },
    { name: "Dortmund", lat: 51.5136, lng: 7.4653 },
    { name: "Essen", lat: 51.4556, lng: 7.0116 },
    { name: "Leipzig", lat: 51.3397, lng: 12.3731 }
];

    async function sleep(msec) {
        return new Promise(resolve => setTimeout(resolve, msec));
    }

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
    //document.getElementById("imprint").innerHTML = "<p>© 2025 Michi Partei | Kontakt: info@michipartei.de | " + generateRandomAddress() + "</p>";    

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

    
    function makeQuote() {
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
    };

function getRandomLatLonOffset(meters) {
    const earthRadius = 6378000;
    const offset = meters / earthRadius * (180 / Math.PI);
    return (Math.random() - 0.5) * 2 * offset;
}

function getRandomMajorCity() {
    const city = majorCitiesGermany[Math.floor(Math.random() * majorCitiesGermany.length)];
    const radius = 1500;
    return [city.lat + getRandomLatLonOffset(radius), city.lng + getRandomLatLonOffset(radius), city.name];
}

async function getAddress(lat, lng) {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
    const data = await response.json();
    return data.display_name || 'Unknown Location';
}

async function initMap() {
    const [lat, lng, cityName] = getRandomMajorCity();
    const map = L.map('map', { maxBoundsViscosity: 1.0 }).setView([lat, lng], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const marker = L.marker([lat, lng]).addTo(map);

    const address = await getAddress(lat, lng);
    marker.bindPopup(`${cityName}: ${address}`).openPopup();

    // Set meeting date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const meetingDate = new Date();
    meetingDate.setDate(meetingDate.getDate() + 14);
    document.getElementById('next-meeting-date').textContent = meetingDate.toLocaleDateString('de-DE', options);
}

    document.addEventListener('DOMContentLoaded', async function () {
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
        try{
        setTotalDonationAmount();
        document.getElementById("donation-amount").textContent = getRandomDonationAmount();
        document.getElementById('next-meeting-date').textContent = getRandomFutureDate();
        makeQuote();}
        catch (error) {
            console.log("Ned gefunden");
        }
        // Zufälliges Datum anzeigen
        
        await sleep(1000);
        document.getElementById("imprint").innerHTML = "<p>© 2025 Michi Partei | Kontakt: info@michipartei.de | " + generateRandomAddress() + "</p>";

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
        try {
            animateDonationChange();
            // Set random refresh time between 1 to 5 seconds
            const randomRefreshTime = Math.floor(Math.random() * 1000) + 9000;
            setTimeout(updateDonationAmount, randomRefreshTime);
        } catch (error) {
            
        }
        
        
        
    }

    try {
        setTimeout(updateDonationAmount, Math.floor(Math.random() * 4000) + 1000);
    } catch (error) { }
    
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
        try {
            new FlipDown(nextKaffeetagTimestamp,{
                headings: ["", "", "", ""],
            })
            .start()
            .ifEnded(() => {
                console.log('Kaffeetag has started!');
            });
            initMap();
        } catch (error) {
            
        }
    });

    //document.querySelector('.menu-toggle').addEventListener('click', function() {
    //    document.querySelector('.nav').classList.toggle('active');
    //});


try{
   const canvas = document.getElementById("chart");
   const ctx = canvas.getContext("2d");
   const priceLabel = document.getElementById("price");
   const emoji = document.getElementById("emoji");

  let data = [];
  const maxPoints = 50;
  let startPrice = Math.random() * 100 + 50;
  let currentPrice = startPrice;

  function updateData() {
    const oldPrice = currentPrice;
    const change = (Math.random() - 0.5) * 40;
    currentPrice = Math.max(1, currentPrice + change);
    data.push(currentPrice);
    if (data.length > maxPoints) data.shift();

    drawChart();
    animatePrice(oldPrice, currentPrice);
  }

  function animatePrice(oldVal, newVal) {
    const percentChange = ((newVal - startPrice) / startPrice) * 100;
    const formattedPrice = "€" + newVal.toFixed(2);
    const formattedChange = (percentChange >= 0 ? "+" : "") + percentChange.toFixed(2) + "%";
    priceLabel.textContent = `${formattedPrice} (${formattedChange})`;

    if (newVal > oldVal) {
      priceLabel.classList.remove("price-down");
      priceLabel.classList.add("price-up");
    } else if (newVal < oldVal) {
      priceLabel.classList.remove("price-up");
      priceLabel.classList.add("price-down");
    }

    // Emoji drehen je nach Prozentverlauf
    if (percentChange < 0) {
      emoji.style.transform = "rotate(90deg)";
    } else {
      emoji.style.transform = "rotate(0deg)";
    }

    setTimeout(() => {
      priceLabel.classList.remove("price-up", "price-down");
    }, 500);
  }

  function drawChart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    const min = Math.min(...data, startPrice); // sicherstellen, dass startPrice mit drin ist
    const max = Math.max(...data, startPrice);
    const range = max - min || 1;
  
    const zeroY = canvas.height - ((startPrice - min) / range) * canvas.height;
  
    // === Basislinie bei 0% ===
    ctx.beginPath();
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = "#888";
    ctx.moveTo(0, zeroY);
    ctx.lineTo(canvas.width, zeroY);
    ctx.stroke();
    ctx.setLineDash([]); // zurücksetzen
  
    // === Chartlinie ===
    for (let i = 0; i < data.length; i++) {
      const x = (i / (maxPoints - 1)) * canvas.width;
      const y = canvas.height - ((data[i] - min) / range) * canvas.height;
  
      // Linie unterhalb der 0%-Linie rot und oberhalb grün
      if (i > 0) {
        const prevX = ((i - 1) / (maxPoints - 1)) * canvas.width;
        const prevY = canvas.height - ((data[i - 1] - min) / range) * canvas.height;
  
        // Farbe für das Segment zwischen den Punkten festlegen
        if (y > zeroY && prevY > zeroY) {
            ctx.strokeStyle = "#ff5050"; // Rot für beide Punkte unter der 0%-Linie
        } else if (y < zeroY && prevY < zeroY) {
            ctx.strokeStyle = "#00ff88"; // Grün für beide Punkte über der 0%-Linie
        } else {
          ctx.strokeStyle = (y > zeroY) ? "#00ff88" : "#ff5050"; // Wechselnde Farben für unterschiedliche Höhen
        }
  
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    }
  }
  

  // Initiale Punkte
  for (let i = 0; i < maxPoints; i++) {
    updateData();
  }

  setInterval(updateData, 2000);

}
catch (error) {
    console.log("Canvas nicht gefunden");
}

// Funktion, um eine zufällige Zahl zwischen 1 und 24 zu generieren
function getRandomHour() {
    return Math.floor(Math.random() * 24) + 1;
  }
  
  // Funktion, um die Zeitangabe zu aktualisieren
  function updateTimeAgo() {
    const timeAgoElement = document.getElementById('time-ago');
    const randomHour = getRandomHour();
    try{
    timeAgoElement.textContent = `Vor ${randomHour} Stunde${randomHour === 1 ? '' : 'n'}`;
    }catch(error) {
        console.log("Element nicht gefunden");
    }
  }
  
  // Beim Laden der Seite die Zeitangabe setzen
  window.addEventListener('load', updateTimeAgo);

  
  const namenBewertung = ['Anna', 'Max', 'Julia', 'Tobias', 'Sophie', 'Lukas', 'Marie', 'Ben',
    'chezburger','Albert Arnold Gore Jr.','Albert Einstein','Albert Camus','Michael Fitzner',
    'Michi','Micha','Michaela','Michaela Fitzner','Michaela Fitzner','Torsten Clever','Jens Vermaeten',
    'Nadine Kabisch','Tobias Blechmann','Linnenkugel','choas','chezjoe','Den OSI-Mann', 'Jorchan', 'Trojonatan', 'Jonas', 'Konstantin',
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
        'KFC', 'Cave Johnson', 'Lyndon Johnson', 'Dr. John Fitzgerald Kennedy Jr. Sr.',
        'Dr. Alice Weidel', 'Elonia Musk', 'Donald Trumpina', 'RFK Jr.', 'Sabine Hoffmann', 'HOF',
        'Jens', 'Jens Vermaeten', 'F.I.T.', 'CSV Converter', 'Jirco Mabs', 'Nick Todesblick',
        'Z. Immerling', 'Happy Fitzner', 'Schwanzkopf.de', 'Herr der Netzwerkprotokolle', 
        'Buff Fitzner', 'Pan Pawet', 'Bill Clinton', 'Shit in Shit out', 'IDKSterling', 'Friedrich Merz',
        'Christian Lindner', 'Boris Pistorius', 'Armin Laschet', 'Armin Pistorius', 'Boris Laschet',
        'Lambo Zuchini', 'BIG BELLY BACON BOYS (BBBB)', 'Jack Black', 'JD Vance', 'Kamilla Harris',
        'Freaky Michi', 'Aperture Science Emergency Intelligence Incinerator'
  ];
  const beschreibungen = [
      '"Unter der Führung von Michael Fitzner verfolgt die Michi Partei eine klare Vision für eine bessere Zukunft. Ihr Engagement für soziale Gerechtigkeit und nachhaltige Politik ist beeindruckend."',
      '„Die Michi Partei hat sich dem Wohl der Menschen verschrieben und setzt sich für eine gerechte Gesellschaft ein. Michael Fitzner führt die Partei mit Herz und Verstand.“',
      '„Die MP unter Michael Fitzner setzt auf Transparenz in der Politik und sorgt für Vertrauen bei ihren Wählern. Die Partei arbeitet stets an Lösungen für die drängenden Probleme unserer Zeit.“',
      '„Die Michi Partei ist nicht nur in der Politik aktiv, sondern auch ein Vorreiter in innovativen Ideen. Michael Fitzner hat die MP zu einer modernen, zukunftsorientierten Bewegung gemacht.“',
      '„Mit Michael Fitzner an der Spitze verfolgt die Michi Partei eine klare Linie: Ein starkes, weltoffenes Land, das auch in der Zukunft sozial und wirtschaftlich gut aufgestellt ist.“',
      '„Die Michi Partei setzt sich für die Bedürfnisse aller Menschen ein. Sie arbeitet eng mit der Bevölkerung zusammen und sorgt dafür, dass niemand zurückgelassen wird.“',
      '„Die Michi Partei zeigt eine starke Verantwortung für die nächste Generation. Michael Fitzner steht für einen Wandel, der nicht nur heute, sondern auch in Zukunft positive Auswirkungen hat.“',
      '„Die MP unter Michael Fitzner zeichnet sich durch klare Entscheidungen und starke Führung aus. Sie kämpft für die Rechte der Menschen und für eine gerechte Politik.“',
      '"„Michael Fitzner und die Michi Partei setzen auf Politik mit Herz und Verstand. Ihre Werte sind auf langfristige, positive Veränderungen ausgerichtet.“',
      '„Die Michi Partei setzt sich für einen sozialen Wandel ein, der die Menschen in den Mittelpunkt stellt. Michael Fitzner versteht es, das Vertrauen der Menschen zu gewinnen und eine starke Gemeinschaft zu schaffen.“',
        '„Die Michi Partei ist ein Vorbild für andere Parteien. Michael Fitzner hat eine klare Vision und setzt sich unermüdlich für die Menschen ein.“',
        '„Die Michi Partei unter Michael Fitzner ist ein Garant für soziale Gerechtigkeit und eine nachhaltige Zukunft. Ihre Politik ist zukunftsorientiert und verantwortungsbewusst.“',
        '„Die Michi Partei ist ein Leuchtturm in der politischen Landschaft. Michael Fitzner führt die Partei mit Weitblick und Engagement.“',
        'Moin.',
        'Löppt.',
    ];

  // URL des Sternbildes von Wikipedia (breiteres Bild)
  const sternBildUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/5_stars.svg/800px-5_stars.svg.png';

  // Funktion, um eine zufällige Bewertung zu erstellen
  function generiereBewertung() {
      const bewertungDiv = document.createElement('div');
      bewertungDiv.classList.add('bewertung');

      // Erstelle das Sternbild
      const sternBild = document.createElement('img');
      sternBild.src = sternBildUrl;
      bewertungDiv.appendChild(sternBild);

      // Zufällige Namen und Beschreibungen
      const zufallsName = namenBewertung[Math.floor(Math.random() * namenBewertung.length)];
      const zufallsBeschreibung = beschreibungen[Math.floor(Math.random() * beschreibungen.length)];

      // Erstelle den Bewertungstext
      const textDiv = document.createElement('div');
      textDiv.classList.add('text');

      const nameElement = document.createElement('p');
      nameElement.classList.add('name');
      nameElement.textContent = zufallsName;

      const beschreibungElement = document.createElement('p');
      beschreibungElement.classList.add('beschreibung');
      beschreibungElement.textContent = zufallsBeschreibung;

      textDiv.appendChild(nameElement);
      textDiv.appendChild(beschreibungElement);
      bewertungDiv.appendChild(textDiv);

      return bewertungDiv;
  }

  // Funktion, die die Bewertung alle 5 Sekunden aktualisiert
  function updateBewertung() {
      const bewertungContainer = document.getElementById('card bewertung');
      bewertungContainer.innerHTML = ''; // Alte Bewertung entfernen
      const neueBewertung = generiereBewertung();
      bewertungContainer.appendChild(neueBewertung);
  }

  // Starten der zufälligen Aktualisierung
  try{updateBewertung();
  setInterval(updateBewertung, 10000); // Alle 5 Sekunden wird eine neue Bewertung angezeigt
  }catch (error) { 

  }
  
  
  const stories = [
    'assets/img/DaIsserWieder.png',
    'assets/img/Außen.png',
    'assets/img/HQ.png',
    'assets/img/Parteitag.png',
    'assets/img/Ukraine.png',
  ];
  
  try{ 
  const imgElement = document.getElementById('storyTime');
  imgElement.src = stories[Math.floor(Math.random() * stories.length)];
  }catch (error) {

  }
  