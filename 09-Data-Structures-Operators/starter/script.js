// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [player1, player2] = game.players;
// console.log(player1, player2);
// const [gk1, ...fieldPlayers1] = [...player1];
// const [gk2, ...fieldPlayers2] = [...player2];
// console.log(gk1, fieldPlayers1);
// console.log(gk2, fieldPlayers2);
// const [...allPlayers] = [...player1, ...player2];
// console.log(allPlayers);

// const [...players1Final] = [...player1, 'Thiago', 'Perisic', 'Countinho'];
// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = (...playersNames) => {
//   for (let i = 0; i < playersNames.length; i++) {
//     const [scorersName, numberOfGoalsScored] = [
//       game.scored,
//       game.scored.length,
//     ];
//     console.log(`${playersNames[i]}
//       Number of Goals Sored: ${numberOfGoalsScored}
//       Scorers Name: ${scorersName}`);
//   }
// };

// printGoals(...allPlayers);
// printGoals(['Davies', 'Muller', 'Lewandowski', 'Kimmich']);
// printGoals(game.scored);

// team2 > team1 && console.log('Team 1 is likely to win');
// team1 > team2 && console.log('Team 2 is likely to win');

// const gameScored = game.scored;
// for (let i = 0; i < gameScored.length; i++) {
//   console.log(`Goal ${i + 1}: ${gameScored[i]}`);
// }

// const odds = Object.values(game.odds);
// let avg = 0;
// for (const odd of odds) avg += odd;
// avg /= odds.length;
// console.log(avg);

// // const odds = Object.values(game.odds);
// // let average = 0;
// // for (const odd of odds) average += odd;
// // average /= odds.length;
// // console.log(average);

// // const [...averageOdds] = [game.odds];
// // console.log(averageOdds);
// // averageOdds.forEach(odd => {
// //   const avg = parseInt((odd.team1 + odd.x + odd.team2) / 3);
// //   console.log(avg);
// //   console.log(`
// //     Odd of victory Bayern Munich: ${odd.team1}
// //     Odd of draw: ${odd.x}
// //     Odd of victory Borrussia Dortmund: ${odd.team2}
// //   `);
// // });

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]} ${odd}`;
//   console.log(`Odd of ${teamStr}`);
// }

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())]
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(`An event happened, on
//  average, every ${90 / gameEvents.size} minutes`);

//  for (const [min, event] of gameEvents) {
//    const half = min <= 45 ? 'FIRST' : 'SECOND'
//    console.log(`[${half}] ${min}: ${event}`);
//  }

//  const myArr = [1, 2, 1, 3, 4, 5, 3, 2]
//  console.log(myArr.find(e => e > 3));

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   return new Set(arr)
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log( unique(values) ); // Hare, Krishna, :-O

// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     // split the word by letters, sort them and join back
//     let sorted = word.toLowerCase().split('').sort().join(''); // (*)
//     map.set(sorted, word)
//   }

//   return [...map.values()]
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// console.log( aclean(arr) );

// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// keys = [...keys]
// keys.push('more')
// console.log(keys);

const textArea =  document.querySelector("textarea")
const btn = document.querySelector("button")

const convertToUpperCase = (word) => {
    const sp = word.toLowerCase().split('_')
    const ww = sp[1].charAt(0).toUpperCase() + sp[1].slice(1, sp[1].length)
    return sp[0] + ww
}

// console.log(convertToUpperCase('first_name'));
// console.log(convertToUpperCase('under_score'));
// console.log(convertToUpperCase('Some_Variable'));
// console.log(convertToUpperCase('calculate_AGE'));
// console.log(convertToUpperCase('delayed_departure'));

btn.addEventListener("click", function () {
    const rows = textArea.value.split('\n')
    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_')
        const output = first + second.replace(second[0], second[0].toUpperCase())
        console.log(output.padEnd(20) + '*'.repeat(i + 1));
    }
})

// function square(n) {
//   for (let i = 0; i < n; i++) {
//       console.log(`when i is ${i}`);
//     for (let j = 0; j < n; j++) {
//       console.log(`then j is ${j}`);
//       for(let k = 0; k < n; k++) {
//           console.log(`and k is now ${k}`);
//       }
//     }
//   }
// }

// square(2)