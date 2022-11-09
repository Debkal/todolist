
class Book{
    constructor(title,author,pages,read)
    {
    this.title = title;
    this.author =author;
    this.pages = pages;
    this.read= read;
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
let myLibrary=[];

const library = new Library()
// ui

const addBookBtn = document.getElementById('addBookBtn');
const addBookContainer = document.querySelector('#addBookContainer');
const addBookForm= document.getElementById('addBookForm');
const booksGrid = document.getElementById('booksGrid');
const overlay= document.getElementById('overlay');
const closeBtn=document.getElementById('closeBtn');
const btnBlueSubmit =document.getElementById('btnBlueSubmit')


function openAddBookModal(){
    addBookForm.reset();
    addBookContainer.classList.add('active')
    overlay.classList.add('active')
}

function closeAddBookModal() {
    addBookContainer.classList.remove('active');
    overlay.classList.remove('active');
}

function resetBookContainer() {
    booksGrid.innerHTML=''
}
//for myLibrary array
function updateBookContainer() {
    resetBookContainer();
    for(let i=0; i< myLibrary.length; i+=1){
        createBookCardContainer();
    }
}
//for library constructor
function updateBooksGrid() {
    resetBookContainer();
    for (let book of library.books) {
        createBookCardContainer(book)
    }
}

//returns book
const getFormInput= () => {
    const title= document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages= document.getElementById('pages').value;
    const read= document.getElementById('read').checked;
    return new Book(title,author,pages,read);
}
//saves to array
function formInputTest() {
    const title= document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages= document.getElementById('pages').value;
    const read= document.getElementById('read').checked;
    let newBook= new Book(title,author,pages,read);
    myLibrary.push(newBook);
}
// test statement
// alert (JSON.stringify(newBook)) 
const testInput = (ev) =>{
    ev.preventDefault();
    const newBook=getFormInput();

    library.addBook(newBook);
    updateBooksGrid();
    closeAddBookModal();
}


const createBookCardContainer = (book) => {
    const bookCardContainer = document.createElement('div')
    const title= document.createElement('p')
    const author= document.createElement('p')
    const pages= document.createElement('p')
    const grpbtnContainer= document.createElement('div')
    const readBtn= document.createElement('button')
    const removeBtn = document.createElement('button')

    bookCardContainer.classList.add("book-card-container")
    title.classList.add("title-card-p")
    author.classList.add("author-card-p")
    pages.classList.add("pages-card-p")
    grpbtnContainer.classList.add("grpbtnContainer-card-container")
    readBtn.classList.add("readBtn-card-container")
    removeBtn.classList.add("removeBtn-card-container")

    title.textContent= book.title
    author.textContent = book.author
    pages.textContent= book.pages + ' pages'
    removeBtn.textContent= "Remove"
    
    bookCardContainer.setAttribute("id", book.title);

    if (book.read === true) {
        readBtn.textContent = 'Read'
        readBtn.classList.add('read-btn-card')
    } else{
        readBtn.textContent = 'Not read'
        readBtn.classList.add('not-read-btn-card')
    }

    bookCardContainer.appendChild(title)
    bookCardContainer.appendChild(author)
    bookCardContainer.appendChild(pages)
    grpbtnContainer.appendChild(readBtn)
    grpbtnContainer.appendChild(removeBtn)
    bookCardContainer.appendChild(grpbtnContainer)
    booksGrid.appendChild(bookCardContainer)

    readBtn.addEventListener('click', () => {
        book.read = !book.read;
        updateBooksGrid();
    })
    removeBtn.addEventListener('click', () => {
        document.getElementById(book.title).remove();
        library.removeBook(book.title);
    })
    return false;
}

addBookBtn.addEventListener ('click',() => openAddBookModal())
closeBtn.addEventListener('click', () => closeAddBookModal())
addBookForm.onsubmit=testInput
