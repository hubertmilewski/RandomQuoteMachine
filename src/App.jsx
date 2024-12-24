import { useState } from 'react';
import './index.css';

function App() {
  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      bgBox: "bg-blue-500",
      bg: "bg-blue-800",
      textColor: "text-blue-900",
      hoverTextColor: "hover:bg-blue-700",
    },
    {
      text: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
      bgBox: "bg-gray-500",
      bg: "bg-gray-800",
      textColor: "text-gray-900",
      hoverTextColor: "hover:bg-gray-700",
    },
    {
      text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
      author: "Ralph Waldo Emerson",
      bgBox: "bg-green-500",
      bg: "bg-green-800",
      textColor: "text-green-900",
      hoverTextColor: "hover:bg-green-700",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      bgBox: "bg-yellow-500",
      bg: "bg-yellow-800",
      textColor: "text-yellow-900",
      hoverTextColor: "hover:bg-yellow-700",
    },
    {
      text: "It is never too late to be what you might have been.",
      author: "George Eliot",
      bgBox: "bg-red-500",
      bg: "bg-red-800",
      textColor: "text-red-900",
      hoverTextColor: "hover:bg-red-700",
    },
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getNewQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  return (
    <div className={`${quote.bg} flex items-center justify-center h-screen`}>
      <div id="quote-box" className={`bg-white w-[90%] md:w-[60%] xl:w-[30%] px-10 py-8 rounded-lg shadow-lg ${quote.textColor} text-center`}>
        <div>
          <p id="text" className="text-2xl">„{quote.text}”</p>
        </div>
        <div>
          <h1 id="author" className="grid justify-items-end text-xl my-4">- {quote.author}</h1>
        </div>
        <div className="flex items-center justify-center mt-4">
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.text} - ${quote.author}`} id="tweet-quote" target="_blank" rel="noopener noreferrer"> <i className={`fa-brands fa-twitter md:text-lg text-base text-white py-3 px-6 rounded-md cursor-pointer ${quote.bg} ${quote.hoverTextColor} duration-300`}></i> </a>
          <button id="new-quote" className={`text-white md:text-lg text-base font-medium py-3 px-6 ml-2 rounded-md ${quote.bg} ${quote.hoverTextColor} duration-300`}onClick={getNewQuote}>New quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
