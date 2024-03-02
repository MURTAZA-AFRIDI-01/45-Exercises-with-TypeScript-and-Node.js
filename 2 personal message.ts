
let personname :string= '';
personname = prompt('what is your name?')||'';
if(personname !==null && personname !==''){
    alert(`Hello ${personname}, would you like to learn some Python today?`)
}
else{
alert('you have ton fill your name!')
}