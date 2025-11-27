// const quotes = ['The best way to get started is to quit talking and begin doing. - Walt Disney',
// '“Success usually comes to those who are too busy to be looking for it.” – Henry David Thoreau',
// '“Shortcut to success? Still searching… if I find it, I’ll write a book about it.” - Ifra Akhter',
// '“The only way to do great work is to love what you do.” – Steve Jobs',
// '“It always seems impossible until it’s done.” – Nelson Mandela',
// '“I’m on the road to success… the traffic is just a little heavy.” - Ifra Akhter',
// '“What you get by achieving your goals is not as important as what you become by achieving your goals.” – Zig Ziglar',
// '“Happiness is not something ready-made. It comes from your own actions.” – Dalai Lama',
// '“Don’t watch the clock; do what it does. Keep going.” – Sam Levenson',
// '“The future belongs to those who believe in the beauty of their dreams.” – Eleanor Roosevelt',
// '“In the middle of every difficulty lies opportunity.” – Albert Einstein',
// '“Act as if what you do makes a difference. It does.” – William James',
// '“I could’ve worked today too… but even success enjoys a little suspense.”- Ifra Akhter',

// ]

// const quoteText = document.getElementById('quotes'); // DOM - document object model
// const btn = document.getElementById('generate');

// // Event = special hote hain is liye iska naam event rakha .special type of code hai jab user 
// // click karega to event kaam karega .

// btn.onclick = ()=>{
//     let randomQuote =Math.floor(Math.random() * quotes.length); // floor isko integer banane ke liye 12345.
//     quoteText.textContent = quotes[randomQuote];
// }


const quotes = [
'The best way to get started is to quit talking and begin doing. - Walt Disney 🚀',
'Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau 💼✨',
'Shortcut to success? Still searching… if I find it, I’ll write a book about it. - Ifra Akhter 📘😄',
'The only way to do great work is to love what you do. – Steve Jobs ❤️💡',
'It always seems impossible until it’s done. – Nelson Mandela 🌟',
'I’m on the road to success… the traffic is just a little heavy. - Ifra Akhter 🚗💨😆',
'What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar 🌱🏆',
'Happiness is not something ready-made. It comes from your own actions. – Dalai Lama 😊💛',
'Don’t watch the clock; do what it does. Keep going. – Sam Levenson ⏳➡️',
'The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt 🌈💭',
'In the middle of every difficulty lies opportunity. – Albert Einstein 🔍✨',
'Act as if what you do makes a difference. It does. – William James 🌟🙌',
'I could’ve worked today too… but even success enjoys a little suspense. - Ifra Akhter 😉🎭',
]

const quoteText = document.getElementById('quotes');
const btn = document.getElementById('generate');

btn.onclick = ()=> {
    let randomQuote = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomQuote];
}
