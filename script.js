// main.js
import { streetNames, cityNames, postalCodes, quotes, namen } from './data.js';

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
            randomDonationAmount = getRandomDonationAmount();
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