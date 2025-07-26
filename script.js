const quotes = [
  "🌟 Believe in yourself!",
  "🚀 The best time to start was yesterday. The next best is now.",
  "😊 Keep going. Everything you need will come to you.",
  "💡 Code is like humor. When you have to explain it, it’s bad.",
  "🎯 Stay focused and never give up!",
  "📘 Learning never exhausts the mind."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
