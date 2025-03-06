// Getting the img element that will display company's logo
const logoLink = document.getElementById("logo");
const logoImg = logoLink.firstElementChild;

// Setting attributes for the logoLink element and passing values into them
logoLink.setAttribute("href", "index.html");
logoLink.setAttribute("title", "Home");

// Passing values into the company's logo img src and alt attributes
logoImg.src = "assets/measure-tape.svg";
logoImg.alt = "Company's Logo";

// Getting the Hamburger button and icon elements
const hamBtn = document.querySelector("#hamBtn");
const hamIcon = hamBtn.firstElementChild;

// Styling hamburger button
hamBtn.style.cursor = "pointer";

// Passing values into the hamburger img
hamIcon.src = "assets/hamburger.svg";
hamIcon.alt = "Hamburger Menu";

// Getting the submit button
const convertBtn = document.getElementById("convert");

// Setting attribute and passing value
convertBtn.setAttribute("type", "button");
// Passing text content for the convert button
convertBtn.textContent = "Convert";

// Getting the input and Output
const input = document.getElementById("input");
const output = document.getElementById("output");

// Creating an Array of units the user can choose to convert from or to
const units = [
    "Kilometer (km)", "Hectometer (hm)", "Decameter (dam)", "Meter (m)", "Decimeter (dm)", "Centimeter (cm)", "Millimeter (mm)", "Micrometer (µm)", "Nanometer (nm)", "Picometer (pm)", "Mile (mi)", "Yard (yd)", "Foot (ft)", "Inch (in)"
];

const from = document.getElementById("from");
const to = document.getElementById("to");

// Populating the select fields
 units.forEach(function (unit) {
    const option = document.createElement("option");
    option.value = unit;
    option.textContent = unit;
    from.appendChild(option);
});
units.forEach(function (unit) {
    const option = document.createElement("option");
    option.value = unit;
    option.textContent = unit;
    to.appendChild(option);
});

// Conversion map
const unitConversions = {
    "Kilometer (km)": 1000,
    "Hectometer (hm)": 100,
    "Decameter (dam)": 10,
    "Meter (m)": 1,
    "Decimeter (dm)": 0.1,
    "Centimeter (cm)": 0.01,
    "Millimeter (mm)": 0.001,
    "Micrometer (µm)": 0.000001,
    "Nanometer (nm)": 0.000000001,
    "Picometer (pm)": 0.000000000001,
    "Mile (mi)": 1609.34,
    "Yard (yd)": 0.9144,
    "Foot (ft)": 0.3048,
    "Inch (in)": 0.0254
};

// Function to convert units
function convertUnits(inputValue, fromUnit, toUnit) {
    if (!unitConversions[fromUnit] || !unitConversions[toUnit]) {
        return "Invalid unit(s)";
    }
    const meters = inputValue * unitConversions[fromUnit];
    const result = meters / unitConversions[toUnit];
    return result;
}

// Function to handle form validation and conversion
function validateForm() {
    // Getting select values and input value INSIDE the function
    const fromUnit = from.value;
    const toUnit = to.value;
    const inputValue = parseFloat(input.value);

    // Ensuring the user cannot submit an empty form
    if (input.value.trim() === "") {
        output.textContent = "Input cannot be empty";
        output.classList.add("output-error");
        return;
    } else {
        output.textContent = "";
        output.classList.remove("output-error");
    }

    // Ensuring the user cannot convert from the same unit
    if (fromUnit === toUnit) {
        output.textContent = "Cannot convert from the same unit";
        output.classList.add("output-error");
        return;
    }

    // Perform conversion
    const conversionResult = convertUnits(inputValue, fromUnit, toUnit);

    // Display result
    if (typeof conversionResult === "number") {
        output.innerHTML = `<span style="color: green">${inputValue} ${fromUnit}</span> is <span style="color: green">${conversionResult} ${toUnit}</span>`;
        output.classList.add("output-success");
    } else {
        output.textContent = conversionResult; // Display error message
        output.classList.add("output-error");
    }
}

convertBtn.addEventListener("click", validateForm);