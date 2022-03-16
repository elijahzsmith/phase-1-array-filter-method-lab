// Code your solution here
// ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// Loop through and the drivers array
// return a new array with matching (name in array and passed name) (case insensitive)

// function findMatching(driversArray, passedName) {
//     let matching = [];
//     for(let index of driversArray) {
//         if(index === passedName) {
//             matching.push(index);
//         break;
//         }
//     } 
//     return matching;
// }

function findMatching(arrayNames, stringName) {
    return arrayNames.filter(index => index.toLowerCase() === stringName.toLowerCase());
}


// Returns a driver if beginning provided letter match
// function fuzzyMatch(driversArray, passedLetters) {
//     let firstLetterMatch = [];
//     if(driversArray.indexOf(0) == passedLetters) {
//         firstLetterMatch.push((driversArray.indexOf(0)) == passedLetters);
//     }
//     return firstLetterMatch;
// }

function fuzzyMatch(arrayNames, stringName) {
    return arrayNames.filter(index => index.charAt(0) === stringName.charAt(0));
}

// Accesses the data structure to check if name matches
// function matchName(driversArray, providedName) {
//     let matchingName = [];
//     if(driversArray.name == providedName) {
//         matchingName.push(driver);
//         return driversArray.indexOf();
//     }
//     //return matchingName;
// }

function matchName(arrayNames, stringName) {
    return arrayNames.filter(arrayName => arrayName.name === stringName);
}
