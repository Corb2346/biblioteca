let myLibrary = []; //arreglo que almacenará los libros
let inputInfoBook = document.getElementById("inputInfoBook");

let addBook = document.getElementById("addBook");

function on() {
    document.getElementById("overlay").style.display = "block";
    inputInfoBook.style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
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

/*const book1 = new book("TheHobbit", "J R R Tolkien", 300,"alreadyFinish" );*/

function addBookToLibrary() { // funcion que recibe info del html y lo va a pasar a la funcion book
  
    const book1 = new book("TheHobbit", "J R R Tolkien", 300,"alreadyFinish" );

        return book1


}   

let book1 = addBookToLibrary();

console.log(book1.title);
console.log(book1.author);
console.log(book1.numberPages);
console.log(book1.read);

book1.info();

myLibrary[0] = book1;

console.log(myLibrary[0]);
