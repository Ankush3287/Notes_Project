console.log("This is Notes_PProject");
showNotes();

// If user adds a note , add it to local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addText = document.getElementById("addText");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) notesobj = [];
  else {
    notesobj = JSON.parse(notes);
  }
  let myObj={
    title: addTitle.value,
    text: addText.value
  }
  notesobj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addText.value = "";
  addTitle.value="";
  showNotes();
});

//Function to Show Notes

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) notesobj = [];
  else {
    notesobj = JSON.parse(notes);
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id ="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>
        `;
  });
  let notesElm = document.getElementById("notes");
  if (notesobj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `No Notes To Show
      Please Add Notes Above
      `;
  }
}

//Function To Delete A Note
function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if (notes == null) notesobj = [];
  else {
    notesobj = JSON.parse(notes);
  }
  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  showNotes();
}

//Search Text

let search=document.getElementById("searchText");
search.addEventListener("input",function(){
    let inputVal=search.value;
    let noteCards=document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardText=element.getElementsByTagName("p")[0].innerText;
        if(cardText.toUpperCase().includes(inputVal.toUpperCase())){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
});