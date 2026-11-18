
const starsContainer = document.getElementById("stars");

for (let i = 0; i < 90; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.textContent = "✦";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.fontSize = (Math.random() * 8 + 3) + "px";
    star.style.animationDelay = Math.random() * 4 + "s";
    starsContainer.appendChild(star);
}

const enterButton = document.getElementById("enterGarden");

enterButton.addEventListener("click", () => {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("garden").classList.remove("hidden");

    createGarden();
});

let gardenCreated = false;

function createGarden() {
    if (gardenCreated) return;

    gardenCreated = true;

    createGardenStars();
    createFireflies();
    createFlowers();
}

function createGardenStars() {
    const container = document.getElementById("gardenStars");

    for (let i = 0; i < 65; i++) {
        const star = document.createElement("span");

        star.className = "star";
        star.textContent = "✦";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 70 + "%";
        star.style.fontSize = (Math.random() * 7 + 3) + "px";
        star.style.animationDelay = Math.random() * 4 + "s";

        container.appendChild(star);
    }
}

function createFireflies() {
    const container = document.getElementById("fireflies");

    for (let i = 0; i < 18; i++) {
        const fly = document.createElement("span");

        fly.className = "firefly";
        fly.style.left = Math.random() * 100 + "%";
        fly.style.top = (30 + Math.random() * 60) + "%";
        fly.style.animationDelay = Math.random() * 5 + "s";
        fly.style.animationDuration = (4 + Math.random() * 4) + "s";

        container.appendChild(fly);
    }
}

const flowerMessages = [
    {
        title: "Il caso",
        text: "Tra tutte le persone che avrei potuto incontrare e tutti i posti in cui avrei potuto trovarmi, sono davvero felice che, in qualche modo, le nostre strade si siano incrociate. A volte penso a quanto sia strano il caso, e a quanto sia bello che mi abbia portato proprio a te."
    },
    {
        title: "La curiosità",
        text: "Una delle cose che preferisco di te è che non mi stanco mai di scoprirti. Mi piace ascoltarti, conoscere i tuoi pensieri, capire il tuo modo di vedere le cose. E più ti conosco, più mi viene voglia di sapere cosa si nasconde dietro ogni tuo piccolo dettaglio."
    },
    {
        title: "Il sorriso",
        text: "Mi piace il tuo sorriso, il modo in cui ridi e tutte quelle piccole espressioni che fai. Sono cose semplici, ma che ogni volta riescono a strapparmi un sorriso."
    },
    {
        title: "I momenti insieme",
        text: "Mi piace stare con te, condividere il mio tempo e fare cose insieme. Anche quando non facciamo niente di speciale, riesci a rendere belli quei momenti."
    },
    {
        title: "La distanza",
        text: "Anche quando non siamo insieme, mi fa piacere sentirti, raccontarti la mia giornata e sapere qualcosa della tua. A volte basta anche solo un tuo messaggio per migliorare la giornata."
    },
    {
        title: "Il presente",
        text: "Mi piace quello che stiamo vivendo, le cose che condividiamo e il modo in cui, giorno dopo giorno, stiamo costruendo qualcosa di nostro. Non voglio avere fretta, voglio semplicemente godermi tutto questo insieme a te."
    },
    {
        title: "Il futuro",
        text: "Non so cosa ci riserverà il futuro, ma so che mi piacerebbe continuare a viverlo con te. Vorrei collezionare ancora tanti momenti, scoprire posti nuovi, ridere insieme e avere sempre qualcosa di bello da aspettare."
    }
];

function createFlowers() {
    const container = document.getElementById("flowerField");

    const positions = [
        { x: "25%", y: "0%",  size: 173 },
        { x: "0%",  y: "25%", size: 207 },
        { x: "18%", y: "45%", size: 184 },
        { x: "0%",  y: "65%", size: 224 },
        { x: "72%", y: "15%", size: 178 },
        { x: "83%", y: "30%", size: 201 },
        { x: "90%", y: "5%",  size: 184 }
    ];

    for (let i = 0; i < 7; i++) {
        const flower = document.createElement("img");

        flower.src = `flower-${i + 1}.png`;
        flower.className = "flower-image";
        flower.style.zIndex = 100 - Number(positions[i].y.replace("%", ""));
        flower.alt = `Fiore ${i + 1}`;
        flower.addEventListener("click", () => {
            const message = flowerMessages[i];

            if (!flower.classList.contains("discovered")) {
                flower.classList.add("discovered");

                const flowersFound = document.getElementById("flowersFound");
                flowersFound.textContent = document.querySelectorAll(".flower-image.discovered").length;
            
                if (document.querySelectorAll(".flower-image.discovered").length === 7) {
                    document.getElementById("openFinalModal").classList.remove("hidden");
                }
            }


            document.getElementById("modalTitle").textContent = message.title;
            document.getElementById("modalText").textContent = message.text;

            document.getElementById("flowerModal").classList.remove("hidden");
        });
        flower.style.setProperty("--x", positions[i].x);
        flower.style.setProperty("--y", positions[i].y);
        flower.style.setProperty("--size", positions[i].size + "px");

        container.appendChild(flower);
    }
}

document.getElementById("closeFlowerModal").addEventListener("click", () => {
    document.getElementById("flowerModal").classList.add("hidden");
});

document.getElementById("flowerModal").addEventListener("click", (event) => {
    if (event.target.id === "flowerModal") {
        document.getElementById("flowerModal").classList.add("hidden");
    }
});

document.getElementById("closeFinalModal").addEventListener("click", () => {
    document.getElementById("finalModal").classList.add("hidden");
});

document.getElementById("openFinalModal").addEventListener("click", () => {
    document.getElementById("flowerModal").classList.add("hidden");
    document.getElementById("finalModal").classList.remove("hidden");
});