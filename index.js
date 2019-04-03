// function accepts an array of names and returns a numbered string.
function dwarfRollCall(dwarves) {
  let dwarvesArray = [];
  for (var i = 0; i < dwarves.length; i++) {
    dwarvesArray.push(`${[i + 1]}. ${dwarves[i]} `)
  }
  return dwarvesArray.join('')
}

// function accepts an array of calls, converts to uppercase, and adds an exclamation point.
function summonCaptainPlanet(planeteerCalls){
  let callArray = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    callArray.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return callArray
}

// function accepts an array and checks if any of the elements are longer than 4 characters,
// returns false if not.
function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true
    } else {
      return false
    }
  }
}

// function accepts an array and checks if it contains cheese, returning first found item,
// returns 'no cheese!' if none found.
function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert') {
      return foods[i]
    }
  }
  return `no cheese!`
}
