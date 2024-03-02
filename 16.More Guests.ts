 const GUEST_LIST :string[] =['mohsan', 'sami', 'bilawal'];
//  for( let i=0;i<GUEST_LIST.length; i++){
//     console.log('Dear Mr. ' + GUEST_LIST[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANKS YOU!\n\n')
//  }
 let absent_guest :string = 'mohsan' ;
 let new_guest :string = 'kamran Tessori' ;
 GUEST_LIST[0] = new_guest ;
 for( let i=0;i<GUEST_LIST.length; i++){
   console.log('Dear Mr. ' + GUEST_LIST[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANKS YOU!\n\n')
}
 console.log(`Mr. ${absent_guest} is not coming to the party. `) ;
 console.log('GOOD NEWS! WE JUST FIND A BIGGER TABLE SO WE ARE INVITING THREE MORE GUESTS.');
 GUEST_LIST.unshift('SIR ZIA KHAN');
 GUEST_LIST.splice(2 , 0 ,'HASHIR');
 GUEST_LIST.push('AHMED');
 for( let i=0;i<GUEST_LIST.length; i++){
   console.log('Dear Mr. ' + GUEST_LIST[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANKS YOU!\n\n')
}
 