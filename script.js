const apiKey = "Mf4s5zK9PjSyUaHPS37jYA==9fUAmtoLPVcqQf6I"; // Vervang dit door je eigen API-key

document
  .getElementById("nieuwe-quote-knop")
  .addEventListener("click", haalQuoteOp);

function haalQuoteOp() {
  fetch("https://api.api-ninjas.com/v2/randomquotes?categories=love", {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.quote) {
        document.getElementById("quote-tekst").textContent = `"${data.quote}"`;
      } else {
        document.getElementById("quote-tekst").textContent =
          "Geen quote gevonden. Probeer het later opnieuw!";
      }
    })
    .catch((error) => {
      console.error("Fout bij het ophalen van de quote:", error);
      document.getElementById("quote-tekst").textContent =
        "Er ging iets mis met het ophalen van de quote.";
    });
}
