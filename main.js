function sumofsquare(){
var newNum=0;
for(var i=0;i<11;i++){
	var x= i*i;
	newNum += x;
}
console.log(newNum);
var tempNum=0;
for (var i=0; i<11; i++){
	tempNum+=i;
	var x= tempNum*tempNum;
}
console.log(x);
console.log("The different between the sum of the squares of the first 10 numbers and square of the sum of the first 10 numbers is", x-newNum);
}
console.log(sumofsquare());