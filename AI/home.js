var today = new Date();
var hourNow = today.getHours();

var greeting;

if (hourNow <12){
    greeting="good morning";
}

else if (hourNow >18) {
    greeting="good evening";
}
else {
    greeting="hello"
}

document.write(greeting);


