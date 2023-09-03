const quotes = [
  "Sales is a journey, not a destination. Keep pushing forward, and success will follow.",

  "In sales, every 'no' brings you closer to a 'yes.' Keep going!",

  "Sales is the art of turning rejection into motivation.",

  "The key to sales success is persistence with a dash of optimism.",

  "Sales is about creating opportunities, not waiting for them.",

  "Don't count the calls you've made, make every call count.",

  "Sales is a marathon, not a sprint. Keep your hope alive and keep running.",

  "Rejection is just a stepping stone to perfection in sales.",

  "The best salespeople are the ones who never lose hope in the face of adversity.",

  "Success in sales is not about never failing; it's about never giving up.",

  "Sales is a game of resilience. Keep your chin up and your spirits higher.",

  "Every 'no' is a 'not yet' in the world of sales.",

  "In sales, every day is a new opportunity to make a sale and reignite your hope.",

  "Believe in your product, believe in yourself, and never stop believing in the power of hope.",

  "Sales is about enthusiasm, persistence, and never-ending hope.",
];

function displayMotivationQuote() {
  // Get the length of the array of quotes.
  const numberOfQuotes = quotes.length;

  // Generate a random number between 0 and the length of the array.
  const randomNumber = Math.floor(Math.random() * numberOfQuotes);

  // Get the quote from the array at the index of the random number.
  const quote = quotes[randomNumber];

  // Display the quote on the page.
  document.getElementById("motivation").innerHTML = quote;
  console.log(quote);
}
