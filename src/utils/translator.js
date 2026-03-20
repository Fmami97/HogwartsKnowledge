import Languages from "../Enums/Languages";


export function offlineModeText(selectedLanguage) {
    switch (selectedLanguage) {
        case Languages.ENGLISH:
            return "Offline mode";
        case Languages.FRENCH:
            return "Mode hors-ligne";
        case Languages.ITALIAN:
            return "Modalità offline";
        case Languages.SPANISH:
            return "Modo sin conexión";
    }
}

export function loadingText(selectedLanguage) {
    switch (selectedLanguage) {
        case Languages.ENGLISH:
            return "Loading...";
        case Languages.FRENCH:
            return "Chargement...";
        case Languages.ITALIAN:
            return "Caricamento...";
        case Languages.SPANISH:
            return "Cargando...";
        default:
            return "Loading...";
    }
}

export function errorText(selectedLanguage) {
    switch (selectedLanguage) {
        case Languages.ENGLISH:
            return "Error loading data. Please try again later.";
        case Languages.FRENCH:
            return "Erreur lors du chargement des données. Veuillez réessayer plus tard.";
        case Languages.ITALIAN:
            return "Errore durante il caricamento dei dati. Per favore riprova più tardi.";
        case Languages.SPANISH:
            return "Error al cargar los datos. Por favor, inténtalo de nuevo más tarde.";
        default:
            return "Error loading data. Please try again later.";
    }
}

export function emptyText(selectedLanguage) {
    switch (selectedLanguage) {
        case Languages.ENGLISH:
            return "No entry found, try something different!";
        case Languages.FRENCH:
            return "Aucune entrée trouvée, essayez autre chose!";
        case Languages.ITALIAN:
            return "Nessun dato trovato, provate qualcos'altro";
        case Languages.SPANISH:
            return "No se encontró ninguna entrada, ¡intente algo más!";
    }
}

export function emptyCharacterText(selectedLanguage) {
    switch (selectedLanguage) {
        case Languages.ENGLISH:
            return "No data available for this character";
        case Languages.FRENCH:
            return "Aucune donnée disponible pour ce personnage";
        case Languages.ITALIAN:
            return "Nessun dato disponibile su questa persona";
        case Languages.SPANISH:
            return "No se encontró ningun dato sobre esta persona";
    }
}

export function getHouseInfoTitles(selectedLanguage) {
    switch (selectedLanguage) {
        case Languages.ENGLISH:
            return { founder: "Founder : ", animal: "Represented animal : ", colors: "Banner colors:", members: "Members of " }
        case Languages.FRENCH:
            return { founder: "Fondateur : ", animal: "Animal représenté : ", colors: "Couleurs de la banière:", members: "Membres de " }
        case Languages.ITALIAN:
            return { founder: "Fondatore : ", animal: "Animale raffigurato: ", colors: "Colori del striscione:", members: "Membri di " }

        case Languages.SPANISH:
            return { founder: "Fundador : ", animal: "Animal representado : ", colors: "Colores del estandarte:", members: "Miembros de " }
    }
}

export function getCharactersInfoTitles(selectedLanguage) {
    switch (selectedLanguage) {
        case Languages.ENGLISH:
            return { characters: "Characters", nickname: "Nickname : ", house: "House : ", birthdate: "Birthdate : ", interpretedBy: "Actor / Actress : ", children: "Children" }
        case Languages.FRENCH:
            return { characters: "Personnages", nickname: "Surnom : ", house: "Maison : ", birthdate: "Date de naissance : ", interpretedBy: "Acteur / Actrice : ", children: "Enfants" }

        case Languages.ITALIAN:
            return { characters: "Personaggi", nickname: "Soprannome : ", house: "Casa : ", birthdate: "Data di nascita : ", interpretedBy: "Attore / Attrice : ", children: "Figli" }


        case Languages.SPANISH:
            return { characters: "Personajes", nickname: "Apodo : ", house: "Casa : ", birthdate: "Fecha de nacimiento : ", interpretedBy: "Actor / Actriz : ", children: "Hijos" }
    }
}



export function getBooksInfoTitles(selectedLanguage) {
    switch (selectedLanguage) {
        case Languages.ENGLISH:
            return { books: "Books", title: "Title : ", releaseDate: "Release date : ", description: "Description : ", pages: "Number of pages : " }
        case Languages.FRENCH:
            return { books: "Livres", title: "Titre : ", releaseDate: "Date de sortie : ", description: "Description : ", pages: "Nombre de pages : " }

        case Languages.ITALIAN:
            return { books: "Libri", title: "Titolo : ", releaseDate: "Data di rilascio : ", description: "Descrizione : ", pages: "Numero di pagine : " }

        case Languages.SPANISH:
            return { books: "Libros", title: "Tìtulo : ", releaseDate: "Fecha de lanzamiento : ", description: "Descripción : ", pages: "Número de páginas : " }
    }
}


export function getSearchInfoTitles(selectedLanguage) {
    switch (selectedLanguage) {
        case Languages.ENGLISH:
            return { search: "Search", searchResult: "Search results", random: "Random", reset: "Reset", characters: "Characters", books: "Books", houses: "Houses", house: "House", spells: "Spells" }
        case Languages.FRENCH:
            return { search: "Rechercher", searchResult: "Résultats", random: "Aléatoire", reset: "Effacer", characters: "Personnages", books: "Livres", houses: "Maisons", house: "Maison", spells: "Sorts" }

        case Languages.ITALIAN:
            return { search: "Ricercare", searchResult: "Risultati", random: "Aleatorio", reset: "Cancellare", characters: "Personaggi", books: "Libri", houses: "Case", house: "Casa", spells: "Incantesimi" }

        case Languages.SPANISH:
            return { search: "Buscar", searchResult: "Resultados", random: "Aleatorio", reset: "Borrar", characters: "Personajes", books: "Libros", houses: "Casas", house: "Casa", spells: "Hechizos" }

    }
}