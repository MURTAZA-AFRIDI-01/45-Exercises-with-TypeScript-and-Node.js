"use strict";
const GUEST_LIST = ['mohsan', 'sami', 'bilawal'];
for (let i = 0; i < GUEST_LIST.length; i++) {
    console.log('Dear Mr. ' + GUEST_LIST[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANKS YOU!');
}
let absent_guest = 'mohsan';
let new_guest = 'kamran tessori';
GUEST_LIST[0] = new_guest;
for (let i = 0; i < GUEST_LIST.length; ++i) {
    console.log('DEAR MR.' + GUEST_LIST[i] + ',\n\n it is our pleasure to invite you in our party.\n\n');
}
