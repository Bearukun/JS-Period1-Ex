//Assignemnt 4
var namesFour = ["Gorm", "Christian", "Thomas", "Hans","Bo","Jim","Kim"];

//Assignment A
var toTable  = "";
toTable = namesFour.map(function(name) {

    return "<li>" + name + "</li>"
})
var ulString = "<ul>" + toTable + "</ul>";
//console.log(ulString);


//Assignment B
var namesFourB = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];
var toTableTwo = "";
toTableTwo = namesFourB.map(function(element){
    return "<tr><td>" + element.name + "</td><td>"+ element.phone+"</td></tr>";
})

var tableB = "<table><th>Name</th><th>Phone</th>"+ toTableTwo.join(" ") + "</table>"

//Assignment C (See also the index.html document)
//Switch between the tables to see them in action, error is both are active.

//Table A
//document.getElementById("tableA").innerHTML = ulString;


//Table B
document.getElementById("tableB").innerHTML = tableB;

//Assignment D
//Filtered List <= 3

  function threeOrBelow(person){
      if(person.name.length <= 3){
          return true
      }
  }

  var filteredPersons = namesFourB.filter(threeOrBelow).map(function(element){
      return "<tr><td>" + element.name + "</td><td>"+ element.phone+"</td></tr>";
  })

  //Filtered Table that is picked up på the index.html
var tableC = "<table><th>Name</th><th>Phone</th>"+ filteredPersons.join(" ") + "</table>"
  


