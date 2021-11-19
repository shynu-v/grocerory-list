let response =[];
let products =[];


window.addEventListener("load",load);

function load(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            response = JSON.parse(this.responseText);
            products = response.products; 
            getdata();
        }
    }
    xhttp.open("GET","data.json",true);
    xhttp.send();
}

function getdata(){
    var list ="";
    for(i=0;i<products.length;i++){
        list +=`<tr>
                <td>${products[i].SN}</td>
                <td>${products[i].Name}</td>
                <td>${products[i].Quantity}</td>
                <td>${products[i].Unit}</td>
                <td>${products[i].Department}</td>
                <td>${products[i].Notes}</td>
                <td><input type="checkbox" onchange="strike(this)"></td>
                <td><button class="tdbtn" onclick="rowdel(this)"><i style="color:white;" class="far fa-trash-alt"></i></button></td>
                </tr>`
    }
    document.getElementById("data").innerHTML=list;
}

function strike(othis) {
    othis.parentNode.parentNode.style.textDecoration = othis.checked? 'line-through':'none';
    othis.parentNode.parentNode.style.color = othis.checked? '#B40000':'black';
   
}

function rowdel(a)
{
  var i = a.parentNode.parentNode.rowIndex;
  document.getElementById("mytable").deleteRow(i)
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function submit(){
    var SN = response.products.length + 1;
    var Name = document.getElementById("Name").value;
    var Quantity= document.getElementById("Quantity").value;
    var unit = document.getElementById("Unit").value;
    var Department = document.getElementById("Department").value;
    var Notes = document.getElementById("Notes").value;

    response["products"].push({
      "SN":SN,
      "Name":Name,
      "Quantity":Quantity,
      "Unit":unit,
      "Department":Department,
      "Notes":Notes
    });
    
    products = response.products;
    getdata();
}