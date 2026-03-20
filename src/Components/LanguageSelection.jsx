

export default function LanguageSelection({language,setLanguage,languages}) {
    return (

        <div className="row-container">
            {languages.map(lang => (
                //shows a button with the icon of the language and the name of the language, when clicked it changes the language of the app.
                <button key={lang} className={`language-button ${language === lang ? "active" : ""}`} onClick={() => setLanguage(lang)}>
                    <img src={"./assets/"+lang+".png"}  alt={lang.name} className="language-icon" />
                    <span>{lang.name}</span>
                </button>
            ))}
        </div>
    );
}