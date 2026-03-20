
import "./Styles/App.css"

//UTILITIES
import { useEffect, useState } from 'react';
import { loadingText ,errorText,offlineModeText} from './utils/translator';
import { getData } from './utils/dataManager';
import {getHouseIcons} from "./utils/arraySorter"

//ENUMS
import Languages from './Enums/Languages';
import SearchTypes from './Enums/SearchTypes';
import HogwartsHouses from './Enums/HogwartsHouses';

//COMPONENTS
import Searchbar from './Components/Searchbar';
import LanguageSelection from './Components/LanguageSelection';
//PAGES
import Characters from './Pages/Characters';
import Books from './Pages/Books';
import Houses from './Pages/Houses';
import Spells from './Pages/Spells';


//LIBRARIES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { OrbitProgress } from "react-loading-indicators";

function App() {
  
  //adds the fontAwesome icon (the magic wand)
  library.add(fas)

  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [language,setLanguage] = useState(Languages.ENGLISH);

  //depending on what is being searched, logic differs slighly
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType,setSearchType] = useState(SearchTypes.CHARACTERS)
  const [selectedHouse,setSelectedHouse] = useState(HogwartsHouses.GRYFFINDOR);

  const [books, setBooks] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);
  const [spells, setSpells] = useState([]);

  const [isOnline,setIsOnline] = useState(navigator.onLine);
  const [offlineMode,setOfflineMode] = useState(!isOnline);

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


  function handleData(data){
    // Update the state with the fetched data
    if(data && !data.error){
        setError(null);
        setBooks(data.books);
        setCharacters(data.characters);
        setHouses(data.houses);
        setSpells(data.spells);
        setLoading(false);
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
  }

  //whenever the language changes, the app will fetch the data
  // and re-render the page.
  useEffect(() => {

    if(offlineMode){
      getData(language,true).then(data => {
          console.log("hello")
          handleData(data);
  
        }).catch(cacheError=>{
         if(cacheError.message){
            setError(cacheError.message);
          }else{
            setError(cacheError);
          }
        setLoading(false);

      });
    }
    else{
    getData(language,!isOnline).then(data => {
      handleData(data);
    }).catch(error => {
      console.error(error.message)
      //if fetching online fails, tries offline mode
      //if already offline, skips this step
      setOfflineMode(true);
    });
    }
  }, [language,isOnline,offlineMode]);


  function handleSetSearchType(newSearchType){
    setSearchType(newSearchType);
    setSearchTerm("");
  }

  function handleSetLanguage(newLanguage){
    
    if(newLanguage==language){
      return
    }
    setLoading(true);
    if(!isOnline)
    {
    getData(newLanguage,true).then(data => {
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
      if(error.message){
        setError(error.message);
      }else{
        setError(error);
      }
      setLoading(false);
    });
  }
    setLanguage(newLanguage);

  }


  let content;


  if (isLoading) {
    content =(
          <OrbitProgress variant="spokes" size="large" color="#616881"  text={loadingText(language)} textColor="" />
    );
  }else if (error) {
    content = (
     
        <div className="error-state">
          <div className="error-title">Oops!</div>
          <div className="error-message">{errorText(language)}</div>
          <div className="error-sub-message">"{error && error.message ? error.message : error}"</div>
        </div>
    );
  }
  else{
    let page; 
    switch(searchType){
      case SearchTypes.BOOKS:
        page = <Books books={books} searchTerm={searchTerm} language={language}/>;
        break;
      case SearchTypes.CHARACTERS:
        page = <Characters characters={characters} searchTerm={searchTerm} setSearchTerm={setSearchTerm}  setSearchType= {handleSetSearchType} language={language}/>;
        break;
      case SearchTypes.HOUSES:
        page = <Houses houses={houses} selectedHouse={selectedHouse} setSearchType= {handleSetSearchType} setSearchTerm={setSearchTerm} language={language}/>;
      break;
        case SearchTypes.SPELLS:
        page = <Spells spells={spells} searchTerm={searchTerm} language={language}/>
        break;
    }

    let houseIcons = getHouseIcons(houses);
        content = (
            <div className="main-card-wrapper">
            <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchType={searchType} setSearchType={handleSetSearchType} selectedHouse={selectedHouse} setSelectedHouse = {setSelectedHouse} houseIcons={houseIcons} language={language}/> 
            {page}
          </div>
        )
          
  }


  return (
    <div>
          <header>
            <h1 className="main-title">Hogwarts
            <FontAwesomeIcon icon="fa-solid fa-wand-sparkles" size="xl" />
            Knowledge
            </h1>
          </header>
        <div className="app-container"> 
          {offlineMode && <div className="offline-mode"><h2>{offlineModeText(language)}</h2></div>}
            <LanguageSelection language={language} setLanguage={handleSetLanguage} languages={Object.values(Languages)} />

          {content}
          {offlineMode && <div className="offline-mode"><h2>{offlineModeText(language)}</h2></div>}

        </div>
    </div>
  );
}



        
export default App;