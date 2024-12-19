function checkVowels() {
    let inputText = document.getElementById('inputText').value;
    let displayText = document.getElementById('displayText');
    let result = document.getElementById('result');
    let error = document.getElementById('error');
    displayText.textContent = '';
    result.textContent = '';
    error.textContent = '';

    if(!inputText){
        error.textContent = 'Please!! Enter some text..';
        return;
    }

    displayText.textContent = 'You entered: ' + inputText;

    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let count = 0;


    for(let i = 0; i< inputText.length; i++){
        if(vowels.includes(inputText[i])){
            count++;
        }
    }
    result.textContent = 'number of vowels are ' + count;

    document.getElementById('inputText').value = '';
}
