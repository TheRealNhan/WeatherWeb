const en_sentences = [
    "Bright stars twinkled in the night sky.", "Whales migrate thousands of miles yearly.",
    "She sang beautifully at the talent show.", "Elephants are known for their intelligence.",
    "The rain created a soothing melody.", "Quick thinking saved the day.",
    "Golden leaves fell gently from the trees.", "The puppy eagerly chased the ball.",
    "Adventure awaits those who seek it.", "Fresh cookies filled the room with a warm aroma.",

    "The vibrant flowers bloomed in spring.", "A gentle breeze rustled the leaves.",
    "The cat napped in a sunbeam.", "He carefully painted the landscape.",
    "The mountain peak was covered in snow.", "She wrote a heartfelt letter.",
    "The robot obeyed every command.", "The children built a sandcastle on the beach.",
    "Laughter echoed through the hall.", "The astronaut floated in space."
];
/*
const randomSentences = (sentence) => {
    const randomIndex = Math.floor(Math.random() * sentence.length); 
    return sentence[randomIndex];
}

const getRandomSentences = () => {
    const [sentence, setSentence] = useState(randomSentences(en_sentences));
    const generateNewSentence = () => { setSentence(randomSentences(en_sentences)); };
}
const type_text = document.getElementById('text-type');
var start,end;
const Typing_Test = () => {
    type_text.focus();
    start = new Date();
    document.getElementById('text-to-type').innerHTML = randomSentences(en_sentences);
    setInterval(() => {
        if (type_text.value == document.getElementById('text-to-type').innerHTML) {
            //type_text.value = '';
            end = new Date();
            const interval = setInterval(() => {
                let timetaken = (end - start) / 1000; // Chính xác theo giây

                //WPM
                let words = (type_text.value).split(' ').length;
                let wpm = (words / timetaken) * 60; // Công thức tính WPM
                 * Replace text to `\n` into `<br>` for HTML
                 * @param {*} text You need to type the text
                const replace_text = (text) => {
                    text.replace(/\n/g, "<br>");
                }
                let replace = `Bạn đã hoàn thành trong ${timetaken.toFixed(3)} giây,<br>Tốc độ của bạn là ${wpm.toFixed(3)} WPM.`;
                document.querySelector("#result").innerHTML = replace;
                clearInterval(interval);
            },1000);
        }
    })
}
*/


const quoteDisplayElement = document.getElementById('text-to-type');
const quoteInputElement = document.getElementById('text-type');
const startButton = document.getElementById('start');
const resultElement = document.getElementById('result');

let startTime;
quoteInputElement.disabled=true;
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * en_sentences.length);
    return en_sentences[randomIndex];
}
const close_type = document.getElementById('close_type');
close_type.addEventListener('click', () => {
    quoteInputElement.value = '';
    quoteInputElement.disabled = true;
    quoteDisplayElement.innerHTML = '';
    quoteDisplayElement.style.display = 'none';
    startButton.disabled = false;
    resultElement.style.display = 'none';
    close_type.style.display = 'none';
})
function startTest() {
    quoteInputElement.style.display = 'block';
    quoteDisplayElement.style.display = 'block';

    resultElement.style.display = 'none';
    const quote = getRandomQuote();
    quoteDisplayElement.innerHTML = '';
    quote.split('').forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.innerHTML = char;
        quoteDisplayElement.appendChild(charSpan);
    });
    document.getElementById('close_type').style.display = 'block';


    quoteInputElement.value = null;
    quoteInputElement.disabled = false;
    startButton.disabled = true;
    startTime = new Date();
    quoteInputElement.focus();
}

function endTest() {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;
    const typedText = quoteInputElement.value;
    const originalText = quoteDisplayElement.innerText;
    const correct = typedText === originalText;
    const accuracy = (correct ? "100%" : "0%");

    const wpm = typedText.split(' ').length / (timeTaken / 60);
    resultElement.style.display = 'block';
    resultElement.innerHTML = `<hr>Thời gian: ${timeTaken.toFixed(3)} seconds,<br>Độ chính xác: ${accuracy},<br>Tốc độ: ${wpm.toFixed(3)} WPM`;
    startButton.disabled = false;
}

startButton.addEventListener('click', startTest);

quoteInputElement.addEventListener('input', () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    const arrayValue = quoteInputElement.value.split('');
    let correct = true;
    arrayQuote.forEach((charSpan, index) => {
        const char = arrayValue[index];
        if (char == null) {
            charSpan.classList.remove('correct');
            charSpan.classList.remove('incorrect');
            correct = false;
        } else if (char === charSpan.innerText) {
            charSpan.classList.add('correct');
            charSpan.classList.remove('incorrect');
        } else {
            charSpan.classList.remove('correct');
            charSpan.classList.add('incorrect');
            correct = false;
        }
    });

    if (correct) {
        quoteInputElement.disabled = true;
        endTest();
    }
});
