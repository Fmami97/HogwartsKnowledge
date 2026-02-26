// import { useAuth0 } from '@auth0/auth0-react';
// import LoginButton from './Components/LoginButton';
// import LogoutButton from './Components/LogoutButton';
// import Profile from './Components/Profile';
import { useEffect, useState } from 'react';
import "./app.css"

import { loadingText ,errorText} from './utils/translator';

import { getData } from './utils/dataManager';
//ENUMS
import Languages from './Enums/Languages';
import SearchTypes from './Enums/SearchTypes';
//COMPONENTS
import Searchbar from './Components/Searchbar';
import LanguageSelection from './Components/LanguageSelection';
import Characters from './Pages/Characters';

import Books from './Pages/Books';
import Houses from './Pages/Houses';
import Spells from './Pages/Spells';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import HogwartsHouses from './Enums/HogwartsHouses';


function App() {
  

  library.add(fas, far, fab)

  // const { isAuthenticated, isLoading, error } = useAuth0();
  //TODO: since data is async, we need to handle the loading and error states in the app. We can use a state variable to track the loading state and another one to track any errors that might occur during the data fetching process. We can then conditionally render different components based on these states.
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [language,setLanguage] = useState(Languages.FRENCH);

  //depending on what is being searched, logic differs slighly
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType,setSearchType] = useState(SearchTypes.CHARACTERS)
  const [selectedHouse,setSelectedHouse] = useState(HogwartsHouses.GRYFFINDOR);

  const [books, setBooks] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);
  const [spells, setSpells] = useState([]);

  const [isOnline,setIsOnline] = useState(navigator.onLine);
  useEffect(()=>{
    const handleOnline = ()=>setIsOnline(true);
    const handleOffline = ()=>setIsOnline(false);
    window.addEventListener("online",handleOnline);
    window.addEventListener("offline",handleOffline);
    return ()=>{
      window.removeEventListener("online",handleOnline);
      window.removeEventListener("offline",handleOffline);
    }
  },[]);


  //whenever the language changes, the app will fetch the data
  // and re-render the page.
  useEffect(() => {
    getData(language,!isOnline).then(data => {
      setLoading(false);
      // Update the state with the fetched data

      if(data && !data.error){
        setBooks(data.books);
        setCharacters(data.characters);
        setHouses(data.houses);
        setSpells(data.spells);
      }
      else{
        //if the object contains an error to display
        if(data && data.error){
          throw new Error(data.error);
        }
        else{
          //default error message otherwise.
          throw new Error("No data found!");
        }
      }

    }).catch(error => {
      setError(error.message);
      setLoading(false);
    });
  }, [language,isOnline]);

  let content;


  if (isLoading) {
    content =(
        <div className="loading-state">
          <div className="loading-text">{loadingText(language)}</div> 

        </div>
    );
  }else if (error) {
    content = (
     
        <div className="error-state">
          <div className="error-title">Oops!</div>
          <div className="error-message">{errorText(language)}</div>
          <div className="error-sub-message">"{error}"</div>
        </div>
    );
  }
  else{
    let page; 
    switch(searchType){
      case SearchTypes.BOOKS:
        page = <Books books={books} searchTerm={searchTerm}/>;
        break;
      case SearchTypes.CHARACTERS:
        page = <Characters characters={characters} searchTerm={searchTerm} setSearchTerm={setSearchTerm}  setSearchType= {setSearchType} language={language}/>;
        break;
      case SearchTypes.HOUSES:
        page = <Houses houses={houses} selectedHouse={selectedHouse} setSearchType= {setSearchType} setSearchTerm={setSearchTerm} language={language}/>;
      break;
        case SearchTypes.SPELLS:
        page = <Spells spells={spells} searchTerm={searchTerm}/>
        break;
    }
        content = (
            <div className="main-card-wrapper">
            <LanguageSelection language={language} setLanguage={setLanguage} languages={Object.values(Languages)} />
            <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchType={searchType} setSearchType={setSearchType} selectedHouse={selectedHouse} setSelectedHouse = {setSelectedHouse} language={language}/> 
            {page}
          </div>
        )
          
  }


  return (
    <div>
        <div className="app-container">
          <header>
    <h1 className="main-title">Hogwarts
      <FontAwesomeIcon icon="fa-solid fa-wand-sparkles" size="2xl" />
      Knowledge
    </h1>
  </header>
          {content}
        </div>
    </div>
  );
}



        
export default App;