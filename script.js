const quizData = [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlink Tool Markup Language"], answer: "Hyper Text Markup Language", hint: "Used to create the structure of web pages." },
    { question: "Which programming language is primarily used for web development?", options: ["Python", "JavaScript", "C++", "Swift"], answer: "JavaScript", hint: "Can be used both client-side and server-side." },
    { question: "What is the correct HTML element for inserting a line break?", options: ["<break>", "<br>", "<lb>", "<line>"], answer: "<br>", hint: "A short, two-letter tag." },
    { question: "Which CSS property controls text size?", options: ["font-size", "text-style", "font-weight", "text-size"], answer: "font-size", hint: "The property name begins with 'font-'." },
    { question: "How do you write 'Hello World' in an alert box in JavaScript?", options: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');", "msgBox('Hello World');"], answer: "alert('Hello World');", hint: "Use the 'alert' function in JavaScript." },
    { question: "Which symbol is used for comments in CSS?", options: ["//", "<!-- -->", "/* */", "#"], answer: "/* */", hint: "CSS comments are wrapped in '/*' and '*/' symbols." },
    { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets", hint: "A way to style HTML." },
    { question: "Which HTML tag is used to define an internal stylesheet?", options: ["<css>", "<style>", "<script>", "<link>"], answer: "<style>", hint: "Used to embed CSS directly in HTML." },
    { question: "How do you create a function in JavaScript?", options: ["function = myFunction()", "function:myFunction()", "function myFunction()", "create.myFunction()"], answer: "function myFunction()", hint: "Starts with 'function' keyword." },
    { question: "Which HTML attribute is used to define inline styles?", options: ["class", "style", "font", "styles"], answer: "style", hint: "The attribute name itself is the answer." },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter", hint: "Known for its Great Red Spot." },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4", hint: "Basic arithmetic." },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "Jane Austen"], answer: "Harper Lee", hint: "A classic American novel author." },
    { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "500,000 km/s"], answer: "300,000 km/s", hint: "Around 300,000 kilometers per second." },
    { question: "Who is known as the 'Father of Computers'?", options: ["Charles Babbage", "Alan Turing", "Tim Berners-Lee", "Bill Gates"], answer: "Charles Babbage", hint: "An early pioneer in mechanical computing." }
];


const quizContainer = document.getElementById("quiz-container");
let score = 0;

function loadQuiz() {
    quizContainer.innerHTML = ""; // Clear previous content

    quizData.forEach((item, index) => {
        const questionElement = document.createElement("h5");
        questionElement.innerText = `${index + 1}. ${item.question}`;
        questionElement.classList.add("mt-4");
        quizContainer.appendChild(questionElement);

        // Hint Button
        const hintButton = document.createElement("span");
        hintButton.innerText = "Show Hint";
        hintButton.classList.add("hint");
        hintButton.addEventListener("click", () => alert(item.hint));
        questionElement.appendChild(hintButton);

        // Options
        item.options.forEach(option => {
            const optionElement = document.createElement("div");
            optionElement.classList.add("form-check");

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${index}`;
            input.value = option;
            input.classList.add("form-check-input");

            // Check answer on selection
            input.addEventListener("change", () => {
                score += option === item.answer ? 1 : -1;
                updateScoreDisplay();
            });

            const label = document.createElement("label");
            label.classList.add("form-check-label");
            label.innerText = option;

            optionElement.appendChild(input);
            optionElement.appendChild(label);
            quizContainer.appendChild(optionElement);
        });
    });
    updateScoreDisplay();
}

function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score-display");
    scoreDisplay.innerText = `Score: ${score}`;
    scoreDisplay.classList.add("animate__animated", "animate__pulse"); // Animation on score update
    setTimeout(() => scoreDisplay.classList.remove("animate__animated", "animate__pulse"), 300);
}

document.getElementById("submit-btn").addEventListener("click", () => {
    document.getElementById("result").innerText = `You scored ${score} out of ${quizData.length}`;
});

loadQuiz();
