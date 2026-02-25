
//this file should be used to sort and filter the data received from the API,
//so that it can be easily used in the components.

//this allows the app to avoid having to fetch the data multiple times, and to have a single source of truth for the data.

import HogwartsHouses from "../Enums/HogwartsHouses";
//with the provided list of names and characters, this function will return the data
//of the characters that are children of the provided names
export function getChildrenInfo(children, characters) {
    if (!children || children.length === 0) {
        return [];
    }

    const childrenInfo = children.map(childName => {
        const childInfo = characters.find(character => character.fullname === childName);
        return childInfo || { fullname: childName, error: "Character data not found" };
    });

    return childrenInfo;
}



// returns all characters belonging to a specific house.
export function getCharactersFromHouse(characters, house) {

    //makes sure the house name is valid before making the request
    if (!Object.values(HogwartsHouses).includes(house)) {
        throw new Error("Invalid house name");
    }
    const filteredCharacters = characters.filter(character => character.hogwartsHouse === house);
    return filteredCharacters;

}


function getRandomEntryFromArray(array) {
    if (!array || array.length === 0) {
        throw new Error("Array is empty or undefined");
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export function getRandomCharacter(characters) {
    try {
        const character = getRandomEntryFromArray(characters);
        return character;
    }
    catch (error) {
        console.error("Error getting random character:", error);
        return null;
    }
}
export function getRandomBook(books) {
    try {
        const book = getRandomEntryFromArray(books);
        return book;
    }
    catch (error) {
        console.error("Error getting random book:", error);
        return null;
    }
}

export function getRandomSpell(spells) {
    try {
        const spell = getRandomEntryFromArray(spells);
        return spell;
    }
    catch (error) {
        console.error("Error getting random spell:", error);
        return null;
    }
}

export function getCharactersByName(characters, searchTerm) {
    if (!searchTerm) {
        return characters;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return characters.filter(character => character.fullname.toLowerCase().includes(lowerCaseSearchTerm));
}

export function getBooksByTitle(books, searchTerm) {
    if (!searchTerm) {
        return books;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return books.filter(book => book.title.toLowerCase().includes(lowerCaseSearchTerm));
}

export function getSpellsByName(spells, searchTerm) {
    if (!searchTerm) {
        return spells;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return spells.filter(spell => spell.spell.toLowerCase().includes(lowerCaseSearchTerm));
}