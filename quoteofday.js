const quotes = [
  "Together, we achieve more than we ever could alone.",
  "Innovate, collaborate, and elevate – our team's mantra.",
  "Every challenge is an opportunity to grow and excel.",
  "Your dedication fuels our success story.",
  "Teamwork makes the dream work.",
  "Empowered employees drive exceptional results.",
  "Strive for excellence, and success will follow.",
  "Success is the sum of small efforts repeated daily.",
  "Embrace change, for it leads to progress.",
  "Our team's potential is limitless.",
  "Teamwork makes the dream work.",
  "Success is a journey, not a destination.",
  "Embrace challenges; they are opportunities in disguise.",
  "Hard work and dedication lead to success.",
  "Innovation begins with you.",
  "Your passion fuels our progress.",
  "Together, we can achieve greatness.",
  "Every day is a chance to make a difference.",
  "Strive for excellence in everything you do.",
  "Our strength lies in our unity.",
  "Dream big, work hard, and never give up.",
  "The only way to do great work is to love what you do.",
  "Your commitment is the key to our collective success.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Believe in yourself, and anything is possible.",
  "Success is a journey, not a destination. Keep moving forward with determination.",
  "Together, we can achieve greatness.",
  "Innovation starts with imagination and teamwork.",
  "Your dedication today shapes our success tomorrow.",
  "Embrace challenges as opportunities for growth.",
  "Every small step you take brings us closer to our goals.",
  "Hard work and a positive attitude are the keys to unlocking your potential.",
  "A motivated team can move mountains.",
  "Your passion fuels our progress.",
  "Dream big, work hard, and make it happen.",
  "Excellence is not a skill; it's an attitude.",
  "Success is built on the foundation of persistence.",
  "Believe in yourself, and you'll inspire others.",
  "Teamwork makes the dream work.",
  "Your efforts today create a brighter future for all of us.",
  "Great things never come from comfort zones.",
  "Challenges are opportunities in disguise.",
  "Stay committed to your goals, and success will follow.",
  "The only limit to your success is your imagination.",
  "Together, we can achieve the extraordinary.",
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
