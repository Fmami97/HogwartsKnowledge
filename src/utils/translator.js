import Languages from "../Enums/Languages";

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

export function searchText(selectedLanguage) {
    switch (selectedLanguage) {
        case Languages.ENGLISH:
            return "Search";
        case Languages.FRENCH:
            return "Rechercher";
        case Languages.ITALIAN:
            return "Ricerca";
        case Languages.SPANISH:
            return "Buscar";
        default:
            return "Search";
    }
}

export function searchResultText(selectedLanguage) {
    switch (selectedLanguage) {
        case Languages.ENGLISH:
            return "Search results";
        case Languages.FRENCH:
            return "Résultats";
        case Languages.ITALIAN:
            return "Risultati";
        case Languages.SPANISH:
            return "Resultados";
    }
}


// export function getHouseNames(selectedLanguage) {
//     switch (selectedLanguage) {
//         case Languages.ENGLISH:
//             return { gryffindor: "Gryffindor", hufflepuff: "Hufflepuff", ravenclaw: "Ravenclaw", slytherin: "Slytherin" }
//         case Languages.FRENCH:
//             return { gryffindor: "Gryffondor", hufflepuff: "Poufsouffle", ravenclaw: "Serdaigle", slytherin: "Serpentard" }

//         case Languages.ITALIAN:
//             return { gryffindor: "Grifondoro", hufflepuff: "Tassorosso", ravenclaw: "Corvonero", slytherin: "Serpeverde" }

//         case Languages.SPANISH:
//             return { gryffindor: "Gryffindor", hufflepuff: "Hufflepuff", ravenclaw: "Ravenclaw", slytherin: "Slytherin" }

//     }
// }

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
            return { nickname: "Nickname : ", house: "House : ", birthdate: "Birthdate : ", interpretedBy: "Actor : ", children: "Children" }
        case Languages.FRENCH:
            return { nickname: "Surnom : ", house: "Maison : ", birthdate: "Date de naissance : ", interpretedBy: "Acteur : ", children: "Enfants" }

        case Languages.ITALIAN:
            return { nickname: "Soprannome : ", house: "Casa : ", birthdate: "Data di nascita : ", interpretedBy: "Attore : ", children: "Figli" }


        case Languages.SPANISH:
            return { nickname: "Apodo : ", house: "Casa : ", birthdate: "Fecha de nacimiento : ", interpretedBy: "Actor : ", children: "Hijos" }
    }
}