let myLibrary = []; //arreglo que almacenará los libros
let indexArray = 0; // variable que recorre el arreglo al agregar o quitar libros
let newBook="";
let elementArray = 0;
let idnumber = 0 ;

let inputInfoBook = document.getElementById("inputInfoBook"); //muestra el formulario para añadir libros
let bookCard = document.getElementById("bookCard"); // muestra una tabla con la informacion introducida

let inputTitleBook = document.getElementById("inputTitleBook");//div donde se mete la info
let inputAuthorBook = document.getElementById("inputAuthorBook");//div donde se mete la info
let inputnumberPagesBook = document.getElementById("inputnumberPagesBook");//div donde se mete la info
let addButtonOverlay = document.querySelector("#addButtonOverlay");

/*let titleBook = document.getElementById("titleBook");//text area donde se muestra la informacion del titulo ingresado por usuario
let authorBook = document.getElementById("authorBook");//text area donde se muestra la informacion del autor ingresado por usuario
let numberPagesBook = document.getElementById("numberPagesBook");//text area donde se muestra la informacion del numero de paginas ingresado por usuario*/
let checkBox = document.getElementById("checkBox");//llama al checkbox 
let status = document.getElementById("status");

addButtonOverlay.addEventListener('click',addBookToLibrary);


function on() {//crea un overlay y muestra el formulario para crear un libro
    document.getElementById("overlay").style.display = "block";
    inputInfoBook.style.display = "block";
  }

