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
            houses: houses.map(house => (
                {
                    ...house,
                    //adds a new property to the house object containing an array of all the characters that belong to that house, using the filterCharactersByHouse function from arraySorter
                    characters: arraySorter.getCharactersFromHouse(characters, house.house)
                }
            )),
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

function getCacheData(key) {
    const cached = localStorage.getItem(`@cache:${key}`);
    if (!cached) return null;
    const entry = JSON.parse(cached);
    // delete the cache in case the entry is expired or contains an error
    if (Date.now() > entry.expires || entry.data.error || entry.error) {
        localStorage.removeItem(`@cache:${key}`);
        return null;
    }
    return entry.data;
};

function createCache(key, data, minutes = 20) {
    const cacheEntry = {
        data,
        expires: Date.now() + (minutes * 60 * 1000)
    };
    localStorage.setItem(`@cache:${key}`, JSON.stringify(cacheEntry));
};


//returns the data in the desired language.
//if the data is already in the cache, it returns it from there, otherwise it fetches it from the API and stores it in the cache before returning it.
export async function getData(language, isOffline = false) {

    const cacheKey = "hogwarts_knowledge" + language
    try {
        if (!Object.values(Languages).includes(language)) {
            return {
                error: "Invalid language",
                status: 400
            };
        }

        const cachedData = getCacheData(cacheKey);

        //in case we work offline, we rely on fetching the local data only.
        if (isOffline) {
            if (cachedData) {
                const data = cachedData
                return data;
            }
            else {
                throw new Error("No cached data available in offline mode");
            }
        }

        //if we have cached data, return it immediately otherwise, fetch new, fresh data.
        if (cachedData && cachedData.data) {
            return cachedData.data;
        }
        else {
            const freshData = await getDataByLanguage(language);
            if (freshData && !freshData.error) {
                createCache(cacheKey, freshData);
                return freshData;
            }
            else {
                throw new Error("Couldn't fetch new fresh data, and cache is empty");
            }
        }

    } catch (error) {
        console.error("Error in getData:", error);
        return {
            error: error.message,
            status: error.status || 500
        };
    }
}