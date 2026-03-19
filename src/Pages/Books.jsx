import * as arraySorter from "../utils/arraySorter";
import { getBooksInfoTitles,emptyText,errorText,getSearchInfoTitles } from "../utils/translator";
import "../Styles/BooksPage.css"
export default function Books({ books,searchTerm,language }) {
    
     const booksInfoTitles = getBooksInfoTitles(language)

    if (!books || books.error) {
        return (
            <div className="books-page">
                <h2>{booksInfoTitles.books}</h2>
                <p>{errorText(language)} {books?.error || "Unknown error"}</p>
            </div>
        );
    }
    
    const booksResult = arraySorter.getBooksByTitle(books, searchTerm);
   
   

    let content = <p>{emptyText(language)}</p>


    if (booksResult.length > 0){
       
        let bookItems = booksResult.map((bookDetails)=>{
            return (
                <div key={bookDetails.index+"_"+bookDetails.originalTitle} className="book-card">
                    <img src={bookDetails.cover} alt={bookDetails.originalTitle} className="book-image" />
                
                    <h3>{bookDetails.title}</h3>
                    <p>{booksInfoTitles.releaseDate}{bookDetails.releaseDate}</p>
                    <p>{booksInfoTitles.pages}{bookDetails.pages}</p>
                    <p className="overflowing-paragraph">{bookDetails.description}</p>
                </div>
            )
        })
        content = <div className="books-list">{bookItems.map(r=>r)}</div>
    }

   return (
            <div className="books-page">
                <h1>{booksInfoTitles.books}</h1>
                <h2>{getSearchInfoTitles(language).searchResult}</h2>

                {content}
        </div>
    )     
}