function createInfoCard(newBook){

  
  const newCardBook= document.createElement("newCardBook");//crea el contenedor  //da estilos a el contenedor donde se muestra la info
  newCardBook.classList.add("bookCard");
  
  const InputTitleBook =document.createElement("TitleBook"); // se crean los divs dentro de la tarjeta
  const InputAuthorBook = document.createElement("AuthorBook");
  const InputNumberPages = document.createElement("PagesBook");
  const InputStatus = document.createElement("Status");
  const UpdateStatus = document.createElement("button");
  const Delete = document.createElement("BUTTON");
  const TextButton = document.createTextNode("Delete");
  newCardBook.setAttribute("id", myLibrary.indexOf(newBook));
  
  newCardBook.appendChild(InputTitleBook);
  newCardBook.appendChild(InputAuthorBook);
  newCardBook.appendChild(InputNumberPages);
  newCardBook.appendChild(InputStatus);
  newCardBook.appendChild(UpdateStatus);
  Delete.appendChild(TextButton);//se añaden divs y botones 
  newCardBook.appendChild(Delete); 
  bookContainer.appendChild(newCardBook);

  //clase a divs para dar estilo

  InputTitleBook.textContent = newBook.title;
  InputTitleBook.classList.add('diplayInfo');

  InputAuthorBook.textContent = newBook.author;
  InputAuthorBook.classList.add('diplayInfo');

  InputNumberPages.textContent = newBook.numberPages;
  InputNumberPages.classList.add('diplayInfo');

  InputStatus.textContent = newBook.read;
  InputStatus.classList.add('diplayInfo');

  if( newBook.read === "Read It"){

    InputStatus.style.backgroundColor = "#5FFF7A";
    InputStatus.textContent = newBook.read;
  } else {
    
    InputStatus.style.backgroundColor = "#FF4949";
    newBook.read = "No read It";
    InputStatus.textContent =  newBook.read;
  }

  UpdateStatus.textContent = 'UpdateSatus';
  UpdateStatus.classList.add('diplayInfo');
  UpdateStatus.classList.add('heightbtn');

  Delete.textContent = 'Delete';
  Delete.classList.add('delete');

  newCardBook.style.display ="flex";
 
  Delete.addEventListener("click",(event) => {

    let bookContainer = document.querySelectorAll("newcardbook");
    console.log(bookContainer);
    console.log(event.tarjet);
    
    let elementDelete =  event.target.parentNode;
    console.log(elementDelete);
    elementDelete.remove();

    
    myLibrary.splice(myLibrary.indexOf(newBook),1);

    console.log(myLibrary);
  })

  
  UpdateStatus.addEventListener("click",(event)=> {
    console.log("click");

    let elementDelete =  event.target.parentNode;
    console.log(elementDelete);

    let lecture = InputStatus.textContent;
    console.log(lecture);

    let index = myLibrary.indexOf(newBook);

    for(let i = 0; i<myLibrary.length;i++){

      if(index == i){
        let reciveBook = myLibrary[i];
        console.log(reciveBook);
        
          if( lecture == "No read It" ){

          InputStatus.style.backgroundColor = "#5FFF7A";
          InputStatus.textContent = "Read It";
          reciveBook.read = "Read It";
          console.log(reciveBook);

          }
          
          if(lecture == "Read It" ) {

            InputStatus.style.backgroundColor = "#FF4949";
            InputStatus.textContent =  "No read It";
            reciveBook.read = "No read It";
            console.log(reciveBook);

          }

      };
    }
    console.log(myLibrary)
  });
  }


  
  function off() { //valida la informacion si los campos son vacios manda mensajes que la inf es requerida
    if(inputTitleBook.value === "" || inputTitleBook.value === null && inputAuthorBook.value === "" || inputAuthorBook.value === null && inputnumberPagesBook.value === 0 || inputnumberPagesBook.value === null || inputnumberPagesBook.value === " " || inputnumberPagesBook.value < 0){

      inputTitleBook.placeholder = "Title requiered";
      inputAuthorBook.placeholder = "Author requiered";
      inputnumberPagesBook.placeholder = "Insert number of Pages ";

    } else if(inputAuthorBook.value === "" || inputAuthorBook.value === null && inputnumberPagesBook.value <= 0 || inputnumberPagesBook.value === null || inputnumberPagesBook.value === " "){

      inputAuthorBook.placeholder = "Author requiered"
      inputnumberPagesBook.placeholder = "Insert number of Pages";

    } else if(inputnumberPagesBook.value <= 0 || inputnumberPagesBook.value === null || inputnumberPagesBook.value === " " ){

      inputnumberPagesBook.placeholder = "Insert number of Pages";

    } else {document.getElementById("overlay").style.display = "none";//si no faltan campos por llenar quita el display y el formulario
            /*bookCard.style.display = "flex";*/
            
    }
  }

  function addBookToLibrary(){//captura los datos introducidos en los input del html
    let readStatus ="";

    if(checkBox.checked == true){
      readStatus = "Read It";
    } else {
      readStatus = "No read It";
    }

    let titleBook = inputTitleBook.value;
    console.log(titleBook);

    let authorBook = inputAuthorBook.value;
    console.log(authorBook);

    let pagesBook = inputnumberPagesBook.value;
    console.log(pagesBook);
    
    console.log(readStatus);

    if(inputTitleBook.value == null || inputTitleBook.value == "" || inputAuthorBook.value == null || inputAuthorBook.value == "" || inputnumberPagesBook.value == null || inputnumberPagesBook.value == "" || inputnumberPagesBook.value <= 0  ){
     alert("Fields Requiere");
     inputTitleBook.value = "";
    inputAuthorBook.value = "";
    inputnumberPagesBook.value="";
    checkBox.checked = "";
    } else {

    let newBook = new book(titleBook,authorBook,pagesBook,readStatus);
    console.log(newBook);

    myLibrary.push(newBook);

    console.log(myLibrary);

    createInfoCard(newBook);

    inputTitleBook.value = "";
    inputAuthorBook.value = "";
    inputnumberPagesBook.value="";
    checkBox.checked = "";

    inputTitleBook.placeholder = "Title";
    inputAuthorBook.placeholder = "Author ";
    inputnumberPagesBook.placeholder = "Number of Pages ";

    }
  }


  function book(title,author,numberPages,read){ //objeto libro que crea libros al introducir los valores
    let book = {
    title: title,
    author: author,
    numberPages: numberPages,
    read: read,
    }
    return book;

    this.info = function (){
        console.log(" " + this.title+ " " + this.author +" " + this.numberPages +" " + this.read );
    }
}
