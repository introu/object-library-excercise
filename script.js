let Hobbit = {
    author: 'Tolkien',
    title: 'Hobbit',
    pages: '100',
    read: true
}

let Hobbit2 = {
    author: 'Tolkien',
    title: 'Hobbit2',
    pages: '150',
    read: false
}

let myLibrary = [Hobbit, Hobbit2];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let newBook;

let addButton = document.querySelector('.formAdd')
addButton.addEventListener('click', addBookToLibrary)

const form = document.getElementById(`addForm`)

function addBookToLibrary() {
    newBook = new Book(form['title'].value, form['author'].value, form['pages'].value, form['read'].checked)
    if (!form['title'].value || !form['author'].value || !form['pages'].value) {
        return
    }
    console.table(newBook)
    myLibrary.push(newBook)
    printLibrary()
}


let newContent_1;
let newContent_2;
let newContent_3;
let newContent_4;
let newContent_1a;
let newContent_2a;
let newContent_3a;
let newContent_4a;

const libraryDisplay = document.getElementById('libraryDisplay');

function removeCards() {
    for (let i = 0; i < myLibrary.length; i++) {
        let divToDelete = document.getElementById(`card` + i)
        if (divToDelete) {
        divToDelete.remove()
        }
    }
}

function printLibrary() {
    removeCards()
    for (let i = 0; i < myLibrary.length; i++) {
        let newCard = document.createElement('div')
        newCard.id = 'card' + i;
        newCard.className = 'card'
        libraryDisplay.appendChild(newCard)
        newContent_1 = document.createTextNode(`Title: ${myLibrary[i].title}`)
        newContent_1a = document.createElement('p')
        newContent_1a.appendChild(newContent_1)
        newContent_2 = document.createTextNode(`Author: ${myLibrary[i].author}`)
        newContent_2a = document.createElement('p')
        newContent_2a.appendChild(newContent_2)
        newContent_3 = document.createTextNode(`Number of pages: ${myLibrary[i].pages}`)
        newContent_3a = document.createElement('p')
        newContent_3a.appendChild(newContent_3)
        if (myLibrary[i].read) {
            newContent_4 = document.createTextNode(`Book has been read!`)
            newContent_4a = document.createElement('p')
            newContent_4a.appendChild(newContent_4)
        } else {
            newContent_4 = document.createTextNode(`Book hasn't been read!`)
            newContent_4a = document.createElement('p')
            newContent_4a.appendChild(newContent_4)
        }
        newCard.append(newContent_1a, newContent_2a, newContent_3a, newContent_4a)
        libraryDisplay.appendChild(newCard)
    }
}
const modal = document.querySelector('.modalDialog')
const openModal = document.querySelector('.open-button')

openModal.addEventListener('click', () => {
    modal.showModal();
})


printLibrary()