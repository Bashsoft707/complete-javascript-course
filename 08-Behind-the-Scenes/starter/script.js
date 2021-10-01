'use strict';

// var numOfStrings = function (patterns, word) {
//   let counter = 0;
//   for (let i = 0; i < patterns.length; i++) {
//     if (word.includes(patterns[i])) {
//       counter += 1;
//     }
//   }
//   return counter;
// };
// console.log(numOfStrings(['a', 'abc', 'bc', 'd'], 'abc'));
// console.log(numOfStrings(['a', 'b', 'c'], 'aaaaabbbbb'));
// console.log(numOfStrings(['a', 'a', 'a'], 'ab'));

// var rearrangeArray = function (nums) {
//   let result = [];
//   for (let i = nums.length - 1; i >= 0; i--) {
//     // console.log(nums, nums[i])
//     if (nums[i - 1] + nums[i + 1] / 2 === nums[i]) return 0;
//     nums[i] = result[i];
//     result[i] = nums[i - 1];
//     nums[i + 1] = nums[i];
//   }
//   return result;
// };

// var rearrangeArray = function (nums) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i - 1] + nums[i + 1] === 2 * nums[i]) {
//       swap(i, i - 1, i);
//     }
//   }
//   for (let i = nums.length - 2; i < 0; i--) {
//     if (nums[i - 1] + nums[i + 1] === 2 * nums[i]) {
//       swap(i, i + 1, i);
//     }
//   }
//   return nums;
// };

// function swap(arr, i, j) {
//   let r = arr[i];
//   arr[i] = arr[j];
//   arr[j] = r;
// }

// var rearrangeArray = function(nums) {
//   nums.sort((a, b) => a - b)
//   const len = nums.length

//   let result = new Array(len)
//   for (let low = 0, high = -1 + len, i = 0;
//       low <= high; ) {
//       const lowVal = nums[low]
//       result[i] = lowVal
//       i++
//       low++

//       if (low <= high) {
//           const highVal = nums[high]
//           result[i] = highVal
//           i++
//           high--
//       }
//   }

//   return result
// };

// var rearrangeArray = function(nums) {
//   let ex = false;
//   for(let i=1; i<nums.length-1; ++i) {
//       if(nums[i-1]+nums[i+1]===2*nums[i]) {
//           ex = true;
//           const temp = nums[i];
//           nums[i] = nums[i+1];
//           nums[i+1] = temp;
//       }
//   }
//   if(ex) {
//       return rearrangeArray(nums);
//   }
//   return nums;
// };

// var rearrangeArray = function(nums) {
//   nums.sort((a,b)=>a-b);

//     const res=[];
//     let index=0;

//     for(let i=0;i<nums.length;i++){
//         res[index]=nums[i]
//         index+=2 // increment 2 inorder to place elmnts alternatively(first in even indices)
//         if(index>=nums.length) index=1 // if the index reaches the end, assign 1 (now odd indices)
//     }
//     return res;
// };
// const stin = (a) => a.sort((x, y) => x - y);
// const swap = (a, i, j) => [a[i], a[j]] = [a[j], a[i]];
// const rearrangeArray = (a) => {
//     let n = a.length;
//     stin(a);
//     for (let i = 1; i + 1 < n; i += 2) {
//         swap(a, i, i + 1);
//     }
//     return a;
// };
// console.log(rearrangeArray([1, 2, 3, 4, 5]));
// console.log(rearrangeArray([6,2,0,9,7]));

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
];

// const [address, company] = users
const {street, suite, geo} = users[0].address

console.log(street, suite, geo)

// console.log(address, company);
users.map((user) => {
    console.log(`I live in ${user.address.street}, kindly have my ${user.phone}, or catch me up on ${user.website}`);
})

const data = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    }
}

const {phone: p, menu = 'rice'} = data
console.log(p, menu);

const [n, l, o] = [1452.89, 1455.32, 1534.1]
console.log(Math.floor(n), Math.ceil(n));
console.log(Math.floor(l), Math.ceil(l));
console.log(Math.floor(o), Math.ceil(o));