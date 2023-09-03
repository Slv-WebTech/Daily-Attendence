const quotes = [
  "In every setback lies the opportunity for a comeback.",
  "Keep your dreams alive, and your determination stronger.",
  "Success is born from resilience, not perfection.",
  "The darkest hour has only sixty minutes.",
  "Every challenge you face today is a stepping stone to a brighter tomorrow.",
  "Embrace difficulties as stepping stones to success.",
  "Your determination is the compass that guides you through the storm.",
  "A setback is just a setup for a comeback.",
  "The road to success is often under construction; keep moving forward.",
  "Hope fuels the fire of perseverance. Keep it burning.",
  "In every challenge lies an opportunity; keep your hope alive.",
  "When you feel like giving up, remember why you started.",
  "Hope is the fuel that keeps us moving forward, even in the toughest of times.",
  "Stay strong, stay hopeful, and success will find its way to you.",
  "Every setback is a setup for a comeback; never lose hope.",
  "Hardships may bend you, but they can't break your spirit.",
  "Embrace difficulties as stepping stones to your dreams; hope will guide you.",
  "The darkest hour has only sixty minutes; hold onto hope, and the dawn will come.",
  "Your determination is the key to unlocking the door of opportunity.",
  "In the world of challenges, hope is your greatest asset.",
  "Keep your head up and your heart full of hope; great things await.",
  "Difficulties are temporary; your resilience is permanent.",
  "Hope is the light that shines through the darkest clouds of adversity.",
  "Every day is a new chance to persevere and achieve your goals.",
  "Believe in yourself, keep pushing forward, and success will be yours.",
  "The road to success is paved with determination and hope.",
  "Stay positive, stay hopeful, and watch the miracles unfold.",
  "Obstacles are opportunities in disguise; don't lose sight of your dreams.",
  "Hope is the compass that leads us through the storms of life.",
  "No matter how tough it gets, remember that brighter days are ahead.",
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
