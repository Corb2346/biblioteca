let myLibrary = []; //arreglo que almacenará los libros
let contador=0; // variable que recorre el arreglo al agregar o quitar libros

let inputInfoBook = document.getElementById("inputInfoBook"); //muestra el formulario para añadir libros
let bookCard = document.getElementById("bookCard"); // muestra una tabla con la informacion introducida

let inputTitleBook = document.getElementById("inputTitleBook");//obtiene el titulo del libro en el html
let inputAuthorBook = document.getElementById("inputAuthorBook");
let inputnumberPagesBook = document.getElementById("inputnumberPagesBook");
let checkBox = document.getElementById("checkBox");
let addButtonOverlay = document.querySelector("#addButtonOverlay");

addButtonOverlay.addEventListener('click',addData);

function on() {
    document.getElementById("overlay").style.display = "block";
    inputInfoBook.style.display = "block";
  }
  
  function off() {
    if(inputTitleBook.value === "" || inputTitleBook.value === null && inputAuthorBook.value === "" || inputAuthorBook.value === null && inputnumberPagesBook.value === 0 || inputnumberPagesBook.value === null || inputnumberPagesBook.value === " " ){

      inputTitleBook.placeholder = "Title requiered";
      inputAuthorBook.placeholder = "Author requiered";
      inputnumberPagesBook.placeholder = "Insert number of Pages ";

    } else if(inputAuthorBook.value === "" || inputAuthorBook.value === null && inputnumberPagesBook.value <= 0 || inputnumberPagesBook.value === null ||     inputnumberPagesBook.value === " "){

      inputAuthorBook.placeholder = "Author requiered"
      inputnumberPagesBook.placeholder = "Insert number of Pages  ";

    } else if(inputnumberPagesBook.value <= 0 || inputnumberPagesBook.value === null || inputnumberPagesBook.value === " " ){

      inputnumberPagesBook.placeholder = "Insert number of Pages";
    } else {document.getElementById("overlay").style.display = "none";
    bookCard.style.display = "flex";
    }
  }

  function addData(){
    let titleBook = inputTitleBook.value;
    console.log(titleBook);
    let authorBook = inputAuthorBook.value;
    console.log(authorBook);
    let pagesBook = inputnumberPagesBook.value;
    console.log(pagesBook);
    
  }

function book(title,author,numberPages,read){ //objeto libro que crea libros al introducir los valores
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.read = read;

    this.info = function (){
        console.log(" " + this.title+ " " + this.author +" " + this.numberPages +" " + this.read );
    }
}

function addBookToLibrary(title,author,numberPages,read) { // funcion que recibe info del html y lo va a pasar a la funcion book
  
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.read = read;

    const bookNew = new book(this.title, this.author , this.numberPages ,this.read );

        return bookNew

}   


let bookNew = addBookToLibrary("TheHobbit","Tolkien",300,"yes");

console.log(bookNew.title);
console.log(bookNew.author);
console.log(bookNew.numberPages);
console.log(bookNew.read);

bookNew.info();

myLibrary[contador] = bookNew;

console.log(contador);

console.log(myLibrary[contador]);
contador++;
 bookNew = addBookToLibrary("GameOfThrones","Martin",500,"No");

 console.log(bookNew.title);
console.log(bookNew.author);
console.log(bookNew.numberPages);
console.log(bookNew.read);

bookNew.info();

myLibrary[contador] = bookNew;

console.log(myLibrary[contador]);

contador++;
console.log(contador);