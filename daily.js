function newQuote() {

    let quotes = [

        "Believe in yourself and keep learning! 🌟",

        "Every expert was once a beginner. Keep going! 🚀",

        "Small progress every day creates big success! 💡",

        "Your future depends on what you learn today! 📚",

        "Consistency is the key to achieving your goals! 🔥"

    ];

    let randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById("quote").innerHTML =
    randomQuote;

}