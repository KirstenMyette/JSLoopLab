var friends = ["Matt:", "Josh:", "January:", "Brandi:", "Daniel:"];
var friendsArray= ["Matt", "Josh", "January", "Brandi", "Daniel"]



for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    for (var j = 99; j > 1; j--)
        console.log(j + " lines of code in the file, " + j + " lines of code; " + friendsArray[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
    if (j = 1) {
        console.log(j + " line of code in the file, " + j + " line of code; " + friendsArray[i] + " strikes one out, clears it all out, no more lines of code in the file");
    }
}
