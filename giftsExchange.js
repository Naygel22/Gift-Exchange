  const answers = document.querySelector('.answers');
  const inputBar = document.querySelector('.inputBar');
 
  const array = [];
  function handleKeyPress(event) {
    if(event.keyCode === 13){
      event.preventDefault();
      const newAnswer = createNames(inputBar.value); 
	  answers.appendChild(newAnswer);
     

    array.push(newAnswer);
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
    
  });

  newName.appendChild(newNameText);
  newName.appendChild(deleteButton);

  return newName;

 }

