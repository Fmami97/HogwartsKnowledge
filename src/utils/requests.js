
const API_URL = "https://potterapi-fedeperin.vercel.app"


//returns all books written by J.K. Rowling in the desired language
export async function getBooks(language) {
    try {
        const response = await fetch(`${API_URL}/${language}/books`);
        if (!response.ok) {
            throw new Error({ message: "Failed to fetch books", status: response.status });
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching books:", error);
        return {
            error: error.message,
            status: error.status || 500
        };
    }
}

//returns all characters in the desired language
export async function getCharacters(language) {
    try {
        const response = await fetch(`${API_URL}/${language}/characters`);
        if (!response.ok) {
            throw new Error({ message: "Failed to fetch characters", status: response.status });
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching characters:", error);
        return {
            error: error.message,
            status: error.status || 500
        };
    }
}

//returns all houses in the desired language
export async function getHouses(language) {
    try {
        const response = await fetch(`${API_URL}/${language}/houses`);
        if (!response.ok) {
            throw new Error({ message: "Failed to fetch house", status: response.status });
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching house:", error);
        return {
            error: error.message,
            status: error.status || 500
        };
    }
}
//returns all spells in the desired language
export async function getSpells(language) {
    try {
        const response = await fetch(`${API_URL}/${language}/spells`);
        if (!response.ok) {
            throw new Error({ message: "Failed to fetch spells", status: response.status });
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching spells:", error);
        return {
            error: error.message,
            status: error.status || 500
        };
    }
}