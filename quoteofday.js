const quotes = [
  "Sales success begins with belief in your product and a passion for helping others.",
  "Every 'no' brings you one step closer to a 'yes' – keep pushing forward.",
  "In sales, your attitude determines your altitude.",
  "Sales is not about selling; it's about creating value and building relationships.",
  "Great salespeople listen twice as much as they talk.",
  "The key to unlocking sales success is understanding your customer's needs.",
  "Sales is not just a job; it's a journey to exceed expectations.",
  "Don't just meet quotas; strive to exceed them.",
  "Sales is the art of making problems disappear for your customers.",
  "Your dedication to learning and improving will be your greatest sales asset.",
  "Success in sales begins with the courage to take the first step.",
  "In sales, persistence paves the path to prosperity.",
  "Every 'no' in sales is one step closer to a 'yes.'",
  "A great salesperson turns objections into opportunities.",
  "Sales is not about selling; it's about solving problems.",
  "Your attitude in sales determines your altitude of success.",
  "The best salespeople listen more than they talk.",
  "Sales is the art of creating value where others see none.",
  "In sales, consistency is the key to building trust.",
  "Dream big, sell bigger.",
  "Every rejection is a redirection to a better sale.",
  "Sales is not just about closing deals; it's about opening relationships.",
  "To excel in sales, embrace rejection as your teacher.",
  "In sales, enthusiasm is contagious. Infect your customers with it.",
  "Sales is the bridge between a problem and its solution.",
  "The secret to sales success: Know your product, know your customer, know yourself.",
  "In sales, the journey matters as much as the destination.",
  "Great salespeople create value, not pressure.",
  "Sales is the dance of understanding and persuasion.",
  "Believe in your product, and your customers will believe in you.",
];

function displayRandomQuote() {
  // Get the length of the array of quotes.
  const numberOfQuotes = quotes.length;

  // Generate a random number between 0 and the length of the array.
  const randomNumber = Math.floor(Math.random() * numberOfQuotes);

  // Get the quote from the array at the index of the random number.
  const quote = quotes[randomNumber];

  // Display the quote on the page.
  document.getElementById("quote").innerHTML = quote;
  console.log(quote);
}
