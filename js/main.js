window.addEventListener('load', init);

// Globals

const playing = {
  time : 60,
};

const playingTime = playing.time;



let time = playingTime;
let score = 0;   
let isPlaying;


// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'THE',
  'OF',
  'AND',
  'A',
  'TO',
  'IN',
  'IS',
  'YOU',
  'THAT',
  'IT',
  'HE',
  'WAS',
  'FOR',
  'ON',
  'ARE',
  'AS',
  'WITH',
  'HIS',
  'THEY',
  'I',
  'AT',
  'BE',
  'THIS',
  'HAVE',
  'FROM',
  'OR',
  'ONE',
  'HAD',
  'BY',
  'WORD',
  'BUT',
  'WHAT',
  'ALL',
  'WERE',
  'WE',
  'WHEN',
  'YOUR',
  'CAN',
  'SAID',
  'THERE',
  'USE',
  'AN',
  'EACH',
  'WHICH',
  'SHE',
  'DO',
  'HOW',
  'THERE',
  'IF',
  'WILL',
  'UP',
  'OTHER',
  'ABOUT',
  'OUT',
  'MANY',
  'THEN',
  'THEM',
  'THESE',
  'SO',
  'SOME',
  'HER',
  'WOULD',
  'MAKE',
  'LIKE',
  'HIM',
  'INTO',
  'TIME',
  'HAS',
  'LOOK',
  'TWO',
  'MORE',
  'RIGHT',
  'GO',
  'SEE',
  'NUMBER',
  'NO',
  'WAY',
  'COULD',
  'PEOPLE',
  'MY',
  'THAN',
  'FIRST',
  'WATER',
  'BEEN',
  'CALL',
  'WHO',
  'OIL',
  'ITS',
  'NOW',
  'FIND',
  'LONG',
  'DOWN',
  'DAY',
  'DID',
  'GET',
  'COME',
  'MADE',
  'MAY',
  'PART',
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = playingTime;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    //time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;

  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  } scoreDisplay.innerHTML = score;

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }

}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML && time > 0) {
    message.innerHTML = 'ভাভারে ভাভা &#128562;';
    return true;
  } 

  else {
    message.innerHTML = 'পারেনা কিসুনা খ্যালবার আইসে হুহ 🙄';
    return false;
  }
}




// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'মুড়ি খাও বৎস, তুমার খেল খতম  &#129315; ';
    score = score;
  }
}
