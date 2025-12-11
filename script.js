document.addEventListener('DOMContentLoaded', () => {
    
    // THE SCHABEL-ISMS DATABASE
    // Add real quotes from your teacher inside these quotes.
    const quotes = [
        { 
            text: "Does this look like a democracy to you? It's a benevolent dictatorship.", 
            context: "During the mid-term review" 
        },
        { 
            text: "I don't grade the papers, the papers grade themselves.", 
            context: "On the topic of finals" 
        },
        { 
            text: "You call that an essay? I call it a cry for help.", 
            context: "Reviewing the draft submission" 
        },
        { 
            text: "The bell does not dismiss you. I dismiss you. The bell is just a suggestion.", 
            context: "3 minutes after class ended" 
        },
        { 
            text: "This will absolutely be on the test.", 
            context: "(It was not on the test)" 
        },
        { 
            text: "Preformative assessment is the key to the soul.", 
            context: "Every Tuesday" 
        }
    ];

    const quoteBtn = document.getElementById('new-quote-btn');
    const quoteDisplay = document.getElementById('quote-display');
    const quoteContext = document.getElementById('quote-context');

    // Function to generate random quote
    function generateQuote() {
        // Add a fade-out effect
        quoteDisplay.style.opacity = 0;
        quoteContext.style.opacity = 0;

        setTimeout(() => {
            // Get random index
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const selectedQuote = quotes[randomIndex];

            // Update text
            quoteDisplay.textContent = `"${selectedQuote.text}"`;
            quoteContext.textContent = `- ${selectedQuote.context}`;

            // Fade in
            quoteDisplay.style.opacity = 1;
            quoteContext.style.opacity = 1;
        }, 300);
    }

    // Event Listener
    quoteBtn.addEventListener('click', generateQuote);

    // Initial load
    generateQuote();

    // Console Easter Egg
    console.log("%c Welcome to PreformativeSchabel.com", "background: #2d4535; color: #ffd700; font-size: 20px; padding: 10px;");
    console.log("If you are Schabel, please don't fail us.");
});
