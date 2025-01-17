import { Questions, Sectors } from "./_questions.js";


class chatHTML {

    static messagesList = document.querySelector(".chat-messages-list");


}

/**
 * @param {string} Q - question
 * @param {Array<string>} O - options
 * @returns {void}
 * Change the question to the next question
 */

function new_question(Q, O) {

    const newQuestion = ` 
    
            <div class="message-content">
                <img src="bot.png" alt="Bot" class="bot-image">
                <p class="bot-question">${Q}</p>
            </div>
    `;

    const options = `
            
            <div class="message-content user">
                <button class="btn-option" onclick="change_question()">${O[0].Text}!</button>
                <button class="btn-option" onclick="change_question()">${O[1].Text}!</button>
                <button class="btn-option" onclick="change_question()">${O[2].Text}!</button>
                <button class="btn-option" onclick="change_question()">${O[3].Text}!</button>
                <button class="btn-option" onclick="change_question()">${O[4].Text}!</button>
            </div>                    
    
    `

    chatHTML.messagesList.innerHTML += newQuestion + options;

}

/**
 * keeps track of the current sector
 */
var sectorIndex = 0;

/**
 * @param {Array<object>} sectors 
 */
var sectors = [Questions.PreSales, Questions.Sales, Questions.SalesManagement, Questions.FinancesManagement];

function change_sector(){

    sectorIndex++;
    console.log('Sector index changed!', sectorIndex);
}

/**
 * keeps track of the current question
 */
var questionIndex = 0;

/**
 * @param {string} Q 
 * @returns {void}
 * Change the question to the next question
 */
function change_question() {

    questionIndex++;
    if(questionIndex > 4) {
        change_sector();
        questionIndex = 0;
    }

    const sector = sectors[sectorIndex];
    const currentQuestion = sector[questionIndex];
    const question = currentQuestion.Question;
    const answers = currentQuestion.Answers;

    new_question(question, answers);


}

function start_diagnostic() {

    const initialSector = sectors[sectorIndex];
    const currentQuestion = initialSector[questionIndex];
    console.log(currentQuestion);
    const question = currentQuestion.Question;
    const answers = currentQuestion.Answers;
    new_question(question, answers);
    //    const preSalesAnswers = preSales.Am;

}


document.addEventListener("DOMContentLoaded", function () {

    window.start_diagnostic = start_diagnostic;
    window.change_question = change_question;

});
