import { Console } from "console";

 const GUEST_LIST :string[] =['mohsan', 'sami', 'bilawal'];
//  for( let i=0;i<GUEST_LIST.length; i++){
//     console.log('Dear Mr. ' + GUEST_LIST[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANKS YOU!\n\n')
//  }
 let absent_guest :string = 'mohsan' ;
 let new_guest :string = 'kamran Tessori' ;
 GUEST_LIST[0] = new_guest ;
//  for( let i=0;i<GUEST_LIST.length; i++){
//    console.log('Dear Mr. ' + GUEST_LIST[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANKS YOU!\n\n')
// }
 console.log(`Mr. ${absent_guest} is not coming to the party. `) ;
 console.log('GOOD NEWS! WE JUST FIND A BIGGER TABLE SO WE ARE INVITING THREE MORE GUESTS.');
 //arry my 3 guest ko add kia ha //
 GUEST_LIST.unshift('SIR ZIA KHAN');
 GUEST_LIST.splice(2 , 0 ,'HASHIR');
 GUEST_LIST.push('AHMED');
 //yahan per mana 6 guest ka arry ko print keryai ha //
 for( let i=0;i<GUEST_LIST.length; i++){
   console.log('Dear Mr. ' + GUEST_LIST[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANKS YOU!\n\n')
}
//sorry message for not inviting//
console.log('\nsorry we can not arrange big table, only two people will be invited.');
//yahan per mana guest remove kiye hain//
 while(GUEST_LIST.length > 2 ){
    let REMOVE_GUEST= GUEST_LIST.pop();
    console.log(`SORRY MR ${REMOVE_GUEST},YOU ARE NOT INVITED FOR DINNER`);
 }
 //hamara bacha ho  2 guest //
 for( let i=0;i<GUEST_LIST.length; i++){
  console.log('Dear Mr. ' + GUEST_LIST[i] + ',\n\n you are still invited.\n\nTHANKS YOU!\n\n')
}
// mana sara guest arry  sa remove ker dia //
GUEST_LIST.splice(0, 2);
console.log(GUEST_LIST);