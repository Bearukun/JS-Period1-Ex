var makeCounter = function () {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () { changeBy(1); },
    decrement: function () { changeBy(-1); },
    value: function () { return privateCounter; }
  }
};
var counter1 = makeCounter();
var counter2 = makeCounter();
//counter1.increment();
//counter1.increment();
//lert(counter1.value()); /* Alerts 2 */

var personMaker = function () {
  var age = 27;
  var name = "Christian";
  function setAge(val) {
    console.log(val)
    age = val;
  }
  function setName(text) {
    name = text;
  }
  function getInfo() {
    var name2 = name + " " + age;
    return name2;
  }
  return {
    setAge: (val) => { setAge(val) },
    setName: (val) => { setName(val) },
    getInfo: () => { return getInfo() }
  }
}

var pm = personMaker();

console.log(pm.getInfo());
pm.setAge(30);
console.log(pm.getInfo());