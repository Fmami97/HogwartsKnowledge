import * as arraySorter from "../utils/arraySorter";
export default function Books({ books,searchTerm }) {
      
    if (!books || books.error) {
        return (
            <div className="books-page">
                <h2>Books</h2>
                <p>Failed to load books: {books?.error || "Unknown error"}</p>
            </div>
        );
    }
    
    const booksResult = arraySorter.getBooksByTitle(books, searchTerm);

   
    return booksResult.length === 0 ? (
            <div className="books-page">
                <h2>Books</h2>
                <p>No books found with the provided search term.</p>
        </div>
    ):(
            <div className="books-page">
                <h2>Books</h2>
                <p>
                    Not implemented yet.</p>
            </div>
        );      
}