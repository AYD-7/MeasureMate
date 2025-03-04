// Getting the img element that will display company's logo
const logoLink = document.getElementById("logo")
const logoImg = logoLink.firstElementChild;

// Setting attributes for the logoLink element and passing values into them
logoLink.setAttribute("href", "index.html");
logoLink.setAttribute("title", "Home")

// Passing values into the company's logo img src and alt attributes
logoImg.src = "assets/measure-tape.svg";
logoImg.alt = "Company's Logo";

// Getting the Hamburger button and icon elements
const hamBtn = document.querySelector("#hamBtn");
const hamIcon = hamBtn.firstElementChild;


// Passing values into the hamburger img
hamIcon.src = "assets/hamburger.svg";
hamIcon.alt = "Hamburger Menu";


// Getting the submit button
convertBtn = document.getElementById("convert");

// Setting attribute and passing value
convertBtn.setAttribute("type", "submit");
// Passing text content for the convert button

convertBtn.textContent = "Convert";