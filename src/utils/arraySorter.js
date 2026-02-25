
//this file should be used to sort and filter the data received from the API,
//so that it can be easily used in the components.

//this allows the app to avoid having to fetch the data multiple times, and to have a single source of truth for the data.

// import HogwartsHouses from "../Enums/HogwartsHouses";
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
    return characters.filter(character => character.hogwartsHouse === house);
}


function getRandomEntryFromArray(array) {
    if (!array || array.length === 0) {
        throw new Error("Array is empty or undefined");
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return [array[randomIndex]];
}

export function getRandomCharacter(characters) {
    try {
        return getRandomEntryFromArray(characters);
    }
    catch (error) {
        console.error("Error getting random character:", error);
        return [];
    }
}
export function getRandomBook(books) {
    try {
        const book = getRandomEntryFromArray(books);
        return book;
    }
    catch (error) {
        console.error("Error getting random book:", error);
        return [];
    }
}

export function getRandomSpell(spells) {
    try {
        return getRandomEntryFromArray(spells);
    }
    catch (error) {
        console.error("Error getting random spell:", error);
        return [];
    }
}

export function getCharactersByName(characters, searchTerm) {
    if (!searchTerm) {
        return characters;
    }
    if (searchTerm == "RANDOM") {
        return getRandomCharacter(characters);
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return characters.filter(character => character.fullname.toLowerCase().includes(lowerCaseSearchTerm));
}

export function getBooksByTitle(books, searchTerm) {
    if (!searchTerm) {
        return books;
    }
    if (searchTerm == "RANDOM") {
        return getRandomBook(books);
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return books.filter(book => book.title.toLowerCase().includes(lowerCaseSearchTerm));
}

export function getSpellsByName(spells, searchTerm) {
    if (!searchTerm) {
        return spells;
    }
    if (searchTerm == "RANDOM") {
        return getRandomSpell(spells);
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return spells.filter(spell => spell.spell.toLowerCase().includes(lowerCaseSearchTerm));
}


export function getHouseByName(houses, searchTerm) {

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return houses.filter(house => house.house.toLowerCase().includes(lowerCaseSearchTerm))[0];
}