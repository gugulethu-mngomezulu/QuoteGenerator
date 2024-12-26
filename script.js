const quotes = [
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do what you can with all you have, wherever you are. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
  }
  