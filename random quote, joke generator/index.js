
var quotes = [
    "Arise,awake you can do anything. -swami vivekananda",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Arise awake,you can do anything -swami vivekananda",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "All power is within you,you can do anything.-swami",
    "arise awake.-swami",
    "That's the thing about books. They let you travel without moving your feet. - Jhumpa Lahiri",
    "The present changes the past. Looking back you do not find what you left behind. - Kiran Desai",
    "Much of what was said did not matter, and that much of what mattered could not be said. - Khaled Hosseini",
    "Think of many things. Do one. - Rabindranath Tagore",
    "Love comes like lightning, and disappears the same way. - Chitra Banerjee Divakaruni",
    "Isolation offered its own form of companionship: the reliable silence of her rooms.- Arundhati Roy",
    "You must be the change you wish to see in the world. - Mahatma Gandhi",
    "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination. - Sushant Singh Rajput",
    "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work. - APJ Abdul Kalam",
    "If you want to shine like a sun, first burn like a sun. - APJ Abdul Kalam",
    "To succeed in your mission, you must have single-minded devotion to your goal. - APJ Abdul Kalam",
    "If four things are followed - having a great aim, acquiring knowledge, hard work, and perseverance - then anything can be achieved. - APJ Abdul Kalam",
    "Climbing to the top demands strength, whether it is to the top of Mount Everest or to the top of your career. - APJ Abdul Kalam",
    "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck. - APJ Abdul Kalam",
    "To become 'unique,' the challenge is to fight the hardest battle which anyone can imagine until you reach your destination. - APJ Abdul Kalam",
    "Never stop fighting until you arrive at your destined place - the unique you. Have an aim in life, continuously acquire knowledge, work hard, and have perseverance to realise the great life. - APJ Abdul Kalam",

    "Determination is the power that sees us through all our frustrations and obstacles.It helps us in building our willpower which is the very basis of success.- APJ Abdul Kalam",
    "Dream is not that which you see while sleeping it is something that does not let you sleep. ― A.P.J.Abdul Kalam",
    "A big shot is a little shot who keeps on shooting, so keep trying.”― A.P.J.Abdul Kalam, Wings of Fire",
    "The country doesn't deserve anything less than success from us. Let us aim for success. ― A.P.J. Abdul Kalam, Wings of Fire",
    "Great dreams of great dreamers are always transcended. ― Dr.A.P.J.Abdul Kalam",
    "Be more dedicated to making solid achievements than in running after swift but synthetic happiness,” ― A.P.J.Abdul Kalam, Wings of Fire",
    "To succeed in life and achieve results, you must understand and master three mighty forces— desire, belief, and expectation. ― A.P.J. Abdul Kalam, Wings of Fire",
    "I reminded myself that the best way to win was to not need to win.The best performances are accomplished when you are relaxed and free of doubt.I” ― A.P.J.Abdul Kalam, Wings of Fire",
    "it does not matter how large or small your sphere of activity is, what counts finally is the commitment that you bring to the job that has been ordained for you in this life. ― A.P.J.Abdul Kalam, My Journey: Transforming Dreams into Actions",
    "Great teachers emanate out of knowledge, passion, and compassion. - A.P.J.Abdul Kalam",
    "Creativity is the key to success in the future, and primary education is where teachers can bring creativity to children at that level. - A.P.J.Abdul Kalam",
];

var Jokes = [
    "Why did the teacher wear sunglasses inside? Her students were so bright!",
    "How do billboards talk? Sign language.",
    "What do Olympic sprinters eat before a race? Nothing. They fast",
    "Why don't scientists trust atoms",
    "What do kids play when their mom is using the phoneBored games1.",
    "What do you call an ant who fights crimeA vigilANTe1.",
    "Why are snails slow ? Because they're carrying a house on their back1.",
    "What's the smartest insect ? A spelling bee! 🐝",
    "What does a storm cloud wear under his raincoatThunderwear1.",
    "What is fast, loud, and crunchyA rocket chip1.",
    "How does the ocean say hi ? It waves! 👋",
    "What do you call a couple of chimpanzees sharing an Amazon accountPRIME - mates1.",
    "Why did the teddy bear say no to dessert ? Because she was stuffed1.",
    "Why did the soccer player take so long to eat dinner ? Because he thought he couldn't use his hands—it’s soccer, not handball! ⚽",
    "Name the kind of tree you can hold in your hand ? A palm tree! 🌴",
    "What do birds give out on Halloween ? Tweets! 🐦",

];


function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function generateRandomQuote() {
    var quoteTextElement = document.getElementById('quote-text');
    var randomQuote = getRandomQuote();
    quoteTextElement.textContent = randomQuote;
}


function getRandomJokes() {
    var randomIndex = Math.floor(Math.random() * Jokes.length);
    return Jokes[randomIndex];
}

function generateRandomJokes() {
    var JokeTextElement = document.getElementById('Joke-text');
    var randomJoke = getRandomJokes();
    JokeTextElement.textContent = randomJoke;
}
