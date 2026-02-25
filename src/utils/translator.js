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
