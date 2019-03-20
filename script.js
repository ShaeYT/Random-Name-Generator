var a;
var b;
var array;
var firstname;
var lastname;
var fullname;
function female(){
    firstname = document.querySelector(".inpt1").value;
    lastname = document.querySelector(".inpt2").value;
    fullname = firstname + " " + lastname;
    console.log(fullname);
    a = Math.floor(6 * Math.random());
    b = array[a];
    switch(fullname){
        case '': alert("");
        break;
        default: document.querySelector(".target").innerHTML = b + " "+ firstname + " " + lastname;
        }
    array = ['Queen','Minaj','Missy','Da','Dej','Miss'];
    }
    
function male(){
    firstname = document.querySelector(".inpt1").value;
    lastname = document.querySelector(".inpt2").value;
    fullname = firstname + " " + lastname;
    console.log(fullname);
    a =Math.floor(6* Math.random());
    b = array[a];
    switch(fullname){
        case 'Mr Donohue': alert("OMGGGGG IT'S MR DONOHUE!!!!!!");
        break;
        default: document.querySelector(".target").innerHTML = b + " "+ firstname + " " + lastname;
        }
    array=['Lil','Yung','Big','Rich','Wiz','Mr'];

    }




















array=['Lil','Yung','Big','Rich','Wiz','Mr'];
//var toLower = z.toLowercase();
// ____.innerHTML = toLower;