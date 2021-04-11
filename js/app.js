let randomNumber = Math.floor((Math.random() * 100) + 1);
let userGuessHistory = [];

// TIL there are no enums in JS so...
// I will use a map
const feedbackMessages = new Map();
feedbackMessages.set('High', 'Yo, too high');
feedbackMessages.set('Low', 'Yo, too low');
feedbackMessages.set('Win', 'Yo, You win!');

document.getElementById('check').addEventListener('click', function() {
    let userGuess = document.getElementById('user-guess').value;
    userGuessHistory.unshift(userGuess);
    displayFeedback(userGuess);
    displayUserGuessHistory();
});

document.getElementById('restart').addEventListener('click', function() {
    document.getElementById('user-guess').value = 0;
    userGuessHistory = [];
    document.getElementById('history').innerHTML = '';
    document.getElementById('message').innerHTML= '';
});

function displayFeedback(userGuess){
    let messageContainer = document.getElementById('message');
    if(messageContainer.hasChildNodes()){
        messageContainer.innerHTML = '';
    }

    if(userGuess > randomNumber){
        messageContainer = messageContainer.appendChild(createFeedback(feedbackMessages.get('High'), 'h3'));
    } else if(userGuess < randomNumber) {
        messageContainer = messageContainer.appendChild(createFeedback(feedbackMessages.get('Low'), 'h3'));
    } else {
        messageContainer = messageContainer.appendChild(createFeedback(feedbackMessages.get('Win'), 'h3'));
    }
}

function displayUserGuessHistory(){
    let userHistory = document.getElementById('history');
    if(userHistory.hasChildNodes()){
        userHistory.innerHTML = '';
    }

    for(let guess of userGuessHistory){
        userHistory.appendChild(createFeedback(guess, 'li'));
    }
}

// function createUserFeedback(feedback){
//     let message = document.createElement('h3');
//     message.innerText = feedback;
    
//     return message;
// }

// function createHistoryElement(guess){
//     let message = document.createElement('li');
//     message.innerText = guess;
    
//     return message;
// }

// The two functions above where doing the same thing... more abstraction! :)
function createFeedback(feedback, element){
    let message = document.createElement(element);
    message.innerText = feedback;
    
    return message;
}