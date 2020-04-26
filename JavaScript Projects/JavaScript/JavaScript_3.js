function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    document.write(characterType + " is the " + character.innerHTML + " conference");
}