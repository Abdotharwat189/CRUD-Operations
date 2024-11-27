var bookData = []
if (localStorage.getItem("bookData")) {

  bookData = JSON.parse(localStorage.getItem("bookData"))
  display()
}



var bookmark = document.getElementById("Bookmark");
var site = document.getElementById("Site");

function addData() {

 

    if (dateValidation(Bookmark) && dateValidation(Site))
      {
        
        var data = {
          book: Bookmark.value,
          site: Site.value
      
        }

        bookData.push(data);
        display()
        localStorage.setItem("bookData", JSON.stringify(bookData))
        Clear()
      
      


    } else{
      alert("There is data is wrong please make sure from Site Name or Site url")
    }
  
  




}






function Clear() {

  Bookmark.value = ""
  Site.value = ""


}






function display() {
  var cartona = ""
  for (var i = 1; i < bookData.length; i++) {
    cartona +=
      `    
      <tr>
           <th scope="row">${i}</th>
          <td>${bookData[i].book}</td>
        <td><button onclick="visititem('${bookData[i].site}');" type="button" class="btn btn-warning">Visit</button></td>
          <td><button type="button" class="btn btn-danger" onclick="delectData(${i})"> <i class="fa-solid fa-trash me-1"></i>Delete</button>
          </td>
        </tr>
      `

  }
  document.getElementById("allData").innerHTML = cartona;


}




function delectData(index) {



  bookData.splice(index, 1);
  localStorage.setItem("bookData", JSON.stringify(bookData));
  display();



}


function visititem(id) {
  var link = id;
  window.open(link);
}



function dateValidation(element) {

  var regex = {
    Bookmark: /^[A-z][a-z]{2,15}$/,
    Site: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,4}(\/.*)?$/
  }





  if (regex[element.id].test(element.value)) {

    element.nextElementSibling.classList.replace("d-block", "d-none");
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
     return true

  } else {
    element.nextElementSibling.classList.replace("d-none", "d-block");
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");

    return false


  }

}