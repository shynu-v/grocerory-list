var response =[];
var products =[];

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
    var list =""
    for(i=0;i<products.length;i++){
        list +=`<tr>
                <td>${products[i].SN}</td>
                <td>${products[i].Name}</td>
                <td>${products[i].Quantity}</td>
                <td>${products[i].Unit}</td>
                <td>${products[i].Department}</td>
                <td>${products[i].Notes}</td>
                <td><input type="checkbox" onchange="strike(this)"></td>
                </tr>`
    }
    document.getElementById("data").innerHTML=list;
}

function strike(othis) {
    othis.parentNode.parentNode.style.textDecoration = othis.checked? 'line-through':'none';
    othis.parentNode.parentNode.style.color = othis.checked? '#B40000':'black';
}

function adddata(){
    
}