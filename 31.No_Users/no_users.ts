// Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
let no_user : string[] = ['admin','junaid','irfan','javed','asif']
if(no_user.length === 0){
    console.log("We need to find some users!");
}
else{
    no_user = []
    console.log('All user Name have been removed.' + no_user.length);

}