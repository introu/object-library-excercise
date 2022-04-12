/*let Hobbit = {
    title: 'Hobbit',
    author: 'Tolkien',
    pages: '100',
    read: true
}

let Hobbit2 = {
    title: 'Hobbit2',
    author: 'Tolkien',
    pages: '150',
    read: false
}*/

let myLibrary = [];

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
    for (let i = 0; i <= myLibrary.length; i++) {
        let divToDelete = document.getElementById(`card` + i)
        if (divToDelete) {
            divToDelete.remove()
        }
    }
}

let deleteButtons
let indexValue

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
        let buttonDiv = document.createElement('div')
        buttonDiv.className = 'buttonDiv';
        let newDeleteButton = document.createElement('button')
        newDeleteButton.id = 'deleteButton' + i;
        newDeleteButton.className = 'cardButton deleteButton';
        newDeleteButton.type = 'button'
        newDeleteButton.textContent = 'Delete';
        newDeleteButton.setAttribute('data-index', `${i}`)
        let newReadButton = document.createElement('button')
        newReadButton.id = 'readButton' + i;
        newReadButton.className = 'cardButton readButton';
        newReadButton.type = 'button'
        newReadButton.textContent = 'Read';
        newReadButton.setAttribute('data-index', `${i}`)
        buttonDiv.append(newDeleteButton, newReadButton)
        newCard.append(newContent_1a, newContent_2a, newContent_3a, newContent_4a, buttonDiv)
        libraryDisplay.appendChild(newCard)
        deleteButtons = document.querySelectorAll('.deleteButton')
        deleteButtons.forEach(button => button.addEventListener('click', actualDelete))
    }
}

const modal = document.querySelector('.modalDialog')
const openModal = document.querySelector('.open-button')

openModal.addEventListener('click', () => {
    modal.showModal();
})

printLibrary()


function actualDelete() {
    if (deleteButtons === undefined) {
    } else {
        deleteButtons = document.querySelectorAll('.deleteButton')
        deleteButtons.forEach(button => button.addEventListener('click', () => {
            indexValue = parseInt(button.getAttribute('data-index'))
            myLibrary.splice(indexValue, 1)
            printLibrary()
        }))
    }
}

actualDelete()
