// script.js
const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generateButton");

// Function to fetch a random quote from the Quotes API
async function fetchRandomQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error("Error fetching quote:", error);
        return "Failed to fetch quote";
    }
}

// Function to display a new random quote
async function displayRandomQuote() {
    const quote = await fetchRandomQuote();
    quoteElement.textContent = quote;
}

// Event listener for the generate button
generateButton.addEventListener("click", displayRandomQuote);

// Initial display of a random quote when the page loads
displayRandomQuote();
