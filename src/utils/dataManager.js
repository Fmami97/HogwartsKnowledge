import * as requests from "./requests";
import * as arraySorter from "../utils/arraySorter";

import Languages from "../Enums/Languages";


async function getDataByLanguage(language) {
    return Promise.all([
        requests.getBooks(language),
        requests.getCharacters(language),
        requests.getHouses(language),
        requests.getSpells(language)
    ]).then(([books, characters, houses, spells]) => {

        return {
            books,
            characters: characters.map(character => ({
                ...character,
                //replaces the array containing the names of the children with an array containing the full info of the children
                children: arraySorter.getChildrenInfo(character.children, characters)
            })),
            houses: houses.map(house => ({
                ...house,
                //adds a new property to the house object containing an array of all the characters that belong to that house, using the filterCharactersByHouse function from arraySorter
                characters: arraySorter.filterCharactersByHouse(characters, house.name)
            })),
            spells
        };
    }).catch(error => {
        console.error("Error fetching data:", error);
        return {
            error: error.message,
            status: error.status || 500
        };
    });
}


//returns the data in the desired language.
//if the data is already in the cache, it returns it from there, otherwise it fetches it from the API and stores it in the cache before returning it.
export async function getData(language) {
    try {
        if (!Object.values(Languages).includes(language)) {
            return {
                error: "Invalid language",
                status: 400
            };
        }

        if (localStorage.getItem(language)) {

            const cachedData = JSON.parse(localStorage.getItem(language));
            return cachedData;
        }

        const data = await getDataByLanguage(language);
        localStorage.setItem(language, JSON.stringify(data));
        return data;
    } catch (error) {
        console.error("Error in getData:", error);
        return {
            error: error.message,
            status: error.status || 500
        };
    }
}