const apiKey = "Mf4s5zK9PjSyUaHPS37jYA==9fUAmtoLPVcqQf6I"; // Vervang dit door je eigen API-key

document
  .getElementById("nieuwe-quote-knop")
  .addEventListener("click", haalQuoteOp);

async function haalQuoteOp() {
  try {
    const response = await fetch("/api/love");
    const data = await response.json();

    // data is een array
    const quote = data[0].quote;
    const author = data[0].author;

    document.getElementById("quote-tekst").textContent =
      `"${quote}" — ${author}`;
  } catch (error) {
    console.error(error);
    document.getElementById("quote-tekst").textContent =
      "Er ging iets mis. Probeer opnieuw.";
  }
}
