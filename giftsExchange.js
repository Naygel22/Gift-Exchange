  const answers = document.querySelector('.answers');
  const inputBar = document.querySelector('.inputBar');
 
  const array = [];
  function handleKeyPress(event) {
    if(event.keyCode === 13){
      event.preventDefault();
      const inputText = inputBar.value; //zachowuje tekst przed wyczyszczeniem
      const newAnswer = createNames(inputText); 
	    answers.appendChild(newAnswer);
     
    array.push(inputText);
    inputBar.value = '';
    localStorage.setItem("array", JSON.stringify(array));
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
 const submitButton = document.querySelector('.submitButton');

 const drawnName = document.createElement('p');
 drawnName.className = 'drawnNameText';
 nameDrawn.appendChild(drawnName);

// Kod dla trzeciej strony
console.log('Przed odczytem z localStorage');
const copiedArray = JSON.parse(localStorage.getItem('array'));
console.log('Odczytano z localStorage:', copiedArray);

let randomIndex = Math.floor(Math.random() * copiedArray.length);
console.log('Losowy indeks:', randomIndex);

submitButton.addEventListener('click', () => {
  console.log('Przycisk został kliknięty');
  drawnName.textContent = copiedArray[randomIndex];
});


 
 

 
 

