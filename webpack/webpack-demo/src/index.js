import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'


function Person(fn, ln, s) {
  this.firstName = fn;
  this.lastName = ln;
  this.favoriteSport = s;
};

const persons = [
  new Person("Kurt", "Wonnegut", "Soccer"),
  new Person("Jan", "Peterson", "Hockey"),
  new Person("Jane", "Peterson", "Skating"),
  new Person("John", "Hansen", "Soccer"),
];

function makeTable(persons, sport) {

  if (sport) {

    var table = "<table class=\"table\"><thead><tr>";

    //Generate tablerows
    _.keys(persons[0]).forEach(function (key, index) {
      table += "<th>" + _.startCase(key) + "</th>";
    });

    table += "</tr></thead>"

    //Populate tbody with data
    table += "<tbody>";
    persons.forEach(function (person) {

      if (person.favoriteSport == sport) {
        table += "<tr>";
        //The ECMAScript2016 way, instead of using lodash
        Object.keys(person).map((e) => table += "<td>" + person[e] + "<\td>");

        table += "<\tr>";
      }

    }, this);

    table += "</tbody></table>";
    return table;

  } else {
    var table = "<table class=\"table\"><thead><tr>";

    //Generate tablerows
    _.keys(persons[0]).forEach(function (key, index) {
      table += "<th>" + _.startCase(key) + "</th>";
    });

    table += "</tr></thead>"

    //Populate tbody with data
    table += "<tbody>";
    persons.forEach(function (person) {
      table += "<tr>";
      //The ECMAScript2016 way, instead of using lodash
      Object.keys(person).map((e) => table += "<td>" + person[e] + "<\td>");

      table += "<\tr>";
    }, this);

    table += "</tbody></table>";
    return table;
  }

};

// You must implement the makeTable(..) function, used below:
var favSport = "Soccer";
const table = makeTable(persons,favSport);

document.getElementById("my-table").innerHTML = table;