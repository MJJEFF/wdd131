const attractions = [
    {
        name: "Zuma Rock",
        location: "Niger State",
        image: "images/zuma-rock.jpg"
    },
    {
        name: "Olumo Rock",
        location: "Ogun State",
        image: "images/olumo-rock.jpg"
    },
    {
        name: "Lekki Conservation Centre",
        location: "Lagos",
        image: "images/lekki-conservation.jpg"
    },
    {
        name: "Yankari National Park",
        location: "Bauchi State",
        image: "images/yankari.jpg"
    }
];

const foods = [
    {
        name: "Jollof Rice",
        type: "Rice Dish",
        image: "images/jollof-rice.jpg"
    },
    {
        name: "Suya",
        type: "Meat",
        image: "images/suya.jpg"
    },
    {
        name: "Egusi Soup",
        type: "Soup",
        image: "images/egusi-soup.jpg"
    },
    {
        name: "Pounded Yam",
        type: "Staple",
        image: "images/pounded-yam.jpg"
    }
];


// =======================
// DISPLAY ATTRACTIONS
// =======================
function displayAttractions() {
    const container = document.querySelector("#attractions, #attractions-list");
    if (!container) return;

    container.innerHTML = "";

    attractions.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card", "fade-in");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <h3>${item.name}</h3>
            <p>${item.location}</p>
        `;

        container.appendChild(card);
    });

    observeCards();
}


// =======================
// DISPLAY FOODS
// =======================
function displayFoods() {
    const container = document.querySelector("#foods-list");
    if (!container) return;

    container.innerHTML = "";

    foods.forEach(food => {
        const card = document.createElement("div");
        card.classList.add("card", "fade-in");

        card.innerHTML = `
            <img src="${food.image}" alt="${food.name}" loading="lazy">
            <h3>${food.name}</h3>
            <p>${food.type}</p>
        `;

        container.appendChild(card);
    });

    observeCards();
}


// =======================
// SCROLL ANIMATION
// =======================
function observeCards() {
    const cards = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    cards.forEach(card => observer.observe(card));
}


// =======================
// LOCAL STORAGE COUNTER
// =======================
function trackVisits() {
    let visits = Number(localStorage.getItem("visits")) || 0;
    visits++;

    localStorage.setItem("visits", visits);

    console.log(`Site visits: ${visits}`);
}


// =======================
// HAMBURGER MENU
// =======================
function setupMenu() {
    const nav = document.querySelector("nav");

    const button = document.createElement("button");
    button.textContent = "☰";
    button.classList.add("menu-btn");

    document.querySelector("header").prepend(button);

    button.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
    });
}

function validateForm() {
    const form = document.querySelector("#contactForm");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        const name = document.querySelector("#name").value;

        if (name.trim().length < 2) {
            e.preventDefault();
            alert("Please enter a valid name.");
        }
    });
}

validateForm();


// =======================
// INIT
// =======================
displayAttractions();
displayFoods();
trackVisits();
setupMenu();