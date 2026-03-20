# PROJECT INFO
## PROJECT NAME
HogwartsKnowledge
## AUTHOR  
Fmami97 (github.com/Fmami97)
## CREATED
20.02.2026

## FINISHED (more or less)
19.03.2026

## DESCRIPTION
A React SPA that allows users to search various data from the Harry Potter franchise in 4 different languages.
This project's aim is for academic / personal use only, and uses an API found in [https://free-apis.github.io] (more details below).

# INSTALLATION

```bash
    # clone the project locally:
    git clone git@github.com:Fmami97/HogwartsKnowledge.git
    # go to the root of the project
    cd HogwartsKnowledge
    #install the dependencies
    npm install
    #run the project locally
    npm run dev
```
## SIDE NOTE:
Since Cors policies don't allow localhost to be used to fetch data on a server, you will need an extension that 
provides access to your website, or run your app through a server

**UPDATE**
I realized I wasn't fetching the data properly, since I had a second '/' inside my URL, it should now work without the extension.


# MAKE A PRODUCTION BUILD
once satisfied with all changes build the project to place it in your web domain
```bash
    npm run build
```


# TECHNOLOGIES

This app:
- Is made with the React Framework (Vite V7.3.1)
- Uses the API from fedeperin [https://github.com/fedeperin/harry-potter-api-english]
- Has Font Awesome icons for User friendly Interface.
- Used the Chrome extension Allow CORS: Access-Control-Allow-Origin to run locally the code without CORS restrictions.
- Used the Chrome extesion React Developer Tools to debug more efficiently in React

# API DOCUMENTATION

## Harry Potter API
- uses the Harry Potter API from [https://vlaurencena.github.io/harry-potter-openapi-swagger-ui/]

