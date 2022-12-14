const rootDiv = document.getElementById('root_div');

const getCharacters = async () => {
    try {
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const charactersList = await res.json();
        showCharacters(charactersList);
    } catch (error) {

    } 
};

const makeElement = (tagName, className) => {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element
};

const showCharacters = (resposeObj) => {

    const { results } = resposeObj;

        for( let i = 0; i < results.length; i++){
        const { name , image , gender} = results[i];


        const characterCard = makeElement('div','card');

        const characterName = makeElement('h2','character-name');

        const characterImage = makeElement('img','character-image');

        const characterGender = makeElement('h3','character-gender')


        characterName.textContent = name;
        
        characterImage.src = image;
        characterGender.textContent = gender;
        characterCard.appendChild(character-name);
        characterCard.appendChild(character-image);
        characterCard.appendChild(character-gender);
        rootDiv.appendChild(card);

    }


}


