let dictionary = {};

//save word
document.getElementById(`save`).onclick = function() {
    let newWord = document.getElementById(`word`).value.trim().toLowerCase();
    if (newWord !== ''){
        dictionary[newWord] = true;  
        //window.alert('The new word has been successfully saved!✔')
        document.getElementById('word').value = '';
    } else {
        window.alert('Please enter a valid text!!')

    }
    console.log(dictionary);
}

//search word
document.getElementById(`search`).onclick = function() {
    let searchedWord = document.getElementById(`word`).value.trim().toLowerCase();
    if (searchedWord !== '') {
        if (dictionary[searchedWord]) {
            window.alert('The searched word is in the dictionary!');
        } else {
            window.alert('The word "' + searchedWord + '" was not found');
        }
        document.getElementById('word').value = '';
    } else {
        window.alert('Insert a word to search for')
    }
}
