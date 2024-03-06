"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GUEST_LIST = ['mohsan', 'sami', 'bilawal'];
//  for( let i=0;i<GUEST_LIST.length; i++){
//     console.log('Dear Mr. ' + GUEST_LIST[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANKS YOU!\n\n')
//  }
let absent_guest = 'mohsan';
let new_guest = 'kamran Tessori';
GUEST_LIST[0] = new_guest;
//  for( let i=0;i<GUEST_LIST.length; i++){
//    console.log('Dear Mr. ' + GUEST_LIST[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANKS YOU!\n\n')
// }
console.log(`Mr. ${absent_guest} is not coming to the party. `);
console.log('GOOD NEWS! WE JUST FIND A BIGGER TABLE SO WE ARE INVITING THREE MORE GUESTS.');
GUEST_LIST.unshift('SIR ZIA KHAN');
GUEST_LIST.splice(2, 0, 'HASHIR');
GUEST_LIST.push('AHMED');
for (let i = 0; i < GUEST_LIST.length; i++) {
    console.log('Dear Mr. ' + GUEST_LIST[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANKS YOU!\n\n');
}
console.log('\nsorry we can not arrange big table, only two people will be invited.');
while (GUEST_LIST.length > 2) {
    let REMOVE_GUEST = GUEST_LIST.pop();
    console.log(`SORRY MR ${REMOVE_GUEST},YOU ARE NOT INVITED FOR DINNER`);
}
for (let i = 0; i < GUEST_LIST.length; i++) {
    console.log('Dear Mr. ' + GUEST_LIST[i] + ',\n\n you are still invited.\n\nTHANKS YOU!\n\n');
}
GUEST_LIST.splice(0, 2);
console.log(GUEST_LIST);
