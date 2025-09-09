import { React } from 'react';
import { ReactDOM } from 'react-dom';
import { createRoot } from 'react-dom/client';

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
const randomSentences = (sentences) => {
    const randomIndex = Math.floor(Math.random() * sentences.length); 
    return sentences[randomIndex];
}
const getRandomSentences = () => {
    const [sentence, setSentence] = useState(randomSentences(en_sentences));
    const generateNewSentence = () => { setSentence(randomSentences(en_sentences)); };
}
const type_text = document.getElementById('text-type');
let start,end;
const Typing_Test = () => {
    if (type_text.value) {
        type_text.focus();
        start = new Date();
        type_text.value = getRandomSentences(en_sentences);
        if (type_text.value === getRandomSentences(en_sentences)) {
            document.getElementById('button-start').addEventListener('click', () => {
                document.getElementById('button-start').disabled;
                document.getElementById('user-input').value = '';
                document.getElementById('result').innerText = '';
                end = new Date();
                const interval = setInterval(() => {
                    let timetaken = (end - start) / 1000; // Chính xác theo giây

                    //WPM
                    let words = (type_text.value).split(' ').length;
                    let wpm = ((type_text.value) / timetaken) * 60; // Công thức tính WPM
                    return (
                        <p id="result">
                            Bạn đã hoàn thành trong {timetaken.toFixed(3)} giây, 
                            Tốc độ của bạn là {wpm.toFixed(3)} WPM.
                        </p>
                    );
                    clearInterval(interval);
                },100);
            })
        }
    } else {
        return (
            <p id="result">Hãy nhập vào để bắt đầu</p>
        );
    }
}
ReactDOM.createRoot(<Typing_Test />, document.getElementById('typing-test'));
export default Typing_Test;