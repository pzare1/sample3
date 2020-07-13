(function() {
 

var names = ["Madison", "William", "James", "Mason", "Ella", "John", "Larry", "Ellie", "Jason"];

for (var i = 0; i < names.length;
  i++) {

  var first = names[i].charAt(0).toLowerCase();
  if (first == "j") {
    bye.speak(names[i]);
  } else {
    hello.speak(names[i]);
  }
}
})();

