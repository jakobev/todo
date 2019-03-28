


let val;

val = Math.floor(Math.random() * 1000 + 1);
console.log(val);

const name = "marv";
const age = 26;
const job = "Software-Entwickler";
const city = "Salzgitter";

//let html;

//html  = "<div class='block'><ol>" + 
//"<li>Name: " + name + "</li>" + 
//"<li>Alter: " + age + "</li>" +
//"<li>Job: " + job + "</li>" + 
//"<li>Stadt: " + city + "</li>" + 
//"</ol></div>";


//html = `
   // <ul>
     //   <li>Name: ${name}</li>
       // <li>Alter: ${age}</li>
      //  <li>Job: ${job}</li>
    //    <li>Stadt: ${city}</li>
  //  </ul>
//`;

//document.body.innerHTML = html;


const numbers = new Array(2,5,63,3476,435,32,8,656,463,4444);

//increasing sort
let value = numbers.sort(function(x, y) {
    return x-y;
});
// function over3000 (num){
//     return num > 3000;
// }

// let anotherValue = numbers.find(over3000);
let anotherValue = numbers.find(function(num){
    return num > 3000;
});
// Objekt
const person = {
    vorname: "Marvin",
    nachname: "Bittermann",
    alter: 26,
    email: "marvin.bittermann@eves-it.de",
    hobbies: ["zocken", "programmieren"],
    address: {
        strasse: "An der Windmuhle",
        hausnummer: "26",
        plz: "38226",
        stadt: "Salzgitter"
    },
    telefon: ["01784983785", "01510394340"],
    getBirthday: function() {
        return new Date().getFullYear() - this.alter;
    },
    getName: function() {
        return this.vorname;
    },
    getNachname: function() {
        return this.nachname;
    },
    setName: function(name) {
        this.nachname = name;
    },
    biografie: function() {
        return this.vorname + " " + this.nachname + " ist " + this.alter + " Jahre alt. <br>Seine Email lautet: " + this.email.link(this.email) + " .<br>Seine hobbies sind " + this.hobbies[0] + " und " + this.hobbies[1] + " .<br>Er wohnt in der Strasse " + this.address.strasse + " , mit der Hausnummer: " + this.address.hausnummer + " in " + this.address.plz + " " + this.address.stadt + " .<br>Seine Telefonnummer ist: " + this.telefon[0] + " und er ist " + this.getBirthday() + " geboren.";
    }
}
person.getAge = function(){
    return this.alter;
}
person.getBiografie = function () {
    return this.vorname + " " + this.nachname + " ist " + this.alter + " Jahre alt. <br>Seine Email lautet: " + this.email.link(this.email) + " .<br>Seine hobbies sind " + this.hobbies[0] + " und " + this.hobbies[1] + " .<br>Er wohnt in der Strasse " + this.address.strasse + " , mit der Hausnummer: " + this.address.hausnummer + " in " + this.address.plz + " " + this.address.stadt + " .<br>Seine Telefonnummer ist: " + this.telefon[0] + " und er ist " + this.getBirthday() + " geboren.";
}
function User(uVorname, uNachname, uEmail){
    this.uVorname = uVorname;
    this.uNachname = uNachname;
    this.uEmail = uEmail;
}



let inputUser = new User();

function showInput(){
    var details = inputUser.uVorname = "Dein Vorname: " + document.getElementById("firstName").value + "<br>";
    details += inputUser.uNachname = "Dein Nachname: " + document.getElementById("lastName").value + "<br>";
    details += inputUser.uEmail = "Deine Email: " + document.getElementById("email").value;

    if(document.getElementById("firstName").value != null && document.getElementById("firstName").value !== '' && document.getElementById("lastName").value != null && document.getElementById("lastName").value !== '' && document.getElementById("email").value != null && document.getElementById("email").value !== '' ){
    userOutput.innerHTML = details;
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("email").value = '';
    return true;
    } else {
        alert("Fields are required you dumbass");
        return false;
    }
}
    

let testNumber = 45;

let ternary = testNumber === 5 ? "Ja es ist eine 5": "Ist keine 5";
console.log(ternary);
let dateTest = new Date();
let personValue = person;
console.time();
console.table(value);
console.log(anotherValue);
console.log(personValue.address.stadt);
console.table(personValue);
console.log(person.getName());
console.log(person.getNachname());
console.log(person.getBirthday());
console.log(dateTest.getMonth()+1);
console.log(person.getAge());


function gruss(vorname, nachname){
    if(typeof vorname === "undefined"){
        vorname = "dummyVorname";
    }
    if(typeof nachname === "undefined"){
        nachname = "dummyNachname";
    }
    return "Hallo " + vorname + " " + nachname;
}
console.log(gruss("Marvin", "Bittermann"));
console.log(gruss());
//document.write(personValue.address.plz);

//var biografie = personValue.vorname + " " + personValue.nachname + " ist " + personValue.alter + " Jahre alt. <br>Seine Email lautet: " + personValue.email.link( personValue.email) + " .<br>Seine hobbies sind " + personValue.hobbies[0] + " und " + personValue.hobbies[1] + " .<br>Er wohnt in der Strasse " + personValue.address.strasse + " , mit der Hausnummer: " + personValue.address.hausnummer + " in " + personValue.address.plz + " " + personValue.address.stadt + " .<br>Seine Telefonnummer ist: " + personValue.telefon[0] + " und er ist " + personValue.getBirthday() + " geboren.";

document.write(personValue.biografie());

//personValue.vorname = "Jutta";

//document.write(personValue.getName());










console.timeEnd();

