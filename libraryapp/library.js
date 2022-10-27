
class Book{
    constructor(title, author, pages, read){

    this.title = title
    this.author =author
    this.pages = pages
    this.read= read

    }
}

class Library{
    constructor(){
        this.books=[]
    }
    addBook(newBook){
        if (!this.checkLibrary(newBook)){
            this.books.push(newBook);
        }
    }

    removeBook(title){
        this.books = this.books.filter((book) => book.title !== title);
    }
    getBook(title){
        return this.books.find((book) => book.title === title);
    }
    checkLibrary(newBook){
        return this.books.some((book) => book.title === newBook.title);
    }
}

const library = new Library()

// ui

const addBookBtn = document.getElementById('addBookBtn');
const addBookContainer = document.querySelector('#addBookContainer');
const addBookForm= document.getElementById('addBookForm');
const booksGrid = document.getElementById('booksGrid');
const overlay= document.getElementById('overlay');


addBookBtn.onclick = openAddBookModal

function openAddBookModal(){
    addBookForm.reset()
    addBookContainer.classList.add('active')
    overlay.classList.add('active')
}