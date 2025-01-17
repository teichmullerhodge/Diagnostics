import { Questions, Sectors } from "./_questions.js";

/**
 * Scroll the chat container
 */
function page_scroll() {
    const chatContainer = document.querySelector('.chat-contents');
    if (chatContainer) {
        chatContainer.scrollTo({
            top: chatContainer.scrollHeight,
            behavior: 'smooth',
        });
    }
}

class chatHTML {
    static messagesList = document.querySelector(".chat-messages-list");
}



/**
 * @param {string} Q - question
 * @param {Array<object>} O - options
 * @returns {void}
 * Displays a new question and its options
 */
function new_question(Q, O) {
    const newQuestion = `
        <div class="message-content">
            <img src="bot.png" alt="Bot" class="bot-image">
            <p class="bot-question">${Q}</p>
        </div>
    `;

    const options = `
        <div class="user-messages">
            ${O.map(
                (option, index) => `
                <button class="btn-option" data-group="true" onclick="change_question(${index})">
                    ${option.Text}!
                </button>`
            ).join('')}
        </div>
        <div class="spacing"></div>
    `;

    chatHTML.messagesList.innerHTML += newQuestion + options;
}


/**
 * Keeps track of the current sector and question
 */
let sectorIndex = 0;
let questionIndex = 0;

/**
 * @param {Array<object>} sectors
 */
const sectors = [
    Questions.PreSales,
    Questions.Sales,
    Questions.SalesManagement,
    Questions.FinancesManagement,
];

/**
 * Keeps track of the current sector
 */
let globalSectorIndex = 0;
/**
 * Keeps track of the weight of the answers
 */
let preSalesWeight = null;
let salesWeight = null;
let salesManagementWeight = null;
let financesManagementWeight = null;

/**
 * Changes the sector when the last question of a sector is answered
 */
function change_sector() {

    sectorIndex++;
    console.log("Sector index changed!", sectorIndex);

    console.log(globalSectorIndex);
}

/**
 * @param {number} optionIndex
 * Changes the question and calculates weight based on the selected option
 */
function change_question(optionIndex) {

    globalSectorIndex++;
    // Get the buttons of the current group and disable them
    const buttons = document.querySelectorAll('.btn-option[data-group="true"]');
    buttons.forEach(button => button.disabled = true);

    // Get the weight of the selected answer
    const sector = sectors[sectorIndex];
    const currentQuestion = sector[questionIndex];
    const selectedAnswer = currentQuestion.Answers[optionIndex];

    // Add the weight to the total
    if(globalSectorIndex < 6){ preSalesWeight += selectedAnswer.Weight; }
    if(globalSectorIndex >= 6 && globalSectorIndex < 11){ salesWeight += selectedAnswer.Weight; }
    if(globalSectorIndex >= 11 && globalSectorIndex < 16){ salesManagementWeight += selectedAnswer.Weight; }
    if(globalSectorIndex >= 16 && globalSectorIndex < 22){ financesManagementWeight += selectedAnswer.Weight; }


    // Move to the next question
    questionIndex++;
    if (questionIndex >= sector.length) {
        change_sector();
        questionIndex = 0;
    }

    if (sectorIndex >= sectors.length) {

        // Display the results
        const resultButton = document.querySelector("#btn-result");
        resultButton.style.display = "block";
        resultButton.onclick  = display_results;

        console.log('Diagnostic completed!');
        console.log('PreSales:', preSalesWeight);
        console.log('Sales:', salesWeight);
        console.log('Sales Management:', salesManagementWeight);
        console.log('Finances Management:', financesManagementWeight);

        return;
    }

    // Display the next question
    const nextQuestion = sectors[sectorIndex][questionIndex];
    new_question(nextQuestion.Question, nextQuestion.Answers);
    page_scroll();
}

/**
 * Starts the diagnostic process
 */
function start_diagnostic() {
    const initialSector = sectors[sectorIndex];
    const currentQuestion = initialSector[questionIndex];
    const question = currentQuestion.Question;
    const answers = currentQuestion.Answers;

    new_question(question, answers);
}

function display_results() {
    const data = {
        labels: ["Pré Vendas", "Vendas", "Gestão comercial", "Gestão de finanças"],
        datasets: [{
            label: "Pontuação",
            data: [
                preSalesWeight,
                salesWeight,
                salesManagementWeight,
                financesManagementWeight,
            ],
            backgroundColor: "rgba(74, 144, 226, 0.5)",
            borderColor: "rgba(74, 144, 226, 1)",
            borderWidth: 3,
        }],
    };

    Swal.fire({
        title: "Resultado comercial",
        html: `
                <div class="result-chart" style="width: 80vw; height: 80vh;">
                    <canvas id="resultsChart" style="width: 35%; height: 35%;"></canvas>
                </div>
                `,
        width: "80vw",
        height: "80vh",
        showConfirmButton: false,
        showCancelButton: true,
        confirmButtonText: "Falar sobre diagnóstico",
        confirmButtonColor: "#4ad295",
        cancelButtonText: "Fechar",
        cancelButtonColor: "#e24a4a",
        heightAuto: false,
        willOpen: () => {
            const ctx = document.getElementById("resultsChart").getContext("2d");
            new Chart(ctx, {
                type: "radar",
                data: data,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        r: {
                            angleLines: { display: true },
                            suggestedMin: 0,
                            suggestedMax: 100,
                        },
                    },
                },
            });
        },
        showConfirmButton: true,
    });
}


document.addEventListener("DOMContentLoaded", function () {
    window.start_diagnostic = start_diagnostic;
    window.change_question = change_question;
});
