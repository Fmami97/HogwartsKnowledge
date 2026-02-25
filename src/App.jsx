// import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Profile from './Components/Profile';
import { useEffect, useState } from 'react';


import { loadingText } from './utils/translator';

import { getData } from './utils/dataManager';
import Languages from './Enums/Languages';
import LanguageSelection from './Components/LanguageSelection';
//Routing in my application

import { createBrowserRouter,createRoutesFromElements,RouterProvider, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Characters from './Pages/Characters';
import CharacterDetails from './Pages/CharacterDetails';

import Books from './Pages/Books';
import Houses from './Pages/Houses';
import Spells from './Pages/Spells';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Searchbar from './Components/Searchbar';


function App() {
  

  library.add(fas, far, fab)

  // const { isAuthenticated, isLoading, error } = useAuth0();

  //TODO: since data is async, we need to handle the loading and error states in the app. We can use a state variable to track the loading state and another one to track any errors that might occur during the data fetching process. We can then conditionally render different components based on these states.
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [language,setLanguage] = useState(Languages.ENGLISH)
  const [searchTerm, setSearchTerm] = useState("");

  const [books, setBooks] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);
  const [spells, setSpells] = useState([]);

  // const [page,setPage] = useState("characters");

  //whenever the language changes, the app will fetch the data
  // and re-render the page.
  useEffect(() => {
    getData(language).then(data => {
      setLoading(false);
      // Update the state with the fetched data
      setBooks(data.books);
      setCharacters(data.characters);
      setHouses(data.houses);
      setSpells(data.spells);

    }).catch(error => {
      setError(error.message);
      setLoading(false);
    });
  }, [language]);


  const router = createBrowserRouter(
          createRoutesFromElements(<Route path="/" element={<App />}>
    <Route path="characters" element={<Characters characters={characters} searchTerm={searchTerm} />} />
    <Route path="characters/:id" element={<CharacterDetails characters={characters} />} />
    <Route path="books" element={<Books books={books} searchTerm={searchTerm} />} />
    <Route path="houses" element={<Houses houses={houses} searchTerm={searchTerm} />} />
    <Route path="spells" element={<Spells spells={spells} searchTerm={searchTerm} />} />
  </Route>));


  if (isLoading) {
    return (
      <div className="app-container">
        <div className="loading-state">
          <div className="loading-text">{loadingText(language)}</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <div className="error-state">
          <div className="error-title">Oops!</div>
          <div className="error-message">Error</div>
          <div className="error-sub-message">{error.message}</div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <header>
        <h1 className="main-title">Hogwarts
            <FontAwesomeIcon icon="fa-solid fa-wand-sparkles" size="2xl" />
          Knowledge
        </h1>
      </header>
        <div className="app-container">
          <div className="main-card-wrapper">

            <Languages language={language} setLanguage={setLanguage} languages={Languages} />
            <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <RouterProvider router={router} />

             {/* {isAuthenticated ? (
          <div className="logged-in-section">
            <div className="logged-in-message">✅ Successfully authenticated!</div>
            <h2 className="profile-section-title">Your Profile</h2>
            <div className="profile-card">
              <Profile />
            </div>
            <LogoutButton />
          </div>
        ) : (
          <div className="action-card">
            <p className="action-text">Get started by signing in to your account</p>
            <LoginButton />
          </div>
        )}  */}

          </div>
          <script src="https://kit.fontawesome.com/ab7a4ede5b.js" crossorigin="anonymous"></script>

        </div>
    </div>
  );
}

export default App;