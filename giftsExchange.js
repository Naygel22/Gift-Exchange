  const answers = document.querySelector('.answers');
  const inputBar = document.querySelector('.inputBar');

  const startScreen = document.querySelector('#startScreen');
  const gameScreen = document.querySelector('#gameScreen');
  const drawScreen = document.querySelector('#drawScreen');
 
  const array = [];
  function handleKeyPress(event) {
    if(event.keyCode === 13){
      event.preventDefault();
      const inputText = inputBar.value; //zachowuje tekst przed wyczyszczeniem
      const newAnswer = createNames(inputText); 
	    answers.appendChild(newAnswer);
     
    array.push(inputText);
    inputBar.value = '';
    console.log(array);
    } 
  }

  inputBar.addEventListener('keydown', handleKeyPress);
 
 
  function createNames(text){
  const newName = document.createElement('div');
  newName.className = 'answerItem';

  const newNameText = document.createElement('div');
  newNameText.className = 'answerText';
  newNameText.appendChild(document.createTextNode(text));
  
  const deleteButton = document.createElement('button');
  deleteButton.className = 'deleteButton';
  deleteButton.appendChild(document.createTextNode("X"));
  deleteButton.addEventListener('click', () => {
    newName.remove(); 
    let index = array.indexOf(text);  //ma byc tekst z inputa
    array.splice(index, 1);
    
  });

  newName.appendChild(newNameText);
  newName.appendChild(deleteButton);

  return newName;
 }


 //3rd page
 const inputUserName = document.querySelector('.inputUserName');
 const nameDrawn = document.querySelector('.nameDrawn');

 const drawnName = document.createElement('p');
 drawnName.className = 'drawnNameText';
 nameDrawn.appendChild(drawnName);


 
function renderCurrentScreen(currentScreen) {
  if (currentScreen == 'START'){
    startScreen.classList.remove('hidden');
    gameScreen.classList.add('hidden');
    drawScreen.classList.add('hidden');
  }

  if (currentScreen == 'GAME'){
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    drawScreen.classList.add('hidden');
  }

  if (currentScreen == 'DRAW'){
    startScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    drawScreen.classList.remove('hidden');
  }
}

const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', () => {
  currentScreen = 'GAME';
  renderCurrentScreen('GAME');
})

const drawNamesButton = document.querySelector('.drawNamesButton');
drawNamesButton.addEventListener('click', () => {
  currentScreen = 'DRAW';
  renderCurrentScreen('DRAW');
})

const submitButton = document.querySelector('.submitButton');
submitButton.addEventListener('click', () => {
  currentScreen = 'DRAW';
  renderCurrentScreen('DRAW');

  let randomIndex = Math.floor(Math.random() * array.length);
  console.log('Losowy indeks:', randomIndex);
  let randomNameFromArray = array[randomIndex];

  if (inputUserName.value === randomNameFromArray) {
    // losowanie jeszcze raz
    randomIndex = Math.floor(Math.random() * array.length);
    randomNameFromArray = array[randomIndex];
  }
  drawnName.textContent = randomNameFromArray;
    
    array.splice(randomIndex, 1);
    console.log(array);

    if(array.length === 0) {
      const endText = document.createElement('p');
      endText.className = 'endText';
      nameDrawn.appendChild(endText);
      endText.textContent = 'Congratulations, everyone will get a present!';
    }
    drawnName.style.display = 'block';
})

const hideButton = document.querySelector('.hideButton');
hideButton.addEventListener('click', () => {
  inputUserName.value = '';
  drawnName.style.display = 'none';
})
 
 

