function areYouPlayingBanjo(name) {
    if (name.charAt(0) === 'R' || name.charAt(0) === 'r'){
        return name + " plays banjo"
    } else {
        return name + " does not play banjo";
    }
  }

console.log(areYouPlayingBanjo("Adam")); // Return "Adam does not play banjo"
console.log(areYouPlayingBanjo("Paul")); // Return "Paul does not play banjo"
console.log(areYouPlayingBanjo("Ringo")); // Return "Ringo plays banjo"
console.log(areYouPlayingBanjo("rolf")); // Return "Rolf plays banjo"